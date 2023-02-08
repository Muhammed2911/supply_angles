// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'RgisterForm',
  components: { Breadcrumb },
  async asyncData(context) {
    await context.store.dispatch('localStorage/get_countries')
  },
  data() {
    return {
      breadcrumb: [{ name: 'auth-register', title: 'انشاء عضوية' }],
      form: {
        avatar: null,
        name: null,
        password: null,
        password_confirmation: null,
        email: null,
        phone_code: '02',
        phone: null,
        whats: null,
        gender: null,
        country_id: null,
        city_id: null,
        address: null,
        company_name: null,
        commercial_register_num: null,
        tax_card_num: null,
        categories: [],
      },
      disabled: false,
      codes: [],
      gender: [
        { name: 'ذكر', value: 'male' },
        { name: 'أنثى', value: 'female' },
      ],
    }
  },
  async created() {
    await this.$store.dispatch('localStorage/get_categories')

    await this.$store.dispatch('localStorage/get_cities')
  },
  computed: {
    ...mapGetters({
      categories: ['localStorage/get_categories'],
      countries: ['localStorage/get_countries'],
      cities: ['localStorage/get_cities'],
    }),
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

      form_data.append('name', this.form.name)
      form_data.append('password', this.form.password)
      form_data.append('password_confirmation', this.form.password_confirmation)
      form_data.append('email', this.form.email)
      form_data.append('phone_code', this.form.phone_code)
      form_data.append('phone', this.form.phone)
      form_data.append('whats', this.form.whats)
      form_data.append('gender', this.form.gender.value)
      form_data.append('country_id', this.form.country_id.id)
      form_data.append('city_id', this.form.city_id.id)
      form_data.append('address', this.form.address)
      form_data.append('company_name', this.form.company_name)
      form_data.append(
        'commercial_register_num',
        this.form.commercial_register_num
      )
      form_data.append('tax_card_num', this.form.tax_card_num)
      if (this.form.categories.length > 0) {
        this.form.categories.forEach((elem, index) => {
          form_data.append(`categories[${index}]`, elem.id)
        })
      }

      await this.$axios
        .post('/register', form_data)
        .then((res) => {
          this.TriggerNotify(
            'success',
            'تم تسجيل الحساب .. يرجى تأكيد رقم الهاتف'
          )
          this.$router.replace({
            name: 'auth-verify',
            query: {
              phone_code: this.form.phone_code,
              phone: this.form.phone,
              type: 'account',
            },
          })
        })
        .catch((err) => {
          // const req_error = {
          //   data: err.response,
          //   type: 'catch',
          // }
          // this.error_handler(req_error)
          this.TriggerNotify('error', err.message || err.messages[0])
          console.log(err)
          this.disabled = false
        })

      this.disabled = false
    },
  },
}
