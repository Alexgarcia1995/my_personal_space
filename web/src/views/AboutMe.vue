<template>
  <div class="container m-auto px-8">
    <div class="flex flex-col-reverse items-center min-h-[500px] lg:flex-row lg:justify-between">
      <div class="py-8 lg:max-w-[75%] text-white text-xl">
        <p class="font-bold text-center typing-text text-3xl pb-4 lg:text-5xl lg:leading-normal lg:text-left">Hello there!</p>
        <p>{{ $t("about.header.1st-paragraph") }}</p>
        <p>{{ $t("about.header.2nd-paragraph") }}</p>
        <p>{{ $t("about.header.3rd-paragraph") }}</p>
        <p>{{ $t("about.header.4th-paragraph") }}</p>
      </div>
      <div><img :src="getImage('my-photo.jpg')" class="rounded-full w-60 m-auto lg:mr-20"></div>
    </div>

    <div class="text-white text-xl">
      <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">{{ $t("about.experience.title") }}</h2>
      <div>
        <p class="font-bold text-2xl leading-normal lg:text-4xl">{{ $t("about.experience.onestic.title") }}</p>
        <p class="pt-4 pb-8">✷ {{ $t("about.experience.onestic.text") }}</p>
        <p class="font-bold text-2xl leading-normal lg:text-4xl">{{ $t("about.experience.panaderia.title") }}</p>
        <p class="pt-4 pb-8">✷ {{ $t("about.experience.panaderia.text") }}</p>
      </div>
    </div>
    
    <div class="text-white text-xl">
      <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">{{ $t("about.studies.title") }}</h2>
      <div class="flex flex-col xl:flex-row">
        <div class="flex-1 h-auto relative pb-4 xl:pb-0 xl:pr-4">
          <div class="absolute top-4 p-4 z-10 lg:top-[40%]">
            {{ $t("about.studies.ies-vermellar.text") }}
          </div>
          <div class="xl:h-full" style="filter: brightness(0.5);"><img class="xl:h-full" :src="getImage('ies_vermellar.jpg')"></div>
        </div>
        <div class="flex-1 relative">
          <div class="absolute top-4 p-4 z-10 lg:top-[40%]">
            <p>{{ $t("about.studies.ies-estacio.title") }}</p>
            <ul>
              <li>{{ $t("about.studies.ies-estacio.text-1") }}</li>
              <li>{{ $t("about.studies.ies-estacio.text-2") }}</li>
            </ul>
          </div>
          <div style="filter: brightness(0.5);"><img :src="getImage('ies_estacio.jpg')"></div>
        </div>
      </div>
    </div>

    <div class="text-white text-xl py-8">
      <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">Contact Me!</h2>
      <div class="flex flex-col">
        <div class="m-auto">{{ $t("about.contact.text") }}</div>
        <div class="m-auto max-w-[100px] pt-4">
          <a href="mailto:alejandrogarsanz@gmail.com"><img :src="getImage('email.png')"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  methods: {
      getImage(imagePath) {
        return new URL(`../assets/images/about/${imagePath}`, import.meta.url).href
      }
  },
};
</script>