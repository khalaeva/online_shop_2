<template>
    <ul>
        <li v-for="cat in CATEGORIES[catId]" :key="cat">
            <RouterLink :to="{ name: 'type', params: { type: cat.categoryId}}">
                <h5 class="dropdown-item">{{ cat.nameCategory }}</h5>
            </RouterLink>
            <vTree :catId="cat.categoryId"/>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'v-tree',
    props: {
        catId: Number
    },
    data() {
        return {
            arrBC: []
        }
    },
    computed: {
        ...mapGetters([
            'CATEGORIES'
        ])
    }
}
</script>