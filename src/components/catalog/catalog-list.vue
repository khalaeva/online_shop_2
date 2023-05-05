<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Каталог
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="category in CATEGORIES[0]" :key="category">
                <RouterLink :to="{ name: 'type', params: { type: category.categoryId}}">
                    <h4 class="dropdown-item">{{ category.nameCategory }}</h4>
                </RouterLink>
                <Vtree :catId="category.categoryId"/> 
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Vtree from './v-tree.vue';

export default {
    name: 'v-catalog-list',
    components: {Vtree},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'CATEGORIES'
        ])
    }
}
</script>

<style lang="scss" scoped>
.btn {
    color: black;
    background-color: white;
    &:hover {
        background-color: lightgray;
    }
}
</style>