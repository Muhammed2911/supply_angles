// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderCard from '~/components/shared/TenderCard.vue'

export default {
  name: 'FavouriteList',
  components: { Breadcrumb, TenderCard },
  async asyncData(context) {
    const tenders = await context.$axios.$get('/tender/favorites')

    return { tenders: tenders.data, tendersMeta: tenders.meta }
  },
  data() {
    return {
      breadcrumb: [{ name: 'favourite', title: 'المفضلة' }],
      tenderPaging: 1,
    }
  },
}
