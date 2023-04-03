<template>
    <div class="cart">
        <div class="cart__item">
            <CartItem
            v-for="item in CART"
            :key="item.article"
            :cart_data_item="item"/>
        </div>
        <div class="cart_total">
            <p>Your order</p>
            <p>Количество товаров: {{ CART.reduce((a, b) => a + b.quantity, 0) }}</p>
            <p>Итого: </p>
            <button class="btn">Оформить заказ</button>
        </div>
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
.cart{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &__item {
        width: 70%;
    }
    &_total {
        min-width: 200px;
        height: 200px;
        align-items: center;
        border: 1px solid grey;
        border-radius: 10px;
        width: 20%;
    }
}
</style>