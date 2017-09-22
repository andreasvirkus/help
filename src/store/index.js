import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    user: {},
    companies: []
  },

  actions: {
    setUser({ commit }, payload) {
      commit('SET_USER', payload);
    }
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    }
  },
})

export default store