<template>
  <section class="reset_password">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>اعادة تعيين كلمة المرور</h2>
      </div>
      <!-- end::title_box -->

      <div class="form_wrapper">
        <client-only>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm">
              <ValidationProvider
                vid="confirm_password"
                :rules="{
                  required: true,
                  min: 8,
                }"
                v-slot="{ errors }"
              >
                <b-form-group>
                  <label class="control-label" :class="{ invalid: errors[0] }">
                    كلمة المرور الجديدة
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

              <ValidationProvider
                rules="required|confirmed:confirm_password"
                v-slot="{ errors }"
              >
                <b-form-group>
                  <label class="control-label" :class="{ invalid: errors[0] }">
                    تأكيد كلمة المرور
                  </label>
                  <b-input-group>
                    <b-form-input
                      type="password"
                      v-model="form.password_confirmation"
                      :class="{ invalid: errors[0] }"
                      placeholder="يرجى تأكيد كلمة المرور"
                    ></b-form-input>
                  </b-input-group>
                  <span v-if="errors[0]" class="validation-error">
                    {{ errors[0] }}
                  </span>
                </b-form-group>
              </ValidationProvider>
              <!-- end:: item -->

              <b-form-group>
                <button
                  type="submit"
                  class="btn btn-default"
                  :disabled="disabled"
                >
                  <b-spinner v-if="disabled" variant="light" small></b-spinner>
                  <span> تأكيد</span>
                </button>
              </b-form-group>
              <!-- end::item -->
            </b-form>
          </ValidationObserver>
        </client-only>
      </div>
      <!-- end::form_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/auth/forget/reset/-script.js"></script>

<style lang="scss" scoped>
.reset_password {
  padding-block: 70px;
  position: relative;
  .title_box {
    h2 {
      text-align: center;
    }
  }
  .form_wrapper {
    width: 50%;
    margin-inline: auto;
  }
  .btn-default {
    margin-top: 25px;
    width: 50%;
    display: block;
    margin-inline: auto;
    background-color: $base-color;
    color: #fff;
    border-radius: 25px;
    padding: 15px;
  }
}
</style>
