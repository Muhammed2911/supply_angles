import responseHandler from '~/helpers/responseHandler'

export const state = () => ({
  userToken: null,
  userData: null,
  errorMsg: '',
  expire: 24,
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
}

export const getters = {
  checkAuth(state) {
    return state.loggedin
  },
  userToken(state) {
    return state.userToken
  },
  userData(state) {
    return state.userData
  },
  get_errors(state) {
    return state.errorMsg
  },
}

export const actions = {
  // user login method
  async user_login({ commit }, data) {
    await this.$axios
      .post('/client/auth/login', data)
      .then((res) => {
        responseHandler(res, { commit }, 'then')
        if (res.data.errorCode == 0) {
          commit('SET_USER_DATA', res.data.data.user)
          const accessToken = `Bearer ${res.data.data.token}`
          commit('SET_USER_TOKEN', accessToken)
          const options = {
            path: '/',
            maxAge: 60 * 60 * 24,
          }
          this.$cookies.setAll([
            { name: 'userToken', value: accessToken, opts: options },
            { name: 'userData', value: res.data.data.user, opts: options },
          ])
        }
      })
      .catch((err) => {
        responseHandler(err, { commit }, 'catch')
      })
  },
  response_handler({ commit }, payload) {
    responseHandler(payload.data, { commit }, payload.type)
  },
}
