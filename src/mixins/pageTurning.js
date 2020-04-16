export default {
  data: {
    pageNum: 1,
    pageSize: 10
  },
  methods: {
    setPageListData(arr, resArr) {
      // 设置信息数组
      if (this.pageNum > 1) {
        arr = [...arr, ...resArr]
      } else {
        arr = resArr
      }
      this.pageSize = resArr.length
    },
    initPageNum() {
      this.pageNum = 1
      this.pageSize = 10
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.initPageNum()
    if (typeof this.getPageListData() === 'function') {
      this.getPageListData()
    }
    wx.stopPullDownRefresh()
  },
  // 上拉加载
  onReachBottom() {
    this.pageNum = ++this.pageNum
    if (this.pageSize === 10) {
      this.getPageListData()
    }
  }
}
