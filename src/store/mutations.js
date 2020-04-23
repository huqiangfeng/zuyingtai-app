export default {
  // 推广者用户标识
  setSpreader(state, payload) {
    state.spreader = payload.spreader
  },
  // 设置用户信息
  setUserInfo(state, payload) {
    state.userInfo = payload.userInfo
  },
  // 设置tanb
  changeFooter(state, payload) {
    state.footer = payload.footer
  },
  // 登录
  setLogin(state, payload) {
    state.login = payload.isLogin
  },
  // 登录code发送给后台
  setCode(state, payload) {
    state.code = payload.code
  },
  // 显示登录弹框
  setShowLogin(state, payload) {
    if (payload.isShowLogin) {
      wx.login({}).then((code) => {
        state.code = code.code
      })
    }
    state.isShowLogin = payload.isShowLogin
  },
  // 显示绑定手机号
  setShowBindTel(state, payload) {
    state.isShowBindTel = payload.isShowBindTel
  }
}
