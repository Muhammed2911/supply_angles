const responseHandler = (error, { commit }, type) => {
  let errorCode = error.status
  if (errorCode == 200 || errorCode == 201) {
    commit('SET_ERROR_MSG', {
      type: 'success',
      method: 'success',
      message: 'Done .. request compeleted successfully !',
      state: 200,
    })
  } else if (errorCode == 422) {
    commit('SET_ERROR_MSG', {
      type: 'error',
      method: 'error',
      message: error.data.message,
      state: 1,
    })
  }
}

export default responseHandler
