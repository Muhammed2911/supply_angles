<template>
  <section class="categoreis_page">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>القطاعات</h2>
      </div>
      <!-- end::title_box -->

      <!-- start::filter_wrapper -->
      <TenderFilter
        placeholder="ابحث عن قطاع"
        :dropdowns="false"
        :disabled="disabled"
        @handle-form="handleFilter"
      ></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="row">
        <div
          class="col-lg-2 col-md-3 col-2"
          v-for="(item, idx) in categories"
          :key="idx"
        >
          <div class="card_wrapper" @click="handleRoute(item.id)">
            <img :src="item.image" alt="img" />
            <p class="title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <!-- end::row -->
    </div>
  </section>
</template>

<script src="~/pages/categories/-script.js"></script>

<style lang="scss" scoped>
.categoreis_page {
  padding-block: 70px;
  position: relative;
  .title_box {
    margin-bottom: 40px;
  }
  .card_wrapper {
    margin-bottom: 35px;
    cursor: pointer;
    img {
      width: 200px;
      height: 170px;
      display: block;
      margin-inline: auto;
      margin-bottom: 15px;
    }
    .title {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
