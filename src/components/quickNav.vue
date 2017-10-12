<template>
  <ul class="quick-nav">
    <li>
        <router-link to='/movie'>影院热映</router-link>
    </li>
        <li>
            <a href="/mine/">我的</a>
        </li>
    <li>
        <router-link to='/timer' id="hot-topics">豆瓣时间</router-link>
    </li>
    <li>
        <a href="https://www.douban.com/doubanapp/app?channel=card_home&amp;direct_dl=1">使用豆瓣App</a>
    </li>
</ul>
</template>

<script>
    export default {}
</script>
<style>
.quick-nav {
    overflow: hidden;
    margin: 20px 0 0 0;
    padding-top: 6px;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.quick-nav>li {
    float: left;
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;
}
.quick-nav>li>a {
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    line-height: 20px;
    padding: 12px 0;
    border-radius: 2px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
a {
    color: #42bd56;
    text-decoration: none;
}
</style>

