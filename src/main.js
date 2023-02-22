import { createApp } from 'vue'

import {createRouter, createWebHistory} from 'vue-router';

import './index.css'
import App from './App.vue'

import store from "@/librarys/store.js";

//vue router
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

//vuex

//that was the worst debugging experience of my life jesus
const app = createApp(App)
    app.use(router)
        app.use(store)
    app.mount('#app')
