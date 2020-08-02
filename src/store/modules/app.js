const app = require('@/app.config')
const state = {}

const mutations = {}
const actions = {}
const getters = {
  name: _ => app.name
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
