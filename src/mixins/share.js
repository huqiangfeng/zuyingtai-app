import store from '../store'
export default {
  data: {

  },
  methods: {},
  // 用户点击右上角转发
  onShareAppMessage() {
    let obj = {
      title: '我发现租英台有很多大牌包包\n0元租，赶快来看看吧',
      path: 'pages/index?spreader=' + store.state.mySpreader
      // imageUrl: 'https://rent-luxury.oss-cn-shanghai.aliyuncs.com/miniapp/dev/images/share-bg.png'
    }
    return obj
  }
}
