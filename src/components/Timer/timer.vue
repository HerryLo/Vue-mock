<template>
<div class='page'>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in banner" :key="item.id">
      <a :href="item.uri"><img :src="item.image_url" alt="图片"/></a>
    </mt-swipe-item>
  </mt-swipe>
  <div id="scrollListView">
    <div>
      <section class="_2AxnX" v-for="item in list" :key="item.id">
        <a :href="item.url">
          <div class="eDvhx">
            <img :alt="item.title" :src="item.poster_url">
            <span class="_1YDAu"></span>
          </div>
          <div class="_1eKk-">
            <section class="_27SrT">
                <img class="_26z1N" :alt="item.authors[0].name" :src="item.authors[0].avatar_url">
                <div class="_2P5h3"><h2 class="_3D1iy">{{item.authors[0].name}}</h2><p class="_3KV6d">{{item.authors[0].intro}}</p></div>
            </section>
            <h1 class="_1DNf3">{{item.title}}</h1>
            <p class="_2pO_n">{{item.intro}}</p>
            <div class="_9JmHg">
              <div class="_1kQF0" v-if="item.discount_price">限时促销</div>
              <div class="kIDAd">{{(item.discount_price?item.discount_price:item.price)+'元'}}</div>
              <del class="_3MGFK" v-if="item.discount_price">{{item.price+'元'}}</del>
            </div>
          </div>
        </a>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import {doubanTimerBanner, doubanTimerList} from '../../Stubs/API'

export default {
  data () {
    return {
      banner: [],
      list: []
    }
  },
  mounted () {
    // banner
    this.$http.jsonp(doubanTimerBanner, {}, {
      emulateJSON: true
    }).then(res => {
      this.banner = res.data.promos
    }, res => {
      console.log(res)
    })
    // 列表
    this.$http.jsonp(doubanTimerList, {}, {
      emulateJSON: true
    }).then(res => {
      this.list = res.data.columns
    }, res => {
      console.log(res)
    })
  }
}
</script>
<style>
.page {
    background-color: #f7f7f7;
}
.mint-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.mint-swipe-item {
  line-height: 180px;
}
.mint-swipe-item img{
  width:100%;
}
.mint-swipe-indicators {
  bottom: 25px;
}
.mint-swipe-indicator {
  opacity:0.6;
}
._2AxnX {
    margin-bottom: 15px;
    padding: 15px 0 20px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
}
._2AxnX .eDvhx, ._2AxnX .Q-Jjg {
    position: relative;
    float: right;
    width: 100px;
    height: 140px;
    margin: 5px 20px;
}
._2AxnX .eDvhx img, ._2AxnX .Q-Jjg img {
    width: 100%;
}
._2AxnX .eDvhx ._1YDAu{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 35px;
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.4),transparent);
    background: linear-gradient(0deg,rgba(0,0,0,.4),transparent);
}
._27SrT {
    display: table;
    padding-bottom: 15px;
    color: #494949;
    position: relative;
}
._27SrT ._26z1N {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1.5px solid #fff;
}
._27SrT ._2P5h3 {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
}
._27SrT ._3D1iy {
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
}
._27SrT ._3KV6d {
    font-size: 11px;
    line-height: 1.3;
    color: #9b9b9b;
    margin: 0;
}
._2AxnX ._1eKk- ._1DNf3 {
    color: #494949;
    font-size: 17px;
    font-weight: 700;
    margin: 15px 0 8px;
}
._2AxnX ._1eKk- ._2pO_n {
    font-size: 11px;
    line-height: 16px;
    color: #9b9b9b;
    margin: 0 0 20px;
}
._9JmHg {
    font-size: 0;
}
._1kQF0 {
    position: relative;
    font-size: 11px;
    line-height: 20px;
    color: #fff;
    padding: 0 5px;
    margin-right: 10px;
    background: #f97927;
}
._1kQF0, ._3MGFK, .kIDAd {
    display: inline-block;
    vertical-align: middle;
}
.kIDAd {
    color: #f97927;
}
._3MGFK, .kIDAd {
    font-size: 13px;
    margin-right: 5px;
}
._1kQF0, ._3MGFK, .kIDAd {
    display: inline-block;
    vertical-align: middle;
}
._3MGFK {
    color: #ccc;
}
._3MGFK, .kIDAd {
    font-size: 13px;
    margin-right: 5px;
}
._1kQF0, ._3MGFK, .kIDAd {
    display: inline-block;
    vertical-align: middle;
}
._1kQF0:after {
    content: "";
    position: absolute;
    right: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid #f97927;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
._2AxnX ._1eKk- {
    overflow: hidden;
    margin: 0 0 0 20px;
}
</style>
