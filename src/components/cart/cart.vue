<template>
    <div class="cart">
        <div class="cart__item">
            <CartItem
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_data_item="item"
            @deleteFromCart="deleteFromCart(index)"
            @decrementItem="decrementItem(index)"
            @incrementItem="incrementItem(index)"/>
        </div>
        <div class="cart_total">
            <p>Your order</p>
            <p>Количество товаров: {{ CART.reduce((a, b) => a + b.quantity, 0) }}</p>
            <p>Итого: {{ CART.reduce((a, b) => a + b.quantity * b.price, 0) }}</p>
            <button class="btn" @click="Buy">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './cart-item.vue'
import axios from 'axios';

export default {
    name:'v-cart',
    components: {
    CartItem
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DECREMENT_ITEM',
            'INCREMENT_ITEM',
            'BUY'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        decrementItem(index) {
            this.DECREMENT_ITEM(index)
        },
        incrementItem(index) {
            this.INCREMENT_ITEM(index)
        },
        Buy() {
            axios.post('http://localhost:3000/buy', this.CART)
        }
    }
}
</script>

<style lang="scss" scoped>
.cart{
    display: flex;
    flex-direction: row;
    min-width: 968px;
    justify-content: space-around;
    &__item {
        width: 70%;
    }
    &_total {
        position: sticky;
        top: 10px;
        min-width: 200px;
        height: 200px;
        align-items: center;
        border: 1px solid grey;
        border-radius: 10px;
        width: 20%;
    }
}
</style>