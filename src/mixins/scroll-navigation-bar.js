export default {
  data: {
    scorllBackground: ''
  },
  methods: {},
  // 页面滚动触发事件的处理函数
  onPageScroll(e) {
    let scrollTop = e.scrollTop
    if (scrollTop > 30 && !this.scorllBackground) {
      this.scorllBackground = '#fff'
    } else if (scrollTop < 30 && this.scorllBackground === '#fff') {
      this.scorllBackground = ''
    }
  }
}
