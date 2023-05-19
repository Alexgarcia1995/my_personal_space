<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(sliderContent) in sliderContents" :key="sliderContent.id">
          <div class="slider__item">
              <div class="slider__image">
                  <img :src="getImage(sliderContent.url)" />
              </div>
            <div class="slider__text">
              <h2>{{ $t(translationPrefix + sliderContent.translation + ".title") }}</h2>
              <p>{{ $t(translationPrefix + sliderContent.translation + ".text") }}</p>
            </div>
          </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default defineComponent({
    name: 'Homecarousel',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
    data: () => ({
        translationPrefix: "home.carousel.",
        sliderContents: [
            {id: 1, translation: "html5", url:'html5-css3.jpg'}, 
            {id: 2, translation: "js", url:'javascript.jpg'}, 
            {id: 3, translation: "vuejs", url:'vue.jpg'}
        ],
    }),
    methods: {
        getImage(imagePath) {
          return new URL(`../assets/images/home/${imagePath}`, import.meta.url).href
        }
    },
  });
  </script>
  <style scoped> 
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  </style>