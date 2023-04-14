<template>
    <div class="catalog">
        <div class="catalog_top">
            <p>Путь каталога</p>
            <p>Название категории</p>
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
    components: {
        vCatalogItem
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
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