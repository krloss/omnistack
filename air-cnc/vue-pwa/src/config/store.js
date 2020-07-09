import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{user:'', techs:''},
  mutations:{},
  actions:{
    setUser({state},user) { state.user = user },
    setTechs({state},techs) { state.techs = techs }
  },
  modules:{}
})
