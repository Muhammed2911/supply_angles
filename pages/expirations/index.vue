<template>
  <section class="tenders_list_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box flex">
        <h2>تصفيات وهوالك دورية</h2>
        <div class="buttons">
          <nuxt-link
            :to="{
              name: 'expirations-insert',
              query: { type: 'liquidation' },
            }"
            class="btn btn-default"
          >
            اضف تصفيات
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'expirations-insert', query: { type: 'expiration' } }"
            class="btn btn-default"
          >
            اضف هوالك دورية
          </nuxt-link>
        </div>
      </div>
      <!-- end::title_box -->

      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="expirations_wrapper">
        <div class="card_wrapper" v-for="(item, idx) in expirations" :key="idx">
          <div class="row justify-content-between">
            <div class="col-lg-2">
              <div class="img_wrapper" @click="handleRoute(item.id)">
                <img
                  v-if="item.expiration_images.length > 0"
                  :src="item.expiration_images[0].media"
                  alt="tender_img"
                />
              </div>
            </div>
            <!-- end::col -->
            <div class="col-lg-6">
              <div class="info_wrapper">
                <h4 class="title" @click="handleRoute(item.id)">
                  {{ item.title }}
                  <span>
                    {{ $moment(item.created_at).startOf().fromNow() }}
                  </span>
                </h4>
                <div class="flex_wrapper">
                  <div class="item">
                    <p class="desc">{{ item.desc }}</p>
                    <div class="buttons_wrapper">
                      <a href="javascript:;" @click="handleSharing(item)">
                        <svg class="icon">
                          <use xlink:href="~/static/sprite.svg#share"></use>
                        </svg>
                      </a>

                      <a href="javascript:;" @click="toggleFav(item.id, idx)">
                        <span v-if="item.is_favorite != true">
                          <svg class="icon">
                            <use
                              xlink:href="~/static/sprite.svg#favourite"
                            ></use>
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
                  <!-- end::item -->
                </div>
                <!-- end::flex_wrapper -->
              </div>
            </div>
            <!-- end::col -->
            <div class="col-lg-3">
              <div class="options_wrapper">
                <div class="item"></div>
                <!-- end::item -->
                <div class="item">
                  <nuxt-link to="" class="btn btn-default">تقديم عرض</nuxt-link>
                </div>
                <!-- end::item -->
              </div>
            </div>
            <!-- end::col -->
          </div>
          <!-- end::row -->
        </div>
        <b-pagination
          v-model="expirationsPaging"
          :total-rows="expirationsMeta.total"
          :last-page="expirationsMeta.last_page"
          :per-page="expirationsMeta.per_page"
          aria-controls="expirations"
        ></b-pagination>
      </div>
      <!-- end::tenders_wrapper -->

      <!-- start:: share_modal -->
      <b-modal id="share_modal" hide-footer hide-header>
        <div class="modal_wrapper">
          <div class="title_box">
            <h4 class="">قم بالمشاركة الأن</h4>
            <h6 class="">
              يمكنك مشاركة مع الاخرين عبر وسائل التواصل المتاحة بالأسفل
            </h6>
          </div>
          <div class="share_buttons">
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :style="{ backgroundColor: network.color }"
              :url="sharing.url"
              :title="selected_item.title"
              :description="selected_item.desc"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitterUser="sharing.twitterUser"
            >
              <b-icon :icon="network.icon" variant="light"></b-icon>
            </ShareNetwork>
          </div>
        </div>
      </b-modal>
      <!-- end:: share_modal -->
    </div>
  </section>
</template>

<script src="~/pages/expirations/-script.js"></script>

<style lang="scss" scoped>
.tenders_list_wrapper {
  padding-block: 60px;
}
</style>

<style lang="scss">
#share_modal {
  .modal-content {
    border-radius: 15px;
    border: none;
  }
  .modal_wrapper {
    padding: 25px 20px;
    .title_box {
      text-align: center;
      margin-bottom: 25px;
      h4 {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
      }
      h6 {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #808080;
      }
    }
    .share_buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-inline-end: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
