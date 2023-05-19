<template>
    <div>
      <header class="header">
        <div class="header__content flex relative flex-col md:flex-row">
          <div class="header__text lg:absolute lg:top-1/2 lg:left-44 lg:pl-2">
            <strong class="text-2xl lg:text-3xl">Web Development</strong>
            <p class="text-lg lg:text-xl">Making internet even bigger</p>
          </div>
          <div class="header__image w-full">
            <img class="w-full" :src="getBackgroundImage()">
          </div>
        </div>
      </header>
      <div class="container m-auto">
        <Homecarousel />
      </div>
    </div>
</template>
<script>
  import Homecarousel from '../components/HomeCarousel.vue'
  export default {
  components: {
    Homecarousel
  },
  methods: {
    getBackgroundImage() {
      return new URL(`../assets/images/home/background-header.jpg`, import.meta.url).href
    }
  },
}
</script>
  