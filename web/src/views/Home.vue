<template>
    <div>
      <header class="header">
        <div class="flex flex-wrap relative flex-col lg:flex-row">
          <div class="text-center text-white p-8 lg:absolute lg:top-0 lg:left-20 lg:p-0 lg:pl-2 xl:text-left xl:top-1/3 xl:left-44 ">
            <strong class="typing-text text-2xl lg:text-5xl lg:leading-normal">{{ $t("home.header.title") }}</strong>
            <p class="text-xl lg:text-3xl xl:w-[70%] 2xl:w-auto">{{ $t("home.header.subtitle") }}</p>
          </div>
          <div class="lg:ml-auto">
            <img class="w-full lg:w-3/4 lg:ml-auto" :src="getImage('background-header.png')">
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
      <div class="bg-white pb-12">
        <Homecarousel />
      </div>
      <div class="text-white text-xl">
          <div class="w-full rotate-180">
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
          <div class="container m-auto px-8 pt-12 pb-12">
            <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">{{ $t("home.about-web.title") }}</h2>
            <p class="text-center">{{ $t("home.about-web.text") }}</p>
            <div class="flex items-center flex-wrap py-8">
              <div class="px-8 w-1/2 lg:w-1/4"><img :src="getImage('vite.svg')"></div>
              <div class="px-8 w-1/2 lg:w-1/4"><img :src="getImage('vuejs.png')"></div>
              <div class="px-8 w-1/2 lg:w-1/4"><img :src="getImage('gulp-sass.png')"></div>
              <div class="px-8 w-1/2 lg:w-1/4"><img :src="getImage('docker-white.png')"></div>
            </div>
          </div>          
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
    getImage(imagePath) {
          return new URL(`../assets/images/home/${imagePath}`, import.meta.url).href
    }
  },
}
</script>