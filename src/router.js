import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/LoginUsuario.vue'
import CadastroUser from './components/CadastroUsuario.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/loginUsuario',
            name: 'login',
            component: Login
        },
        {
            path:'/usuariosCadastro',
            name: 'usuarios',

            component: CadastroUser
        }
    ]
})