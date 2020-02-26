import { http } from './config'

export default{
    listar:() => {
        return http.get('/prestadores')
    },

    login:() => {
        return http.get('/loginPrestador', email, senha)
    },

    salvar:(prestador) => {
        return http.post('/prestadoresServico', prestador)
    }
}