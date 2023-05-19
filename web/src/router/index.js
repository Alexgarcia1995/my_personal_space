import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/about-me", name: 'About Me', component: AboutMe},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router