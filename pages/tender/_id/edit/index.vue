<template>
  <section class="tender_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>تفاصيل مناقصة</h2>
      </div>
      <!-- end::title_box -->

      <FormCard :categories="categories" :item="tender"></FormCard>
      <!-- end::FormCard -->
    </div>
  </section>
</template>

<script src="~/pages/tender/_id/edit/-script.js"></script>

<style lang="scss" scoped>
.tender_wrapper {
  padding-block: 70px;
  position: relative;
}
</style>
