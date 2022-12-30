// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import _ from 'lodash'

export default {
  name: 'VerifyPage',
  components: { Breadcrumb },
  data() {
    return {
      disabled: false,
      breadcrumb: [{ name: 'auth-verify', title: 'تأكيد رقم الهاتف' }],
      requiredCells: _.range(0, 4),
      activationCells: [],
      form: {
        phone_code: this.$route.query.phone_code,
        phone: this.$route.query.phone,
        code: null,
      },
      type: this.$route.query.type,
    }
  },
  methods: {
    inputActivationCode(value, index) {
      this.$set(this.activationCells, index, value)
    },
    checkForKeys(key, index) {
      if (key != 8) {
        if (this.$refs.codeRef[index + 1] != null) {
          this.$refs.codeRef[index + 1].focus()
        }
      }
    },
    async submitForm() {
      this.disabled = true

      let cells = JSON.parse(JSON.stringify(this.activationCells))
      this.form.code = cells.join('') // convert array to string

      if (this.type == 'account') {
        await this.$axios
          .post('/verify', this.form)
          .then((res) => {
            this.TriggerNotify('success', 'تم تأكيد رقم الهاتف بنجاح !')
            this.$router.replace('/auth/login')
          })
          .catch((err) => {
            const req_error = {
              data: err.response,
              type: 'catch',
            }
            this.error_handler(req_error)
            this.TriggerNotify('error', this.notify.message)
          })
      } else if (this.type == 'password') {
        await this.$axios
          .post('/check-code', this.form)
          .then((res) => {
            this.TriggerNotify('success', 'يرجى ادخال كلمة المرور الجديدة')
            this.$router.replace({
              name: 'auth-forget-reset',
              query: {
                phone_code: this.form.phone_code,
                phone: this.form.phone,
                code: this.form.code,
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
      }
    },
  },
}
