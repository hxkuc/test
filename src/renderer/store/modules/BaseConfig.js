const state = {
  trransition: 'default'
}

const mutations = {
  CHANGE_TRANSITION (state, type) {
    state.trransition = type
  }
}

const actions = {
  changeTransition ({ commit }, type) {
    commit('CHANGE_TRANSITION', type)
  }
}

export default {
  state,
  mutations,
  actions
}
