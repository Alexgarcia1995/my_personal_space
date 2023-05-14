<template>
    <Carousel v-bind="settings" :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image) in images" :key="image.id">
        <img :src="getImage(image.url)" />
      </Slide>
  
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
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
        images: [{id: 1,url:'image1.png'}, {id: 2,url:'image1.png'}, {id: 3,url:'image1.png'}],
        settings: {
            itemsToShow: 1,
            snapAlign: 'center'
        }
    }),
    methods: {
        getImage(imagePath) {
            return new URL(`../assets/images/carousel/${imagePath}`, import.meta.url).href
        }
    }
  })
  </script>

