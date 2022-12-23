<template>
  <main class="home_wrapper">
    <AppHeader></AppHeader>
    <!-- end::AppHeader -->
    <TenderSection :tenders="homedata.tenders"></TenderSection>
    <CategoriesSection :items="homedata.categories"></CategoriesSection>
    <ServicesSection :items="homedata.our_services"></ServicesSection>
  </main>
</template>

<script>
//importing components
import AppHeader from '~/components/homepage/AppHeader.vue'
import TenderSection from '~/components/homepage/TenderSection.vue'
import CategoriesSection from '~/components/homepage/CategoriesSection.vue'
import ServicesSection from '~/components/homepage/ServicesSection.vue'
//importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: { AppHeader, TenderSection, CategoriesSection, ServicesSection },
  async asyncData(context) {
    const homedata = await context.$axios.$get('/home').catch((err) => {})
    return { homedata: homedata.data }
  },
  // computed: {
  //   ...mapGetters({
  //     homedata: ['homepage/get_homepage_data'],
  //   }),
  // },
}
</script>
