<template>
<div style='height: 100%;'>
  <headers></headers>
  <div id="app" v-show="!searchPopUp">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import { mapState } from 'vuex'
import './style/common.css'

export default {
  name: 'app',
  computed: mapState([
    'searchPopUp'
  ]),
  components: {
    'headers': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 47px;
  max-width: 650px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}
body {
    margin: 0;
    color: #111;
    font-size: 12px;
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
    position: relative;
}
* {
    -webkit-tap-highlight-color: rgba(255,0,0,0);
}
</style>
