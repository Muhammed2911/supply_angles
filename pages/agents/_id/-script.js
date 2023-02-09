// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'

export default {
  name: 'AgentDetails',
  components: { Breadcrumb },
  async asyncData(context) {
    const agent = await context.$axios.$get(`/agents/${context.params.id}`)

    return { item: agent.data }
  },
  data() {
    return {
      breadcrumb: [
        { name: 'agents', title: 'الوكلاء و الموزعين' },
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
    async toggleFav() {
      await this.$axios
        .post(`/agent/${this.item.id}/favorite`)
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
          .delete(`/agent/${this.item.id}/medias/${id}`)
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
        .post(`/agents/${this.$route.params.id}/offers`, form_data)
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
