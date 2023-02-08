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
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <b-form-group>
                          <label
                            class="control-label"
                            :class="{ invalid: errors[0] }"
                          >
                            اسم المنتج
                          </label>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.product_name"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال اسم المنتج"
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
                            نوع الصفقة
                          </label>
                          <b-input-group>
                            <b-form-select
                              class="form-control"
                              :options="type_options"
                              v-model="form.agent_type"
                            ></b-form-select>
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
                      <ValidationProvider v-slot="{ errors }">
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
                              rows="6"
                              :class="{ invalid: errors[0] }"
                              placeholder="يرجى ادخال التفاصيل"
                            ></b-form-textarea>
                          </b-input-group>
                          <div class="uploads_wrapper">
                            <div class="item">
                              <input
                                type="file"
                                id="agent_images"
                                @change="
                                  handleFileUpload($event, 'agent_images')
                                "
                                multiple
                              />
                              <label for="agent_images">
                                <svg class="icon">
                                  <use
                                    xlink:href="~/static/sprite.svg#image"
                                  ></use>
                                </svg>
                                <span>اضافة صور</span>
                              </label>
                            </div>
                            <!-- end::item -->
                            <div class="item">
                              <input
                                type="file"
                                id="agent_files"
                                @change="
                                  handleFileUpload($event, 'agent_files')
                                "
                                multiple
                              />
                              <label for="agent_files" class="attahcment">
                                <svg class="icon">
                                  <use
                                    xlink:href="~/static/sprite.svg#attachment"
                                  ></use>
                                </svg>
                                <span> اضافة ملفات</span>
                              </label>
                            </div>
                            <!-- end::item -->
                          </div>
                          <!-- end::buttons_wrapper -->
                          <span v-if="errors[0]" class="validation-error">
                            {{ errors[0] }}
                          </span>
                        </b-form-group>
                      </ValidationProvider>
                      <!-- end::item -->
                    </div>
                    <!-- end::col -->

                    <div class="col-xl-12">
                      <div class="files_preview_wrapper">
                        <div class="wrapper" v-if="agent_images.length > 0">
                          <label class="control-label"> الصور </label>
                          <div
                            class="item"
                            v-for="(file, idx) in agent_images"
                            :key="idx"
                          >
                            <a :href="file.media" target="_blank">
                              <img :src="file.media" alt="preivew" />
                            </a>
                            <span
                              class="close"
                              @click="deleteMedia(file.id, idx, 'agent_images')"
                            >
                              x
                            </span>
                          </div>
                          <!-- end::item -->
                        </div>
                        <!-- end::wrapper -->
                        <div class="wrapper" v-if="agent_files.length > 0">
                          <label class="control-label"> الملفات </label>
                          <div
                            class="item file"
                            v-for="(file, idx) in agent_files"
                            :key="idx"
                          >
                            <a :href="file.media" target="_blank">
                              <img
                                src="~/static/document-file.svg"
                                alt="preivew"
                              />
                              <span class="text"> {{ file.name }} </span>
                            </a>
                            <span
                              class="close"
                              @click="deleteMedia(file.id, idx, 'agent_files')"
                            >
                              x
                            </span>
                          </div>
                          <!-- end::item -->
                        </div>
                        <!-- end::wrapper -->
                      </div>
                      <!-- end::files_preview_wrapper -->
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
                  <div class="categories_dropdown_wrapper">
                    <b-form-group label="تخصص الصفقة">
                      <b-input-group>
                        <div class="wrapper">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="ابحث عن تخصص"
                            @input="emitQuery($event.target.value)"
                          />
                          <svg class="icon">
                            <use
                              xlink:href="~/static/fontawesome/solid.svg#magnifying-glass"
                            ></use>
                          </svg>
                        </div>
                      </b-input-group>
                    </b-form-group>
                    <!-- end::form-group -->

                    <div class="categories_selected">
                      <div
                        class="item"
                        v-for="(option, idx) in form.category_ids"
                        :key="idx + 100"
                      >
                        {{ option.name }}
                        <span class="close" @click="toggleSelected(option)">
                          x
                        </span>
                      </div>
                      <!-- end::item -->
                    </div>
                    <!-- end::categories_selected -->

                    <div class="categories_list">
                      <a
                        href="javascript:;"
                        v-for="(item, idx) in categories"
                        :key="idx"
                        @click="toggleSelected(item)"
                      >
                        {{ item.name }}
                      </a>
                    </div>
                    <!-- end::categories_list -->
                  </div>
                  <!-- end::categories_dropdown_wrapper -->
                </div>
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

<script src="~/pages/agents/-form/-script.js"></script>

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
  .input-group {
    .wrapper {
      width: 100%;
      .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        width: 18px;
        height: 18px;
        fill: #919191;
        z-index: 10;
      }
      .form-control {
        height: 60px;
        background-color: #efefef;
        border: none;
        padding-inline-start: 40px;
        box-shadow: none;
        border-radius: 0;
      }
    }
  }
}
</style>
