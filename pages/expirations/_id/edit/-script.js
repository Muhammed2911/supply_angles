// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import FormCard from '~/pages/expirations/-form/index.vue'

export default {
  name: 'EditExpirations',
  components: { Breadcrumb, FormCard },
  async asyncData(context) {
    const expiration = await context.$axios.$get(
      `/expirations/${context.params.id}`
    )
    const categories = await context.$axios.$get(
      '/categories-without-pagination'
    )

    return { expiration: expiration.data, categories: categories.data }
  },
  data() {
    return {
      breadcrumb: [
        { name: 'expirations', title: 'تصفيات و هوالك دورية' },
        { name: 'expirations-id-edit', title: 'تعديل' },
      ],
      disabled: false,
    }
  },
  methods: {
    async filterCategories(value) {
      await this.$axios
        .$get(`/categories-without-pagination?keyword=${value}`)
        .then((res) => {
          this.categories = res.data
        })
    },
  },
}
