import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'hello',
    age: 12,
    bbb: 1,
    count: 0
  },
  mutations: {
    editName () {
      this.state.name = 'jack'
    },
    edit (state, payload) {
      state.name = payload.name
      state.age = payload.age
      state.bbb += state.bbb
      Vue.set(state, 'age', 2321321)
    },
    add (state) {
      state.count++
    },
    addParam (state, param) {
      state.count += param
    }
  },
  getters: {
    nameInfo (state) {
      return '姓名:' + state.name
    },
    fullInfo (state, getters) {
      return getters.nameInfo + '年龄:' + state.age
    }
  },
  actions: {
    aEdit (c, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          c.commit('edit', payload)
          resolve(c.getters.fullInfo)
        }, 2000)
      })
    }
  }
})

export default store
