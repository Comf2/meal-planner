import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router';
import './index.css'
import App from './App.vue'

const routes = [
        {
                path:'',
                name: 'home',
                component: () => import('@/views/Home.vue')
        },
        {
                path:'/meal',
                name: 'meal',
                component: () => import('@/views/Meal.vue'),
                props: true,

        },
]

const router = createRouter({
        routes,
        history: createWebHistory(),
})

export default router;

createApp(App)
    .use(router)
    .mount('#app')
