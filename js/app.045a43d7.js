(function(e){function n(n){for(var o,i,c=n[0],d=n[1],l=n[2],s=0,u=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);p&&p(n);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=d(d.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return d.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"68a74b1b","chunk-0206bfa0":"758f57b3","chunk-04b93936":"a9ef66bb","chunk-13a6037e":"ce1475e9","chunk-16015154":"73c25c46","chunk-17977988":"872e3ed0","chunk-2c06842c":"e1f00954","chunk-2d208d90":"53498b70","chunk-2d21d0e2":"2d35cee6","chunk-2d22c123":"de00337c","chunk-2e80bb9a":"dbf1b162","chunk-3145fe0f":"7f7d8a51","chunk-328f70dd":"49426ddb","chunk-3807499c":"747cbe8d","chunk-3dc647fd":"0d9e6ed6","chunk-4cdd78c0":"fd6767cc","chunk-4fde0a08":"67cde4ff","chunk-515a8379":"6b9f64cf","chunk-53ccb27e":"60489573","chunk-59974754":"65298296","chunk-766a929b":"469551e9","chunk-839300a6":"b6a053bf","chunk-c796899c":"a12494e8","chunk-dbb9869e":"f161c85e",comple:"b3f6d59d",creditos:"26825cdf",glosario:"e227bd44",intro:"dbf8091b",referencias:"32ff76bf",tema1:"b5dde050",tema2:"7f05c0cc",tema3:"56711199"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema2:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"ab26bc3b","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"42cb688e","chunk-766a929b":"1b0545d4","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"92ea7c48",creditos:"7ca587b5",glosario:"01b68123",intro:"0e433876",referencias:"29daa737",tema1:"5c4a35f8",tema2:"4693a837",tema3:"31d6cfe0"}[e]+".css",t=d.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===t))return n()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],s=l.getAttribute("data-href");if(s===o||s===t)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],p.parentNode.removeChild(p),a(r)},p.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=c(e);var u=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(p);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}t[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(a,o,function(n){return e[n]}.bind(null,o));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var p=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"230f":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.250900e8.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,d=a("2877"),l=Object(d["a"])(c,i,t,!1,null,null,null),s=l.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),p=a("8c4f"),f=a("ae58"),m=a("7e58");u["a"].use(p["a"]);var b=new p["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Gestión de redundancia y alta disponibilidad",descripcionCurso:"Garantizar la disponibilidad de los servicios de Tecnologías de la Información (TI), es fundamental para posibilitar la operación de las empresas. Bien sea porque se prestará un servicio y se desea dotar de estas características o porque se van a adquirir servicios en la nube, por ello, es importante conocer los conceptos y términos a este proceso de gestión.",imagenBannerPrincipal:a("ae0a"),fondoBannerPrincipal:a("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión de redundancia y alta disponibilidad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Clústers",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Ventajas de la gestión de redundancia y alta disponibilidad",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Implantación de sistemas de alta disponibilidad",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Apache Software Foundation. (2021). Apache JMeter™.",link:"https://jmeter.apache.org"},{referencia:"Axioma B2B Marketing. (2021). Fórmulas de cálculo de indicadores de disponibilidad.",link:"https://www.reporteroindustrial.com/blogs/Formulas-de-calculo-de-indicadores-de-disponibilidad+115450"},{referencia:"HP, Oracle, Cisco (1999). High Availability & Load Balancing Testing using Oracle Application, Cisco Local Director and HPWebQos."},{referencia:"IBM. (2021). Soluciones SAN.",link:"http://www.ibm.com./ar/news/almacenamiento.html"},{referencia:"OmniPlayer. (2019). Redundancia y alta disponibilidad.",link:"https://omniplayer.com/es/administracion/redundancia-y-alta-disponibilidad"}],glosario:[{termino:"Clúster",significado:"servidores unidos entre sí normalmente por una red de alta velocidad y que se comportan como si fuesen un único servidor."},{termino:"Disponibilidad",significado:"cualidad o condición de disponibilidad."},{termino:"Sistemas redundantes",significado:"son aquellos en los que se repiten aquellos datos o hardware de carácter crítico que se quiere asegurar ante los posibles fallos que puedan surgir por su uso continuado."}],complementario:[{texto:"<p>Maillé, E. (2012). <i>VMware vSphere 5 en el seno del Datacenter.</i> Ediciones Eni.</p>",tipo:"Libro",link:"https://www.ediciones-eni.com/libro/vmware-vsphere-5-en-el-seno-del-datacenter-version-online-9782746078451"},{texto:"<p>Puche, D. (2016). <i>La seguridad informática en la PYME</i>. Ediciones Eni. <p>",tipo:"Libro",link:"https://www.ediciones-eni.com/libro/la-seguridad-informatica-en-la-pyme-situacion-actual-y-mejores-practicas-version-online-9782409001819"},{texto:"IBM Docs. (2021). Componentes de la alta disponibilidad.",tipo:"Documentación",link:"https://www.ibm.com/docs/es/i/7.3?topic=overview-components-high-availability"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Peter Emerson Pinchao",cargo:"Experto temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Paula Andrea Taborda Ortiz",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jorge Armando Villamizar Moreno",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Fabian Robles Méndez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Camila Ovalle Ospina",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},ae0a:function(e,n,a){e.exports=a.p+"img/banner-princiapal.06a219f5.svg"}});
//# sourceMappingURL=app.045a43d7.js.map