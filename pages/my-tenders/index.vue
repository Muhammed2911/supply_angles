<template>
  <section class="own_tenders_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>صفقاتي</h2>
      </div>
      <!-- end::title_box -->

      <b-tabs>
        <b-tab title="مناقصاتي" active>
          <div class="tenders_wrapper">
            <TenderCard
              v-for="(item, idx) in tenders"
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
        </b-tab>
        <b-tab title="التصفيات و الهوالك الدورية">
          <div class="tenders_wrapper">
            <TenderCard
              v-for="(item, idx) in expirations"
              :key="idx"
              :item="item"
            ></TenderCard>
            <b-pagination
              v-model="expirationsPaging"
              :total-rows="expirationsMeta.total"
              :last-page="expirationsMeta.last_page"
              :per-page="expirationsMeta.per_page"
              aria-controls="tenders"
            ></b-pagination>
          </div>
          <!-- end::tenders_wrapper -->
        </b-tab>
        <b-tab title="وكالات و توزيع">
          <div class="tenders_wrapper">
            <TenderCard
              v-for="(item, idx) in tenders"
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
        </b-tab>
        <b-tab title="وظائف">
          <div class="tenders_wrapper">
            <TenderCard
              v-for="(item, idx) in tenders"
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
        </b-tab>
      </b-tabs>
      <!-- end::tabs_wrapper  -->
    </div>
  </section>
</template>

<script src="~/pages/my-tenders/-script.js"></script>

<style lang="scss" scoped>
.own_tenders_wrapper {
  padding-block: 70px;
  position: relative;
}
</style>
