<template>
  <div class="container m-auto">
    <div class="flex flex-col-reverse items-center min-h-[500px] lg:flex-row lg:justify-between">
      <div class="p-8 lg:max-w-[75%] text-white text-xl">
        <p class="font-bold text-center typing-text text-3xl lg:text-5xl lg:leading-normal lg:text-left">Hello there!</p>
        <p>{{ $t("about.header.1st-paragraph") }}</p>
        <p>{{ $t("about.header.2nd-paragraph") }}</p>
        <p>{{ $t("about.header.3rd-paragraph") }}</p>
        <p>{{ $t("about.header.4th-paragraph") }}</p>
      </div>
      <div><img :src="getImage('my-photo.jpg')" class="rounded-full w-60 m-auto lg:mr-20"></div>
    </div>

    <div class="text-white text-xl">
      <h2 class="font-bold text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">Profesional Experience</h2>
      <div>
        <p class="font-bold text-2xl leading-normal lg:text-4xl">Programador web Onestic | Alcoi </p>
        <p class="pt-4 pb-8">✷ Diseño, desarrollo y mantenimiento de sitios web especializados en el e-commerce con Magento 1 y Magento 2.</p>
        <p class="font-bold text-2xl leading-normal lg:text-4xl">Dependiente de panadería o pastelería Autonomo | Olleria </p>
        <p class="pt-4 pb-8">✷ Comercialización y venta de productos de panadería y pastelería en el negocio familiar.</p>
      </div>
    </div>
    
    <div class="text-white text-xl">
      <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">Estudios</h2>
      <div class="flex flex-col lg:flex-row">
        <div class="flex-1 h-auto relative pb-4 lg:pb-0 lg:pr-4">
          <div class="absolute top-4 p-4 z-10 lg:top-[40%]">
            IES Vermellar: Educacion secundaria Obligatoria (ESO)
          </div>
          <div class="h-full" style="filter: brightness(0.5);"><img class="h-full" :src="getImage('ies_vermellar.jpg')"></div>
        </div>
        <div class="flex-1 h-full relative">
          <div class="absolute top-4 p-4 z-10 lg:top-[40%]">
            <p>IES L'Estacio</p>
            <ul>
              <li>Grado medio de sistema microinformaticos y redes (SMX)</li>
              <li>Grado superior en desarrollo de Aplicaciones Web</li>
            </ul>
          </div>
          <div style="filter: brightness(0.5);"><img :src="getImage('ies_estacio.jpg')"></div>
        </div>
      </div>
    </div>

    <div class="text-white text-xl py-8">
      <h2 class="font-bold text-center text-3xl pb-4 lg:text-5xl lg:leading-normal lg:pb-8">Contact Me!</h2>
      <div class="flex flex-col">
        <div class="m-auto">Si necesitas mas información sobre mi o deseas simplemente ponerte en contacto conmigo, haz click sobre el icono de mail</div>
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