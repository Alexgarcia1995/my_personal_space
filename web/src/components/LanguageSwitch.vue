<script setup lang="ts"/>

<template>
  <div>
    <div class="dropdown inline-block relative">
      <button class="flex items-center gap-x-1" v-on:click="toggleMenu()" v-on:clickout="showMenu = false">
        <img id="button-language" class="w-8 bg-white" :src="getLanguageFlag('es_flag.png')" />
        <svg class="fill-current w-6" :class="showMenu ? 'rotate-180' : 'rotate-0'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
      </button>
      <ul class="dropdown-menu absolute text-gray-700 pt-1 w-8" :class="showMenu ? 'block' : 'hidden'">
        <li class="language-switch cursor-pointer bg-white" v-for="(lang, i) in langs" :key="`Lang${i}`" v-on:click="switchLanguage(lang.code,lang.flag)">
          <img class="w-full h-full mb-1" :src="getLanguageFlag(lang.flag)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import 'clickout-event';
export default defineComponent({
  name: "LanguageSwitch",
  methods: {
    switchLanguage(code,imagePath) {
      this.$i18n.locale = code;
      let buttonFlag = document.getElementById('button-language');
      if (buttonFlag) {
        buttonFlag.setAttribute('src', this.getLanguageFlag(imagePath));
        this.showMenu = false;
      }
    },
    getLanguageFlag(imagePath) {
      return new URL(`../assets/images/flags/${imagePath}`, import.meta.url).href
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
  data() {
    return {
      showMenu: false,
      langs: [
        { code: "es", flag: "es_flag.png" },
        { code: "en", flag: "uk_flag.png" },
      ],
    };
  },
});
</script>