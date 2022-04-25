<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {

data(){
        return{


        }
},
    components : {

        HelloWorld
    },
computed : {

  ...mapState(['user']),
    getData(){
        return this.$store.state.id_RDV
    },

}

}
</script>
<template>
<!-- <h1>{{user}}</h1> -->

<!-- {{user}}  -->
    <!-- <span style="color: black"> {{ $store.state.user }} </span><br />
    <pr>{{user.data.name}}</pr>
    SFSF -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
