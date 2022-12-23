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
              <li><nuxt-link :to="{ name: '' }"> سجل المناقصات </nuxt-link></li>
              <li><nuxt-link :to="{ name: '' }"> المفضلة </nuxt-link></li>
              <li>
                <nuxt-link :to="{ name: '' }"> الوكلاء و الموزعين </nuxt-link>
              </li>
              <li><nuxt-link :to="{ name: '' }"> خطط الاسعار </nuxt-link></li>
              <li><nuxt-link :to="{ name: '' }"> صفقاتي </nuxt-link></li>
              <li><nuxt-link :to="{ name: '' }"> اتصل بنا </nuxt-link></li>
            </ul>
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
}
</script>
