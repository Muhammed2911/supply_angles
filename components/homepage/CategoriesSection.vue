<template>
  <section class="categories_main_wrapper">
    <div class="container-fluid">
      <div class="title_box">
        <h2>القطاعات</h2>
      </div>
      <!-- end::title_box -->
      <div class="row">
        <div
          class="col-lg-2 col-md-3 col-2"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <div class="card_wrapper">
            <img :src="item.image" alt="img" />
            <p class="title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <!-- end::row -->
      <div class="button_wrapper">
        <nuxt-link :to="{ name: 'tenders-list' }">عرض المزيد</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesSection',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.categories_main_wrapper {
  padding-block: 60px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 240px);
    height: 1px;
    background-color: #ddd;
  }
  .title_box {
    h2 {
      text-align: center;
    }
  }
  .card_wrapper {
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
  .button_wrapper {
    display: flex;
    justify-content: flex-end;
    a {
      font-weight: 500;
      color: $base-color;
      text-decoration: underline !important;
    }
  }
}
</style>
