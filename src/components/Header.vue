<template>
  <header class='TalionNav'>
    <div id="header">
      <h1>
        <router-link to='/'>豆瓣</router-link>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/movie" style="color: #2384E8;">{{name[0]}}</a>
          </li>
          <li>
            <a href="/book" style="color: #9F7860;">{{name[1]}}</a>
          </li>
          <li>
            <a href="/status" style="color: #E4A813;">{{name[2]}}</a>
          </li>
          <li>
            <a href="/group" style="color: #2AB8CC;">{{name[3]}}</a>
          </li>
        </ul>
        <span class="" v-on:click="seachClick"></span>
      </nav>
    </div>
    <div v-if="searchPopUp" class="TalionNav-secondary">
      <a class="close-nav" href="javascript:;" v-on:click="seachClick">关闭</a>
      <form action="/search" method="GET">
        <div><input name="query" type="search"></div>
      </form>
      <ul>
        <li>
          <div>
            <a href="/movie" target="_blank"><strong style="color: #2384E8;">电影</strong><span>影院热映</span></a>
            <a href="https://douban.com/location" target=""><strong style="color: #E6467E;">同城</strong><span>周末活动</span></a>
            <a href="https://read.douban.com" target=""><strong style="color: #9F7860;">阅读</strong><span>电子书</span></a>
            <a href="https://dongxi.douban.com/?dcs=mobile-anonymous-home&amp;dcm=douban" target=""><strong
              style="color: #E1644D;">东西</strong><span>心爱之物</span></a>
          </div>
        </li>
        <li>
          <div>
            <a href="/tv" target="_blank"><strong style="color: #7A6ADB;">电视</strong><span>正在热播</span></a>
            <a href="/group" target="_blank"><strong style="color: #2AB8CC;">小组</strong><span>志趣相投</span></a>
            <a href="/game" target="_blank"><strong style="color: #5774C5;">游戏</strong><span>虚拟世界</span></a>
            <a href="https://douban.fm" target=""><strong style="color: #40CFA9;">FM</strong><span>红心歌单</span></a>
          </div>
        </li>
        <li>
          <div><a href="/book" target="_blank"><strong style="color: #9F7860;">图书</strong><span>畅销排行</span></a>
            <a href="/music" target="_blank"><strong style="color: #F48F2E;">音乐</strong><span>新碟榜</span></a><a
              href="/mobileapp" target="_blank"><strong style="color: #596CDD;">应用</strong><span>玩手机</span></a>
            <a
              href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&amp;utm_source=douban&amp;utm_medium=mobile_web"
              target=""><strong style="color: #42BD56;">市集</strong><span>购买原创</span></a>
          </div>
        </li>
      </ul>
      <div class="navBottom">
        <div class="nav-item">
          <a class="toReg" href="http://accounts.douban.com/register?redir=https://m.douban.com/">注册帐号</a>
          <a class="toLogin" href="http://accounts.douban.com/login?redir=https://m.douban.com/">登录豆瓣</a>
        </div>
        <div class="nav-item">
          <a class="toPC" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2F">使用桌面版</a>
          <a class="toApp">使用豆瓣App</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState([
      'searchPopUp'
    ]),
    data () {
      return {
        name: ['电影', '图书', '广播', '小组']
      }
    },
    methods: {
      seachClick () {
//        console.log(this.$store.state)
        return this.$store.dispatch('Update_Seachstate')
      }
    }
  }
</script>
<style>
  #header {
    border-bottom: 1px solid #f3f3f3;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 18px;
    background: #fff;
    height: 47px;
    box-sizing: border-box;
    display: -webkit-box;
    display: flex;
  }

  a {
    color: #42bd56;
    text-decoration: none;
  }

  #header > * {
    white-space: nowrap;
  }

  .TalionNav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
  }

  #header nav > * {
    vertical-align: middle;
  }

  .TalionNav a {
    text-decoration: none;
  }

  #header > * {
    white-space: nowrap;
  }

  #header nav > * {
    /* vertical-align: middle; */
  }

  #header nav > *, #header nav li {
    display: inline-block;
  }

  #header nav li {
    font-size: 15px;
    margin-right: 19px;
  }

  #header nav span {
    font-size: 0;
    background: url(../assets/icon.png) no-repeat;
    background-size: cover;
    width: 24.57143px;
    height: 18.28571px;
    margin-top: 4px;
    position: relative;
  }

  .TalionNav-secondary {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: #fff;
  }

  .TalionNav-secondary a.close-nav {
    position: absolute;
    top: 20px;
    left: 18px;
    color: #42bd56;
    font-size: 16px;
  }

  .TalionNav-secondary form {
    border-bottom: 1px solid #f3f3f3;
    padding: 15px 18px 15px 60px;
  }

  .TalionNav-secondary ul {
    padding-top: 25px;
    overflow: hidden;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .TalionNav-secondary .navBottom {
    width: 100%;
    border-bottom: 1px solid #f3f3f3;
  }

  .TalionNav-secondary li {
    width: 33.33%;
  }

  .TalionNav-secondary li div {
    float: left;
    position: relative;
    left: 50%;
    top: 0;
  }

  .TalionNav-secondary li a {
    display: block;
    text-align: center;
    margin-bottom: 25px;
    position: relative;
    left: -50%;
    top: 0;
  }

  .TalionNav-secondary li strong {
    display: block;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }

  .TalionNav-secondary li span {
    display: block;
    color: #999;
    height: 17px;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .TalionNav-secondary .navBottom .nav-item {
    border-top: 1px solid #f3f3f3;
    padding: 13px 0;
    display: flex;
  }

  .TalionNav-secondary .navBottom .nav-item a:first-child {
    border-right: 1px solid #e5e5e5;
  }

  .TalionNav-secondary .navBottom .nav-item a {
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
  }

  .TalionNav-secondary .navBottom a {
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: #42bd56;
  }

  .TalionNav-secondary input[type=search] {
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 0;
    background: #f3f3f3;
    background-size: 17.33333px;
    border-radius: 3px;
    width: 100%;
    height: 31px;
    font-size: 14px;
  }
</style>
