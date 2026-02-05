import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Cart from '../views/cart.vue'
import News from '../views/news.vue'
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
    },
    {
        path:'/news',
        name:'News',
        component: News
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router