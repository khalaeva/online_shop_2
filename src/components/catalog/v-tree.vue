<template>
    <ul>
        <li v-for="cat in CATEGORIES[catId]" :key="cat">
            <h5 class="dropdown-item">{{ cat.nameCategory }}</h5>
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
    computed: {
        ...mapGetters([
            'CATEGORIES'
        ])
    }
}
</script>