<template>
    <div class="v-main-wrapper">
        <Header/>
        <Catalog/>
    </div>
</template>

<script>
import Catalog from './catalog/catalog.vue'
import Header from './layout/header.vue'

export default {
    name: 'v-main-wrapper',
    components: {
        Catalog,
        Header
    }
}
</script>

<style lang="scss" scoped>
.v-main-wrapper{
    margin: 0 40px 0 40px;
}
</style>