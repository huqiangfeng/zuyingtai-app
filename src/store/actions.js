export default {
  // 设置用户信息
  setUserInfo({
    commit
  }, payload) {
    commit('setUserInfo', payload)
  },
  // 显示登录弹框
  setShowLogin({
    commit
  }, payload) {
    commit('setShowLogin', payload)
  },
  //   // 显示绑定手机号
  setShowBindTel({
    commit
  }, payload) {
    commit('setShowBindTel', payload)
  },
  // 登录
  setLogin({
    commit
  }, payload) {
    commit('setLogin', payload)
  },
  // 登录code发送给后台
  setCode({
    commit
  }, payload) {
    commit('setCode', payload)
  }

}
