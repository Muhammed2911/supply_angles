// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import TenderFilter from '~/components/shared/TenderFilter.vue'
import AgentsCard from '~/components/shared/AgentsCard.vue'

export default {
  name: 'AgnetsList',
  components: { Breadcrumb, TenderFilter, AgentsCard },
  async asyncData(context) {
    const agents = await context.$axios.$get(
      '/agents?type=required_agent_or_distrebutor'
    )

    return { agents: agents.data, agentsMeta: agents.meta }
  },
  data() {
    return {
      breadcrumb: [{ name: 'agents', title: 'الوكلاء و الموزعين' }],
      agentsPaging: 1,

      queryType: 'required_agent_or_distrebutor',
    }
  },

  methods: {
    async toggleType(type) {
      this.queryType = type
      await this.$axios
        .$get('/agents', {
          params: {
            type: this.queryType,
          },
        })
        .then((res) => {
          this.agents = res.data
          this.agentsMeta = res.meta
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
    async handleFilter(form) {
      await this.$axios
        .$get('/agents', {
          params: {
            keyword: form.keyword,
            category_id: form.category != null ? form.category.id : null,
            country_id: form.country != null ? form.country.id : null,
            type: this.queryType,
          },
        })
        .then((res) => {
          this.agents = res.data
          this.agentsMeta = res.meta
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
