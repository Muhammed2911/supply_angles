// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderFilter from '~/components/shared/TenderFilter.vue'
import TenderCard from '~/components/shared/TenderCard.vue'

export default {
  name: 'AgnetsList',
  components: { Breadcrumb, TenderFilter, TenderCard },
  async asyncData(context) {
    const expirations = await context.$axios.$get('/agents?type=agent')

    return { expirations: expirations.data, expirationsMeta: expirations.meta }
  },
  data() {
    return {
      breadcrumb: [{ name: 'agents', title: 'الوكلاء و الموزعين' }],
      expirationsPaging: 1,
      selected_item: {
        id: null,
        title: null,
        desc: null,
      },
      sharing: {
        url: '',
        quote: '',
        hashtags: '',
        twitterUser: 'zemna',
      },
      networks: [
        { network: 'facebook', icon: 'facebook', color: '#1877f2' },
        { network: 'twitter', icon: 'twitter', color: '#1da1f2' },
        { network: 'telegram', icon: 'telegram', color: '#0088cc' },
        { network: 'whatsapp', icon: 'whatsapp', color: '#25d366' },
      ],
    }
  },
  methods: {
    handleSharing(item) {
      this.selected_item = item
      this.sharing.url = `https://mysupplyangel.com${this.$route.fullPath}/${item.id}`
      this.$bvModal.show('share_modal')
    },
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
    async toggleFav(id, idx) {
      await this.$axios
        .post(`/expiration/${id}/favorite`)
        .then((res) => {
          if (res.data.data.is_favorite == false) {
            this.TriggerNotify('success', 'تم الأزالة من المفضلة بنجاح !')
          }
          if (res.data.data.is_favorite == true) {
            this.TriggerNotify('success', 'تم الأضافة الي المفضلة بنجاح !')
          }
          this.expirations[idx].is_favorite = res.data.data.is_favorite
        })
        .catch((err) => {
          this.TriggerNotify('error', err.response.data.message)
        })
    },
    handleRoute(id) {
      this.$router.push({ name: 'expirations-id', params: { id: id } })
    },
  },
}
