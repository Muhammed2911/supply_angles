<template>
  <div class="card_wrapper">
    <div class="row justify-content-between">
      <div class="col-lg-2">
        <div class="img_wrapper">
          <img :src="item.tender_images[0].media" alt="tender_img" />
        </div>
      </div>
      <!-- end::col -->
      <div class="col-lg-6">
        <div class="info_wrapper">
          <h4 class="title">
            {{ item.title }}
            <span>
              {{ $moment(item.created_at).startOf('day').fromNow() }}
            </span>
          </h4>
          <div class="flex_wrapper">
            <div class="item">
              <p class="desc">{{ item.desc }}</p>
            </div>
            <!-- end::item -->
            <div class="item">
              <div class="line">
                <span>المستند :</span>
                <span class="rev_font">
                  {{
                    item.tender_specifications_value != null
                      ? item.tender_specifications_value
                      : 'غير محدد'
                  }}
                </span>
              </div>
              <!-- end::line -->

              <div class="line">
                <span>التأمين :</span>
                <span class="rev_font">
                  {{
                    item.insurance_value != null
                      ? item.insurance_value
                      : 'غير محدد'
                  }}
                </span>
              </div>
              <!-- end::line -->

              <div class="line">
                <span>تاريخ الانتهاء :</span>
                <span class="rev_font">
                  {{ item.expiry_date }}
                </span>
              </div>
              <!-- end::line -->
            </div>
            <!-- end::item -->
          </div>
          <!-- end::flex_wrapper -->
        </div>
      </div>
      <!-- end::col -->
      <div class="col-lg-3">
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
                  <use xlink:href="~/static/sprite.svg#favourite-filled"></use>
                </svg>
                <span>مضاف الي المفضلة</span>
              </span>
            </a>
          </div>
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
</template>

<script>
export default {
  name: 'TenderCard',
  props: ['item'],
  methods: {
    async toggleFav() {
      await this.$axios
        .post(`/tenders/${this.item.id}/favorite`)
        .then((res) => {
          if (this.item.is_favorite == true) {
            this.TriggerNotify(
              'success',
              'تم ازالة المناقصة من المفضلة بنجاح !'
            )
          }
          if (this.item.is_favorite == false) {
            this.TriggerNotify(
              'success',
              'تم اضافة المناقصة من المفضلة بنجاح !'
            )
          }
          this.$store.commit('homepage/UPDATED_TENDER_FAV', {
            id: this.item.id,
            status: res.data.data.is_favorite,
          })
        })
        .catch((err) => {
          const req_error = {
            data: err.response,
            type: 'catch',
          }
          this.error_handler(req_error)
          this.TriggerNotify('error', this.notify.message)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.card_wrapper {
  padding: 15px 20px;
  border: 2px solid $base-color;
  border-radius: 10px;
  margin-bottom: 20px;
  .img_wrapper {
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
  }
  .info_wrapper {
    .title {
      font-size: 28px;
      font-weight: 600;
      color: #000;
      margin-bottom: 15px;
      span {
        font-size: 18px;
        color: #808080;
        font-weight: 400;
      }
    }
    .flex_wrapper {
      display: flex;
      justify-content: space-between;
      .item {
        width: calc(50% - 20px);
        .desc {
          font-size: 16px;
          color: #808080;
          line-height: 1.5;
        }
        .line {
          margin-bottom: 10px;
          span {
            &:first-child {
              font-weight: 500;
              margin-inline-end: 10px;
            }
            &:last-child {
              color: $base-color;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .options_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .item {
      display: flex;
      justify-content: flex-end;
      a {
        margin-inline-end: 20px;
        .icon {
          width: 26px;
          height: 26px;
          fill: $base-color;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          color: $base-color;
        }
      }
      .btn-default {
        background-color: $base-color;
        color: #fff;
        font-size: 15px;
        border-radius: 25px;
        font-weight: 500;
      }
    }
  }
}
</style>
