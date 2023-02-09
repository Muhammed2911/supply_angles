export default {
  name: 'FormCard',
  props: ['categories', 'item'],
  emits: ['search-query'],
  data() {
    return {
      form: {
        title: null,
        desc: null,
        agent_type: null,
        type: null,
        expiry_date: null,
        company_name: null,
        product_name: null,
        agent_images: [],
        agent_files: [],
        category_ids: [],
      },
      agent_images: [],
      agent_files: [],
      type_options: [
        { text: 'وكيل', value: 'agent' },
        { text: 'مورد', value: 'distrebutor' },
      ],
      disabled: false,
    }
  },
  mounted() {
    if (this.item != null) {
      this.form.title = this.item.title
      this.form.desc = this.item.desc
      this.form.agent_type = this.item.agent_type
      // this.form.type = this.item.type
      this.form.company_name = this.item.company_name
      this.form.product_name = this.item.product_name
      this.form.expiry_date = this.item.expiry_date
      this.agent_images = this.item.agent_images
      this.agent_files = this.item.agent_files
      this.form.category_ids = this.item.categories
    }
  },
  methods: {
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
      if (type == 'agent_images') {
        if (id == 'new') {
          this.form.agent_images.splice(idx, 1)
        }
        this.agent_images.splice(idx, 1)
      } else if (type == 'agent_files') {
        if (id == 'new') {
          this.form.agent_files.splice(idx, 1)
        }
        this.agent_files.splice(idx, 1)
      }
    },
    handleFileUpload($event, type) {
      if (type == 'agent_images') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.agent_images.push($event.target.files[x])
          this.agent_images.push({
            id: 'new',
            media: URL.createObjectURL($event.target.files[x]),
            type: $event.target.files[x].type,
            name: $event.target.files[x].name,
          })
        }
      } else if (type == 'agent_files') {
        for (let x = 0; x < $event.target.files.length; x++) {
          this.form.agent_files.push($event.target.files[x])
          this.agent_files.push({
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
      if (this.$route.query.type == 'get_agent') {
        form_data.append('type', 'potential_agent_or_potential_distrebutor')
      } else if (this.$route.query.type == 'search_agent') {
        form_data.append('type', 'required_agent_or_distrebutor')
      }
      form_data.append('agent_type', this.form.agent_type)
      form_data.append('company_name', this.form.company_name)
      form_data.append('product_name', this.form.product_name)
      if (this.form.expiry_date != null) {
        form_data.append('expiry_date', this.form.expiry_date)
      }
      form_data.append('company_name', this.form.company_name)
      if (this.form.agent_images.length > 0) {
        this.form.agent_images.forEach((file, index) => {
          form_data.append(`agent_images[${index}]`, file)
        })
      }
      if (this.form.agent_files.length > 0) {
        this.form.agent_files.forEach((file, index) => {
          form_data.append(`agent_files[${index}]`, file)
        })
      }
      this.form.category_ids.forEach((item, index) => {
        form_data.append(`category_ids[${index}]`, item.id)
      })

      await this.$axios
        .post('/agents', form_data)
        .then((res) => {
          this.TriggerNotify('success', 'تم الأضافة بنجاح !')
          this.$router.replace({ name: 'agents' })
        })
        .catch((err) => {
          this.TriggerNotify('error', err.message)
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
