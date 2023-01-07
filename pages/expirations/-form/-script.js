export default {
  name: 'FormCard',
  props: ['categories', 'item'],
  emits: ['search-query'],
  data() {
    return {
      form: {
        title: null,
        desc: null,
        expiry_date: null,
        type: this.$route.query.type,
        company_name: null,
        product_name: null,
        expiration_images: [],
        expiration_files: [],
        category_ids: [],
      },
      expiration_images: [],
      expiration_files: [],
      disabled: false,
    }
  },
  mounted() {
    if (this.item != null) {
      this.form.title = this.item.title
      this.form.desc = this.item.desc
      this.form.type = this.item.type
      this.form.company_name = this.item.company_name
      this.form.product_name = this.item.product_name
      this.form.expiry_date = this.item.expiry_date
      this.expiration_images = this.item.expiration_images
      this.expiration_files = this.item.expiration_files
      this.form.category_ids = this.item.categories
    }
  },
  methods: {
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
      if (type == 'expiration_images') {
        if (id == 'new') {
          this.form.expiration_images.splice(idx, 1)
        }
        this.expiration_images.splice(idx, 1)
      } else if (type == 'expiration_files') {
        if (id == 'new') {
          this.form.expiration_files.splice(idx, 1)
        }
        this.expiration_files.splice(idx, 1)
      }
    },
    handleFileUpload($event, type) {
      if (type == 'expiration_images') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.expiration_images.push($event.target.files[x])
          this.expiration_images.push({
            id: 'new',
            media: URL.createObjectURL($event.target.files[x]),
            type: $event.target.files[x].type,
            name: $event.target.files[x].name,
          })
        }
      } else if (type == 'expiration_files') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.expiration_files.push($event.target.files[x])
          this.expiration_files.push({
            id: 'new',
            media: URL.createObjectURL($event.target.files[x]),
            type: $event.target.files[x].type,
            name: $event.target.files[x].name,
          })
        }
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

      if (this.item != null) {
        form_data.append('_method', 'PUT')
      }

      form_data.append('title', this.form.title)
      form_data.append('desc', this.form.desc)
      form_data.append('type', this.form.type)
      form_data.append('company_name', this.form.company_name)
      form_data.append('product_name', this.form.product_name)
      form_data.append('expiry_date', this.form.expiry_date)
      form_data.append('company_name', this.form.company_name)
      if (this.form.expiration_images.length > 0) {
        this.form.expiration_images.forEach((file, index) => {
          form_data.append(`expiration_images[${index}]`, file)
        })
      }
      if (this.form.expiration_files.length > 0) {
        this.form.expiration_files.forEach((file, index) => {
          form_data.append(`expiration_files[${index}]`, file)
        })
      }
      this.form.category_ids.forEach((item, index) => {
        form_data.append(`category_ids[${index}]`, item.id)
      })

      await this.$axios
        .post('/expirations', form_data)
        .then((res) => {
          this.TriggerNotify('success', 'تم الأضافة بنجاح !')
        })
        .catch((err) => {
          const req_error = {
            data: err.response,
            type: 'catch',
          }
          this.error_handler(req_error)
          this.TriggerNotify('error', this.notify.message)
          this.disabled = false
        })
      this.disabled = false
    },
    toggleSelected(selected) {
      const checkCase = this.form.category_ids.find(
        (item) => item.id == selected.id
      )
      if (checkCase) {
        const findIndex = this.form.category_ids.findIndex(
          (item) => item.id == selected.id
        )
        this.form.category_ids.splice(findIndex, 1)
      } else {
        this.form.category_ids.push(selected)
      }
    },
    emitQuery(value) {
      this.$emit('search-query', value)
    },
  },
}
