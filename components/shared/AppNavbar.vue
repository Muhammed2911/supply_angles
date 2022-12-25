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
              <nuxt-link :to="{ name: 'favourite' }">المفضلة</nuxt-link>
              <nuxt-link :to="{ name: '' }">صفقاتي</nuxt-link>
              <nuxt-link :to="{ name: '' }">خطط الاسعار</nuxt-link>
              <nuxt-link :to="{ name: '' }">تواصل معنا</nuxt-link>
              <nuxt-link :to="{ name: '' }">لماذا نحن</nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-2">
            <client-only>
              <div class="options_wrapper" v-if="token != null">
                <a href="javascript:;">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#notification"></use>
                  </svg>
                </a>
                <!-- end::link -->
                <a href="javascript:;">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#user"></use>
                  </svg>
                </a>
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
              <nuxt-link to="">تفصيات وهوالك دورية</nuxt-link>
              <nuxt-link to="">المفضلة</nuxt-link>
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
}
</script>
