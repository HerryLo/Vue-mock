<template>
  <div class="search">
    <header class="search-hd">
      <form method="get" action="/search" id="search_form">
        <input type="text" name="query" placeholder="搜索 书 / 影 / 音 / 标签" value="">
        <a class="button-search" id="button-search" href="javascript:void(0);">搜索</a>
      </form>
    </header>
    <div class="search-bd">
      <ul class="search-results">
      </ul>
    </div>
  </div>
</template>
<script>
import {SearchUrl} from '../../Stubs/API'

export default {
  props: ['query'],
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.$http.jsonp(SearchUrl, {
      params: {query: this.query}
    }, {
      emulateJSON: true
    }).then(response => {
      console.log(response.data)
//      this.dataList = response.data.recommend_feeds
//      document.write(response.data)
    }, response => {
      console.log('error')
    })
  }
}
</script>
<style>
  .search {
    background: #fff;
    min-height: 100%;
  }
  .search-hd {
    padding: 7px 20px;
    border-bottom: 1px solid #F2F2F2;
    overflow: hidden;
  }
  .search-hd input {
    height: 30px;
    box-sizing: border-box;
    background: #f5f5f5;
    border-radius: 3px;
    padding: 5px 8px;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    width: 85%;
    font-size: 14px;
    color: #111;
  }
  .search-hd a {
    float: right;
    color: #333;
    display: inline-block;
    width: 10%;
    height: 30px;
    padding-left: 5%;
    line-height: 30px;
    text-decoration: none;
    font-size: 14px;
  }
  .search-results {
    border-top: 1px solid #F2F2F2;
    padding-bottom: 60px;
  }
  .search-suggestions, .search-results {
    padding: 0 18px;
  }
</style>

