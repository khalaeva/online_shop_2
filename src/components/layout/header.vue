<template>
<header class="header">
    <div class="header_catalog">
        Catalog
    </div>
    <div class="header_right">
        <div class="header_right_user">
            User
        </div>
        <RouterLink to="/cart">
            <div class="header_right_cart">
                Cart: ({{ CART.length }})
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
    }
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