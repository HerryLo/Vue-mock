/* api接口地址H5首页接口 */
const url = 'https://m.douban.com'
/* 豆瓣开放平台接口 */
const douban = 'https://api.douban.com'
/* expres本地服务 */
// const localhost = 'http://localhost:3222'

/* 首页接口 */
export const indexAPI = url + '/rexxar/api/v2/recommend_feed'

/* 豆瓣时间banner */
export const doubanTimerBanner = url + '/rexxar/api/v2/niffler/promos?for_mobile=1&ck=null'

/* 豆瓣时间列表 */

export const doubanTimerList = url + '/rexxar/api/v2/niffler/explore?start=0&count=20&for_mobile=2&ck=null'

/* 豆瓣热映电影 */
export const nowMovie = douban + '/v2/movie/in_theaters'

/* 豆瓣搜索 */
export const SearchUrl = url + '/search'

/* 电影 */
export const Movie = (params) => {
  return `${url}/rexxar/api/v2/subject_collection/movie_${params}/items`
}
/* 本地测试电影 */
// export const MovieLocal = `${localhost}/api/movie`
