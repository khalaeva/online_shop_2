<template>
    <div class="catalog_item">
        <img class="catalog_item__img" :src="require('../../assets/img/' + prod.img)" alt="img">
        <div class="catalog_item_about">
            <p>{{ prod.category }} {{ prod.name }}</p>
            <p>{{ prod.description }}</p>
        </div>
        <p class="catalog_item__status">Status</p>
        <div class="catalog_item_add_to_cart">
            <p class="catalog_item_add_to_cart__price">{{ prod.price }} $</p>
            <button 
                class="catalog_item_add_to_cart__btn btn"
                @click="addToCart"
                >Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-catalog-item',
    props: {
        prod: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.prod);
        }
    }
}
</script>

<style lang="scss" scoped>
.catalog_item{
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