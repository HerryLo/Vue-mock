<template>
    <div class='card'>
      <quickNav></quickNav>
      <recommendFeed :dataFlow='dataF'></recommendFeed>
    </div>
</template>

<script>
import QuickNav from './quickNav.vue'
import RecommendFeed from './recommendFeed.vue'
import {indexAPI} from '../Stubs/API'

export default {
  name: 'Index',
  data () {
    return {
      dataF: [],
      SH: false
    }
  },
  mounted () {
    this.$http.jsonp(indexAPI, {
      params: {alt: 'json',
        next_date: '',
        loc_id: 108288,
        gender: '',
        birthday: '',
        udid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
        for_mobile: 1}
    }, {
      emulateJSON: true
    }).then(response => {
      // console.log(response.data)
      this.dataF = response.data.recommend_feeds
    }, response => {
      console.log('error')
    })
  },
  components: {
    'quickNav': QuickNav,
    'recommendFeed': RecommendFeed
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
.card {
    margin: 0 18px;
    -webkit-text-size-adjust: 100%;
}
</style>
