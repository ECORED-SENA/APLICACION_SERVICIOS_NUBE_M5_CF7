export default {
  global: {
    componenteFormativo: 'Gestión de redundancia y alta disponibilidad',
    descripcionCurso:
      'Garantizar la disponibilidad de los servicios de Tecnologías de la Información (TI), es fundamental para posibilitar la operación de las empresas. Bien sea porque se prestará un servicio y se desea dotar de estas características o porque se van a adquirir servicios en la nube, por ello, es importante conocer los conceptos y términos a este proceso de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de redundancia y alta disponibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clústers',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Ventajas de la gestión de redundancia y alta disponibilidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implantación de sistemas de alta disponibilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Apache Software Foundation. (2021). Apache JMeter™.',
      link: 'https://jmeter.apache.org',
    },
    {
      referencia:
        'Axioma B2B Marketing. (2021). Fórmulas de cálculo de indicadores de disponibilidad.',
      link:
        'https://www.reporteroindustrial.com/blogs/Formulas-de-calculo-de-indicadores-de-disponibilidad+115450',
    },
    {
      referencia:
        'HP, Oracle, Cisco (1999). High Availability & Load Balancing Testing using Oracle Application, Cisco Local Director and HPWebQos.',
    },
    {
      referencia: 'IBM. (2021). Soluciones SAN.',
      link: 'http://www.ibm.com./ar/news/almacenamiento.html',
    },
    {
      referencia: 'OmniPlayer. (2019). Redundancia y alta disponibilidad.',
      link:
        'https://omniplayer.com/es/administracion/redundancia-y-alta-disponibilidad',
    },
  ],
  glosario: [
    {
      termino: 'Clúster',
      significado:
        'servidores unidos entre sí normalmente por una red de alta velocidad y que se comportan como si fuesen un único servidor.',
    },
    {
      termino: 'Disponibilidad',
      significado: 'cualidad o condición de disponibilidad.',
    },
    {
      termino: 'Sistemas redundantes',
      significado:
        'son aquellos en los que se repiten aquellos datos o hardware de carácter crítico que se quiere asegurar ante los posibles fallos que puedan surgir por su uso continuado.',
    },
  ],
  complementario: [
    {
      texto:
        '<p>Maillé, E. (2012). <i>VMware vSphere 5 en el seno del Datacenter.</i> Ediciones Eni.</p>',
      tipo: 'Libro',
      link:
        'https://www.ediciones-eni.com/libro/vmware-vsphere-5-en-el-seno-del-datacenter-version-online-9782746078451',
    },
    {
      texto:
        '<p>Puche, D. (2016). <i>La seguridad informática en la PYME</i>. Ediciones Eni. <p>',
      tipo: 'Libro',
      link:
        'https://www.ediciones-eni.com/libro/la-seguridad-informatica-en-la-pyme-situacion-actual-y-mejores-practicas-version-online-9782409001819',
    },
    {
      texto: 'IBM Docs. (2021). Componentes de la alta disponibilidad.',
      tipo: 'Documentación',
      link:
        'https://www.ibm.com/docs/es/i/7.3?topic=overview-components-high-availability',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Peter Emerson Pinchao',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
