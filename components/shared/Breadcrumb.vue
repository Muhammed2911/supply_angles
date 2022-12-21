<template>
  <div class="breadcrumb_wrapper">
    <ul>
      <li><nuxt-link to="/"> الصفحة الرئيسية </nuxt-link></li>
      <li v-for="(link, idx) in links" :key="idx">
        <nuxt-link :to="{ name: link.name }"> {{ link.title }} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: ['links'],
}
</script>

<style lang="scss" scoped>
.breadcrumb_wrapper {
  margin-bottom: 35px;
  ul {
    display: flex;
    align-items: center;
    li {
      padding-inline-end: 20px;
      margin-inline-end: 20px;
      position: relative;
      &:last-child {
        &::after {
          display: none;
        }
        a {
          opacity: 1;
        }
      }
      &::after {
        content: '>';
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
        border-radius: 100%;
        color: #8c8c8c;
      }
      a {
        font-size: 15px;
        color: #000;
        font-weight: 500;
        opacity: 0.8;
        transition: all 0.25s;
        &:hover {
          color: $base-color;
        }
      }
    }
  }
}
</style>
