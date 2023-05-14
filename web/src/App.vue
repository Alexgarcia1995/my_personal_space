<template>
  <div class="content">
    <Theheader/>
    <Homecarousel/>
    <div class="container m-auto">
      <router-view></router-view>
    </div>
    <Thefooter/>
  </div>
</template>

<script>
import Theheader from './components/TheHeader.vue'
import Thefooter from './components/TheFooter.vue'
import Homecarousel from './components/HomeCarousel.vue'

export default {
  name: 'App',
  components: {
    Theheader,
    Thefooter,
    Homecarousel
  }
}
</script>