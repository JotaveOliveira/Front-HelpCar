import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/loginUsuario',
            name: 'login',

            component: () => ('./components/LoginUsuario.vue')
        },
        {
            path:'/usuariosCadastro',
            name: 'usuarios',

            component: () => ('./components/CadastroUsuario.vue')
        }
    ]
})