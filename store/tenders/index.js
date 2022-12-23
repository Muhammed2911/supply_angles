export const state = () => ({
  tendersData: [],
  tendersMeta: [],
})

export const mutations = {
  SET_TENDERS_DATA(state, payload) {
    state.tendersData = payload
  },
  SET_TENDERS_META(state, payload) {
    state.tendersMeta = payload
  },
}

export const getters = {
  get_tenders_data(state) {
    return state.tendersData
  },
  get_tenders_meta(state) {
    return state.tendersMeta
  },
}
