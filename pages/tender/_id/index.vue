<template>
  <div class="tender_details_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>

      <div class="details_wrapper">
        <div class="header_wrapper">
          <h4 class="title">
            {{ item.title }}
            <span>
              {{ $moment(item.created_at).startOf('day').fromNow() }}
            </span>
          </h4>
          <div class="options_wrapper">
            <div class="item">
              <a href="javascript:;">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#share"></use>
                </svg>
              </a>
              <a href="javascript:;" @click="toggleFav">
                <span v-if="item.is_favorite != true">
                  <svg class="icon">
                    <use xlink:href="~/static/sprite.svg#favourite"></use>
                  </svg>
                  <span>اضافة الي المفضلة</span>
                </span>
                <span v-if="item.is_favorite == true">
                  <svg class="icon">
                    <use
                      xlink:href="~/static/sprite.svg#favourite-filled"
                    ></use>
                  </svg>
                  <span> حذف من المفضلة</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- end::header_wrapper -->

        <div class="body_wrapper">
          <div class="line">
            <div class="title">اسم صاحب الصفقة :</div>
            <div class="value">{{ item.user_name }}</div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">اسم الشركة :</div>
            <div class="value">{{ item.company_name }}</div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">تخصص المناقصة :</div>
            <div class="value">
              <span v-for="(category, idx) in item.categories" :key="idx">
                {{ category.name }},
              </span>
            </div>
          </div>
          <!-- end::line -->
          <div class="line w-100 mb-5">
            <div class="title">التفاصيل</div>
            <div class="value">
              {{ item.desc }}
            </div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">قيمة كراسة الشروط :</div>
            <div class="value colored rev_font">
              {{
                item.tender_specifications_value != null
                  ? item.tender_specifications_value
                  : 'غير محدد'
              }}
            </div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">قيمة التأمين :</div>
            <div class="value colored rev_font">
              {{
                item.insurance_value != null ? item.insurance_value : 'غير محدد'
              }}
            </div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">تاريخ الانتهاء :</div>
            <div class="value colored rev_font">
              {{ item.expiry_date }}
            </div>
          </div>
          <!-- end::line -->
          <div class="line mt-5 w-100">
            <div class="title">صور المناقصة :</div>
            <div class="flex_wrapper images">
              <img
                :src="img.media"
                alt="image"
                v-for="(img, idx) in item.tender_images"
                :key="idx + 100"
              />
            </div>
          </div>
          <!-- end::line -->
        </div>
        <!-- end::body_wrapper -->

        <div class="footer_wrapper">
          <button type="button" class="btn btn-default" v-b-modal.apply_modal>
            تقديم عرض
          </button>
        </div>
        <!-- end::footer_wrapper -->
      </div>
      <!-- end::details_wrapper -->
    </div>

    <!-- start:: apply_modal -->
    <b-modal id="apply_modal" size="lg" hide-footer title="تقديم العرض">
      <div class="modal_wrapper">
        <div class="form_wrapper">
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <b-form-group>
                  <b-input-group>
                    <b-form-textarea
                      type="text"
                      rows="6"
                      v-model="form.desc"
                      :class="{ invalid: errors[0] }"
                      placeholder="يرجى ادخال ملاحظة"
                    ></b-form-textarea>
                  </b-input-group>
                  <div class="uploads_wrapper">
                    <div class="item">
                      <input
                        type="file"
                        id="images"
                        @change="handleFileUpload($event, 'images')"
                        multiple
                      />
                      <label for="images">
                        <svg class="icon">
                          <use xlink:href="~/static/sprite.svg#image"></use>
                        </svg>
                        <span>اضافة صور</span>
                      </label>
                    </div>
                    <!-- end::item -->
                    <div class="item">
                      <input
                        type="file"
                        id="files"
                        @change="handleFileUpload($event, 'files')"
                        multiple
                      />
                      <label for="files" class="attahcment">
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
              <!-- end::form-group -->

              <b-form-group>
                <div class="files_preview_wrapper">
                  <div class="wrapper" v-if="images.length > 0">
                    <label class="control-label"> الصور </label>
                    <div class="item" v-for="(file, idx) in images" :key="idx">
                      <a :href="file.media" target="_blank">
                        <img :src="file.media" alt="preivew" />
                      </a>
                      <span
                        class="close"
                        @click="deleteMedia(file.id, idx, 'images')"
                      >
                        x
                      </span>
                    </div>
                    <!-- end::item -->
                  </div>
                  <!-- end::wrapper -->
                  <div class="wrapper" v-if="files.length > 0">
                    <label class="control-label"> الملفات </label>
                    <div
                      class="item file"
                      v-for="(file, idx) in files"
                      :key="idx"
                    >
                      <a :href="file.media" target="_blank">
                        <img src="~/static/document-file.svg" alt="preivew" />
                        <span class="text"> {{ file.name }} </span>
                      </a>
                      <span
                        class="close"
                        @click="deleteMedia(file.id, idx, 'files')"
                      >
                        x
                      </span>
                    </div>
                    <!-- end::item -->
                  </div>
                  <!-- end::wrapper -->
                </div>
                <!-- end::files_preview_wrapper -->
              </b-form-group>

              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-default"
                  :disabled="disabled"
                >
                  <b-spinner variant="light" small v-if="disabled"></b-spinner>
                  <span>تقديم عرض</span>
                </button>
              </div>
              <!-- end::form-group -->
            </b-form>
            <!-- end::form -->
          </ValidationObserver>
        </div>
        <!-- end::form_wrapper -->
      </div>
    </b-modal>
    <!-- end:: apply_modal -->
  </div>
</template>

<script src="~/pages/tender/_id/-script.js"></script>

<style lang="scss" scoped>
@import '~/assets/css/pages/detailsPage.scss';
</style>
