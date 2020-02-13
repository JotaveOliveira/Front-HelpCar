<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">LoginUsuario</router-link>
      <router-link to="/usuarios">CadastroUsuario</router-link>
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
