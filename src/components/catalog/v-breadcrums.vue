<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" v-for="el in arr" :key="el">{{ el }}</li>
        </ol>
    </nav>
    <div>
        <h3> {{ nameCat }} </h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'

export default {
    name: 'v-breadcrums',
    props: {
        id: Object
    },
    data() {
        return {
            arr: ['Главная'],
            nameCat: 'Главная'
        }
    },
    computed: {
        ...mapGetters([
            'BRDCRMS'
        ])
    },
    watch: {
        id(value) {
            this.arr = []
            let newVal = Number(value.type)
            let brdcrm = this.BRDCRMS.find(el => el.categoryId === newVal)
            this.nameCat = brdcrm.nameCategory; 
            while (brdcrm.parentCategoryId) {
                this.arr.unshift(brdcrm.nameCategory)
                brdcrm = this.BRDCRMS.find(el => el.categoryId === brdcrm.parentCategoryId)
            }
            this.arr.unshift(brdcrm.nameCategory)
            axios
                .get(`http://localhost:8080/customPC/${newVal}`)
                .then(function (response) {
                    console.log(response);
                });
        }
    }
}
</script>