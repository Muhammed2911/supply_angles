<template>
  <div class="filter_main_wrapper">
    <form @submit.prevent="">
      <div class="form-group">
        <div class="input-group">
          <div class="wrapper">
            <input
              type="text"
              class="form-control"
              placeholder="ابحث عن صفقة جديدة"
            />
            <svg class="icon">
              <use
                xlink:href="~/static/fontawesome/solid.svg#magnifying-glass"
              ></use>
            </svg>
          </div>
          <!-- end::wrapper -->
          <div class="wrapper">
            <multiselect
              :options="categories"
              :placeholder="`القطاعات`"
              track-by="value"
              label="name"
            >
            </multiselect>
            <multiselect
              :options="country"
              :placeholder="`الدولة`"
              track-by="value"
              label="name"
            >
            </multiselect>
            <button type="submit" class="btn btn-default">بحث</button>
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
export default {
  name: 'TenderFilter',
  data() {
    return {
      categories: [
        { name: 'Category 1', value: 1 },
        { name: 'Category 2', value: 2 },
        { name: 'Category 3', value: 3 },
        { name: 'Category 4', value: 4 },
        { name: 'Category 5', value: 5 },
      ],
      country: [
        { name: 'Country 1', value: 1 },
        { name: 'Country 2', value: 2 },
        { name: 'Country 3', value: 3 },
        { name: 'Country 4', value: 4 },
        { name: 'Country 5', value: 5 },
      ],
    }
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
