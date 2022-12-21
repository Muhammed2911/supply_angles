<template>
  <section class="login_main_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>تسجيل الدخول</h2>
      </div>
      <!-- end::title_box -->

      <div class="form_wrapper">
        <client-only>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group>
                  <label class="control-label" :class="{ invalid: errors[0] }">
                    البريد الالكتروني او رقم الجوال
                    <span class="star">*</span>
                  </label>
                  <b-input-group>
                    <b-form-input
                      type="text"
                      v-model="form.username"
                      :class="{ invalid: errors[0] }"
                      placeholder="يرجى ادخال البريد الالكتروني او رقم الجوال"
                    ></b-form-input>
                  </b-input-group>
                  <span v-if="errors[0]" class="validation-error">
                    {{ errors[0] }}
                  </span>
                </b-form-group>
              </ValidationProvider>
              <!-- end::item -->

              <ValidationProvider rules="required|min:8" v-slot="{ errors }">
                <b-form-group>
                  <label class="control-label" :class="{ invalid: errors[0] }">
                    كلمة المرور
                    <span class="star">*</span>
                  </label>
                  <b-input-group>
                    <b-form-input
                      type="password"
                      v-model="form.password"
                      :class="{ invalid: errors[0] }"
                      placeholder="يرجى ادخال كلمة المرور"
                    ></b-form-input>
                  </b-input-group>
                  <span v-if="errors[0]" class="validation-error">
                    {{ errors[0] }}
                  </span>
                </b-form-group>
              </ValidationProvider>
              <!-- end::item -->

              <b-form-group>
                <div class="inline_row">
                  <div class="item checkbox">
                    <input type="checkbox" v-model="remember" id="remember" />
                    <label for="remember">تذكر كلمة المرور</label>
                  </div>
                  <div class="item">
                    <nuxt-link :to="{ name: '' }"> نسيت كلمة المرور </nuxt-link>
                  </div>
                </div>
              </b-form-group>
              <!-- end::item -->

              <b-form-group>
                <button type="submit" class="btn btn-default">
                  تسجيل دخول
                </button>
              </b-form-group>
              <!-- end::item -->

              <b-form-group>
                <p class="register">
                  ليس لديك حساب ؟
                  <nuxt-link :to="{ name: '' }">انشاء عضوية</nuxt-link>
                </p>
              </b-form-group>
              <!-- end::item -->
            </b-form>
          </ValidationObserver>
          <!-- end::ValidationObserver -->
        </client-only>
      </div>
    </div>
  </section>
</template>

<script src="~/pages/auth/login/-script.js"></script>

<style lang="scss">
@import '~/pages/auth/-style.scss';
</style>
