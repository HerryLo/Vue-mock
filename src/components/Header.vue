<template>
    <header class='TalionNav'>
    <div id="header">
            <a href="/"><h1>豆瓣</h1></a>
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
                <span class="aaa"></span>
            </nav>
    </div>
    </header>
</template>
<script>
export default {
  data () {
    return {
      name: ['电影', '图书', '广播', '小组']
    }
  }
}
</script>
<style>
#header{
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
#header>* {
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
#header nav>* {
    vertical-align: middle;
}
.TalionNav a {
    text-decoration: none;
}
#header>* {
    white-space: nowrap;
}
#header nav>* {
    /* vertical-align: middle; */
}
#header nav>*, #header nav li {
    display: inline-block;
}
#header nav li {
    font-size: 15px;
    margin-right: 19px;
}
</style>
