<template>
    <div class="cart_item">
            <img class="cart_item__img" :src="require('../../assets/img/' + cart_data_item.img)" alt="img">
            <div class="cart_item_about">
                <p>{{ cart_data_item.category }} {{ cart_data_item.name }}</p>
                <p>{{ cart_data_item.description }}</p>
            </div>
            <p class="cart_item__status">Status</p>
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
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 300px;
    &__img {
        max-width: 220px;
        max-height: 300px;
    }
    &_add_to_cart {
        &__price{
            text-align: center;
        }
        margin: 10px;
    }
    &_about{
        width: 800px;
        margin: 10px;
    }
    &__status {
        margin: 10px;
    }
}
</style>