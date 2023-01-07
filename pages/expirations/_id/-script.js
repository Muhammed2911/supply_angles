// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'

export default {
  name: 'ExperationDetails',
  components: { Breadcrumb },
  async asyncData(context) {
    const expiration = await context.$axios.$get(
      `/expirations/${context.params.id}`
    )

    return { item: expiration.data }
  },
  data() {
    return {
      breadcrumb: [
        { name: 'expirations', title: 'تصفيات و هوالك دورية' },
        { name: '', title: 'تفاصيل الصفقة' },
      ],
      form: {
        desc: null,
        images: [],
        files: [],
      },
      images: [],
      files: [],
      disabled: false,
    }
  },
  methods: {
    async toggleFav() {
      await this.$axios
        .post(`/expiration/${this.item.id}/favorite`)
        .then((res) => {
          if (this.item.is_favorite == true) {
            this.TriggerNotify('success', 'تم ازالة الصفقة من المفضلة بنجاح !')
          }
          if (this.item.is_favorite == false) {
            this.TriggerNotify('success', 'تم اضافة الصفقة من المفضلة بنجاح !')
          }
          this.item.is_favorite = res.data.data.is_favorite
        })
        .catch((err) => {
          this.TriggerNotify('error', err.message)
        })
    },
  },
}
