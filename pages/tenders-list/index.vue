<template>
  <section class="tenders_list_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>سجل المناقصات</h2>
      </div>
      <!-- end::title_box -->

      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="tenders_wrapper">
        <TenderCard
          v-for="(item, idx) in tendersData"
          :key="idx"
          :item="item"
        ></TenderCard>
        <b-pagination
          v-model="tenderPaging"
          :total-rows="tendersMeta.total"
          :last-page="tendersMeta.last_page"
          :per-page="tendersMeta.per_page"
          aria-controls="tenders"
        ></b-pagination>
      </div>
      <!-- end::tenders_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/tenders-list/-script.js"></script>

<style lang="scss" scoped>
.tenders_list_wrapper {
  padding-block: 60px;
}
</style>
