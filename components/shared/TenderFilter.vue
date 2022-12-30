<template>
  <div class="filter_main_wrapper">
    <form @submit.prevent="handleForm">
      <div class="form-group">
        <div class="input-group">
          <div class="wrapper" :class="{ 'full-width': dropdowns == false }">
            <input
              type="text"
              class="form-control"
              :placeholder="placeholder"
              v-model="form.keyword"
            />
            <svg class="icon">
              <use
                xlink:href="~/static/fontawesome/solid.svg#magnifying-glass"
              ></use>
            </svg>
          </div>
          <!-- end::wrapper -->
          <div class="wrapper" :class="{ 'w-15': dropdowns == false }">
            <client-only v-if="dropdowns">
              <multiselect
                :options="categories"
                v-model="form.category"
                :placeholder="`القطاعات`"
                track-by="value"
                label="name"
                id="category"
              >
              </multiselect>
              <multiselect
                :options="countries"
                v-model="form.country"
                :placeholder="`الدولة`"
                track-by="value"
                label="name"
                id="country"
              >
              </multiselect>
            </client-only>
            <button type="submit" class="btn btn-default" :disabled="disabled">
              <b-spinner variant="ligth" v-if="disabled" small></b-spinner>
              <span>بحث</span>
            </button>
          </div>
          <!-- end::wrapper -->
        </div>
        <!-- end::input-group -->
      </div>
      <!-- end::form-group -->
    </form>
  </div>
</template>

<script>
// importing vuex tools
import { mapGetters } from 'vuex'

export default {
  name: 'TenderFilter',
  props: {
    placeholder: {
      default: 'ابحث عن صفقة جديدة',
    },
    dropdowns: {
      default: true,
    },
    disabled: {
      default: false,
    },
  },
  data() {
    return {
      form: {
        keyword: null,
        country: null,
        category: null,
      },
    }
  },
  watch: {
    'form.keyword'(current) {
      if (current == '') {
        this.form.keyword = null
      }
    },
  },
  async mounted() {
    if (this.$store.getters['localStorage/get_countries'].length == 0) {
      await this.$store.dispatch('localStorage/get_countries')
    }
    if (this.$store.getters['localStorage/get_categories'].length == 0) {
      await this.$store.dispatch('localStorage/get_categories')
    }
  },
  computed: {
    ...mapGetters({
      countries: ['localStorage/get_countries'],
      categories: ['localStorage/get_categories'],
    }),
  },
  methods: {
    handleForm() {
      this.$emit('handle-form', this.form)
    },
  },
}
</script>

<style lang="scss">
.filter_main_wrapper {
  margin-bottom: 40px;
  .form-group {
    position: relative;
    .input-group {
      position: relative;
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
      .wrapper {
        width: 50%;
        display: flex;
        align-items: center;
        &.full-width {
          width: 85%;
        }
        &.w-15 {
          width: 15%;
          .btn-default {
            width: 100%;
          }
        }
        .multiselect {
          width: calc(100% / 3);
          min-height: 60px;
          &:first-child {
            .multiselect__tags {
              border-inline-end: none;
            }
          }
          .multiselect__select {
            top: 16px;
          }
          .multiselect__tags {
            display: flex;
            align-items: center;
            min-height: 60px;
            border-radius: 0;
            border: 2px solid #648dc4;
          }
          .multiselect__placeholder {
            color: #000;
          }
        }
        .btn-default {
          width: calc(100% / 3);
          background-color: #648dc4;
          color: #fff;
          border-radius: 0;
          height: 60px;
        }
      }
    }
  }
}
</style>
