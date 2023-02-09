// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderFilter from '~/components/shared/TenderFilter.vue'
import ExpirationCard from '~/components/shared/ExpirationCard.vue'

export default {
  name: 'ExpirationsList',
  components: { Breadcrumb, TenderFilter, ExpirationCard },
  async asyncData(context) {
    const expirations = await context.$axios.$get('/expirations')

    return { expirations: expirations.data, expirationsMeta: expirations.meta }
  },
  data() {
    return {
      breadcrumb: [{ name: 'tenders-list', title: 'تصفيات وهوالك دورية' }],
      expirationsPaging: 1,
    }
  },
  methods: {
    async handleFilter(form) {
      await this.$axios
        .$get('/expirations', {
          params: {
            keyword: form.keyword,
            category_id: form.category != null ? form.category.id : null,
            country_id: form.country != null ? form.country.id : null,
          },
        })
        .then((res) => {
          this.expirations = res.data
          this.expirationsMeta = res.meta
        })
        .catch((err) => {
          const req_error = {
            data: err.response,
            type: 'catch',
          }
          this.error_handler(req_error)
          this.TriggerNotify('error', this.notify.message)
        })
    },
  },
}
