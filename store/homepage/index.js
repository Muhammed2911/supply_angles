export const state = () => ({
  homepage: [],
})

export const mutations = {
  SET_HOMEPAGE_DATA(state, payload) {
    state.homepage = payload
  },
}

export const getters = {
  get_homepage_data(state) {
    return state.homepage
  },
}
