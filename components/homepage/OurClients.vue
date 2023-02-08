<template>
  <div class="clients_wrapper">
    <div class="container-fluid">
      <div class="title_box">
        <h2>عملائنا</h2>
      </div>
      <!-- end::title_box -->

      <div class="slider_wrapper">
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div class="img_wrapper" v-for="(item, idx) in items" :key="idx">
              <img :src="item.avatar" alt="client" />
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
// importing slick slider
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'OurClients',
  props: ['items'],
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: [
        {
          dots: true,
          focusOnSelect: true,
          infinite: false,
          autoplay: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          touchThreshold: 8,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.clients_wrapper {
  padding-block: 60px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 240px);
    height: 1px;
    background-color: #ddd;
  }
  .title_box {
    h2 {
      text-align: center;
    }
  }
  .slider_wrapper {
    .img_wrapper {
      border: 1px solid #eee;
      border-radius: 5px;
      width: 95% !important;
      margin-inline: auto;
      img {
        width: 70%;
        height: 100px;
        margin-inline: auto;
      }
    }
  }
}
</style>
