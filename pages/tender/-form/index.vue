<template>
  <section class="tender_form">
    <div class="form_wrapper">
      <client-only>
        <ValidationObserver ref="form">
          <b-form @submit.prevent="submitForm">
            <div class="row align-items-stretch">
              <div class="col-lg-6">
                <div class="form_part h-100">
                  <div class="row">
                    <div class="col-lg-12">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            عنوان الصفقة
                          </label>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.title"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال عنوان الصفقة"
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

                    <div class="col-lg-12">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            التفاصيل
                          </label>
                          <b-input-group>
                            <b-form-textarea
                              type="text"
                              v-model="form.desc"
                              rows="4"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال التفاصيل"
                            ></b-form-textarea>
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
                            تاريخ الانتهاء
                          </label>
                          <b-input-group>
                            <b-form-input
                              type="date"
                              v-model="form.expiry_date"
                              :class="{ invalid: errors[0] }"
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
                      <ValidationProvider
                        rules="required|numeric|min:1"
                        v-slot="{ errors }"
                      >
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            قيمة كراسة الشروط
                          </label>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.tender_specifications_value"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال قيمة كراسة الشروط"
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
                        rules="required|numeric|min:1"
                        v-slot="{ errors }"
                      >
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            قيمة التأمين
                          </label>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.insurance_value"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال قيمة التأمين"
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

                    <div class="col-lg-12">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            تخصص الصفقة
                          </label>
                          <b-input-group>
                            <multiselect
                              :options="categories"
                              v-model="category_ids"
                              :placeholder="`تخصص الصفقة`"
                              track-by="value"
                              label="name"
                              id="country"
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
                  </div>
                  <!-- end::row -->
                </div>
                <!-- end::form_part -->
              </div>
              <!-- end::col -->

              <div class="col-lg-6">
                <div class="form_part h-100 with_border">
                  <b-form-group class="file_input">
                    <label class="control-label"> كراسة الشروط </label>
                    <b-input-group>
                      <input
                        type="file"
                        id="tender_specifications_file"
                        @change="
                          handleFileUpload($event, 'tender_specifications_file')
                        "
                      />
                      <label for="tender_specifications_file">
                        <span>اضف كراسة الشروط</span>
                        <span>اختيار الملف</span>
                      </label>
                    </b-input-group>

                    <div
                      class="preview_wrapper"
                      v-if="tender_specifications_file"
                    >
                      <div>
                        <a
                          class="name"
                          :href="tender_specifications_file.media"
                          target="_blank"
                          v-b-tooltip.hover
                          :title="
                            tender_specifications_file.media.split('/').pop()
                          "
                        >
                          {{
                            tender_specifications_file.media.split('/').pop()
                          }}
                        </a>
                        <span
                          class="close"
                          @click="
                            deleteMedia(
                              tender_specifications_file.media.id,
                              0,
                              'tender_specifications_file'
                            )
                          "
                        >
                          <b-icon icon="trash"></b-icon>
                        </span>
                      </div>
                    </div>
                    <!-- end::preview_wrapper -->
                  </b-form-group>
                  <!-- end::item -->

                  <b-form-group class="file_input">
                    <label class="control-label"> صور المناقصة </label>
                    <b-input-group>
                      <input
                        type="file"
                        id="tender_images"
                        multiple
                        @change="handleFileUpload($event, 'tender_images')"
                      />
                      <label for="tender_images">
                        <span>اضف صور المناقصة</span>
                        <span>اختيار الملف</span>
                      </label>
                    </b-input-group>
                    <div
                      class="preview_wrapper"
                      v-if="tender_images.length > 0"
                    >
                      <div v-for="(file, idx) in tender_images" :key="idx">
                        <a
                          class="name"
                          :href="file.media"
                          target="_blank"
                          v-b-tooltip.hover
                          :title="file.media.split('/').pop()"
                        >
                          {{ file.media.split('/').pop() }}
                        </a>
                        <span
                          class="close"
                          @click="deleteMedia(file.id, idx, 'tender_images')"
                        >
                          <b-icon icon="trash"></b-icon>
                        </span>
                      </div>
                    </div>
                    <!-- end::preview_wrapper -->
                  </b-form-group>
                  <!-- end::item -->

                  <b-form-group class="file_input">
                    <label class="control-label"> ملفات اخرى </label>
                    <b-input-group>
                      <input
                        type="file"
                        multiple
                        id="tender_other_files"
                        @change="handleFileUpload($event, 'tender_other_files')"
                      />
                      <label for="tender_other_files">
                        <span>اضف ملفات اخرى</span>
                        <span>اختيار الملف</span>
                      </label>
                    </b-input-group>
                    <div
                      class="preview_wrapper"
                      v-if="tender_other_files.length > 0"
                    >
                      <div v-for="(file, idx) in tender_other_files" :key="idx">
                        <a
                          class="name"
                          :href="file.media"
                          target="_blank"
                          v-b-tooltip.hover
                          :title="file.media.split('/').pop()"
                        >
                          {{ file.media.split('/').pop() }}
                        </a>
                        <span
                          class="close"
                          @click="
                            deleteMedia(file.id, idx, 'tender_other_files')
                          "
                        >
                          <b-icon icon="trash"></b-icon>
                        </span>
                      </div>
                    </div>
                    <!-- end::preview_wrapper -->
                  </b-form-group>
                  <!-- end::item -->
                </div>
                <!-- end::form_part -->
              </div>
              <!-- end::col -->

              <div class="col-xl-12">
                <div class="submit_wrapper">
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
                    <span v-if="item == null">اضافة</span>
                    <span v-else>حفظ</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- end::row -->
          </b-form>
        </ValidationObserver>
      </client-only>
    </div>
    <!-- end::form_wrapper -->
  </section>
</template>

<script src="~/pages/tender/-form/script.js"></script>

<style lang="scss">
.tender_form {
  .multiselect__select {
    top: 15px !important;
  }
  .multiselect__tags {
    min-height: 60px !important;
    border-radius: 25px !important;
    display: flex;
    align-items: center;
  }
  .submit_wrapper {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    .btn {
      width: 50%;
      background-color: $base-color;
      color: #fff;
      border-radius: 25px;
      padding-block: 15px;
    }
  }
  .form_part {
    position: relative;
    &.with_border {
      padding-inline-start: 35px;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: #ddd;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
