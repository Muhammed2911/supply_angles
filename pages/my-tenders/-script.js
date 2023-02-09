// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderCard from '~/components/shared/TenderCard.vue'
import AgentsCard from '~/components/shared/AgentsCard.vue'

export default {
  name: 'MyTenders',
  components: { Breadcrumb, TenderCard, AgentsCard },
  async asyncData(context) {
    const tenders = await context.$axios.$get('/my-tenders?filter=all')
    const expirations = await context.$axios.$get('/my-expiration?filter=all')

    return {
      tenders: tenders.data,
      tendersMeta: tenders.meta,
      expirations: expirations.data,
      expirationsMeta: expirations.meta,
    }
  },
  data() {
    return {
      breadcrumb: [{ name: 'my-tenders', title: 'صفقاتي' }],
      agents: [],
      agentsMeta: [],
      tenderPaging: 1,
      expirationsPaging: 1,
    }
  },
  async mounted() {
    // getting my agents list
    await this.$axios.$get(`/my-agent?filter=all`).then((res) => {
      this.agents = res.data
      this.agentsMeta = res.meta
    })
  },
}
