<template>
  <main class="home_wrapper">
    <AppHeader></AppHeader>
    <!-- end::AppHeader -->
    <TenderSection :tenders="tenders"></TenderSection>
    <CategoriesSection :items="homedata.categories"></CategoriesSection>
    <ServicesSection :items="homedata.our_services"></ServicesSection>
    <OurClients :items="homedata.our_clients"></OurClients>
  </main>
</template>

<script>
//importing components
import AppHeader from '~/components/homepage/AppHeader.vue'
import TenderSection from '~/components/homepage/TenderSection.vue'
import CategoriesSection from '~/components/homepage/CategoriesSection.vue'
import ServicesSection from '~/components/homepage/ServicesSection.vue'
import OurClients from '~/components/homepage/OurClients.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    TenderSection,
    CategoriesSection,
    ServicesSection,
    OurClients,
  },
  async asyncData(context) {
    const homedata = await context.$axios.$get('/home').catch((err) => {})
    const tenders = await context.$axios.$get('/tenders').catch((err) => {})
    return { homedata: homedata.data, tenders: tenders.data }
  },
}
</script>
