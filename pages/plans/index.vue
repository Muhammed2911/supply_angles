<template>
  <section class="plans_main_wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3" v-for="(item, idx) in response" :key="idx">
          <div class="card_wrapper">
            <div>
              <h3 class="title">{{ item.title }}</h3>
              <p class="duration">
                {{ `لمدة ${item.duration_by_month} أشهر` }}
              </p>
              <p class="desc">{{ item.desc }}</p>
              <p class="price">
                <span>{{ item.price }}</span> <span>ج.م</span>
              </p>
              <p class="note">{{ item.note }}</p>
            </div>

            <div class="buttons_wrapper">
              <button
                type="button"
                class="btn btn-default"
                @click="subscribePlan(item.id)"
                :disabled="disabled"
              >
                اشترك الان
              </button>
              <button
                type="button"
                class="btn btn-default"
                @click="subscribePlan(3)"
                :disabled="disabled"
              >
                اشتراك تجريبي
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end::row -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlansPage',
  async asyncData(context) {
    const response = await context.$axios.$get('/packages')

    return { response: response.data }
  },
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    async subscribePlan(id) {
      this.disabled = true
      await this.$axios
        .post(`/subscription`, { package_id: id })
        .then((res) => {
          this.TriggerNotify('success', 'تم الأشتراك في الباقة بنجاح !')
          this.$router.replace('/')
        })
        .catch((err) => {
          this.TriggerNotify('error', err.message)
          this.disabled = false
        })
      this.disabled = false
    },
  },
}
</script>

<style lang="scss" scoped>
.plans_main_wrapper {
  padding-block: 70px;
  position: relative;
  .card_wrapper {
    height: 600px;
    border: 1.95px solid $base-color;
    border-radius: 5px;
    padding-block: 35px 20px;
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 12px;
    }
    .duration {
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 25px;
    }
    .desc {
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 25px;
    }
    .price {
      text-align: center;
      font-weight: 700;
      margin-bottom: 12px;
      span {
        &:first-child {
          font-size: 40px;
          font-family: 'Moxntserrat', sans-serif;
        }
      }
    }
    .note {
      text-align: center;
      font-weight: 600;
      font-size: 15px;
    }
    .buttons_wrapper {
      .btn {
        display: block;
        width: 100%;
        &:first-child {
          background-color: $base-color;
          border-radius: 5px;
          color: #fff;
          margin-bottom: 10px;
        }
        &:last-child {
          background-color: transparent;
          color: $base-color;
          border: 1px solid $base-color;
          &:hover {
            color: #fff !important;
          }
        }
      }
    }
  }
}
</style>
