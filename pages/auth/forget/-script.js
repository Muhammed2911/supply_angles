// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'ForgatPage',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: [{ name: 'auth-forget', title: 'نسيت كلمة المرور' }],
      disabled: false,
      codes: [
        { value: '20', text: '+20' },
        { value: '966', text: '+966' },
      ],
      form: {
        phone_code: 20,
        phone: null,
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
      await this.$axios
        .post('/forgot-password', this.form)
        .then((res) => {
          this.TriggerNotify(
            'success',
            'يرجى التحقق من الكود المرسل علي هاتفك !'
          )
          this.$router.replace({
            name: 'auth-verify',
            query: {
              phone_code: this.form.phone_code,
              phone: this.form.phone,
              type: 'password',
            },
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
