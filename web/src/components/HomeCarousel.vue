<template>
  <div>
    <h2 class="font-bold text-center text-3xl py-8 lg:text-5xl lg:leading-normal">{{ $t("home.carousel.experience") }}</h2>
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
          <div class="slider__image">
            <img :src="getImage(sliderContent.url)" />
          </div>
          <div class="slider__text p-8">
            <h2 class="uppercase text-center bold">{{ $t(translationPrefix + sliderContent.translation + ".title") }}</h2>
            <p class="text-center">{{ $t(translationPrefix + sliderContent.translation + ".text") }}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
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
            {id: 0, translation: "magento", url:'magento.png'}, 
            {id: 1, translation: "html5", url:'html5.png'},
            {id: 2, translation: "gulp-sass", url:'gulp-sass.png'}, 
            {id: 3, translation: "js", url:'javascript.png'},
            {id: 4, translation: "vuejs", url:'vuejs.png'},
            {id: 5, translation: "docker", url:'docker.png'}, 
            {id: 6, translation: "reactjs", url:'react.png'}, 
            {id: 7, translation: "tailwind", url:'tailwind.png'},
            {id: 8, translation: "mysql", url:'mysql.png'},
        ],
    }),
    methods: {
        getImage(imagePath) {
          return new URL(`../assets/images/home/${imagePath}`, import.meta.url).href
        }
    },
  });
  </script>