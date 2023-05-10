<template>
    <div class="catalog">
        <div class="catalog_top">
            <vBreadcrums :id="this.$route.params"/>
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
import vBreadcrums from './v-breadcrums.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'v-catalog',
    data() {
        return {
            route: this.$route.params
        }
    },
    components: {
        vCatalogItem,
        vBreadcrums
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'BRDCRMS'
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
                this.ADD_TO_CART(prod_cart)
        }
    },
    mounted() {
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