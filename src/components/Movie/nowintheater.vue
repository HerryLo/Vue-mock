<template>
    <div class='nowMovice'>
      <h1>影院热映</h1>
      <section class='grid'>
        <a :href="item.alt" class="item" v-for="item in dataMovie" :key="item.id">
            <div class="cover">
                <div class="wp ratio3_4">
                    <img :src="item.images.large" :alt="item.title" data-x="2268" data-y="3174" class="img-show" style="width: 100%;">
                </div>
            </div>
            <div class="info">
                <h4></h4>
                <h3>{{item.title}}</h3>
                <p class="rank">
                    <span class="rating-stars" data-rating="3.6" v-if="item.rating.average">
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-full"></span>
                        <span class="rating-star rating-star-small-gray"></span>
                    </span>
                    <span>{{item.rating.average?item.rating.average:'暂无评分'}}</span>
                </p>
                <p class="meta">宋阳/艾伦/马丽/沈腾/喜剧/奇幻/2017-09-30(中国大陆)</p>
                <cite></cite>
            </div>
        </a>
      </section>
    </div>
</template>
<script>
import {nowMovie} from '@/Stubs/API'

export default {
  data () {
    return {
      dataMovie: []
    }
  },
  mounted () {
    this.$http.jsonp(nowMovie, {}, {
      emulateJSON: true
    }).then(res => {
      this.dataMovie = res.data.subjects
    }, res => {
      console.log(res)
    })
  }
}
</script>
<style>
#app {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 47px;
    max-width: 650px;
    margin: 0 auto;
    overflow-x: hidden;
}
.nowMovice h1 {
    font-size: 24px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
    padding-left: 4%;
}
.grid {
    padding: 20px 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 660px;
    overflow: hidden;
    box-sizing: border-box;
}
.grid .item {
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 20px;
    overflow: hidden;
    text-decoration: none;
    color: #9b9b9b;
}
.grid .item .cover {
    min-height: 87px;
    overflow: hidden;
    position: relative;
}
.grid .ratio3_4:before {
    padding-top: 143%;
}
.grid .ratio1_1:before, .grid .ratio3_4:before {
    content: "";
    display: block;
    padding-top: 143%;
}
.grid .item .img-show {
    opacity: 1;
}
.grid .item .info {
    height: 45px;
    overflow: hidden;
}
.grid .item h3 {
    font-size: 13px;
    font-weight: normal;
    padding: 5px 0 0;
    color: #494949;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.grid .item .rank {
    height: 16px;
    font-size: 12px;
    padding-top: 3px;
    text-align: center;
}
.grid .item h4, .grid .item cite, .grid .item .meta {
    display: none;
}
.rating-stars {
    display: inline-block;
    vertical-align: middle;
}
.rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
}
.rating-star-small-full {
    background-image: url(../../assets/full.png);
}
.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
    width: 10px;
    height: 10px;
    background-size: 10px 10px;
}
.rating-star-small-gray {
    background-image: url(../../assets/gray.png);
}
.grid h3, .grid h4, .grid p {
    margin: 0;
}
.grid .item img {
    display: block;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
}
.grid .ratio1_1, .grid .ratio3_4 {
    position: relative;
}
</style>
