// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'

export default {
  name: 'TenderDetails',
  components: { Breadcrumb },
  async asyncData(context) {
    const tender = await context.$axios.$get(`/tenders/${context.params.id}`)

    return { item: tender.data }
  },
  data() {
    return {
      breadcrumb: [
        { name: 'tenders-list', title: 'المناقصات' },
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
        .post(`/tenders/${this.item.id}/favorite`)
        .then((res) => {
          if (this.item.is_favorite == true) {
            this.TriggerNotify(
              'success',
              'تم ازالة المناقصة من المفضلة بنجاح !'
            )
          }
          if (this.item.is_favorite == false) {
            this.TriggerNotify(
              'success',
              'تم اضافة المناقصة من المفضلة بنجاح !'
            )
          }
          this.item.is_favorite = res.data.data.is_favorite
        })
        .catch((err) => {
          this.TriggerNotify('error', err.message)
        })
    },
    handleFileUpload($event, type) {
      if (type == 'files') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.files.push($event.target.files[x])
          this.files.push({
            id: 'new',
            media: URL.createObjectURL($event.target.files[x]),
            type: $event.target.files[x].type,
            name: $event.target.files[x].name,
          })
        }
      } else if (type == 'images') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.images.push($event.target.files[x])
          this.images.push({
            id: 'new',
            media: URL.createObjectURL($event.target.files[x]),
            type: $event.target.files[x].type,
            name: $event.target.files[x].name,
          })
        }
      }
    },
    async deleteMedia(id, idx, type) {
      if (id != 'new') {
        await this.$axios
          .delete(`/tender/${this.item.id}/medias/${id}`)
          .then((res) => {
            this.TriggerNotify('success', 'تم حذف الملف بنجاح !')
          })
          .catch((err) => {
            const req_error = {
              data: err.response,
              type: 'catch',
            }
            this.error_handler(req_error)
            this.TriggerNotify('error', this.notify.message)
          })
      }
      if (type == 'files') {
        if (id == 'new') {
          this.form.files.splice(idx, 1)
        }
        this.files.splice(idx, 1)
      } else if (type == 'images') {
        if (id == 'new') {
          this.form.images.splice(idx, 1)
        }
        this.images.splice(idx, 1)
      }
    },
    async submitForm() {
      await this.$refs.form.validate().then((success) => {
        if (success) {
          this.handleReq()
        }
      })
    },
    async handleReq() {
      this.disabled = true
      const form_data = new FormData()

      form_data.append('desc', this.form.desc)
      if (this.form.images.length > 0) {
        this.form.images.forEach((file, index) => {
          form_data.append(`images[${index}]`, file)
        })
      }
      if (this.form.files.length > 0) {
        this.form.files.forEach((file, index) => {
          form_data.append(`files[${index}]`, file)
        })
      }

      await this.$axios
        .post(`/tenders/${this.$route.params.id}/offers`, form_data)
        .then((res) => {
          this.TriggerNotify('success', 'تم اضافة العرض بنجاح !')
          this.$bvModal.hide('apply_modal')
        })
        .catch((err) => {
          this.TriggerNotify('error', err.message)
          this.disabled = false
        })

      this.disabled = false
    },
  },
}
