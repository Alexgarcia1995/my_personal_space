<template>
  <div class="content">
    <div class="nav">
      <Theheader/>
    </div>
    <div>
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