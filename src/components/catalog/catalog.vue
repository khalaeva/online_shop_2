<template>
    <div class="catalog">
        <div class="catalog_top">
            <p>
                <span v-show="route.type"> {{ route.type }} </span>
                <span v-show="route.category"> / {{ route.category }} </span> 
                <span v-show="route.subcategories"> / {{ route.subcategories }} </span>
            </p>
            <div>
                <h3 v-if="!route.category">{{ route.type }}</h3>
                <h3 v-if="!route.subcategories">{{ route.category }}</h3>
                <h3 v-else>{{ route.subcategories }}</h3>
            </div>
            
        </div>
        <div class="catalog_items">
            <v-catalog-item
                v-for="prod in PRODUCTS"
                :key="prod.article"
                :prod="prod"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './catalog-item'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-catalog',
    data() {
        return {
            route: this.$route.params
        }
    },
    components: {
        vCatalogItem
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    watch:{
    $route (){
        this.route = this.$route.params;
    }
    }, 
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(prod_cart) {
            // if (!this.ADD_TO_CART(prod_cart)) {
                this.ADD_TO_CART(prod_cart)
            // }
            // else {
            //     this.status = true
            // }
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API();
    }
}
</script>

<style lang="scss" scoped>
.catalog_top {
    margin-bottom: 50px;
}
.catalog_items {
    width: 90%;
    margin: auto;
}
</style>