<template>
  <main class="home_wrapper">
    <AppHeader></AppHeader>
    <!-- end::AppHeader -->
    <TenderSection :tenders="homedata.tenders"></TenderSection>
  </main>
</template>

<script>
//importing components
import AppHeader from '~/components/homepage/AppHeader.vue'
import TenderSection from '~/components/homepage/TenderSection.vue'
//importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: { AppHeader, TenderSection },
  async asyncData(context) {
    await context.$axios
      .$get('/home')
      .then((res) => {
        context.store.commit('homepage/SET_HOMEPAGE_DATA', res.data)
      })
      .catch((err) => {})
  },
  computed: {
    ...mapGetters({
      homedata: ['homepage/get_homepage_data'],
    }),
  },
}
</script>
