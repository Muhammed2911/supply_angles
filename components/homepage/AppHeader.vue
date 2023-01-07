<template>
  <div class="app_header">
    <div class="container-fluid">
      <h1 class="main_title">افضل مكان للمزايدات و المناقصات</h1>
      <p class="desc">
        يمكنك الحصول علي افضل الصفقات سواء تريد تقديم الخدمه او تريد عرض طلبك
      </p>
      <client-only>
        <p class="subscribe" v-if="!token">اشترك معنا الان</p>
      </client-only>
      <client-only>
        <nuxt-link to="" class="btn btn-default signup_btn" v-if="!token">
          تسجيل عضوية جديدة
        </nuxt-link>
      </client-only>
      <client-only>
        <div class="buttons" v-if="!token">
          <span>لديك حساب بالفعل؟</span>
          <nuxt-link :to="{ name: 'auth-login' }" class="btn btn-default">
            تسجيل الدخول
          </nuxt-link>
        </div>
      </client-only>
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
