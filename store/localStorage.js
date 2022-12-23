import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  userToken: null,
  userData: null,
  errorMsg: '',
  countries: [],
  categories: [],
  expire: 24,
  status: true,
})

export const mutations = {
  SET_USER_TOKEN(state, payload) {
    state.userToken = payload
  },
  SET_USER_DATA(state, payload) {
    state.userData = payload
  },
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_STORE_EXIRE(state, payload) {
    state.expire = payload
  },
  RESET_USER(st) {
    const states = (({ userToken, userData }) => ({
      userToken,
      userData,
    }))(state())

    Object.keys(states).forEach((key) => {
      st[key] = states[key]
    })
    this.$cookies.remove('userToken')
    this.$cookies.remove('userData')
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
}

export const getters = {
  userToken(state) {
    return state.userToken
  },
  userData(state) {
    return state.userData
  },
  get_errors(state) {
    return state.errorMsg
  },
  get_countries(state) {
    return state.countries
  },
  get_categories(state) {
    return state.categories
  },
}

export const actions = {
  response_handler({ commit }, payload) {
    responseHandler(payload.data, { commit }, payload.type)
  },
  // fetch countries
  async get_countries({ commit }) {
    await this.$axios
      .$get('/countries')
      .then((res) => {
        commit('SET_COUNTRIES', res.data)
      })
      .catch((err) => {
        responseHandler(err.response, { commit }, 'catch')
      })
  },
  // fetch categoris
  async get_categories({ commit }) {
    await this.$axios
      .$get('/categories')
      .then((res) => {
        commit('SET_CATEGORIES', res.data)
      })
      .catch((err) => {
        responseHandler(err.response, { commit }, 'catch')
      })
  },
}
