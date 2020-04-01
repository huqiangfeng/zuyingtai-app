import Vuex from '@wepy/x'

export default new Vuex.Store({
  state: {
    // tab选项
    footer: 3,
    // 会员
    member: false,
    // 是否登录
    login: false,
    // 用户信息
    userInfo: {
      name: '小虾米',
      tel: '13986598746',
      headImg: '@image/touxiang.png'
    }
  },
  mutations: {
    changeFooter(state, payload) {
      state.footer = payload.footer
    }
  },
  actions: {
    changeFooter({
      commit
    }, payload) {
      commit('changeFooter', payload)
    }
  }
})
