<template>
  <div id="app">

    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/loginUsuario">LoginUsuario</router-link>
      <router-link to="/usuariosCadastro">CadastroUsuario</router-link>
    </div>

    <router-view/>
    
  </div>

</template>

<script>

  //import CadastroUsuario from "./components/CadastroUsuario.vue"

  //export default {
    //name:"app",
    //components:{
     // CadastroUsuario
    //}
 // }
</script>

<style>

</style>
