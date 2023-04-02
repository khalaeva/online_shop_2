import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((e) => {
                    console.log(e);
                    return e;
                })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
});

export default store
//вызвать метод GET_PRODUCTS_FROM_API получить данные из URL
//вызвать мутацию(запихнуть все в state.products)
//получить данные с помощью getters