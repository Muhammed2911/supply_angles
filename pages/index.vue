<template>
  <main class="home_wrapper">
    <AppHeader></AppHeader>
    <!-- end::AppHeader -->
    <TenderSection :tenders="tenders"></TenderSection>
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
    // get home data
    await context.$axios
      .$get('/home')
      .then((res) => {
        context.store.commit('homepage/SET_HOMEPAGE_DATA', res.data)
      })
      .catch((err) => {})

    // get tender data
    await context.$axios
      .$get('/tenders')
      .then((res) => {
        context.store.commit('homepage/SET_TENDERS', res.data)
      })
      .catch((err) => {})
  },
  async mounted() {
    await this.$store.dispatch('localStorage/get_countries')
    await this.$store.dispatch('localStorage/get_categories')
  },
  computed: {
    ...mapGetters({
      homedata: ['homepage/get_homepage_data'],
      tenders: ['homepage/get_tenders'],
    }),
  },
}
</script>
