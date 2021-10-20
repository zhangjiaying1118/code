import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('../pages/Home.vue')
const Course = () => import('../pages/Course.vue')
const Friends = () => import('../pages/Friends.vue')
const Study = () => import('../pages/Study.vue')
const My = () => import('../pages/My.vue')

const routes = [
    { path: '/home', component:Home },
    { path: '/course', component: Course },
    { path: '/friends', component: Friends },
    { path: '/study', component:Study },
    { path: '/my', component: My },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;