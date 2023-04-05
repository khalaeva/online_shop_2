<template>
  <div id="app">
    <Header/>
    <MainWrapper/>
  </div>
</template>

<script>
import MainWrapper from './components/main-wrapper.vue'
import Header from './components/layout/header.vue';

export default {
  name: 'App',
  components: {
    MainWrapper,
    Header
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
