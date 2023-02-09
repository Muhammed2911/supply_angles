// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderCard from '~/components/shared/TenderCard.vue'

export default {
  name: 'FavouriteList',
  components: { Breadcrumb, TenderCard },
  async asyncData(context) {
    const tenders = await context.$axios.$get('/tender/favorites')
    const expirations = await context.$axios.$get('/expiration/favorites')
    const agents = await context.$axios.$get('/agent/favorites')

    return {
      tenders: tenders.data,
      tendersMeta: tenders.meta,
      expirations: expirations.data,
      expirationsMeta: expirations.meta,
      agents: agents.data,
      agentsMeta: agents.meta,
    }
  },
  data() {
    return {
      breadcrumb: [{ name: 'favourite', title: 'المفضلة' }],
      tenderPaging: 1,
      expirationsPaging: 1,
      agentsPaging: 1,
    }
  },
  computed: {
    is_loggedin() {
      return this.$cookies.get('userToken')
    },
  },
}
