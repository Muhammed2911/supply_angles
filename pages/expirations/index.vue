<template>
  <section class="tenders_list_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box flex">
        <h2>تصفيات وهوالك دورية</h2>
        <div class="buttons">
          <nuxt-link
            :to="{
              name: 'expirations-insert',
              query: { type: 'liquidation' },
            }"
            class="btn btn-default"
          >
            اضف تصفيات
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'expirations-insert', query: { type: 'expiration' } }"
            class="btn btn-default"
          >
            اضف هوالك دورية
          </nuxt-link>
        </div>
      </div>
      <!-- end::title_box -->

      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="expirations_wrapper">
        <ExpirationCard
          :item="item"
          v-for="(item, idx) in expirations"
          :key="idx"
        ></ExpirationCard>
        <b-pagination
          v-model="expirationsPaging"
          :total-rows="expirationsMeta.total"
          :last-page="expirationsMeta.last_page"
          :per-page="expirationsMeta.per_page"
          aria-controls="expirations"
        ></b-pagination>
      </div>
      <!-- end::tenders_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/expirations/-script.js"></script>

<style lang="scss" scoped>
.tenders_list_wrapper {
  padding-block: 60px;
}
</style>
