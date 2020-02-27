import { http } from './config'

export default{
    listar:() => {
        return http.get('/usuarios')
    },

    login:() => {
        return http.get('/loginUsuario', email, senha)
    },

    salvar:(usuario) => {
        return http.post('/cadastraUsuario', usuario)
    }
}
