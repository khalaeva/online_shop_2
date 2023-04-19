<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Каталог
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="padding: 4px 8px 4px 8px">
            <li><RouterLink :to="{ name: 'type', params: { type: 'Смартфоны'}}" class="dropdown-item"><h5>Смартфоны</h5></RouterLink>
                <ul class="type">
                    <li>
                        <RouterLink class="dropdown-item category" :to="{name: 'category', params: { type: 'Смартфоны', category: 'Apple' }}">Apple</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="dropdown-item category" :to="{name: 'category', params: { type: 'Смартфоны', category: 'Samsung' }}">Samsung</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name: 'category', params: { type: 'Смартфоны', category: `Сопутствующие товары` }}" class="dropdown-item category">Сопутствующие товары</RouterLink>
                        <ul>
                            <li><RouterLink :to="{name: 'subcat', params: { type: 'Смартфоны', category: `Сопутствующие товары`, subcategories: 'Наушники' }}" class="dropdown-item subcategory">Наушники</RouterLink></li>
                            <li><RouterLink :to="{name: 'subcat', params: { type: 'Смартфоны', category: `Сопутствующие товары`, subcategories: 'Чехлы' }}" class="dropdown-item subcategory">Чехлы</RouterLink></li>
                        </ul>
                    </li>
                </ul> 
            </li>
            <li><RouterLink :to="{ name: 'type', params: { type: 'Аудиотехника'}}" class="dropdown-item"><h5>Аудиотехника</h5></RouterLink>
                <ul class="type">
                    <li><RouterLink :to="{ name: 'category', params: { type: 'Аудиотехника', category: 'Портативные колонки'}}" class="dropdown-item category">Портативные колонки</RouterLink></li>
                    <li><RouterLink :to="{ name: 'category', params: { type: 'Аудиотехника', category: 'Наушники'}}" class="dropdown-item category">Наушники</RouterLink></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'v-catalog-list',
    data() {
        return {
        }
    },
    computed: {
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
.item {
    padding: 8px 4px 8px 4px;
    white-space: nowrap;
}
.type {
    margin-bottom: 8px;
}
.category {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.05rem;
}
.subcategory {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1rem;
}
</style>