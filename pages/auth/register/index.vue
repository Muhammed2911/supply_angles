<template>
  <section class="register_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>انشاء عضوية</h2>
      </div>
      <!-- end::title_box -->

      <div class="form_wrapper">
        <client-only>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|min:3"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        الأسم
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.name"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال الأسم"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
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
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        البريد الألكتروني
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.email"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال البريد الالكتروني"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|min:3"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        العنوان
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.address"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال العنوان"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        الدولة
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <multiselect
                          :options="countries"
                          v-model="form.country_id"
                          :placeholder="`اختيار الدولة`"
                          track-by="value"
                          label="name"
                          id="countries"
                        >
                        </multiselect>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        المدينة
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <multiselect
                          :options="cities"
                          v-model="form.city_id"
                          :placeholder="`اختيار المدينة`"
                          track-by="value"
                          label="name"
                          id="cities"
                        >
                        </multiselect>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        التخصص
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <multiselect
                          :options="categories"
                          v-model="form.categories"
                          :placeholder="`اختيار التخصص`"
                          track-by="value"
                          label="name"
                          id="categories"
                          multiple
                        >
                        </multiselect>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        النوع
                        <span class="star">*</span>
                      </label>
                      <b-input-group>
                        <multiselect
                          :options="gender"
                          v-model="form.gender"
                          :placeholder="`اختيار النوع`"
                          track-by="value"
                          label="name"
                          id="gender"
                        >
                        </multiselect>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="min:3" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        اسم الشركة
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.company_name"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال اسم الشركة"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider rules="min:8|numeric" v-slot="{ errors }">
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        رقم الواتس
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.whats"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال رقم الواتس"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|numeric"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        البطاقة الضريبية
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.tax_card_num"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال البطاقة الضريبية"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|numeric"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        السجل التجاري
                      </label>
                      <b-input-group>
                        <b-form-input
                          type="text"
                          v-model="form.commercial_register_num"
                          :class="{ invalid: errors[0] }"
                          placeholder="يرجى ادخال السجل التجاري"
                        ></b-form-input>
                      </b-input-group>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </b-form-group>
                  </ValidationProvider>
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    vid="confirm_password"
                    :rules="{
                      required: true,
                      min: 8,
                    }"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
                        كلمة المرور
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
                </div>
                <!-- end::col -->

                <div class="col-lg-6">
                  <ValidationProvider
                    rules="required|confirmed:confirm_password"
                    v-slot="{ errors }"
                  >
                    <b-form-group>
                      <label
                        class="control-label"
                        :class="{ invalid: errors[0] }"
                      >
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
                  <!-- end::item -->
                </div>
                <!-- end::col -->

                <div class="col-xl-12">
                  <b-form-group>
                    <button
                      type="submit"
                      class="btn btn-default"
                      :disabled="disabled"
                    >
                      <b-spinner
                        v-if="disabled"
                        variant="light"
                        small
                      ></b-spinner>
                      <span> انشاء عضوية</span>
                    </button>
                  </b-form-group>
                  <!-- end::item -->
                </div>
                <!-- end::col -->
              </div>
              <!-- end::row -->
            </b-form>
          </ValidationObserver>
        </client-only>
      </div>
      <!-- end::form_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/auth/register/-script.js"></script>

<style lang="scss" scoped>
.register_wrapper {
  padding-block: 70px;
  position: relative;
  .form_wrapper {
    width: 70%;
    margin-inline-end: auto;
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
}
</style>
