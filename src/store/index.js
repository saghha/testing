import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    one_data: null
  },
  mutations: {
    setData (state, data) {
      state.one_data = data
    }
  },
  actions: {
    changeData({commit}, data) {
      new Promise((resolve, reject) => {
        commit('setData', data)
        resolve()
      })
    }
  },
  modules: {
  }
})
