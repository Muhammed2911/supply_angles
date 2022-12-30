<template>
  <header>
    <nav class="app_navbar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo_wrapper">
              <nuxt-link to="/">
                <span>Logo</span>
              </nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-8">
            <div class="top_menu">
              <nuxt-link :to="{ name: 'index' }">الرئيسية</nuxt-link>
              <nuxt-link :to="{ name: 'categories' }">القطاعات</nuxt-link>
              <nuxt-link :to="{ name: 'my-tenders' }">صفقاتي</nuxt-link>
              <nuxt-link :to="{ name: 'plans' }">خطط الاسعار</nuxt-link>
              <nuxt-link :to="{ name: 'contact' }">تواصل معنا</nuxt-link>
              <nuxt-link
                :to="{ name: 'static-slug', params: { slug: 'about' } }"
              >
                من نحن
              </nuxt-link>
              <nuxt-link
                :to="{ name: 'static-slug', params: { slug: 'why-us' } }"
              >
                لماذا نحن
              </nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-2">
            <client-only>
              <div class="options_wrapper" v-if="token != null">
                <b-dropdown>
                  <template #button-content>
                    <svg class="icon">
                      <use xlink:href="~/static/sprite.svg#notification"></use>
                    </svg>
                  </template>
                </b-dropdown>
                <!-- end::link -->

                <b-dropdown>
                  <template #button-content>
                    <svg class="icon">
                      <use xlink:href="~/static/sprite.svg#user"></use>
                    </svg>
                  </template>
                  <b-dropdown-item href="#">
                    معلومات الحساب و سابقة الاعمال
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item @click="logoutHandler" class="text-danger">
                    تسجيل الخروج
                  </b-dropdown-item>
                </b-dropdown>
                <!-- end::link -->
              </div>
            </client-only>
          </div>
          <!-- end::col -->
        </div>
        <!-- end::row -->
      </div>
      <!-- end::container_fluid -->
    </nav>
    <!-- end::app_navbar -->

    <div class="sub_menu_wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2"></div>
          <!-- end::col -->
          <div class="col-lg-8">
            <div class="menu">
              <nuxt-link :to="{ name: 'tenders-list' }">
                سجل المناقصات
              </nuxt-link>
              <nuxt-link :to="{ name: 'expirations' }">
                تفصيات وهوالك دورية
              </nuxt-link>
              <nuxt-link :to="{ name: 'favourite' }">المفضلة</nuxt-link>
              <nuxt-link to="">الوكلاء والموزعين</nuxt-link>
              <nuxt-link to="">وظائف مشتريات ومخازن</nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-2">
            <div class="options_wrapper">
              <nuxt-link :to="{ name: 'tender' }">
                إضافة مناقصة او طلب
              </nuxt-link>
            </div>
          </div>
          <!-- end::col -->
        </div>
        <!-- end::row -->
      </div>
    </div>
    <!-- end::sub_menu_wrapper -->
  </header>
</template>

<script>
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters({
      token: ['localStorage/userToken'],
      userData: ['localStorage/userData'],
    }),
  },
  methods: {
    async logoutHandler() {
      await this.$axios
        .post('/logout')
        .then((res) => {
          this.$store.commit('localStorage/RESET_USER')
          if (this.$route.path != '/') {
            this.$router.replace('/')
          }
          this.TriggerNotify('success', 'لقد تم تسجيل الخروج من الحساب بنجاح !')
        })
        .catch((err) => {
          const req_error = {
            data: err.response,
            type: 'catch',
          }
          this.error_handler(req_error)
          this.TriggerNotify('error', this.notify.message)
        })
    },
  },
}
</script>
