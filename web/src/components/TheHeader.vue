<template>
  <div class="container m-auto">
    <nav class="px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
      <div>
        <router-link to="/" class="text-gray-100 uppercase">Alejandro Garcia Sanz</router-link>
      </div>
      <div class="flex items-center justify-between">
        <div @click="toggleNav" class="flex md:hidden">
          <button class="text-gray-100 w-10 h-10 relative focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out" :class="{'rotate-45': showMenu,' -translate-y-1.5': !showMenu }"></span>
                  <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out" :class="{'opacity-0': showMenu } "></span>
                  <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out" :class="{'-rotate-45': showMenu, ' translate-y-1.5': !showMenu}"></span>
              </div>
          </button>
        </div>
      </div>

      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <div>
          <router-link to="/" class="text-gray-100 hover:text-indigo-400">Home</router-link>
        </div>
        <div>
          <router-link to="/carousel" class="text-gray-100 hover:text-indigo-400">About me</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
