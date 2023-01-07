// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderFilter from '~/components/shared/TenderFilter.vue'

export default {
  name: 'CategoriesPage',
  components: { Breadcrumb, TenderFilter },
  async asyncData(context) {
    const categories = await context.$axios.$get(
      '/categories-without-pagination'
    )

    return { categories: categories.data }
  },
  data() {
    return {
      breadcrumb: [{ name: 'categories', title: 'القطاعات' }],
      disabled: false,
    }
  },
  methods: {
    async handleFilter(form) {
      this.disabled = true
      await this.$axios
        .$get('/categories-without-pagination', {
          params: {
            keyword: form.keyword,
            category_id: form.category != null ? form.category.id : null,
            country_id: form.country != null ? form.country.id : null,
          },
        })
        .then((res) => {
          this.categories = res.data
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
    handleRoute(id) {
      this.$router.push({ name: 'tenders-list', query: { cate: id } })
    },
  },
}
