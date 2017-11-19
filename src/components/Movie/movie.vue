<template>
  <div>
    <div class="card">
      <section id="movie_showing">
      </section>
    </div>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item  v-for="item in D.m1" :key="item.id">
        <img :src="item.img" />
        {{item.id}}
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import {Movie, MovieLocal} from '../../Stubs/API'

export default {
  name: 'Movie',
  data () {
    return {
      D: { 'm1': [
        { id: 10, img: 'http://dummyimage.com/271x381/8bf279/FFF&text=seybm', name: 'Laura Wilson' }]
      }
    }
  },
  mounted () {
    this.$http.jsonp(Movie('showing'), {
      params: {
        os: 'ios',
        callback: 'jsonp1',
        start: 0,
        count: 8,
        loc_id: 108288,
        _: 0
      }
    }, {
      emulateJSON: true
    }).then(response => {
    }, response => {
      console.log('error')
    })

    this.$http.get(MovieLocal).then(response => {
      this.D = response.data
      console.log(this.D)
    }, response => {
      console.log('error')
    })
  }
}
</script>
<style>
.mint-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.mint-swipe-item {
  width: 8rem!important;
}
.mint-swipe-items-wrap{
  display:flex;
}
.mint-swipe-item {
  line-height: 180px;
}
.mint-swipe-item img{
  height: 100%;
}
.mint-swipe-indicators {
  bottom: 25px;
}
.mint-swipe-indicator {
  opacity:0.6;
}
</style>
