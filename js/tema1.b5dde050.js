(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema1"],{"02c8":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a._m(0),a._m(1),e("TabsB",{staticClass:"color-acento-contenido mb-5"},[e("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Redundancia de Hardware",icono:s("c9c1")}},[e("div",{staticClass:"row align-items-center justify-content-center"},[e("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[e("p",[a._v("Hace referencia a tener un componente del sistema duplicado. En esta instancia se puede considerar que los proveedores de servicios en la nube, tienen todos esos servicios que ofrecen operando dentro de "),e("i",[a._v("Centros de Procesos de Datos (CPD)")]),a._v(" o mas conocidos como "),e("i",[a._v("Data Centers,")]),a._v(" y las máquinas en algún momento terminan fallando, pues tienen un tiempo de vida estimado muy difícil de garantizar. ")]),e("p",[a._v("Su objetivo no es evitar fallas sino, que no afecten a los usuarios. La forma de lograr esto, es duplicando el dispositivo de manera que cuando falle la máquina los servicios que dependen de ese "),e("i",[a._v("hardware")]),a._v(" sean trasladados de forma automática a un dispositivo que no esté afectado. De tal forma que cuando dos dispositivos están publicados se puede decir que están redundados.")])]),e("div",{staticClass:"col-md-4"},[e("figure",[e("img",{attrs:{src:s("1a05"),alt:"Imagen decorativa"}})])])])]),e("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Alta Disponibilidad: HA (High Availability) ",icono:s("ddb1")}},[e("div",{staticClass:"row align-items-center justify-content-center"},[e("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[e("p",[a._v("Son las características que tienen una arquitectura tecnológica que determina el grado con el que los servicios TI están activos (es decir disponibles), para ser usados por el cliente final. La alta disponibilidad garantiza que los sistemas estén disponibles a pesar de que existan fallos en las tecnologías que los soportan.")])]),e("div",{staticClass:"col-md-4"},[e("figure",[e("img",{attrs:{src:s("10c6"),alt:"Imagen decorativa"}})])])])]),e("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Operación los servicios: Activo-Activo y Activo-Pasivo",icono:s("ae6e")}},[e("div",{staticClass:"row align-items-center justify-content-center"},[e("div",{staticClass:"col-md-10 mb-4 mb-md-0"},[e("p",[a._v("La alta disponibilidad puede ser de dos formas para poder mantener en operación los servicios: "),e("b",[a._v("Activo-Activo y Activo-Pasivo.")])]),e("ol",{staticClass:"lista-ol--cuadro"},[e("li",[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("1")])]),e("p",[e("b",[a._v("Activo-Activo:")]),a._v("(ambos equipos, dispositivos o sistemas) están funcionando simultáneamente y generalmente se están repartiendo la carga de trabajo entre ellos.")])]),e("li",[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("2")])]),e("p",[e("b",[a._v("Activo-Pasivo:")]),a._v(" solo uno de los dispositivos o servicios están en operación, mientras que el segundo equipo, solamente entra en operación cuando el primero, se ha “caído” o no está disponible. En este caso es posible utilizar una copia existente (de un momento determinado de tiempo) de los datos.")])])])])])])]),e("p",{staticClass:"mb-5"},[a._v(" Como se pude inferir para tener HA, se debe tener como mínimo dos sistemas o dispositivos y ambos con idénticos sistemas y características; generalmente se aplica HA a servidores de aplicaciones y a sistemas gestores de base de datos.")]),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),e("p",{staticClass:"mb-5"},[a._v(" Para que el sistema sea escalable es importante saber que no existe límite de nodos que se puedan operar en un solo clúster y esto es muy importante cuando las empresas están en proceso de crecimiento continuo. Básicamente existen dos tipos de clúster o motivos por los que se configuran los clústeres:")]),a._m(7),a._m(8),e("p",{staticClass:"mb-5"},[a._v(" Existen varios motivos por lo que es importante la gestión de la redundancia y alta disponibilidad, a continuación, se relacionan los más representativos que contribuyen a adopción de estrategias para su gestión: ")]),a._m(9)],1)],1)},i=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"titulo-principal"},[s("div",{staticClass:"titulo-principal__numero"},[s("span",[a._v(" 1")])]),s("h1",[a._v("Gestión de redundancia y alta disponibilidad")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row justify-content-center mb-5 slideInUp"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"tarjeta color-light-blue p-3"},[e("figure",{staticClass:"mb-5"},[e("img",{attrs:{src:s("85b7"),alt:"servidores fisicos"}})])])]),e("div",{staticClass:"col-lg-9"},[e("p",[a._v("Para conocer sobre gestión de redundancia y alta disponibilidad, es importante identificar que la primera se centra en la capacidad de interconectar los data centers en caso de que el principal falle, mientras que la alta disponibilidad se centra en la capacidad de tener operando los sistemas sin interrupción. En ocasiones, se ofrecen servicios de alta disponibilidad (HA, de inglés Higth Availability) y para ello, es indispensable iniciar con el "),e("i",[a._v("backup")]),a._v(" de los datos, ya que la alta disponibilidad no conlleva copia de la información. A continuación, se profundizará en estos conceptos: ")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row justify-content-center mb-5",attrs:{"data-aos":"flip-up"}},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cajon color-acento-contenido p-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-1"},[e("figure",[e("img",{attrs:{src:s("7c2d"),alt:"icono decorativo"}})])]),e("div",{staticClass:"col-lg-11"},[e("p",[a._v("En conclusión, el término "),e("b",[a._v("redundancia")]),a._v(", está vinculado a la implementación de "),e("b",[a._v("alta disponibilidad")]),a._v(", específicamente mediante la implantación de al menos un dispositivo adicional que se empleará como respaldo (según el modelo activo-pasivo) o balanceador de carga (en el caso activo-activo).")])])])])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_1_1"}},[s("h2",[a._v("1.1 Clústers")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("p",{staticClass:"mb-5"},[a._v(" Cuando la HA es "),s("b",[a._v("activo-activo")]),a._v(", se puede tener mejor desempeño al existir balanceo de cargas, a este tipo de agrupación se le denomina clúster, que es el nombre que se le da a un sistema compuesto de más de una unidad de procesamiento que trabajan de manera unificada con el mismo objetivo. Estas máquinas tienen en común que realizan las mismas tareas ya que tienen una similitud en la configuración y los sistemas informáticos de manera que pueden trabajar de forma simultánea.")])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"tarjeta color-light-blue p-3 text-center",attrs:{"data-aos":"flip-left"}},[e("figure",[e("img",{staticClass:"nW centered",attrs:{src:s("e0cf"),alt:"icono decorativo"}})])])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"h4"},[a._v("La técnica del clúster se puede aplicar a:")]),e("ol",{staticClass:"lista-ol--cuadro"},[e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("1")])]),a._v("Máquinas virtuales")]),e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("2")])]),a._v("Containers")]),e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("3")])]),a._v("Arquitectura de computación")]),e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("4")])]),a._v("Redes")]),e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("5")])]),a._v("Computación en la nube")]),e("li",{attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[a._v("6")])]),a._v("Banco de datos ")])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-lg-4"},[e("figure",{attrs:{"data-aos":"fade-left"}},[e("img",{attrs:{src:s("4986"),alt:"imagen decorativa"}})])]),e("div",{staticClass:"col-lg-8"},[e("p",{staticClass:"mb-3",attrs:{"data-aos":"fade-right"}},[a._v(" El funcionamiento del clúster requiere conocer el concepto llamado "),e("b",[a._v("“nodo”")]),a._v(", el cual es el nombre que atribuye a cada computador o unidad de procesamiento (máquina virtual, o contenedor) agregado a un clúster, ya sea virtual o físico. Cuando se hace referencia a las tecnologías o herramientas necesarias para implementar los clústeres, se habla de clustering.")]),e("p",{staticClass:"mb-3",attrs:{"data-aos":"fade-right"}},[a._v(" En un clúster los nodos se interconectan gracias a una tecnología o infraestructura de red, generalmente una ya conocida por la empresa, pensando en la facilidad de mantenimiento y control de los costos. Es así, como cada nodo desempeña la misma función que los demás nodos, siendo posible suprimir o adicionar nuevos cuando sea necesario, aún si el clúster se mantiene en funcionamiento sin interrupciones. De tal forma que estas operaciones de agregar o quitar no perjudican el proceso ya que las tareas se distribuyen automáticamente, sin ocasionar problemas.")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tarjeta--container row mb-5"},[e("div",{staticClass:"col-lg-6 tarjeta c1 p-5"},[e("div",{staticClass:"rounded-number"},[a._v("1")]),e("div",{staticClass:"row justify-content-center mb-4 p-5 text-center"},[e("div",{staticClass:"col-6"},[e("figure",{staticClass:"mb-5",attrs:{"data-aos":"flip-left","data-aos-delay":"0"}},[e("img",{staticClass:"h180",attrs:{src:s("a6e5"),alt:"Imagen Decorativa"}})])]),e("div",{staticClass:"h1 mb-1"},[a._v("Clúster de alto desempeño")]),e("div",{staticClass:"h4"},[a._v("(High Performance Computing Cluster)")]),e("p",[a._v("Se utiliza cuando el objetivo es resolver problemas que requieren de mucho procesamiento, concurrente, es decir, simultáneo, permitiendo realizarlos en un tiempo útil y de manera que satisfaga la expectativa del usuario. Para lograr esto se hace uso de la técnica de blanceo de carga "),e("i",[a._v("(Load Balancing)")]),a._v(", que consiste en repartir las tareas de manera similar o equilibrada (balanceada) entre los nodos.")])])]),e("div",{staticClass:"col-lg-6 tarjeta c2 p-5"},[e("div",{staticClass:"rounded-number"},[a._v("2")]),e("div",{staticClass:"row justify-content-center mb-4 p-5 text-center"},[e("div",{staticClass:"col-6"},[e("figure",{staticClass:"mb-5",attrs:{"data-aos":"flip-right","data-aos-delay":"100"}},[e("img",{staticClass:"h180",attrs:{src:s("4e8c"),alt:"imagen decorativa"}})])]),e("div",{staticClass:"h1 mb-1"},[a._v("Clúster de alta disponibilidad")]),e("div",{staticClass:"h4"},[a._v(" (High Availability Computing Cluster)")]),e("p",[a._v("Su principal objetivo es mantener el sistema en funcionamiento; es decir, está centrado en saber responder automáticamente a fallos sin afectar la continuidad de la prestación del servicio, para esto es necesario dotar al clúster de herramientas control y monitoreo de fallas en la interconexión o en los nodos, redundancia de sistemas, sistemas sustitutos o de respaldo, entre otros.")])])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"titulo-segundo",attrs:{id:"t_1_2"}},[s("h2",[a._v("1.2 Ventajas de la gestión de redundancia y alta disponibilidad")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-10",attrs:{"data-v-a692d57c":""}},[e("div",{staticClass:"pasos-a color-acento-contenido mb-5",attrs:{"data-v-b0d02440":"","data-v-a692d57c":""}},[e("div",{staticClass:"pasos-a__item",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row align-items-center d-flex",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center bottom",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__circle",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"h2",attrs:{"data-v-b0d02440":""}},[a._v("A")])])]),e("div",{staticClass:"col py-3",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("div",{staticClass:"col-md-2",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("figure",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("img",{staticClass:"h90",attrs:{"data-v-a692d57c":"","data-v-b0d02440":"",src:s("881e"),alt:"icono decorativo"}})])]),e("div",{staticClass:"col-md-10 mb-4 mb-md-0",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("h3",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Eliminación de fallos")]),e("p",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Al ocurrir fallos en el hardware, en las redes, energía o de nivel físico quedan resueltos de forma automática, debido a que las funciones son trasladadas a nodos no afectados.")])])])]),e("div",{staticClass:"col-1",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"row pasos-a__linea",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea top-right",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-6 col-sm-8 col-lg-10",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"hor-line",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea left-bottom",attrs:{"data-v-b0d02440":""}})])])]),e("div",{staticClass:"pasos-a__item",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row align-items-center d-flex flex-row-reverse",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center full",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__circle",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"h2",attrs:{"data-v-b0d02440":""}},[a._v("B")])])]),e("div",{staticClass:"col py-3 text-end",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("div",{staticClass:"col-md-10 mb-4 mb-md-0",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("h3",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Recuperación automática")]),e("p",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("No requiere de la intervención humano–máquina, para que los sistemas se restablezcan o se reconfiguren para salvaguardar los fallos.")])]),e("div",{staticClass:"col-md-2",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("figure",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("img",{staticClass:"h90",attrs:{"data-v-a692d57c":"","data-v-b0d02440":"",src:s("8cb1"),alt:"icono decorativo"}})])])])]),e("div",{staticClass:"col-1",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"row pasos-a__linea",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea right-bottom",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-6 col-sm-8 col-lg-10",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"hor-line",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea top-left",attrs:{"data-v-b0d02440":""}})])])]),e("div",{staticClass:"pasos-a__item",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row align-items-center d-flex",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center full",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__circle",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"h2",attrs:{"data-v-b0d02440":""}},[a._v("C")])])]),e("div",{staticClass:"col py-3",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("div",{staticClass:"col-md-2",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("figure",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("img",{staticClass:"h90",attrs:{"data-v-a692d57c":"","data-v-b0d02440":"",src:s("fd03"),alt:"icono decorativo"}})])]),e("div",{staticClass:"col-md-10 mb-4 mb-md-0",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("h3",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Rendimiento")]),e("p",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Estas arquitecturas permiten que la empresa pueda crecer en operaciones y que los sistemas tecnológicos escalen las necesidades crecientes.")])])])]),e("div",{staticClass:"col-1",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"row pasos-a__linea",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea top-right",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-6 col-sm-8 col-lg-10",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"hor-line",attrs:{"data-v-b0d02440":""}})]),e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__linea__esquina",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__linea__esquina__linea left-bottom",attrs:{"data-v-b0d02440":""}})])])]),e("div",{staticClass:"pasos-a__item",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row align-items-center d-flex flex-row-reverse",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"col-3 col-sm-2 col-lg-1 pasos-a__numero text-center d-inline-flex justify-content-center align-items-center top",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"pasos-a__circle",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"h2",attrs:{"data-v-b0d02440":""}},[a._v("D")])])]),e("div",{staticClass:"col py-3 text-end",attrs:{"data-v-b0d02440":""}},[e("div",{staticClass:"row",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("div",{staticClass:"col-md-10 mb-4 mb-md-0",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("h3",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Seguridad")]),e("p",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[a._v("Se puede garantizar el almacenamiento y disponibilidad de la información.")])]),e("div",{staticClass:"col-md-2",attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("figure",{attrs:{"data-v-a692d57c":"","data-v-b0d02440":""}},[e("img",{staticClass:"h90",attrs:{"data-v-a692d57c":"","data-v-b0d02440":"",src:s("6db1"),alt:"icono decorativo"}})])])])]),e("div",{staticClass:"col-1",attrs:{"data-v-b0d02440":""}})])])])])])}],o={name:"Tema1",data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},d=o,c=(s("d515"),s("2877")),n=Object(c["a"])(d,e,i,!1,null,"20c23e1b",null);t["default"]=n.exports},"10c6":function(a,t,s){a.exports=s.p+"img/t1-i2.6158dfab.png"},"14d3":function(a,t,s){},"1a05":function(a,t,s){a.exports=s.p+"img/t1-i1.de3b6844.png"},4986:function(a,t,s){a.exports=s.p+"img/t1-i3.a43084fd.jpg"},"4e8c":function(a,t,s){a.exports=s.p+"img/t1-ic5.b9f8f63d.svg"},"6db1":function(a,t,s){a.exports=s.p+"img/t1-ic9.9e0bacd3.svg"},"7c2d":function(a,t,s){a.exports=s.p+"img/t1-ic2.46f8155c.svg"},"85b7":function(a,t,s){a.exports=s.p+"img/t1-ic1.e6538dcd.svg"},"881e":function(a,t,s){a.exports=s.p+"img/t1-ic6.c0c94041.svg"},"8cb1":function(a,t,s){a.exports=s.p+"img/t1-ic7.05b4548a.svg"},a6e5:function(a,t,s){a.exports=s.p+"img/t1-ic4.d05ce3b5.svg"},ae6e:function(a,t,s){a.exports=s.p+"img/ic-3.14a2ab6d.svg"},c9c1:function(a,t,s){a.exports=s.p+"img/ic-1.68d08856.svg"},d515:function(a,t,s){"use strict";s("14d3")},ddb1:function(a,t,s){a.exports=s.p+"img/ic-2.7bc27965.svg"},e0cf:function(a,t,s){a.exports=s.p+"img/t1-ic3.32e501c1.png"},fd03:function(a,t,s){a.exports=s.p+"img/t1-ic8.0fb47a52.svg"}}]);
//# sourceMappingURL=tema1.b5dde050.js.map