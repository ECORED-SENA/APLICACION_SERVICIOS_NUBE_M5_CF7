<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Gestión de redundancia y alta disponibilidad
    .row.justify-content-center.mb-5.slideInUp
      .col-lg-3
        .tarjeta.color-light-blue.p-3
          figure.mb-5
            img(src="@/assets/curso/t1-ic1.svg", alt="servidores fisicos")
      .col-lg-9
        p Para conocer sobre gestión de redundancia y alta disponibilidad, es importante identificar que la primera se centra en la capacidad de interconectar los data centers en caso de que el principal falle, mientras que la alta disponibilidad se centra en la capacidad de tener operando los sistemas sin interrupción. En ocasiones, se ofrecen servicios de alta disponibilidad (HA, de inglés Higth Availability) y para ello, es indispensable iniciar con el <i>backup</i> de los datos, ya que la alta disponibilidad no conlleva copia de la información. A continuación, se profundizará en estos conceptos: 

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Redundancia de Hardware" :icono="require('@/assets/curso/ic-1.svg')")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Hace referencia a tener un componente del sistema duplicado. En esta instancia se puede considerar que los proveedores de servicios en la nube, tienen todos esos servicios que ofrecen operando dentro de <i>Centros de Procesos de Datos (CPD)</i> o mas conocidos como <i>Data Centers,</i> y las máquinas en algún momento terminan fallando, pues tienen un tiempo de vida estimado muy difícil de garantizar. 
            p Su objetivo no es evitar fallas sino, que no afecten a los usuarios. La forma de lograr esto, es duplicando el dispositivo de manera que cuando falle la máquina los servicios que dependen de ese <i>hardware</i> sean trasladados de forma automática a un dispositivo que no esté afectado. De tal forma que cuando dos dispositivos están publicados se puede decir que están redundados.
      
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i1.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Alta Disponibilidad: HA (High Availability) " :icono="require('@/assets/curso/ic-2.svg')")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Son las características que tienen una arquitectura tecnológica que determina el grado con el que los servicios TI están activos (es decir disponibles), para ser usados por el cliente final. La alta disponibilidad garantiza que los sistemas estén disponibles a pesar de que existan fallos en las tecnologías que los soportan.
     
        
          .col-md-4
            figure
              img(src='@/assets/curso/t1-i2.png', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Operación los servicios: Activo-Activo y Activo-Pasivo" :icono="require('@/assets/curso/ic-3.svg')")
        .row.align-items-center.justify-content-center
          .col-md-10.mb-4.mb-md-0
            p La alta disponibilidad puede ser de dos formas para poder mantener en operación los servicios: <b>Activo-Activo y Activo-Pasivo.</b>
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p <b>Activo-Activo:</b>(ambos equipos, dispositivos o sistemas) están funcionando simultáneamente y generalmente se están repartiendo la carga de trabajo entre ellos.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p <b>Activo-Pasivo:</b> solo uno de los dispositivos o servicios están en operación, mientras que el segundo equipo, solamente entra en operación cuando el primero, se ha “caído” o no está disponible. En este caso es posible utilizar una copia existente (de un momento determinado de tiempo) de los datos.
          //-.col-md-4
            figure
              img(src='@/assets/curso/t1-i2.png', alt='Imagen decorativa')



    p.mb-5  Como se pude inferir para tener HA, se debe tener como mínimo dos sistemas o dispositivos y ambos con idénticos sistemas y características; generalmente se aplica HA a servidores de aplicaciones y a sistemas gestores de base de datos.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row
            .col-lg-1
              figure
                img(src="@/assets/curso/t1-ic2.svg", alt="icono decorativo")
            .col-lg-11
              p En conclusión, el término <b>redundancia</b>, está vinculado a la implementación de <b>alta disponibilidad</b>, específicamente mediante la implantación de al menos un dispositivo adicional que se empleará como respaldo (según el modelo activo-pasivo) o balanceador de carga (en el caso activo-activo).

    #t_1_1.titulo-segundo
      h2 1.1  Clústers
    p.mb-5  Cuando la HA es <b>activo-activo</b>, se puede tener mejor desempeño al existir balanceo de cargas, a este tipo de agrupación se le denomina clúster, que es el nombre que se le da a un sistema compuesto de más de una unidad de procesamiento que trabajan de manera unificada con el mismo objetivo. Estas máquinas tienen en común que realizan las mismas tareas ya que tienen una similitud en la configuración y los sistemas informáticos de manera que pueden trabajar de forma simultánea.
    
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.color-light-blue.p-3.text-center(data-aos="flip-left")
          figure
            img.nW.centered(src="@/assets/curso/t1-ic3.png", alt="icono decorativo")

      .col-lg-6
        .h4 La técnica del clúster se puede aplicar a:
        ol.lista-ol--cuadro
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span 1
            | Máquinas virtuales
          li(data-aos="fade-up")  
            .lista-ol--cuadro__vineta
              span 2
            | Containers
          li(data-aos="fade-up")  
            .lista-ol--cuadro__vineta
              span 3
            | Arquitectura de computación
          li(data-aos="fade-up")  
            .lista-ol--cuadro__vineta
              span 4
            | Redes
          li(data-aos="fade-up")  
            .lista-ol--cuadro__vineta
              span 5
            | Computación en la nube
          li(data-aos="fade-up")  
            .lista-ol--cuadro__vineta
              span 6
            | Banco de datos  

    .row.mb-5
      .col-lg-4
        figure(data-aos="fade-left") 
          img(src="@/assets/curso/t1-i3.jpg", alt="imagen decorativa")
      .col-lg-8
        p.mb-3(data-aos="fade-right")   El funcionamiento del clúster requiere conocer el concepto llamado <b>“nodo”</b>, el cual es el nombre que atribuye a cada computador o unidad de procesamiento (máquina virtual, o contenedor) agregado a un clúster, ya sea virtual o físico. Cuando se hace referencia a las tecnologías o herramientas necesarias para implementar los clústeres, se habla de clustering.
        p.mb-3(data-aos="fade-right")   En un clúster los nodos se interconectan gracias a una tecnología o infraestructura de red, generalmente una ya conocida por la empresa, pensando en la facilidad de mantenimiento y control de los costos. Es así, como cada nodo desempeña la misma función que los demás nodos, siendo posible suprimir o adicionar nuevos cuando sea necesario, aún si el clúster se mantiene en funcionamiento sin interrupciones. De tal forma que estas operaciones de agregar o quitar no perjudican el proceso ya que las tareas se distribuyen automáticamente, sin ocasionar problemas.

    p.mb-5  Para que el sistema sea escalable es importante saber que no existe límite de nodos que se puedan operar en un solo clúster y esto es muy importante cuando las empresas están en proceso de crecimiento continuo. Básicamente existen dos tipos de clúster o motivos por los que se configuran los clústeres:

    .tarjeta--container.row.mb-5
      .col-lg-6.tarjeta.c1.p-5
        .rounded-number 1
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-left", data-aos-delay='0')
              img.h180(src='@/assets/curso/t1-ic4.svg', alt='Imagen Decorativa')
          
          .h1.mb-1 Clúster de alto desempeño
          .h4 (High Performance Computing Cluster)
          p Se utiliza cuando el objetivo es resolver problemas que requieren de mucho procesamiento, concurrente, es decir, simultáneo, permitiendo realizarlos en un tiempo útil y de manera que satisfaga la expectativa del usuario. Para lograr esto se hace uso de la técnica de blanceo de carga <i>(Load Balancing)</i>, que consiste en repartir las tareas de manera similar o equilibrada (balanceada) entre los nodos.

      .col-lg-6.tarjeta.c2.p-5
        .rounded-number 2
        .row.justify-content-center.mb-4.p-5.text-center
          .col-6
            figure.mb-5(data-aos="flip-right", data-aos-delay='100')
              img.h180(src='@/assets/curso/t1-ic5.svg', alt='imagen decorativa')
          
          .h1.mb-1 Clúster de alta disponibilidad
          .h4  (High Availability Computing Cluster)
          p Su principal objetivo es mantener el sistema en funcionamiento; es decir, está centrado en saber responder automáticamente a fallos sin afectar la continuidad de la prestación del servicio, para esto es necesario dotar al clúster de herramientas control y monitoreo de fallas en la interconexión o en los nodos, redundancia de sistemas, sistemas sustitutos o de respaldo, entre otros.



    #t_1_2.titulo-segundo
      h2 1.2  Ventajas de la gestión de redundancia y alta disponibilidad
    p.mb-5  Existen varios motivos por lo que es importante la gestión de la redundancia y alta disponibilidad, a continuación, se relacionan los más representativos que contribuyen a adopción de estrategias para su gestión: 
    .row.justify-content-center.mb-5
      .col-lg-10(data-v-a692d57c='')
        .pasos-a.color-acento-contenido.mb-5(data-v-b0d02440='' data-v-a692d57c='')
          .pasos-a__item(data-v-b0d02440='')
            .row.align-items-center.d-flex(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.bottom(data-v-b0d02440='')
                .pasos-a__circle(data-v-b0d02440='')
                  .h2(data-v-b0d02440='') A
              .col.py-3(data-v-b0d02440='')
                .row(data-v-a692d57c='' data-v-b0d02440='')
                  .col-md-2(data-v-a692d57c='' data-v-b0d02440='')
                    figure(data-v-a692d57c='' data-v-b0d02440='')
                      img.h90(data-v-a692d57c='' data-v-b0d02440='' src='@/assets/curso/t1-ic6.svg' alt='icono decorativo')
                  .col-md-10.mb-4.mb-md-0(data-v-a692d57c='' data-v-b0d02440='')
                    h3(data-v-a692d57c='' data-v-b0d02440='') Eliminaci&oacute;n de fallos
                    p(data-v-a692d57c='' data-v-b0d02440='')
                      | Al ocurrir fallos en el hardware, en las redes, energ&iacute;a o de nivel f&iacute;sico quedan resueltos de forma autom&aacute;tica, debido a que las funciones son trasladadas a nodos no afectados.
              .col-1(data-v-b0d02440='')
            .row.pasos-a__linea(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.top-right(data-v-b0d02440='')
              .col-6.col-sm-8.col-lg-10(data-v-b0d02440='')
                .hor-line(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.left-bottom(data-v-b0d02440='')
          .pasos-a__item(data-v-b0d02440='')
            .row.align-items-center.d-flex.flex-row-reverse(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full(data-v-b0d02440='')
                .pasos-a__circle(data-v-b0d02440='')
                  .h2(data-v-b0d02440='') B
              .col.py-3.text-end(data-v-b0d02440='')
                .row(data-v-a692d57c='' data-v-b0d02440='')
                  .col-md-10.mb-4.mb-md-0(data-v-a692d57c='' data-v-b0d02440='')
                    h3(data-v-a692d57c='' data-v-b0d02440='') Recuperaci&oacute;n autom&aacute;tica
                    p(data-v-a692d57c='' data-v-b0d02440='')
                      | No requiere de la intervenci&oacute;n humano&ndash;máquina, para que los sistemas se restablezcan o se reconfiguren para salvaguardar los fallos.
                  .col-md-2(data-v-a692d57c='' data-v-b0d02440='')
                    figure(data-v-a692d57c='' data-v-b0d02440='')
                      img.h90(data-v-a692d57c='' data-v-b0d02440='' src='@/assets/curso/t1-ic7.svg' alt='icono decorativo')
              .col-1(data-v-b0d02440='')
            .row.pasos-a__linea(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.right-bottom(data-v-b0d02440='')
              .col-6.col-sm-8.col-lg-10(data-v-b0d02440='')
                .hor-line(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.top-left(data-v-b0d02440='')
          .pasos-a__item(data-v-b0d02440='')
            .row.align-items-center.d-flex(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.full(data-v-b0d02440='')
                .pasos-a__circle(data-v-b0d02440='')
                  .h2(data-v-b0d02440='') C
              .col.py-3(data-v-b0d02440='')
                .row(data-v-a692d57c='' data-v-b0d02440='')
                  .col-md-2(data-v-a692d57c='' data-v-b0d02440='')
                    figure(data-v-a692d57c='' data-v-b0d02440='')
                      img.h90(data-v-a692d57c='' data-v-b0d02440='' src='@/assets/curso/t1-ic8.svg' alt='icono decorativo')
                  .col-md-10.mb-4.mb-md-0(data-v-a692d57c='' data-v-b0d02440='')
                    h3(data-v-a692d57c='' data-v-b0d02440='') Rendimiento
                    p(data-v-a692d57c='' data-v-b0d02440='')
                      | Estas arquitecturas permiten que la empresa pueda crecer en operaciones y que los sistemas tecnol&oacute;gicos escalen las necesidades crecientes.
              .col-1(data-v-b0d02440='')
            .row.pasos-a__linea(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.top-right(data-v-b0d02440='')
              .col-6.col-sm-8.col-lg-10(data-v-b0d02440='')
                .hor-line(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina(data-v-b0d02440='')
                .pasos-a__linea__esquina__linea.left-bottom(data-v-b0d02440='')
          .pasos-a__item(data-v-b0d02440='')
            .row.align-items-center.d-flex.flex-row-reverse(data-v-b0d02440='')
              .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center.top(data-v-b0d02440='')
                .pasos-a__circle(data-v-b0d02440='')
                  .h2(data-v-b0d02440='') D
              .col.py-3.text-end(data-v-b0d02440='')
                .row(data-v-a692d57c='' data-v-b0d02440='')
                  .col-md-10.mb-4.mb-md-0(data-v-a692d57c='' data-v-b0d02440='')
                    h3(data-v-a692d57c='' data-v-b0d02440='') Seguridad
                    p(data-v-a692d57c='' data-v-b0d02440='') Se puede garantizar el almacenamiento y disponibilidad de la informaci&oacute;n.
                  .col-md-2(data-v-a692d57c='' data-v-b0d02440='')
                    figure(data-v-a692d57c='' data-v-b0d02440='')
                      img.h90(data-v-a692d57c='' data-v-b0d02440='' src='@/assets/curso/t1-ic9.svg' alt='icono decorativo')
              .col-1(data-v-b0d02440='')
    
    
    
    
    //-.row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-2
              figure
                img.h90(src='@/assets/curso/t1-ic6.svg', alt='icono decorativo')

            .col-md-10.mb-4.mb-md-0
              h3 Eliminación de fallos
              p Al ocurrir fallos en el hardware, en las redes, energía o de nivel físico quedan resueltos de forma automática, debido a que las funciones son trasladadas a nodos no afectados.


          .row
            .col-md-10.mb-4.mb-md-0
              h3 Recuperación automática
              p No requiere de la intervención humano–maquina, para que los sistemas se restablezcan o se reconfiguren para salvaguardar los fallos.
            .col-md-2
              figure
                img.h90(src='@/assets/curso/t1-ic7.svg', alt='icono decorativo')          

          .row
            .col-md-2
              figure
                img.h90(src='@/assets/curso/t1-ic8.svg', alt='icono decorativo')

            .col-md-10.mb-4.mb-md-0
              h3 Rendimiento
              p Estas arquitecturas permiten que la empresa pueda crecer en operaciones y que los sistemas tecnológicos escalen las necesidades crecientes.

          .row
            .col-md-10.mb-4.mb-md-0
              h3 Seguridad
              p Se puede garantizar el almacenamiento y disponibilidad de la información.
            .col-md-2
              figure
                img.h90(src='@/assets/curso/t1-ic9.svg', alt='icono decorativo')          















    
  
</template>

<script>
export default {
  name: 'Tema1',
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
.h90{max-height: 90px}
</style>
