const app = require('@/app.config')
const state = {}

const mutations = {}
const actions = {}
const getters = {
  config: _ => app
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
