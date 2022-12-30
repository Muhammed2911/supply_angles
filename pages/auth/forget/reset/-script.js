// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
export default {
  name: 'ResetPage',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: [{ name: 'auth-forget', title: 'اعادة تعيين كلمة المرور' }],
      disabled: false,
      form: {
        phone_code: this.$route.query.phone_code,
        phone: this.$route.query.phone,
        code: this.$route.query.code,
        password: null,
        password_confirmation: null,
      },
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
      this.disabled = true

      const form_data = new FormData()
      form_data.append('_method', 'PATCH')
      form_data.append('phone_code', this.form.phone_code)
      form_data.append('phone', this.form.phone)
      form_data.append('code', this.form.code)
      form_data.append('password', this.form.password)
      form_data.append('password_confirmation', this.form.password_confirmation)

      await this.$axios
        .post('/reset-password', form_data)
        .then((res) => {
          this.TriggerNotify('success', 'تم اعادة تعيين كلمة المرور بنجاح !')
          this.$router.replace({
            name: 'auth-login',
          })
        })
        .catch((err) => {
          const req_error = {
            data: err.response,
            type: 'catch',
          }
          this.error_handler(req_error)
          this.TriggerNotify('error', this.notify.message)
        })
      this.disabled = false
    },
  },
}
