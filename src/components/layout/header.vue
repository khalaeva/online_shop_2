<template>
<header class="header" >
    <RouterLink to="/">
        <div class="header_catalog">
            Catalog
        </div>
    </RouterLink>
    <div class="header_right">
        <div class="header_right_user">
            User
        </div>
        <RouterLink to="/cart">
            <div class="header_right_cart">
                Cart: ({{ CART.reduce((a, b) => a + b.quantity, 0) }})
            </div>
        </RouterLink>
    </div>
</header>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    name: 'v-header',
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
}
</script>

<style lang="scss" scoped>
.header {
    height: 130px;
    display: flex;
    justify-content: space-between;

    align-items: center;
    &_catalog {
        padding: 10px;
    }
    &_right {
        display: flex;
        &_user {
            padding: 10px;
        }
        &_cart {
            padding: 10px;
        }
    }
}
</style>