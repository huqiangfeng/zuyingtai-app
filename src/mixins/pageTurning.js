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
    this.initPageNum()
    if (typeof this.getPageListData() === 'function') {
      this.getPageListData()
    }
    wx.stopPullDownRefresh()
  },
  // 上拉加载
  onReachBottom() {
    console.log('加载了')
    if (this.pageSize === 10) {
      this.pageNum = ++this.pageNum
      this.getPageListData()
    }
  }
}
