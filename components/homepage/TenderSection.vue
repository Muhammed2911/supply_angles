<template>
  <section class="tender_main_wrapper">
    <div class="container-fluid">
      <div class="title_box">
        <h2>احدث المناقصات</h2>
      </div>
      <!-- end::title_box -->

      <div class="tenders_wrapper">
        <TenderCard
          v-for="(item, idx) in tenders_list"
          :key="idx"
          :item="item"
        ></TenderCard>

        <div class="button_wrapper">
          <nuxt-link :to="{ name: 'tenders-list' }">عرض المزيد</nuxt-link>
        </div>
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
  data() {
    return {
      tenders_list: this.tenders,
    }
  },
}
</script>

<style lang="scss" scoped>
.button_wrapper {
  display: flex;
  justify-content: flex-end;
  a {
    font-weight: 500;
    color: $base-color;
    text-decoration: underline !important;
  }
}
</style>
