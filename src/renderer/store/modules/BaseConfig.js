const state = {
  trransition: 'default',
  backGroundType: 1,
  backGroundBlur: 2,
  backGroundImg: '123.jpg',
  backGroundColor: '#000',
  fontColor: '#fff'
}

const getters = {
  backGroundParent: state => {
    if (state.backGroundType === 1) {
      return {
        'background': 'url("static/background/' + state.backGroundImg + '") center center / cover no-repeat fixed'
      }
    } else {
      return {
        'background': state.backGroundColor
      }
    }
  },
  backGroundChild: state => {
    if (state.backGroundType === 1) {
      return {
        filter: 'blur(' + state.backGroundBlur + 'px)',
        background: 'inherit'
      }
    } else {
      return {}
    }
  },
  fontColor: state => {
    return {
      color: state.fontColor
    }
  }
}

const mutations = {
  CHANGE_TRANSITION (state, type) {
    state.trransition = type
  },
  CHANGE_BACKGROUNDBLUR (state, type) {
    state.backGroundBlur = type
  },
  CHANGE_COLOR (state, type) {
    state.backGroundType = 2
    state.backGroundColor = type
  },
  CHANGE_FONTCOLOR (state, type) {
    state.fontColor = type
  },
  CHANGE_BACKGROUNDIMG (state, type) {
    state.backGroundType = 1
    state.backGroundImg = type
  }
}

const actions = {
  changeTransition ({ commit }, type) {
    commit('CHANGE_TRANSITION', type)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
