import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tagSelect: 'all',
  },
  mutations: {
    changeTag(state, payload) {
      state.tagSelect = payload.tag
    },
  },
})

export default store
