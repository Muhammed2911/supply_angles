<template>
  <section class="static_pages_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>{{ pageTitle }}</h2>
      </div>
      <!-- end::title_box -->

      <div class="context_wrapper">
        <div v-html="content"></div>
      </div>
    </div>
  </section>
</template>

<script>
// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'

export default {
  name: 'StaticPages',
  components: { Breadcrumb },
  async asyncData(context) {
    const response = await context.$axios.$get(`${context.params.slug}`)

    return {
      response: response.data,
    }
  },
  data() {
    return {
      breadcrumb: [{ name: `static-slug`, title: '' }],
      pageTitle: null,
      content: null,
    }
  },
  created() {
    if (this.$route.params.slug == 'why-us') {
      this.breadcrumb[0].title = 'لماذا نحن'
      this.pageTitle = 'لماذا نحن'
      this.content = this.response.why_us
    } else if (this.$route.params.slug == 'privacy') {
      this.breadcrumb[0].title = 'سياسية الخصوصية'
      this.pageTitle = 'سياسية الخصوصية'
      this.content = this.response.privacy
    } else if (this.$route.params.slug == 'terms') {
      this.breadcrumb[0].title = 'الشروط والاحكام'
      this.pageTitle = 'الشروط والاحكام'
      this.content = this.response.terms
    } else if (this.$route.params.slug == 'about') {
      this.breadcrumb[0].title = 'من نحن'
      this.pageTitle = 'من نحن'
      this.content = this.response.about
    }
  },
}
</script>

<style lang="scss" scoped>
.static_pages_wrapper {
  min-height: 500px;
  padding-block: 70px;
  position: relative;
}
</style>
