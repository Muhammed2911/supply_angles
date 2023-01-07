<template>
  <section class="insert_expire_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>{{ pageTitle }}</h2>
      </div>
      <!-- end::title_box -->

      <FormCard
        :categories="categories"
        @search-query="filterCategories"
      ></FormCard>
      <!-- end::FormCard -->
    </div>
  </section>
</template>

<script>
// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import FormCard from '~/pages/expirations/-form/index.vue'

export default {
  name: 'InsertExpirations',
  components: { Breadcrumb, FormCard },
  async asyncData(context) {
    const categories = await context.$axios.$get(
      '/categories-without-pagination'
    )

    return { categories: categories.data }
  },
  data() {
    return {
      breadcrumb: [{ name: 'expirations', title: '' }],
      pageTitle: null,
    }
  },
  created() {
    if (this.$route.query.type == 'expiration') {
      this.breadcrumb[0].title = 'اضافة هوالك دورية'
      this.pageTitle = 'اضافة هوالك دورية'
    } else if (this.$route.query.type == 'liquidation ') {
      this.breadcrumb[0].title = 'اضافة تصفيات'
      this.pageTitle = 'اضافة تصفيات'
    }
  },
  methods: {
    async filterCategories(value) {
      await this.$axios
        .$get(`/categories-without-pagination?keyword=${value}`)
        .then((res) => {
          this.categories = res.data
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.insert_expire_wrapper {
  padding-block: 70px;
  position: relative;
}
</style>
