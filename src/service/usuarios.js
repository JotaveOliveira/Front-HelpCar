import { http } from './config'

export default{
    /*listar:() => {
        return http.get('/usuarios')
    },*/

    salvar:(usuario) => {
        return http.post('/usuarios', usuario)
    }
}
