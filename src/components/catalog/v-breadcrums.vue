<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'v-breadcrums',
    props: {
        id: Number
    },
    data() {
        return {
            arr: []
        }
    },
    computed: {
        ...mapGetters([
            'BRDCRMS'
        ])
    },
    watch: {
        id(value) {
            console.log(value)
            let nameCat = this.BRDCRMS.find(x => x.categoryId === value).nameCategory;
            console.log(nameCat)
        }
    }
}
</script>