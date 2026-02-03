import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/cart.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name:'Menu',
        component: Menu
    },
    {
        path: '/cart',
        name:'Cart',
        component: Cart
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router