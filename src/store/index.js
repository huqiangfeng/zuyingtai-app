import Vuex from '@wepy/x'
import state from './state'
import actions from './actions'
import mutations from './mutations'

export default new Vuex.Store({
  state,
  mutations,
  actions
})
