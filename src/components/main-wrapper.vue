<template>
    <div class="v-main-wrapper">
        <RouterView></RouterView>
        <!-- <Header/>
        <Catalog/>
        <Cart 
            v-if="CART.length"
            :cart_data="CART"/>  -->
    </div>
</template>

<script>
// import Catalog from './catalog/catalog.vue'
// import Header from './layout/header.vue'
// import Cart from './cart/cart.vue'

import { mapGetters } from 'vuex'

export default {
    name: 'v-main-wrapper',
    // components: {
    //     Catalog,
    //     Header,
    //     Cart
    // },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style lang="scss" scoped>
.v-main-wrapper{
    margin: 0 40px 0 40px;
}
</style>