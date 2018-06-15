<template>
    <div class="card">
      <section id="movie_showing">
        <ul class="movieList">
          <li class="item" v-for="item in list.subject_collection_items" :key="item.id">
            <div class="item-poster" :style="{backgroundImage: 'url('+ item.cover.url +')'}"></div>
          </li>
        </ul>
      </section>
    </div>
</template>
<script>
// import {Movie} from '../../Stubs/API'

export default {
  name: 'Movie',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    // this.$http.jsonp(Movie('showing'), {
    //   params: {
    //     os: 'ios',
    //     callback: 'jsonp1',
    //     start: 0,
    //     count: 8,
    //     loc_id: 108288,
    //     _: 0
    //   }
    // }, {
    //   emulateJSON: true
    // }).then(response => {
    //   this.list = response.body
    // }, response => {
    //   console.log('error')
    // })
  }
}
</script>
<style>
section {
    margin: 0;
    overflow: hidden;
    background-color: #fff;
}
.movieList{
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    padding: 15px 0 43px 0;
}
.item{
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center;
    margin-left: 0.48rem;
}
.item:first-child {
    margin-left: 1.12rem;
}
.item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%;
}
</style>
