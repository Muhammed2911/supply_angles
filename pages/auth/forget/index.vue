<template>
  <section class="forget_password">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>نسيت كلمة المرور</h2>
      </div>
      <!-- end::title_box -->

      <div class="form_wrapper">
        <client-only>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm">
              <b-form-group>
                <label class="control-label">
                  رقم الهاتف
                  <span class="star">*</span>
                </label>
                <b-input-group class="phone_input">
                  <b-form-select
                    v-model="form.phone_code"
                    :options="codes"
                  ></b-form-select>

                  <ValidationProvider
                    rules="required|numeric|min:8"
                    v-slot="{ errors }"
                    class="wrapper"
                  >
                    <b-form-input
                      type="text"
                      v-model="form.phone"
                      :class="{ invalid: errors[0] }"
                      placeholder="يرجى ادخال رقم الهاتف"
                    ></b-form-input>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </b-input-group>
              </b-form-group>
              <!-- end::item -->

              <b-form-group>
                <button
                  type="submit"
                  class="btn btn-default"
                  :disabled="disabled"
                >
                  <b-spinner v-if="disabled" variant="light" small></b-spinner>
                  <span> متابعة</span>
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

<script src="~/pages/auth/forget/-script.js"></script>

<style lang="scss" scoped>
.forget_password {
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
