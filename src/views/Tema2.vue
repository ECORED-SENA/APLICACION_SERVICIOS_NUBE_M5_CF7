<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Implantación de sistemas de alta disponibilidad
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box(data-aos="flip-up")
                p La implantación requiere de algunos lineamientos, independiente de la tecnología de <i>clustering</i> o de almacenamiento, se centra en que sea servible para las tecnologías actuales y futuras dentro de una organización. A continuación, se podrá conocer la definición de objetivos y el análisis de opciones de alta disponibilidad.
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="fade-left")
                img.h150(src='@/assets/curso/t2-ic1.svg', alt='icono decorativo')

    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Definición de objetivos")
          
            .col-md-10.py-4
              figure
                img(src='@/assets/curso/t2-i2.svg', alt='cuadro ejemplo de definicion de objetivos')

            .col-md-10.mb-4.mb-md-0
              p El objetivo es analizar las distintas opciones de alta disponibilidad, con esto establecer su intencionalidad, según lo que se determine como importante, pero haciendo un análisis de riesgos en sistemas críticos. 

          .row.align-items-center(numero="2" titulo="Análisis de opciones de alta disponibilidad")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ix1.svg', alt='Texto que describa la imagen')

            .col-md-8.mb-4.mb-md-0
              p Son necesarios varios aspectos al momento de considerar la implementación de un sistema de alta disponibilidad o para adquirirlo desde un proveedor. Por eso se establecen algunos lineamientos, iniciando a partir de los indicadores de nivel de servicio.

          

          .row.justify-content-center(numero="3" titulo="Indicadores de nivel de servicio")
            .col-md-10.mb-4.mb-md-0.py-4
              p.mb-3  El funcionamiento del hardware sin fallas es la base para dotar a un sistema una alta disponibilidad. Para saber cómo presentar el valor de alta disponibilidad a ofrecer se debe tener en cuenta la norma IEEE 762/2006 que suministra el método del cálculo de este indicador para sistemas eléctricos pero es aplicable a todo sistema eléctrico o electrónico.
              p.mb-3  En dicha norma se mencionan algunos indicadores como lo son: fiabilidad, disponibilidad, tiempo medio entre paradas (MTBF, Mid Time Between failures), duración de las paradas (MTTR, o Mid Time To Repair), número de paradas por mantenimiento y tiempo total perdido por mantenimiento.
              p.mb-3  Para poder realizar este cálculo se necesita tener registrado en una tabla un registro por cada parada de los servicios con los siguientes datos:
              ul.lista-ul
                li 
                  i.fas.fa-check
                  | <b>Servicio que ha parado.</b>
                li
                  i.fas.fa-check
                  | <b>Motivo de la parada.</b> (mantenimiento, actualización, falla, etc.).
                li
                  i.fas.fa-check
                  | <b>Duración de la parada</b> (en minutos o segundos).                 

          .row.justify-content-center(numero="4" titulo="Métodos de cálculos de los indicadores")
            .col-md-10.mb-4.mb-md-0
              p.mb-3.py-4  <b>Disponibilidad:</b> es el cociente entre el tiempo que el sistema está disponible y el tiempo total de paradas de los servicios por servicios de mantenimiento programada y notificado o coordinado con el cliente. Para calcularlo, es necesario conocer el tiempo disponible como resta entre el tiempo total por las paradas de mantenimiento previamente programado y el tiempo por parada no programada. Una vez obtenido se divide el resultado entre el tiempo total del periodo considerado. (Fórmulas de cálculo de indicadores de disponibilidad, 2021).
              figure.mb-5
                img.nW(src='@/assets/curso/t2-f1.png', alt='Fórmula de disponibilidad')
              p.mb-3 <b>Fiabilidad:</b> la fórmula es muy parecida a la anterior, con las diferencias que se sustituye en el numerador las horas de parada por mantenimiento por horas de parada por mantenimiento no programado:
              figure.mb-5
                img.nW(src='@/assets/curso/t2-f2.png', alt='Fórmula de fiabilidad')              
              p.mb-3  <b>Tiempo medio entre paradas (TMEP):</b> Es el tiempo medio que ha transcurrido entre dos paradas de mantenimiento, y se requiere para su cálculo en el numerador las horas totales del periodo, y en denominador, el número de paradas”. (Fórmulas de cálculo de indicadores de disponibilidad, 2021).
              figure.mb-5
                img.nW(src='@/assets/curso/t2-f3.png', alt='Fórmula de TMEP') 
              p.mb-3 <b>Tiempo medio hasta puesta en marcha (TMPM):</b> “Representa el tiempo medio de duración de las diversas paradas ocurridas en el periodo e ítem analizado”. (Fórmulas de cálculo de indicadores de disponibilidad, 2021).  
              figure.mb-5
                img.nW(src='@/assets/curso/t2-f4.png', alt='Fórmula de TMPM') 



    p.mb-5  La implantación de sistemas de alta disponibilidad requiere de un funcionamiento ininterrumpido y para garantizarlo el hardware del sistema obligatorio debe exigirle a un sistema una alta disponibilidad, para lo cual es necesario mantenerlo en operación:
    .tarjeta--container.row.mb-5
      .col-lg-6.tarjeta.c1.p-5
        .rounded-number 1
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-left", data-aos-delay='0')
              img.h180(src='@/assets/curso/t2-ic2.svg', alt='Imagen Decorativa')
          
          .h1.mb-1 Condiciones ambientales adecuadas
          p Temperatura, humedad, circulación de aire, para poder tener estas condiciones se emplean instalaciones o sitios específicos para ubicar a los equipos donde se centraliza todo el funcionamiento.

      .col-lg-6.tarjeta.c2.p-5
        .rounded-number 2
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-right", data-aos-delay='100')
              img.h180(src='@/assets/curso/t2-ic3.svg', alt='imagen decorativa')
          
          .h1.mb-1 Condiciones óptimas de suministro energético
          p Para lo cual se suelen emplear técnicas de instalación tales como, duplicar las fuentes de alimentación de los equipos y duplicar los equipos de interconexión incluyendo cableado.

    p.mb-5  Además de estas condiciones es fundamental conocer la integridad y respaldo y los servidores redundantes, a continuación, se relaciona información importante para este proceso: 
    
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center(titulo="Integridad y respaldo de los datos")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-p1.svg', alt='icono decorativa')
            .col-md-8.mb-4.mb-md-0
              p.mb-3  Mediante la integridad de datos, se puede asegurar que no ha sido modificada por terceros. Para garantizar la integridad en los datos almacenados o transmitidos se emplean técnicas como cifrado o firmas digitales.
              p.mb-3  Garantizar esto es un poco más difícil, generalmente es algún malware o alguna función interna de algún sistema operativo que tenga un bache de seguridad.
              p.mb-4  Sin embargo, existen herramientas para detectar este tipo de vulnerabilidades como Rootkit Hunger, por citar un ejemplo.          
            


          .row.justify-content-center(titulo="Servidores redundantes")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-p2.svg', alt='icono decorativa')
            .col-md-8.mb-4.mb-md-0
              p.mb-3  Se evalúa la aplicación de clúster de servidores, máquinas virtuales o contenedores, y se selecciona la técnica y el número de nodos de acuerdo a la características que se desea dotar al servicio si estará centrada en el alto desempeño o alta disponibilidad.
    
          .row.justify-content-center(titulo="Elección de tecnología y/o proveedor de servicio")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-p3.svg', alt='icono decorativa')
            .col-md-8.mb-4.mb-md-0
              p.mb-3  De acuerdo al análisis al tipo de nodos (máquinas virtuales, contenedores o equipos físicos) se ha de seleccionar o la tecnología a emplear o el proveedor en la nube que cumpla con las características deseadas.
              p.mb-3  Muchas veces el costo de licenciamiento o el coste de aprovisionamiento limitan lo deseado, en tal caso se recomienda dimensionar el alcance, pero considerar una estimación del crecimiento de manera que los sistemas se puedan escalar considerando los costes que esto conlleve.

          .row.justify-content-center(titulo="Configuración de servicios y puesta en marcha")
            .col-md-2
              figure
                img(src='@/assets/curso/t2-p4.svg', alt='icono decorativa')
            .col-md-8.mb-4.mb-md-0
              p.mb-3  En este punto del plan de implementación, independiente de la tecnología o el proveedor a seleccionar es de vital importancia considerar el plan de capacitación técnica de manera que la configuración seleccionada aproveche al máximo o el licenciamiento o el nivel de servicios que se han contratado, de otra forma es posible que se desplieguen con servicios con una configuración estándar o genérica que no explote las características contratadas o adquiridas. 
   
          .row.justify-content-center(titulo="Pruebas de Carga")
            .col-md-8.mb-4.mb-md-0
              p.mb-3  Las pruebas de carga, miden el rendimiento del software y siguen dos tipos de procedimientos:
              ul.lista-ul
                li 
                  i.fas.fa-check
                  p <b>Pruebas de caja negra:</b> son pruebas sencillas que no se dotan de permisos de usuario para acceder, solo se puede probar lo que externamente se ve de un servicio, sin emplear las credenciales de acceso que permita acceder a toda funcionalidad.
                li 
                  i.fas.fa-check
                  p <b>Pruebas de caja blanca:</b> interesa verificar internamente las partes que componen un sistema de manera que debe seguir una secuencia lógica, la primera sería acceder al sistema con credenciales de acceso válidas.
              P.mb-3  Se pueden hacer varias pruebas de carga según uno de estos dos métodos conocidos como lo son:
              ul.lista-ul
                li 
                  i.fas.fa-check
                  p <b>Pruebas reales:</b> con determinado número de usuarios concurrentemente usando las funcionalidades del sistema.

                li 
                  i.fas.fa-check
                  p <b>Pruebas sintéticas:</b> se emplea un sistema o programa especialmente diseñado para tales fines como por ejemplo el sistema JMeter.


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          .row
            .col-lg-1
              figure
                img(src="@/assets/curso/t1-ic2.svg", alt="icono decorativo")
            .col-lg-11
              p Es recomendable seguir unos lineamientos metodológicos previamente establecidos, y al momento de ser probados se debe dotar a los sistemas de alta disponibilidad, tanto para servicios locales o servicios a contratar, para que sean desplegados en la nube. 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.h150{max-height: 150px}
</style>
