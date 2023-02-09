<template>
  <section class="own_tenders_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>صفقاتي</h2>
      </div>
      <!-- end::title_box -->

      <b-tabs>
        <b-tab title="مناقصاتي" active>
          <div class="tenders_wrapper">
            <TenderCard
              v-for="(item, idx) in tenders"
              :key="idx"
              :item="item"
            ></TenderCard>
            <b-pagination
              v-model="tenderPaging"
              :total-rows="tendersMeta.total"
              :last-page="tendersMeta.last_page"
              :per-page="tendersMeta.per_page"
              aria-controls="tenders"
            ></b-pagination>
          </div>
          <!-- end::tenders_wrapper -->
        </b-tab>

        <b-tab title="التصفيات و الهوالك الدورية">
          <div class="expirations_wrapper">
            <div
              class="card_wrapper"
              v-for="item in expirations"
              :key="item.id"
            >
              <div class="row justify-content-between">
                <div class="col-lg-2">
                  <div class="img_wrapper" @click="handleRoute(item.id)">
                    <img
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

                          <a
                            href="javascript:;"
                            @click="toggleFav(item.id, idx)"
                          >
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
                      <nuxt-link to="" class="btn btn-default"
                        >تقديم عرض</nuxt-link
                      >
                    </div>
                    <!-- end::item -->
                  </div>
                </div>
                <!-- end::col -->
              </div>
              <!-- end::row -->
            </div>
          </div>
          <!-- end::expirations_wrapper -->
          <b-pagination
            v-model="expirationsPaging"
            :total-rows="expirationsMeta.total"
            :last-page="expirationsMeta.last_page"
            :per-page="expirationsMeta.per_page"
            aria-controls="expirations"
          ></b-pagination>
        </b-tab>

        <b-tab title="وكالات و توزيع">
          <div class="agents_wrapper">
            <div class="row">
              <div class="col-lg-6" v-for="item in agents" :key="item.id">
                <AgentsCard :item="item"></AgentsCard>
              </div>
              <!-- end::col -->
            </div>
            <!-- end::row -->
          </div>
          <!-- end::tenders_wrapper -->
        </b-tab>
        <b-tab title="وظائف">
          <div class="tenders_wrapper"></div>
          <!-- end::tenders_wrapper -->
        </b-tab>
      </b-tabs>
      <!-- end::tabs_wrapper  -->
    </div>
  </section>
</template>

<script src="~/pages/my-tenders/-script.js"></script>

<style lang="scss" scoped>
.own_tenders_wrapper {
  padding-block: 70px;
  position: relative;
}
</style>
