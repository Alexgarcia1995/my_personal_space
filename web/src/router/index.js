import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Carousel from "../views/Carousel.vue"

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/carousel", name: 'Carousel', component: Carousel},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router