<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {{ type }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="padding: 4px 8px 4px 8px">
            <li><RouterLink :to="txt" class="dropdown-item" href="#"><h5>Смартфоны</h5></RouterLink>
                <ul class="type">
                    <li>
                        <RouterLink class="dropdown-item category" :to="`apple`">Apple</RouterLink>
                        <ul>
                            <li class="item">Смартфон Apple Iphone 10</li>
                            <li class="item">Смартфон Apple Iphone 11</li>
                            <li class="item">Смартфон Apple Iphone 12</li>
                        </ul>
                    </li>
                    <li>
                        <a class="dropdown-item category" href="#">Samsung</a>
                        <ul>
                            <li class="item">Смартфон Samsung Galaxy S8</li>
                            <li class="item">Смартфон Samsung Galaxy S12</li>
                        </ul>
                    </li>
                    <li>
                        <a class="dropdown-item category" href="#">Сопутствующие товары</a>
                        <ul>
                            <li><a class="dropdown-item subcategory" href="#">Наушники</a>
                                <ul>
                                    <li class="item">Наушники Apple AirPods Pro</li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item subcategory" href="#">Чехлы</a>
                                <ul>
                                    <li class="item">Чехол для Huawei</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Смартфон Huawei P50</li>
                </ul> 
            </li>
            <li><a class="dropdown-item" href="#"><h5>Аудиотехника</h5></a>
                <ul class="type">
                    <li><a class="dropdown-item category" href="#">Портативные колонки</a>
                        <ul>
                            <li class="item">Умная колонка Яндекс Станция</li>
                            <li class="item">Колонка JBL</li>
                        </ul>
                    </li>
                    <li><a class="dropdown-item category" href="#">Наушники</a>
                        <ul>
                            <li class="item">Наушники Apple AirPods Pro</li>
                            <li class="item">Наушники JBL</li>
                        </ul>
                    </li>
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
            txt: 'smatphones'
            // type: [
            //     'Apple',
            //     'Samsung',
            //     'Headphones'
            // ]
        }
    },
    computed: {
        type() {
            console.log(this.$route.params.type)
            console.log(this.$route.params.category)
            return this.$route.params.type;
        }
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