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
            <div class="title">اسم الشركة :</div>
            <div class="value">{{ item.company_name }}</div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">تخصص الصفقة :</div>
            <div class="value">
              <span v-for="(category, idx) in item.categories" :key="idx">
                {{ category.name }},
              </span>
            </div>
          </div>
          <!-- end::line -->
          <div class="line">
            <div class="title">رقم الهاتف للتواصل :</div>
            <div class="value">
              {{ item.phone }}
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
          <div class="line mt-5 w-100">
            <div class="title">صور الصفقة :</div>
            <div class="flex_wrapper images">
              <img
                :src="img.media"
                alt="image"
                v-for="(img, idx) in item.expiration_images"
                :key="idx + 100"
              />
            </div>
          </div>
          <!-- end::line -->
        </div>
        <!-- end::body_wrapper -->
      </div>
      <!-- end::details_wrapper -->
    </div>
  </div>
</template>

<script src="~/pages/expirations/_id/-script.js"></script>

<style lang="scss" scoped>
@import '~/assets/css/pages/detailsPage.scss';
</style>
