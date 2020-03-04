import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import LoginUsuario from './components/LoginUsuario.vue'
import LoginPrestador from './components/LoginPrestador'
import CadastroUser from './components/CadastroUsuario.vue'
import CadastroPrestador from './components/CadastroPrestador.vue'
import RedefinaSenha from './components/RedefinirSenha.vue'

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
            name: 'loginUsuario',
            component: LoginUsuario
        },
        {
            path:'/usuariosCadastro',
            name: 'usuarios',

            component: CadastroUser
        },
        {
            path: '/prestadorCadastro',
            name: 'prestadores',
            component: CadastroPrestador
        },
        {
            path: '/loginPrestador',
            name: 'loginPrestador',
            component: LoginPrestador
        },
        {
            path: '/redefinaSenha',
            name: 'redefinaSenha',
            component: RedefinaSenha 
        }
    ]
})