<template>
    <div>
      <header class="header">
        <div class="header__content flex flex-wrap relative flex-col lg:flex-row">
          <div class="text-center text-white py-8 lg:absolute lg:text-left lg:top-1/3 lg:left-44 lg:pl-2">
            <strong class="typing-text text-2xl lg:text-5xl lg:leading-normal">{{ $t("home.header.title") }}</strong>
            <p class="text-xl lg:text-3xl">{{ $t("home.header.subtitle") }}</p>
          </div>
          <div class="header__image lg:ml-auto">
            <img class="w-full lg:w-3/4 lg:ml-auto" :src="getBackgroundImage()">
          </div>
          <div class="w-full">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </header>
      <div class="bg-white">
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
      return new URL(`../assets/images/home/background-header.png`, import.meta.url).href
    }
  },
}
</script>