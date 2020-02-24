import { http } from './config'

export default{
    listar:() => {
        return http.get('/prestadores')
    },

    salvar:(prestador) => {
        return http.post('/prestadoresServico', prestador)
    }
}