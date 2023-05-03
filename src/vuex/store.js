import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
    state: {
        categories: [],
        products: [],
        cart: [],
        email: '',
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CATEGORIES_TO_STATE: (state, categories) => {
            function form_tree(arr) {
                let tree = []
                for (let i in arr) {
                    if (arr[i].parentCategoryId === null)
                    {
                        if(Array.isArray(tree[0])) {
                            tree[0].push((arr[i]))
                        }
                        else {
                            tree[0] = []
                            tree[0].push((arr[i]))
                        }
                    }
                    else {
                        if(Array.isArray(tree[arr[i].parentCategoryId])) {
                            tree[arr[i].parentCategoryId].push((arr[i]))
                        }
                        else {
                            tree[arr[i].parentCategoryId] = []
                            tree[arr[i].parentCategoryId].push((arr[i]))
                        }
                    }
                }
                for (let i = 0; i < tree.length; i++) {
                    if (tree[i] === undefined) {
                        tree[i] = 0
                    }
                }
                console.log(tree)
                return tree
            }
            state.categories = form_tree(categories)
        },
        SET_CART: (state, product) => {
            if (product.count > 0) {
                if (state.cart.length) {
                    let isProdExist = false;
                    state.cart.map(function(item) {
                        if (item.article === product.article) {
                            isProdExist = true;
                            item.quantity++;
                            item.count--;
                        }
                    })
                    if (!isProdExist) {
                        state.cart.push(product);
                        state.cart[state.cart.length - 1].count -= 1;
                        state.cart[state.cart.length - 1].quantity = 1;
                    }
                } else {
                    state.cart.push(product);
                    state.cart[state.cart.length - 1].count -= 1;
                    state.cart[state.cart.length - 1].quantity = 1;
                }
            }
            else { return 0 }
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        DELETE_PROD: (state, index) => {
            state.cart.splice(index, 1)
            console.log(state.cart)
        },
        DECREMENT_ITEM: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
            else if (state.cart[index].quantity === 1) {
                state.cart.splice(index, 1)
                console.log(state.cart)
            }
        },
        INCREMENT_ITEM: (state, index) => {
            state.cart[index].quantity++
        }
    },
    actions: {
        async GET_PRODUCTS_FROM_API({commit}) {
            try {
                const products = await axios('http://localhost:3000/products', {
                    method: "GET"
                });
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            } catch (e) {
                console.log(e);
                return e;
            }
        },
        async GET_CATEGORIES_FROM_API({commit}) {
            try {
                const categories = await axios('http://localhost:3000/categories', {
                    method: "GET"
                });
                commit('SET_CATEGORIES_TO_STATE', categories.data);
                return categories;
            } catch (e) {
                console.log(e);
                return e;
            }
        },
        ADD_EMAIL ({commit}, email) {
            commit('SET_EMAIL', email)
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('DELETE_PROD', index)
        },
        DECREMENT_ITEM({commit}, index) {
            commit('DECREMENT_ITEM', index)
        },
        INCREMENT_ITEM({commit}, index) {
            commit('INCREMENT_ITEM', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        EMAIL(state) {
            return state.email;
        }, 
        CATEGORIES(state) {
            return state.categories;
        }
    }
});

export default store
//вызвать метод GET_PRODUCTS_FROM_API получить данные из URL
//вызвать мутацию(запихнуть все в state.products)
//получить данные с помощью getters