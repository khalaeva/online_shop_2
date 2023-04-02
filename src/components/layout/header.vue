<template>
<header class="header">
    <div class="header_catalog">
        Catalog
    </div>
    <div class="header_right">
        <div class="header_right_user">
            User
        </div>
        <div class="header_right_cart">
            Cart
        </div>
    </div>
</header>
</template>


<script>
export default {
    name: 'v-header'
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