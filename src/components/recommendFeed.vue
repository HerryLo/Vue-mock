<template>
    <section id='recommend-feed'>
        <div>
            <div class='feed-section' v-bind:key='item.id' v-for='item in dataFlow'>
                <a class="feed-item" v-bind:href="item.target.url" v-if="item.layout == '1'">
                    <div class="feed-content">
                        <div v-if="item.target.cover_url" class="cover" :style="{background:'url('+item.target.cover_url+') center center / cover no-repeat rgb(250, 250, 250)'}">
                            <div style="padding-top: 100%;"></div>
                        </div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.target.desc}}</p>
                    </div>
                    <div class="author">by&nbsp;
                        <span class="name">{{item.theme?item.theme.name:item.target.author.name}}</span>
                    </div>
                    <span class="feed-label">{{item.theme?item.theme.name:''}}</span>
                </a>
                <a class="feed-item" v-bind:href="item.target.url" v-else-if="item.layout == '5'">
                    <div class="feed-content">
                        <div class='photos'>
                            <div class="main" :style="{position: 'relative', background: 'url('+item.target.cover_url+') center center / cover no-repeat rgb(250, 250, 250)'}">
                                <div></div>
                            </div>
                            <div class="aside">
                                <div class="aside-pic">
                                    <div :style="{position: 'relative', background: 'url('+item.target.more_pic_urls[0]+') center center / cover no-repeat rgb(250, 250, 250)'}">
                                        <div style="padding-top: 100%;"></div>
                                    </div>
                                </div>
                                <div class="aside-pic">
                                    <div :style="{position: 'relative', background: 'url('+item.target.more_pic_urls[1]+') center center / cover no-repeat rgb(250, 250, 250)'}">
                                        <div style="padding-top: 100%;"></div>
                                    </div>
                                    <div class="more-pic">
                                        <span class="count">{{(item.target.photos_count-3)+'+'}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>{{item.title}}</h3>
                    </div>
                    <div class="author">by&nbsp;
                        <span class="name">{{item.theme?item.theme.name:item.target.author.name}}</span>
                    </div>
                    <span class="feed-label"> {{item.theme?item.theme.name:''}}</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'recommendFeed',
  props: ['dataFlow']
}
</script>
<style>
#recommend-feed {
    margin-right: -18px;
    margin-left: -18px;
    margin-top: 2px;
    min-height: 480px;
    color: #494949;
    -webkit-text-size-adjust: 100%;
}
section {
    margin: 0;
}
#recommend-feed .feed-item {
    display: block;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    position: relative;
    color: #494949;
}
#recommend-feed .feed-content {
    overflow: hidden;
    margin-bottom: 10px;
}
#recommend-feed .feed-item .author {
    font-size: 12px;
    color: #ccc;
}
#recommend-feed .feed-item .feed-label {
    position: absolute;
    bottom: 25px;
    right: 18px;
    font-size: 12px;
    color: #ccc;
}
#recommend-feed .feed-content .cover {
    width: 25.6%;
    margin-left: 25px;
    float: right;
    position: relative;
}
#recommend-feed .feed-content h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 6px;
}
section h3 {
    font-size: 19px;
    color: #111;
}
#recommend-feed .feed-content p {
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
section p {
    font-size: 15px;
    color: #494949;
}
section p, section h3 {
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}
#recommend-feed .feed-item .author {
    font-size: 12px;
    color: #ccc;
}
#recommend-feed .feed-item .author {
    font-size: 12px;
    color: #ccc;
    text-align: left;
}
#recommend-feed .feed-content .photos {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px;
}
#recommend-feed .feed-content .photos .main {
    -webkit-box-flex: 3.2;
    -webkit-flex: 3.2;
    -ms-flex: 3.2;
    flex: 3.2;
    margin-right: 4px;
}
#recommend-feed .feed-content .photos .aside {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
#recommend-feed .feed-content .photos .aside .aside-pic {
    position: relative;
}
#recommend-feed .feed-content .photos .aside .aside-pic ~ .aside-pic {
    margin-top: 4px;
}
#recommend-feed .feed-content .photos .aside .aside-pic {
    position: relative;
}
#recommend-feed .feed-content .photos .more-pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
#recommend-feed .feed-content .photos .more-pic .count {
    width: 100%;
}
</style>
