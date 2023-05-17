<template>
  <div class="grid grid-cols-2">
    <Carousel class="home-carousel" v-bind="settings" :wrap-around="true">
      <Slide v-for="(image) in images" :key="image.id">
        <div class="flex flex-1 h-full carousel__item">
          <img :src="getImage(image.url)" />
        </div>
      </Slide>
    </Carousel>
    <Carousel class="home-carousel" v-bind="settings" :wrap-around="true">
      <Slide v-for="(text) in texts" :key="text">
        <div class="carousel__item">
          <h2>{{ $t(translationPrefix + text + ".title") }}</h2>
          <p>{{ $t(translationPrefix + text + ".text") }}</p>
        </div>
      </Slide>
    </Carousel>
  </div>
    
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  export default defineComponent({
    name: 'Homecarousel',
    components: {
      Pagination,
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
        translationPrefix: "home.carousel.",
        images: [{id: 1,url:'html5-css3.jpg'}, {id: 2,url:'javascript.jpg'}, {id: 3,url:'vue.jpg'}],
        texts: ["html5","js","vuejs","docker"],
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
            mouseDrag: false,
            touchDrag: false,
            autoplay: "2000"
        }
    }),
    methods: {
        getImage(imagePath) {
          return new URL(`../assets/images/home/${imagePath}`, import.meta.url).href
        }
    }
  })
  </script>

