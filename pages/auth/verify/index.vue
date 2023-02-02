<template>
  <section class="verify_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box">
        <h2>التحقق من رقم الهاتف</h2>
      </div>
      <!-- end::title_box -->

      <div class="form_wrapper">
        <client-only>
          <ValidationObserver ref="form">
            <b-form @submit.prevent="submitForm" autocomplete="off">
              <b-form-group>
                <div class="input_flex">
                  <input
                    v-for="(key, idx) in 4"
                    :key="idx"
                    ref="codeRef"
                    type="number"
                    maxlength="1"
                    class="input-code form-control"
                    placeholder="-"
                    :value="activationCells[idx]"
                    :name="`code`"
                    @input="inputActivationCode($event.target.value, idx)"
                    @keyup="checkForKeys($event.keyCode, idx)"
                  />
                </div>
              </b-form-group>
              <!-- end::item -->

              <b-form-group>
                <button
                  type="submit"
                  class="btn btn-default"
                  :disabled="disabled"
                >
                  <b-spinner v-if="disabled" variant="light" small></b-spinner>
                  <span> تحقق</span>
                </button>
              </b-form-group>
              <!-- end::item -->
            </b-form>
          </ValidationObserver>
        </client-only>
      </div>
      <!-- end::form_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/auth/verify/-script.js"></script>

<style lang="scss" scoped>
.verify_wrapper {
  padding-block: 70px;
  position: relative;
  .title_box {
    h2 {
      text-align: center;
    }
  }
}
.form_wrapper {
  width: 50%;
  margin-inline: auto;
  .input_flex {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    input {
      width: calc(100% / 4 - 10px);
      text-align: center;
      border-radius: 15px;
      height: 80px;
      font-size: 18px;
      color: #000;
      font-weight: 600;
      box-shadow: none !important;
      border: 1px solid #ddd;
      font-family: 'Montserrat', sans-serif;
      transition: all 0.25s;
      &:focus {
        border-color: $base-color;
      }
      &:focus::placeholder {
        opacity: 0;
      }
      &::placeholder {
        font-size: 20px;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      & {
        -moz-appearance: textfield;
      }
    }
  }
  .btn-default {
    margin-top: 25px;
    width: 50%;
    display: block;
    margin-inline: auto;
    background-color: $base-color;
    color: #fff;
    border-radius: 25px;
    padding: 15px;
  }
}
</style>
