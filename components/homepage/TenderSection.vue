<template>
  <section class="tender_main_wrapper">
    <div class="container-fluid">
      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="title_box">
        <h2>احدث المناقصات</h2>
      </div>
      <!-- end::title_box -->

      <div class="tenders_wrapper">
        <TenderCard
          v-for="(item, idx) in tenders"
          :key="idx"
          :item="item"
        ></TenderCard>
      </div>
      <!-- end::tenders_wrapper -->
    </div>
  </section>
</template>

<script>
// importing components
import TenderFilter from '~/components/shared/TenderFilter.vue'
import TenderCard from '~/components/shared/TenderCard.vue'

export default {
  name: 'TenderSection',
  props: ['tenders'],
  components: { TenderFilter, TenderCard },
  methods: {
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
          this.$store.commit('homepage/SET_TENDERS', res.data)
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
</script>
