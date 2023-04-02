<template>
    <Header/>
    <Catalog/>
    <Footer/>
</template>

<script>
import Catalog from './v-catalog.vue'
import Header from './layout/v-header.vue'
import Footer from './layout/v-footer.vue'

export default {
    name: 'v-main-wrapper',
    components: {
        Catalog,
        Footer,
        Header
    }
}
</script>

<style lang="scss" scoped>

</style>