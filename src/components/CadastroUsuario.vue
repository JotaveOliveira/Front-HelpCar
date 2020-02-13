<template>
   <div class="container ">
        <div class="col-8 ">
            <form class="text-center" @submit.prevent="salvar">
                <img class="mb-4 mt-4" src="IconLogin.png" alt="icon" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Cadastro HelpCar</h1>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" v-model="usuario.email" required autofocus>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" class="form-control" id="inputPassword4" v-model="usuario.senha" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCPF">CPF</label>
                        <input type="text" class="form-control cpf-mask" placeholder="Ex.: 000.000.000-00" v-model="usuario.cpf"
                            maxlength="14" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputDataNacimento">Data de Nascimento</label>
                        <input type="dataNacimento" class="form-control" placeholder="Ex.: dd/mm/aaaa" maxlength="10"
                            id="inputDataNacimento" v-model="usuario.dataNascimento" required>
                    </div>

                </div>
                <div class="form-group">
                    <label for="inputAddress2">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Ex: Av.Brasil - 1965" v-model="usuario.endereco"
                        required>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" placeholder="Ex.: São Paulo" id="inputCity" v-model="usuario.cidade" required>
                    </div>
                    <div class="form-group col-md-4">
                       <label for="inputCity">Estado</label>
                        <input type="text" class="form-control" placeholder="Ex.: São Paulo" id="inputCity" v-model="usuario.estado" required>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">CEP</label>
                        <input type="text" class="form-control" placeholder="Ex.: 00000-000" maxlength="9"
                            id="inputZip" v-model="usuario.cep" required>
                    </div>
                </div>

                <button type="submit" class="btn btn-danger">Cadastrar-se</button>

            </form>
        </div>
    </div>
</template>

<script>

import Usuario from './service/usuarios'

export default{

  name:'CadastroUsuario',

  data(){
    return{
      usuario:{
        email: '',
        senha: '',
        cpf: '',
        dataNascimento: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: ''
      },
      usuarios: []
    }
  },

  mounted(){
    Usuario.listar().then(resposta => {
      this.usuarios = resposta.data
    })
  },

  methods:{

    salvar(){

        Usuario.salvar(this.usuario).then(
          alert('Cadastrado com sucesso!')
        )
    }

  }

}

</script>

<style>

</style>