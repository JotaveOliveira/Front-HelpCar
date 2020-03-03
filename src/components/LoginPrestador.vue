<template>

  <body>
    <form class="form-signin" @submit.prevent="prestadorLogin">
      <img class="mb-4" src="../assets/IconLogin.png" alt="icon" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email" v-model="email" required autofocus>
      <label for="inputPassword" class="sr-only">Senha</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Senha" v-model="senha" required>
      <div class="checkbox mb-3">
        <div class="row">
          <label>
            <input type="checkbox" value="remember-me"> Lembrar de mim
          </label>
          <a href="#">Esqueci minha senha ...</a>
        </div>
      </div>
      <button class="btn btn-lg btn-danger btn-block" type="submit">Entrar</button>
      <p class="mt-5 mb-3 text-muted">&copy; HelpCar 2020</p>
    </form>
  </body>
</template>

<script>
  import Prestador from '../service/prestadores'

  export default {
    name: 'LoginPrestador',

    data() {
      return {
        email: '',
        senha: ''
      }
    },

    prestadorLogin() {

      var resultLogin = Prestador.login(this.email, this.senha)

      if (resultLogin == false) {
        return alert('Email ou senha incorretos !!!')
      } else {
        return <router to = "/paginaPrincipal" > </router>
      }
    }
  }
</script>

<style>
  body {
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #fff;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>