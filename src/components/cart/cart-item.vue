<template>
    <div class="cart_item">
            <img class="cart_item__img" :src="require('../../assets/img/' + cart_data_item.img)" alt="img">
            <div class="cart_item_about">
                <h2>{{ cart_data_item.category }} {{ cart_data_item.name }}</h2>
            </div>
            <div class="cart_item_right">
                <div class="cart_item_right__quantity">
                    <span>-</span>
                    {{ cart_data_item.quantity }}
                    <span>+</span>
                </div>
                <button class="cart_item_right__delete_btn">Delete</button>
            </div>
            <div class="cart_item__price">
                <p>{{ cart_data_item.price }}</p>
            </div>
    </div>
</template>

<script>
export default {
    name:'v-cart-item',
    props: {
        cart_data_item: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cart_item{
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    height: 300px;
    border: 1px solid grey;
    border-radius: 10px;
    justify-content: space-between;
    &__img {
        margin: 15px;
        max-width: 220px;
        max-height: 300px;
    }
    &_about {
        width: 50%;
    }
    &_right {
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__price {
        width: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}   
</style>