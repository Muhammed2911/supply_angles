// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import FormCard from '~/pages/tender/-form/index.vue'
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'TenderWrapper',
  components: { Breadcrumb, FormCard },
  data() {
    return {
      breadcrumb: [
        { name: 'tenders-list', title: 'سجل المناقصات' },
        { name: 'tender', title: 'إضافة مناقصة' },
      ],
      disabled: false,
    }
  },
  async created() {
    await this.$store.dispatch('localStorage/get_categories')
  },
  computed: {
    ...mapGetters({
      categories: ['localStorage/get_categories'],
    }),
  },
}
