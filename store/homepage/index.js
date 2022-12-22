export const state = () => ({
  homepage: [],
  tenders: [],
})

export const mutations = {
  SET_HOMEPAGE_DATA(state, payload) {
    state.homepage = payload
  },
  SET_TENDERS(state, payload) {
    state.tenders = payload
  },
  UPDATED_TENDER_FAV(state, payload) {
    const tenderIdx = state.tenders.findIndex(
      (tender) => tender.id == payload.id
    )
    state.tenders[tenderIdx].is_favorite = payload.status
  },
}

export const getters = {
  get_homepage_data(state) {
    return state.homepage
  },
  get_tenders(state) {
    return state.tenders
  },
}
