export default function ({ $axios, redirect, app, store }) {
  /* set axios baseurl for all requests */
  $axios.setBaseURL(`http://tender-api.counterattack.top/api/website/`)

  function setHeader() {
    let accessToken = null
    accessToken =
      app.$cookies.get('userToken') ||
      app.store.getters['localStorage/userToken']
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept-Language': 'ar',
    }
    headers.Authorization = accessToken ?? ''

    return headers
  }
  // Add a request interceptor
  $axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers = setHeader(config)

    return config
  })

  // Add a response interceptor
  $axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return Promise.resolve(response)
    },
    function (error) {
      const err = error.response.data
      //* generic error *//
      store.commit('localStorage/SET_ERROR_MSG', error.response.status)
      if (error.response.status == 401) {
        app.$cookies.remove('userToken')
        store.commit('localStorage/SET_USER_TOKEN', null)
        store.commit('localStorage/SET_USER_DATA', null)
        app.$toast.error('عفوا .. يرجى تسجيل الدخول الي حسابك اولا !')

        return redirect('/auth/login')
      }

      // Do something with response error
      return Promise.reject(err)
    }
  )
}
