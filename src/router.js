import { createRouter, createWebHistory} from "vue-router";

import cart from "./components/cart/cart.vue";
import catalog from "./components/catalog/catalog.vue";

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/', 
            name: 'catalog', 
            component: catalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        }
    ]
})

export default router;