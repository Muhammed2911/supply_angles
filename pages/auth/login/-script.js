// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'

export default {
  name: 'LoginPage',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: [{ name: 'auth-login', title: 'تسجيل الدخول' }],
      form: { username: null, password: null },
      remember: false,
    }
  },
  methods: {
    async submitForm() {
      await this.$refs.form.validate().then((success) => {
        if (success) {
          this.handleReq()
        }
      })
    },
    async handleReq() {
      await this.$axios
        .post('/login', this.form)
        .then((res) => {
          const accessToken = `Bearer ${res.data.data.token}`
          this.$store.commit('localStorage/SET_USER_TOKEN', accessToken)
          this.$store.commit('localStorage/SET_USER_DATA', res.data.data)
          if (this.remember == true) {
            var options = {
              path: '/',
              maxAge: 60 * 60 * 24 * 14,
            }
            this.$store.commit(
              'localStorage/SET_STORE_EXIRE',
              60 * 60 * 24 * 14
            )
          } else {
            var options = {
              path: '/',
              maxAge: 60 * 60 * 24,
            }
            this.$store.commit('localStorage/SET_STORE_EXIRE', 60 * 60 * 24)
          }
          this.$cookies.setAll([
            { name: 'userToken', value: accessToken, opts: options },
            { name: 'userData', value: res.data.data, opts: options },
          ])

          this.TriggerNotify('success', 'تم تسجيل الدخول بنجاح')
          this.$router.replace('/')
        })
        .catch((err) => {
          // console.log(err.message)
          this.TriggerNotify('error', err.message)
        })
    },
  },
}
