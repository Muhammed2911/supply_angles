export default {
  name: 'FormCard',
  props: ['categories', 'item'],
  data() {
    return {
      form: {
        title: null,
        desc: null,
        expiry_date: null,
        company_name: null,
        tender_specifications_value: null,
        insurance_value: null,
        tender_specifications_file: null,
        tender_images: [],
        tender_other_files: [],
      },
      tender_specifications_file: null,
      tender_images: [],
      tender_other_files: [],
      category_ids: [],
      disabled: false,
    }
  },
  mounted() {
    if (this.item != null) {
      this.form.title = this.item.title
      this.form.desc = this.item.desc
      this.form.expiry_date = this.item.expiry_date
      this.form.company_name = this.item.company_name
      this.form.tender_specifications_value =
        this.item.tender_specifications_value
      this.form.insurance_value = this.item.insurance_value
      this.category_ids = this.item.categories
      this.tender_specifications_file = this.item.tender_specifications_file
      this.tender_images = this.item.tender_images
      this.tender_other_files = this.item.tender_other_files
    }
  },
  methods: {
    async deleteMedia(id, idx, type) {
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
      if (type == 'tender_other_files') {
        this.tender_other_files.splice(idx, 1)
      } else if (type == 'tender_images') {
        this.tender_images.splice(idx, 1)
      } else if (type == 'tender_specifications_file') {
        this.tender_specifications_file = null
      }
    },
    handleFileUpload($event, type) {
      if (type == 'tender_specifications_file') {
        console.log($event.target.files[0])
        this.form.tender_specifications_file = $event.target.files[0]
      } else if (type == 'tender_images') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.tender_images.push($event.target.files[x])
        }
      } else if (type == 'tender_other_files') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.tender_other_files.push($event.target.files[x])
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
      const form_data = new FormData()

      if (this.item != null) {
        form_data.append('_method', 'PUT')
      }

      form_data.append('title', this.form.title)
      form_data.append('desc', this.form.desc)
      form_data.append('expiry_date', this.form.expiry_date)
      form_data.append('company_name', this.form.company_name)
      form_data.append(
        'tender_specifications_value',
        this.form.tender_specifications_value
      )
      form_data.append('insurance_value', this.form.insurance_value)
      if (this.form.tender_specifications_file != null) {
        form_data.append(
          'tender_specifications_file',
          this.form.tender_specifications_file
        )
      }
      if (this.form.tender_images.length > 0) {
        this.form.tender_images.forEach((file, index) => {
          form_data.append(`tender_images[${index}]`, file)
        })
      }
      if (this.form.tender_other_files.length > 0) {
        this.form.tender_other_files.forEach((file, index) => {
          form_data.append(`tender_other_files[${index}]`, file)
        })
      }
      this.category_ids.forEach((item, index) => {
        form_data.append(`category_ids[${index}]`, item.id)
      })

      await this.$axios
        .post('/tenders', form_data)
        .then((res) => {
          this.TriggerNotify('success', 'تم اضافة المناقصة بنجاح !')
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
