<template>
  <footer class="app_footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="about_wrapper">
            <div class="logo_wrapper">
              <nuxt-link to="/">
                <span>SUPPLY ANGELS</span>
              </nuxt-link>
            </div>
            <!-- end::logo_wrapper -->
            <p class="desc">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
            </p>
          </div>
        </div>
        <!-- end::col -->
        <div class="col-lg-4">
          <div class="links_wrapper">
            <h4 class="main_title">اختصارات</h4>
            <ul>
              <li><nuxt-link :to="{ name: '' }"> القطاعات </nuxt-link></li>
              <li>
                <nuxt-link :to="{ name: '' }">
                  معلومات الحساب و سابقة الاعمال
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'tenders-list' }">
                  سجل المناقصات
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'favourite' }"> المفضلة </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: '' }"> الوكلاء و الموزعين </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'plans' }"> خطط الاسعار </nuxt-link>
              </li>
              <li><nuxt-link :to="{ name: '' }"> صفقاتي </nuxt-link></li>
              <li>
                <nuxt-link :to="{ name: 'contact' }"> اتصل بنا </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="{ name: 'static-slug', params: { slug: 'privacy' } }"
                >
                  سياسة الخصوصية
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="{ name: 'static-slug', params: { slug: 'terms' } }"
                >
                  الشروط والاحكام
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- end::col -->

        <div class="col-lg-4">
          <div class="contact_info">
            <h4 class="main_title">تابعنا</h4>
            <client-only>
              <div class="flex_wrapper">
                <a :href="footerData.social.facebook" target="_blank">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#facebook"></use>
                  </svg>
                </a>
                <!-- end::item -->
                <a :href="footerData.social.twitter" target="_blank">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#twitter"></use>
                  </svg>
                </a>
                <!-- end::item -->
                <a :href="footerData.social.instagram" target="_blank">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#instagram"></use>
                  </svg>
                </a>
                <!-- end::item -->
                <a :href="footerData.social.linkedin" target="_blank">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#linkedin"></use>
                  </svg>
                </a>
                <!-- end::item -->
                <a :href="footerData.social.youtube" target="_blank">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#youtube"></use>
                  </svg>
                </a>
                <!-- end::item -->
              </div>
            </client-only>
          </div>
        </div>
        <!-- end::col -->
      </div>
      <!-- end::row -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  async created() {
    await this.$axios.$get('/contacts').then((res) => {
      this.$store.commit('homepage/SET_FOOTER', res.data)
    })
  },
  computed: {
    footerData() {
      return this.$store.getters['homepage/get_footer']
    },
  },
}
</script>
