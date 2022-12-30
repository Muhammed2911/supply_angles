// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderCard from '~/components/shared/TenderCard.vue'

export default {
  name: 'MyTenders',
  components: { Breadcrumb, TenderCard },
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
      tenderPaging: 1,
      expirationsPaging: 1,
    }
  },
}
