import Vuex from '@wepy/x'

export default new Vuex.Store({
  state: {
    footer: 0
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
