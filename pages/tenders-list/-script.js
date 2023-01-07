// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderFilter from '~/components/shared/TenderFilter.vue'
import TenderCard from '~/components/shared/TenderCard.vue'
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'TendersList',
  components: { Breadcrumb, TenderFilter, TenderCard },
  async asyncData(context) {
    if (context.query.cate != undefined) {
      await context.$axios
        .$get(`/tenders?category_id=${context.query.cate}`)
        .then((res) => {
          context.store.commit('tenders/SET_TENDERS_DATA', res.data)
          context.store.commit('tenders/SET_TENDERS_META', res.meta)
        })
        .catch((err) => {})
    } else {
      await context.$axios
        .$get(`/tenders`)
        .then((res) => {
          context.store.commit('tenders/SET_TENDERS_DATA', res.data)
          context.store.commit('tenders/SET_TENDERS_META', res.meta)
        })
        .catch((err) => {})
    }
  },
  data() {
    return {
      breadcrumb: [{ name: 'tenders-list', title: 'سجل المناقصات' }],
      tenderPaging: 1,
    }
  },
  computed: {
    ...mapGetters({
      tendersData: ['tenders/get_tenders_data'],
      tendersMeta: ['tenders/get_tenders_meta'],
    }),
  },
  methods: {
    async refetchTenders(page) {
      await this.$axios.$get(`/tenders?page=${page}`).then((res) => {
        this.$store.commit('tenders/SET_TENDERS_DATA', res.data)
        this.$store.commit('tenders/SET_TENDERS_META', res.meta)
      })
    },
    async handleFilter(form) {
      await this.$axios
        .$get('/tenders', {
          params: {
            keyword: form.keyword,
            category_id: form.category != null ? form.category.id : null,
            country_id: form.country != null ? form.country.id : null,
          },
        })
        .then((res) => {
          this.$store.commit('tenders/SET_TENDERS_DATA', res.data)
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
