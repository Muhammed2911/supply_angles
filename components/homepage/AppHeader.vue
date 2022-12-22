<template>
  <div class="app_header">
    <div class="container-fluid">
      <h1 class="main_title">افضل مكان للمزايدات و المناقصات</h1>
      <p class="desc">
        يمكنك الحصول علي افضل الصفقات سواء تريد تقديم الخدمه او تريد عرض طلبك
      </p>
      <p class="subscribe">اشترك معنا الان</p>
      <nuxt-link to="" class="btn btn-default signup_btn">
        تسجيل عضوية جديدة
      </nuxt-link>
      <div class="buttons">
        <span>لديك حساب بالفعل؟</span>
        <nuxt-link :to="{ name: 'auth-login' }" class="btn btn-default">
          تسجيل الدخول
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({
      token: ['localStorage/userToken'],
    }),
  },
}
</script>
