<template>
  <section class="favourite_list">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>المفضلة</h2>
      </div>
      <!-- end::title_box -->

      <b-tabs>
        <b-tab title="الصفقات" active>
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
        <b-tab title="تصفيات و هوالك دورية">
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
        <b-tab title="وكلاء و موزعين">
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

<script src="~/pages/favourite/-script.js"></script>

<style lang="scss" scoped>
.favourite_list {
  padding-block: 70px;
  position: relative;
}
</style>
