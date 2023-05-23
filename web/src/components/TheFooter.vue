<template>
<!--Footer container-->
<footer class="bg-neutral-900 text-center text-white">
  <div class="container px-6 pt-6 m-auto">
    <div class="mb-6 flex justify-center">
      <div class="flex flex-row gap-x-4">
        <a href="https://www.linkedin.com/in/alejandro-garcia-sanz-10103b144/"> 
          <img :src="getImage('linkedin.png')" />
        </a>
        <a href="https://github.com/Alexgarcia1995/"> 
          <img :src="getImage('github.png')" />
        </a>
      </div>
    </div>
  </div>

  <div class="p-4 text-center bg-black">
    © {{ currentYear }} Alejandro Garcia Sanz
  </div>
  <BackToTop />
</footer>
</template>

<script>
import BackToTop from './BackToTop.vue';

export default {
  components: {
    BackToTop
  },
  methods: {
    getImage(imagePath) {
      return new URL(`../assets/images/footer/${imagePath}`, import.meta.url).href
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>