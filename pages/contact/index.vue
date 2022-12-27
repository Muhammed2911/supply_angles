<template>
  <section class="contact_us_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="row">
        <div class="col-lg-6">
          <div class="contact_info">
            <div class="title_box">
              <h2>تواصل معنا</h2>
              <p class="desc">
                في حالة الشكاوى و المقترحات يرجى الاتصال بنا علي الأرقام في
                الأسفل او التواصل عبر الايميل
              </p>
            </div>
            <!-- end::title_box -->
            <div class="line">
              <svg class="icon">
                <use xlink:href="~/static/sprite.svg#location"></use>
              </svg>
              <span> العنوان الرئيسي للشركة , القاهرة </span>
            </div>
            <!-- end::line -->
            <div class="line">
              <svg class="icon">
                <use xlink:href="~/static/sprite.svg#phone"></use>
              </svg>
              <span>
                {{ contact.whatsapp }}
              </span>
            </div>
            <!-- end::line -->

            <div class="flex_wrapper">
              <a :href="contact.social.facebook" target="_blank">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#facebook"></use>
                </svg>
              </a>
              <!-- end::item -->
              <a :href="contact.social.twitter" target="_blank">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#twitter"></use>
                </svg>
              </a>
              <!-- end::item -->
              <a :href="contact.social.instagram" target="_blank">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#instagram"></use>
                </svg>
              </a>
              <!-- end::item -->
              <a :href="contact.social.linkedin" target="_blank">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#linkedin"></use>
                </svg>
              </a>
              <!-- end::item -->
              <a :href="contact.social.youtube" target="_blank">
                <svg class="icon">
                  <use xlink:href="~/static/sprite.svg#youtube"></use>
                </svg>
              </a>
              <!-- end::item -->
            </div>
          </div>
        </div>
        <!-- end::col -->

        <div class="col-lg-6">
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
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.first_name"
                              :class="{ invalid: errors[0] }"
                              placeholder="الأسم الأول"
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
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.last_name"
                              :class="{ invalid: errors[0] }"
                              placeholder="الأسم الأخير"
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
                      <ValidationProvider
                        rules="required|email"
                        v-slot="{ errors }"
                      >
                        <b-form-group>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.email"
                              :class="{ invalid: errors[0] }"
                              placeholder="البريد الألكتروني"
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
                      <ValidationProvider
                        rules="required|numeric|min:9"
                        v-slot="{ errors }"
                      >
                        <b-form-group>
                          <b-input-group>
                            <b-form-input
                              type="text"
                              v-model="form.phone"
                              :class="{ invalid: errors[0] }"
                              placeholder="رقم الهاتف"
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
                          <b-input-group>
                            <b-form-textarea
                              rows="4"
                              v-model="form.content"
                              :class="{ invalid: errors[0] }"
                              placeholder="الرسالة"
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
                    <div class="col-lg-12">
                      <b-form-group class="mb-0">
                        <button
                          type="submit"
                          class="btn btn-default"
                          :disabled="disabled"
                        >
                          <b-spinner
                            variant="light"
                            small
                            v-if="disabled"
                          ></b-spinner>
                          <span>ارسال</span>
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
        </div>
      </div>
      <!-- end::row -->
    </div>
  </section>
</template>

<script>
// importing components
import Breadcrumb from '~/components/shared/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactPage',
  components: { Breadcrumb },
  data() {
    return {
      breadcrumb: [{ name: `contact`, title: 'تواصل معنا' }],
      disabled: false,
      form: {
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        content: null,
      },
    }
  },
  computed: {
    ...mapGetters({
      contact: ['homepage/get_footer'],
    }),
  },
  methods: {
    async submitForm() {
      await this.$refs.form.validate().then((success) => {
        if (success) {
          this.handleReq()
        }
      })
    },
    async handleReq() {
      this.disabled = true
      await this.$axios
        .post('/contact-us', this.form)
        .then((res) => {
          this.TriggerNotify('success', 'تم ارسال رسالتك بنجاح !')
          this.form = {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            content: null,
          }

          this.$nextTick(() => {
            this.$refs.form.reset()
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
      this.disabled = false
    },
  },
}
</script>

<style lang="scss" scoped>
.contact_us_wrapper {
  padding-block: 70px;
  position: relative;
  .contact_info {
    .title_box {
      .desc {
        color: #7a7a7a;
        margin-top: 25px;
      }
    }
    .line {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .icon {
        width: 25px;
        height: 25px;
        margin-inline-end: 15px;
      }
    }
  }
  .flex_wrapper {
    display: flex;
    align-items: center;
    margin-top: 35px;
    a {
      margin-inline-end: 15px;
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }
  .form_wrapper {
    @media (max-width: 991px) {
      margin-top: 25px;
    }
    background-color: #dee7f3;
    border-radius: 20px;
    padding: 25px;
    .form-control {
      border-radius: 5px;
    }
    .btn-default {
      display: block;
      width: 100%;
      padding-block: 15px;
      background-color: $base-color;
      border-radius: 25px;
      color: #fff;
    }
  }
}
</style>
