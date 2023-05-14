<template>
  <div class="content">
    <Theheader/>
    <div class="container m-auto">
      <router-view></router-view>
    </div>
    <Thefooter/>
  </div>
</template>

<script>
import Theheader from './components/TheHeader.vue'
import Thefooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Theheader,
    Thefooter
  }
}
</script>