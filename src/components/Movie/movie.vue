<template>
  <div>
    {{D.name}} && {{D.age}} && {{D.color}}
  </div>
</template>
<script>
export default {
  name: 'Movie',
  data () {
    return {
      D: {}
    }
  },
  mounted () {
    this.$http.get('http://g.cn', {}
    ).then(response => {
      this.D = response.data
    }, response => {
      console.log('error')
    })
  }
}
</script>
