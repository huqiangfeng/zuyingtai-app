import Vuex from '@wepy/x'

export default new Vuex.Store({
  state: {
    // tab选项
    footer: 1,
    // 会员
    member: false,
    // 是否登录
    login: true,
    // 绑定手机号
    bindTel: true,
    // 登录的ocde
    code: '',
    // 用户信息
    userInfo: {
      name: '小虾米',
      tel: '13986598746',
      headImg: 'https://rent-luxury.oss-cn-shanghai.aliyuncs.com/miniapp/dev/images/touxiang.png'
    }
  },
  mutations: {
    changeFooter(state, payload) {
      state.footer = payload.footer
    },
    setLogin(state, payload) {
      state.login = payload.isLogin
    },
    setCode(state, payload) {
      state.code = payload.code
    }
  },
  actions: {
    setLogin({
      commit
    }, payload) {
      commit('setLogin', payload)
    },
    setCode({
      commit
    }, payload) {
      commit('setCode', payload)
    }

  }
})
