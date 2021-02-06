import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    create(state, token) {
      state.token = token
      console.log(state.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
