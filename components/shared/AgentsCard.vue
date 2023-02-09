<template>
  <div>
    <div class="card_wrapper">
      <h5 class="main_title">{{ item.title }}</h5>
      <p class="date">
        {{ $moment(item.created_at).startOf('day').fromNow() }}
      </p>
      <p class="desc">
        {{ item.desc }}
      </p>
      <div class="item mb-4">
        <a href="javascript:;" @click="handleSharing(item)">
          <svg class="icon">
            <use xlink:href="~/static/sprite.svg#share"></use>
          </svg>
        </a>
        <a href="javascript:;" @click="toggleFav(item.id)" v-if="is_loggedin">
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
            <span> حذف من المفضلة</span>
          </span>
        </a>
      </div>
      <!-- end::item -->
      <div class="item">
        <nuxt-link
          :to="{ name: 'agents-id', params: { id: item.id } }"
          class="btn btn-default"
        >
          تقديم عرض
        </nuxt-link>
      </div>
      <!-- end::item -->
    </div>
    <!-- end::card_wrapper -->

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
</template>

<script>
export default {
  name: 'AgentsCard',
  props: ['item'],
  data() {
    return {
      selected_item: {
        id: null,
        title: null,
        desc: null,
      },
      sharing: {
        url: '',
        quote: '',
        hashtags: '',
        twitterUser: 'zemna',
      },
      networks: [
        { network: 'facebook', icon: 'facebook', color: '#1877f2' },
        { network: 'twitter', icon: 'twitter', color: '#1da1f2' },
        { network: 'telegram', icon: 'telegram', color: '#0088cc' },
        { network: 'whatsapp', icon: 'whatsapp', color: '#25d366' },
      ],
    }
  },
  computed: {
    is_loggedin() {
      return this.$cookies.get('userToken')
    },
  },
  methods: {
    handleSharing(item) {
      this.selected_item = item
      this.sharing.url = `https://mysupplyangel.com${this.$route.fullPath}/${item.id}`
      this.$bvModal.show('share_modal')
    },
    async handleFilter(form) {
      await this.$axios
        .$get('/agents', {
          params: {
            keyword: form.keyword,
            category_id: form.category != null ? form.category.id : null,
            country_id: form.country != null ? form.country.id : null,
            type: this.queryType != null ? this.queryType : null,
          },
        })
        .then((res) => {
          this.agents = res.data
          this.agentsMeta = res.meta
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
    async toggleFav(id) {
      await this.$axios
        .post(`/agent/${id}/favorite`)
        .then((res) => {
          if (res.data.data.is_favorite == false) {
            this.TriggerNotify('success', 'تم الأزالة من المفضلة بنجاح !')
          }
          if (res.data.data.is_favorite == true) {
            this.TriggerNotify('success', 'تم الأضافة الي المفضلة بنجاح !')
          }
          this.item.is_favorite = res.data.data.is_favorite
        })
        .catch((err) => {
          this.TriggerNotify('error', err.response.data.message)
        })
    },
    handleRoute(id) {
      this.$router.push({ name: 'expirations-id', params: { id: id } })
    },
  },
}
</script>

<style lang="scss" scoped>
.card_wrapper {
  padding: 25px;
  border: 2px solid $base-color;
  border-radius: 10px;
  margin-bottom: 25px;
  .main_title {
    font-size: 22px;
    font-weight: 600;
  }
  .date {
    color: #808080;
    font-size: 15px;
  }
  .desc {
    color: #808080;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .item {
    display: flex;
    align-items: center;
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
