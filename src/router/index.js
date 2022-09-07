import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import NewGame from '../views/NewGame.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/newGame', name: 'NewGame', component: NewGame}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router