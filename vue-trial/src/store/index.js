import { createStore } from 'vuex'

export default createStore({
  state: {
    doctors: localStorage.doctors ?? [],
    numLuck: '...'
  },
  mutations: {
    setDoctors(state, el){
      state.doctors = el
    },
    setNum(state, numLuck){
      state.numLuck = numLuck
    }
  },
  actions: {
    async insertDoctors( { commit }, newDoc){
      commit('setDoctors', newDoc)
      localStorage.doctors = newDoc
    },
    async insertNum({ commit } , num){
      commit('setNum' , num)
    }
  },
  modules: {
  }
})
