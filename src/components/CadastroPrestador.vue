<template>
    <div class="container ">
        <div class="col-8 ">
            <form class="text-center" @submit.prevent="salvar">
                <img class="mb-4 mt-4" src="IconLogin.png" alt="icon" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Cadastro HelpCar</h1>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" v-model="prestador.email" required
                            autofocus>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" class="form-control" id="inputPassword4" v-model="prestador.senha"
                            required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCPF">CNPJ</label>
                        <input type="text" class="form-control cnpj-mask" placeholder="Ex.: 01.815.250/0001-42"
                            v-model="prestador.cnpj" maxlength="18" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputDataNacimento">Data de Nascimento</label>
                        <input type="dataNacimento" class="form-control" placeholder="Ex.: dd/mm/aaaa" maxlength="10"
                            id="inputDataNacimento" v-model="prestador.dataNascimento" required>
                    </div>

                </div>
                <div class="form-group">
                    <label for="inputAddress2">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Ex: Rua Camargo Vieira - 1965"
                        v-model="prestador.endereco" required>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" placeholder="Ex.: São Paulo" id="inputCity"
                            v-model="prestador.cidade" required>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Estado</label>
                        <input type="text" class="form-control" placeholder="Ex.: São Paulo" id="inputCity"
                            v-model="prestador.estado" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">CEP</label>
                        <input type="text" class="form-control" placeholder="Ex.: 03847-365" maxlength="9" id="inputZip"
                            v-model="prestador.cep" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-danger">Cadastrar-se</button>

            </form>
        </div>
    </div>
</template>
<script>
    import Prestador from '../service/prestadores'
    export default {

        name: 'CadastroPrestador',

        data() {
            return {
                prestador: {
                    email: '',
                    senha: '',
                    cnpj: '',
                    dataNascimento: '',
                    endereco: '',
                    cidade: '',
                    estado: '',
                    cep: ''
                },
                prestadores: []
            }
        },

        mounted() {
            Prestador.listar().then(resposta => {
                this.prestador = resposta.data
            })
        },

        methods: {

            salvar() {

                Prestador.salvar(this.prestador).then(
                    alert('Cadastrado com sucesso!')
                )
            }
        }
    }
</script>
<style>

</style>