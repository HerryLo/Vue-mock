<template>
  <div>
    <headers></headers>
    <div class='page'>
      <div class='card'>
        <quickNav></quickNav>   
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import QuickNav from './quickNav.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'headers': Header,
    'quickNav': QuickNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.page {
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;
}
.card {
    margin: 0 18px;
    -webkit-text-size-adjust: 100%;
}

</style>
