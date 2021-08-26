<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/i-i1.jpg", alt="servidores fisicos")

    p En el momento de contratar u ofrecer servicios en la nube, seguramente se debe asesorar o recibir el asesoramiento sobre un conjunto de características o configuraciones que permiten garantizar con mayor seguridad la operación de los servicios que se van a contratar. No solo se trata de garantizar el almacenamiento de la información sino la de aquellos servicios que la publican y la procesan. Este componente, permitirá conocer los conceptos relacionados con procesos de gestión de la redundancia y alta disponibilidad de forma que se comprenda el contexto de los servicios que se ofrecen.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
