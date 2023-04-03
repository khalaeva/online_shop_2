<template>
    <div class="cart">
        <CartItem
            v-for="item in CART"
            :key="item.article"
            :cart_data_item="item"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './cart-item.vue'

export default {
    name:'v-cart',
    components: {
    CartItem
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>