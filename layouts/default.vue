<template>
  <main>
    <AppNavbar></AppNavbar>
    <nuxt></nuxt>
    <AppFooter></AppFooter>
    <!-- start:: whatsapp -->
    <client-only>
      <SocialChat icon :attendants="attendants">
        <p slot="header">انقر فوق أحد الحاضرين أدناه للدردشة على واتس اب.</p>
        <template v-slot:button>
          <img
            src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
            alt="icon whatsapp"
            aria-hidden="true"
          />
        </template>
      </SocialChat>
    </client-only>
    <!-- end:: whatsapp -->
  </main>
</template>

<script>
// importing components
import AppNavbar from '~/components/shared/AppNavbar.vue'
import AppFooter from '~/components/shared/AppFooter.vue'

// importing tools
import Vue from 'vue'
import Mixsing from '~/mixins/mixins'
Vue.mixin(Mixsing)

export default {
  name: 'DefaultLayout',
  middleware: 'authed',
  components: { AppNavbar, AppFooter },
  data() {
    return {
      attendants: [
        {
          app: 'whatsapp',
          label: 'خدمة العملاء',
          name: 'Supply Angles',
          number: '01000000000',
          avatar: {
            src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
            alt: 'Supply Angles avatar',
          },
        },
      ],
    }
  },
}
</script>

<style>
.vsc-popup {
  right: auto !important;
  left: 10px !important;
}
.vsc-popup-header {
  background-color: #1e805d !important;
}
.vsc-popup-button--default {
  background-color: #00e676 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
