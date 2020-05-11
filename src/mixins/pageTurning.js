export default {
  data: {
    pageNum: 1,
    pageSize: 10
  },
  methods: {
    initPageNum() {
      this.pageNum = 1
      this.pageSize = 10
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    if (typeof this.getPageListData() === 'function') {
      this.initPageNum()
      this.getPageListData()
    }
    wx.stopPullDownRefresh()
  },
  // 上拉加载
  onReachBottom() {
    if (this.pageSize === 10) {
      this.pageNum = ++this.pageNum
      this.getPageListData()
    }
  }
}
