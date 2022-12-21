<template>
  <section class="tender_main_wrapper">
    <div class="container-fluid">
      <!-- start::filter_wrapper -->
      <TenderFilter></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="title_box">
        <h2>احدث المناقصات</h2>
      </div>
      <!-- end::title_box -->

      <div class="tenders_wrapper"></div>
      <!-- end::tenders_wrapper -->
    </div>
  </section>
</template>

<script>
// importing components
import TenderFilter from '~/components/shared/TenderFilter.vue'

export default {
  name: 'TenderSection',
  props: ['tenders'],
  components: { TenderFilter },
}
</script>
