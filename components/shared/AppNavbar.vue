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
              <nuxt-link to="">الرئيسية</nuxt-link>
              <nuxt-link to="">القطاعات</nuxt-link>
              <nuxt-link to="">المفضلة</nuxt-link>
              <nuxt-link to="">صفقاتي</nuxt-link>
              <nuxt-link to="">خطط الاسعار</nuxt-link>
              <nuxt-link to="">تواصل معنا</nuxt-link>
              <nuxt-link to="">لماذا نحن</nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-2">
            <div class="options_wrapper">
              <a href="javascript:;">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#notification"></use>
                </svg>
              </a>
              <!-- end::link -->

              <nuxt-link :to="{ name: 'auth-login' }">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#user"></use>
                </svg>
              </nuxt-link>
              <!-- end::link -->
            </div>
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
              <nuxt-link to="">سجل المناقصات</nuxt-link>
              <nuxt-link to="">تفصيات وهوالك دورية</nuxt-link>
              <nuxt-link to="">المفضلة</nuxt-link>
              <nuxt-link to="">الوكلاء والموزعين</nuxt-link>
              <nuxt-link to="">وظائف مشتريات ومخازن</nuxt-link>
            </div>
          </div>
          <!-- end::col -->
          <div class="col-lg-2">
            <div class="options_wrapper">
              <nuxt-link to=""> إضافة مناقصة او طلب </nuxt-link>
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
