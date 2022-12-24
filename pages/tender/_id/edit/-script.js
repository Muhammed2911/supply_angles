// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import FormCard from '~/pages/tender/-form/index.vue'
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'EditTender',
  components: { Breadcrumb, FormCard },
  async asyncData(context) {
    const tender = await context.$axios.$get(`/tenders/${context.params.id}`)

    return { tender: tender.data }
  },
  data() {
    return {
      breadcrumb: [
        { name: '', title: 'صفقاتي' },
        { name: 'tender-id-edit', title: 'تفاصيل المناقصة' },
      ],
      disabled: false,
    }
  },
  computed: {
    ...mapGetters({
      categories: ['localStorage/get_categories'],
    }),
  },
}
