import type { Indicator } from "@/types";

const BASE = "https://montevidata.montevideo.gub.uy";

export const indicators: Indicator[] = [
  {
    id: "recoleccion-playas",
    title: "Recolección de residuos en playas",
    slug: "recoleccion-de-residuos-en-playas",
    shortDescription:
      "La Intendencia de Montevideo lleva a cabo un exhaustivo plan de limpieza y mantenimiento de las playas de la ciudad durante todo el año.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2024-10/foto_playas.png?itok=ILJ96eOO`,
    description:
      "La Intendencia de Montevideo lleva a cabo un exhaustivo plan de limpieza y mantenimiento de las playas de la ciudad durante todo el año. Este trabajo se enfoca en mantener las playas en condiciones óptimas para el uso público, preservando el ecosistema costero y garantizando la calidad del agua. Las principales tareas realizadas incluyen: señalización de playas habilitadas y no recomendadas; monitoreo constante del agua y la biodiversidad; conservación del ecosistema (protección de vegetación dunar, monitoreo de calidad del agua); y limpieza mediante recolección manual y mecánica de residuos.",
    tareas: [
      "Señalización: indicación clara de las playas habilitadas para baño y aquellas no recomendadas.",
      "Monitoreo constante: análisis del agua y de la biodiversidad de las playas.",
      "Conservación del ecosistema: protección de la vegetación dunar y monitoreo de la calidad del agua.",
      "Limpieza: recolección manual y mecánica de residuos, desde pequeños fragmentos hasta grandes acumulaciones.",
    ],
    resultados: [
      "Monitoreo ecosistémico: se ha iniciado un estudio para conocer mejor las especies que habitan en las playas.",
      "Playas habilitadas: 19 playas son consideradas aptas para baño y son monitoreadas regularmente.",
      "Residuos retirados anualmente: casi 2.400 toneladas.",
    ],
    objetivos: [
      "Promover el uso responsable de las playas.",
      "Preservar el ecosistema costero y la biodiversidad.",
      "Garantizar la calidad del agua y la seguridad de los bañistas.",
    ],
    dataLinks: [{ label: "Tabla de datos de recolección en playas", url: "https://ckan.montevideo.gub.uy/dataset/residuos-retirados-por-playa" }],
  },
  {
    id: "ecocentros",
    title: "Ecocentros",
    slug: "ecocentros",
    shortDescription:
      "Los ecocentros permiten la correcta disposición de los materiales y contribuyen con la limpieza de la ciudad.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2024-04/20230703dicimouysm20900.jpg?itok=mU2_UD--`,
    description:
      "Los ecocentros permiten la correcta disposición de los materiales y contribuyen con la limpieza de la ciudad. A su vez, generan oportunidades laborales y aportan al desarrollo de nuevos productos y emprendimientos. Todos los muebles, electrodomésticos y artículos del hogar que se depositan en los ecocentros son llevados al programa Montevideo Integra, donde clasificadoras y clasificadores les dan un tratamiento adecuado brindándoles una segunda oportunidad.",
    dataLinks: [{ label: "Tablas de datos de ecocentros", url: "https://ckan.montevideo.gub.uy/dataset/ecocentros" }],
  },
  {
    id: "boya-meteorologica",
    title: "Boya meteorológica",
    slug: "boya-meteorologica",
    shortDescription:
      "La boya meteorológica reporta datos sobre la calidad del agua del Río de la Plata en tiempo real.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2024-01/Boya%20meteorol%C3%B3gica.jpg?itok=LtaMqu6C`,
    description:
      "En el marco del proyecto «Modelo predictivo de la costa en tiempo real de la calidad bacteriológica de las playas de Montevideo», la Intendencia de Montevideo, junto con el Servicio de Iluminación y Balizamiento de la Armada y la Facultad de Ingeniería, llevó a cabo el fondeo de la boya meteorológica al sur de la salida del emisario de Punta Carretas. Las magnitudes que se reportan son: precipitación, presión atmosférica, velocidad y dirección del viento, velocidad y dirección de las corrientes, temperatura del agua, altura máxima y significativa del oleaje, período de pico y dirección media. Los datos publicados son datos crudos obtenidos directamente de los sensores, sin control ni procesamiento previo.",
    dataLinks: [{ label: "Datos de presión, precipitación, viento, corriente y oleaje", url: "https://ckan.montevideo.gub.uy/dataset/boya-meteorologica" }],
  },
  {
    id: "estacion-transferencia",
    title: "Estación de Transferencia de Residuos Sólidos Urbanos",
    slug: "estacion-de-transferencia-de-residuos-solidos-urbanos",
    shortDescription:
      "Recepciona residuos mezclados para luego trasladarlos al Sitio de Disposición Final.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2024-01/20231226dicimouysm0041.jpg?itok=sxBru052`,
    description:
      "La Estación de Transferencia de Residuos, ubicada en Ruta 102 y Cno. Manuel M. Fortet, funciona como punto intermedio para la descarga de residuos entre circuitos de la zona oeste, que posteriormente son trasladados al Sitio de Disposición Final de Residuos. En esta se recepcionan, acondicionan y almacenan residuos mezclados provenientes de domicilios, actividades sociales, culturales, limpieza de espacios públicos y basurales.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/estacion-de-transferencia-de-residuos-solidos-urbanos" }],
  },
  {
    id: "transportistas-privados",
    title: "Transportistas privados de residuos",
    slug: "transportistas-privados-de-residuos",
    shortDescription:
      "Ubicación y cantidad de transportistas habilitados y estado de transmisión de datos en tiempo real.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-10/Transportistas_1.jpg?itok=hH_CY5pP`,
    description:
      "Los generadores de residuos no domiciliarios son responsables de la gestión ambientalmente adecuada (clasificación, acopio, tratamiento, transporte y disposición final por operadores habilitados) y de estar en regla con la documentación que permita controlar el cumplimiento de cada etapa (trazabilidad). Para cumplir con la trazabilidad pueden: contratar el Servicio Especial de Transporte de la División Limpieza; realizar el transporte por medio propio previo registro de empresa y vehículos; o contratar a una empresa transportista debidamente registrada y habilitada por la Intendencia.",
  },
  {
    id: "disposicion-final",
    title: "Disposición final de residuos",
    slug: "disposicion-final-de-residuos",
    shortDescription:
      "El sitio DFR Felipe Cardoso recibe residuos no peligrosos; evoluciona de vertedero a relleno sanitario.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-10/dji0691.jpg?itok=RRPaQFl3`,
    description:
      "El sitio de disposición final de residuos (DFR) Felipe Cardoso está ubicado al noreste del departamento y abarca unas 77 hectáreas. A Felipe Cardoso ingresan residuos no peligrosos de distintos orígenes: residencial, limpieza pública, institucional, comercial, industrial y de obras civiles. Este sitio comenzó sus operaciones como vertedero a cielo abierto en la década de 1980 y ha ido incorporando tecnología e infraestructura hasta ser un relleno sanitario. Las primeras celdas (Usinas 5, 6 y 7) están clausuradas y con cobertura vegetal. Desde inicios de los años 2000 operan los módulos de la Usina 8, con sistema de captación, tratamiento de lixiviados y gases.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/disposicion-final-de-residuos" }],
  },
  {
    id: "areas-liberadas",
    title: "Áreas Liberadas",
    slug: "areas-liberadas",
    shortDescription:
      "Limpieza y recuperación de cursos de agua y ecosistemas contaminados por residuos.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-09/Areas.jpg?itok=MBGEX-fY`,
    description:
      "Áreas Liberadas es un programa de la Intendencia de Montevideo que inició en febrero de 2022, con el objetivo principal de proteger el agua. Dentro de la estrategia Montevideo más verde, este proyecto se enfoca en la limpieza y recuperación de los cursos de agua y ecosistemas asociados que están contaminados por los residuos.",
    dataLinks: [{ label: "Datos abiertos", url: "https://ckan.montevideo.gub.uy/dataset/areas-liberadas" }],
  },
  {
    id: "veredas-accesibles",
    title: "Veredas Accesibles",
    slug: "veredas-accesibles",
    shortDescription:
      "Programa Camino a clase: caminos peatonales seguros y accesibles a escuelas públicas.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-08/veredas.jpeg?itok=jX5RXIVQ`,
    description:
      "El programa Veredas Accesibles tiene como objetivo garantizar caminos peatonales seguros y accesibles hacia las escuelas públicas de Montevideo. Se priorizan las escuelas con mayor cantidad de estudiantes y se realizan obras de mejora en las veredas del entorno escolar.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/veredas-accesibles" }],
  },
  {
    id: "montevideo-se-ilumina",
    title: "Observatorio Montevideo se Ilumina",
    slug: "observatorio-montevideo-se-ilumina",
    shortDescription:
      "Sustitución masiva de luminarias a LED: 70.000 puntos de iluminación en calles barriales.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-04/WhatsApp%20Image%202023-04-10%20at%2019.26.45.jpeg?itok=wXWG7Kxh`,
    description:
      "Montevideo se Ilumina es un programa de sustitución masiva de luminarias a LED en calles barriales. El Observatorio Montevideo se Ilumina permite visualizar el avance de la sustitución de luminarias en el territorio. Se han sustituido más de 70.000 puntos de iluminación.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/observatorio-montevideo-se-ilumina" }],
  },
  {
    id: "crisis-hidrica",
    title: "Análisis del agua durante la crisis hídrica",
    slug: "analisis-del-agua-durante-la-crisis-hidrica",
    shortDescription:
      "Monitoreo de la calidad del agua corriente en diferentes zonas según norma UNIT 833:2008.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-05/20140101dicimouyap0089.jpg?itok=_gAswAAj`,
    description:
      "Durante la crisis hídrica la Intendencia de Montevideo realizó un monitoreo de la calidad del agua corriente en diferentes zonas de la ciudad. Los análisis se realizaron según la norma UNIT 833:2008 y se publican los resultados para transparencia.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/analisis-del-agua-durante-la-crisis-hidrica" }],
  },
  {
    id: "saneamiento-drenaje",
    title: "Sistema de Saneamiento y Drenaje Urbano de Montevideo",
    slug: "sistema-de-saneamiento-y-drenaje-urbano-de-montevideo",
    shortDescription:
      "Infraestructura para aguas servidas y pluviales hasta su punto de disposición final.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/saneamiento.jpg?itok=2XHSnCLb`,
    description:
      "El Sistema de Saneamiento y Drenaje Urbano de Montevideo comprende la infraestructura que permite evacuar las aguas servidas y pluviales desde su origen hasta el punto de disposición final. Incluye redes, estaciones de bombeo, emisarios y plantas de tratamiento.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/sistema-de-saneamiento-y-drenaje-urbano-de-montevideo" }],
  },
  {
    id: "red-hidrometeorologica",
    title: "Red Hidrometeorológica de Montevideo (RHM)",
    slug: "red-hidrometeorologica-de-montevideo-rhm",
    shortDescription:
      "Pluviómetros y estaciones meteorológicas distribuidos en distintos puntos de Montevideo.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/lluvia.jpg?itok=05YVVnF0`,
    description:
      "La Red Hidrometeorológica de Montevideo (RHM) está compuesta por pluviómetros y estaciones meteorológicas distribuidos en distintos puntos del departamento. Permite monitorear precipitaciones, temperatura, humedad y otros parámetros para la gestión del drenaje y la planificación urbana.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/red-hidrometeorologica-de-montevideo-rhm" }],
  },
  {
    id: "limpieza-gestion-residuos",
    title: "Limpieza y gestión de residuos",
    slug: "limpieza-y-gestion-de-residuos",
    shortDescription:
      "Recolección, contenedores, recuperación de espacios, limpieza de playas y ramblas, barrido y ferias.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/limpieza-recoleccion.jpg?itok=uNhFHnWa`,
    description:
      "La División Limpieza de la Intendencia de Montevideo es responsable de la recolección domiciliaria, contenedores, recuperación de espacios, limpieza de playas y ramblas, barrido y ferias. Incluye el programa de recolección de residuos especiales y la gestión de ecocentros.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/limpieza-y-gestion-de-residuos" }],
  },
  {
    id: "montevideo-mas-verde",
    title: "Montevideo más verde en línea",
    slug: "montevideo-mas-verde-en-linea",
    shortDescription:
      "Gestión de solicitudes de bolsones, residuos fuera de contenedores y recolección de especiales.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/dsc1880_01.jpg?itok=ChKyMUsC`,
    description:
      "Montevideo más verde en línea permite gestionar solicitudes de bolsones para residuos fuera de contenedores, recolección de residuos especiales (muebles, electrodomésticos, etc.) y otras gestiones relacionadas con la limpieza y el ambiente.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/montevideo-mas-verde-en-linea" }],
  },
  {
    id: "sistema-unico-respuesta",
    title: "Sistema único de Respuesta",
    slug: "sistema-unico-de-respuesta",
    shortDescription:
      "La ciudadanía registra y la IM gestiona reclamos, denuncias, solicitudes y sugerencias.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/sistema-unico.jpg?itok=As3fif-E`,
    description:
      "El Sistema Único de Respuesta (SUR) es el canal mediante el cual la ciudadanía registra y la Intendencia de Montevideo gestiona reclamos, denuncias, solicitudes y sugerencias. Incluye temas ambientales como residuos, limpieza, arbolado y contaminación.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/sistema-unico-de-respuesta" }],
  },
  {
    id: "radiacion-solar",
    title: "Radiación Solar",
    slug: "radiacion-solar",
    shortDescription:
      "Medición diaria de radiación ultravioleta desde el Edificio Anexo del Palacio Municipal.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2023-01/900x451_Radiacion_Solar.jpg?itok=jtOHE1iR`,
    description:
      "La Intendencia de Montevideo mide diariamente la radiación ultravioleta desde el Edificio Anexo del Palacio Municipal. Los datos se publican para que la población pueda tomar precauciones según el índice UV (uso de protector solar, horarios de exposición, etc.).",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/radiacion-solar" }],
  },
  {
    id: "ranking-contenedores",
    title: "Ranking de contenedores",
    slug: "ranking-de-contenedores",
    shortDescription:
      "Priorización de circuitos de recolección según días de acumulación de contenedores.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2022-11/contenedores.jpg?itok=XcZxLhQL`,
    description:
      "El ranking de contenedores prioriza los circuitos de recolección según la cantidad de días de acumulación de residuos en los contenedores. Permite optimizar la frecuencia de vaciado y mejorar el servicio en las zonas con mayor demanda.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/ranking-de-contenedores" }],
  },
  {
    id: "playas",
    title: "Playas",
    slug: "playas",
    shortDescription:
      "Estudios permanentes de calidad del agua en 21 playas desde Punta Espinillo hasta Miramar.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/playas.jpg?itok=oe3NtNx_`,
    description:
      "La Intendencia de Montevideo realiza estudios permanentes de la calidad del agua en 21 playas, desde Punta Espinillo hasta Miramar. Se analizan indicadores bacteriológicos según normativa nacional e internacional para determinar si las playas están aptas para baño.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/playas" }],
  },
  {
    id: "calidad-del-aire",
    title: "Calidad del Aire",
    slug: "calidad-del-aire",
    shortDescription:
      "SECCA realiza control y evaluación continua. Red de seis estaciones en Montevideo.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/calidad-aire_0.jpg?itok=dCCxo8Pw`,
    description:
      "El Sistema de Evaluación de la Calidad del Aire (SECCA) realiza el control y la evaluación continua de la calidad del aire en Montevideo. La red cuenta con seis estaciones de monitoreo que miden contaminantes como material particulado, ozono y óxidos de nitrógeno.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/calidad-del-aire" }],
  },
  {
    id: "vertidos-industriales",
    title: "Vertidos Industriales",
    slug: "vertidos-industriales",
    shortDescription:
      "Evaluación periódica del desempeño ambiental de industrias generadoras de efluentes.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2022-10/laboratorio.jpg?itok=RFBJVHLB`,
    description:
      "La Intendencia de Montevideo realiza evaluación periódica del desempeño ambiental de las industrias que generan efluentes (vertidos). Se controla el cumplimiento de normativa y se promueve la reducción de la carga contaminante vertida a los cursos de agua.",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/vertidos-industriales" }],
  },
  {
    id: "cursos-de-agua",
    title: "Cursos de agua",
    slug: "cursos-de-agua",
    shortDescription:
      "Monitoreo de calidad del agua del sistema hídrico: ríos, arroyos, cañadas y humedales.",
    image: `${BASE}/sites/default/files/styles/escala_y_recorte_900x451/public/2021-12/cuersos-agua_0.jpg?itok=kwrGN1u6`,
    description:
      "La Intendencia de Montevideo monitorea la calidad del agua del sistema hídrico del departamento: ríos, arroyos, cañadas y humedales. Se realizan muestreos periódicos para evaluar parámetros físicos, químicos y bacteriológicos que permiten conocer el estado de los cuerpos de agua.",
    officialPath: "/cursos-de-agua",
    dataLinks: [{ label: "Tabla de datos", url: "https://ckan.montevideo.gub.uy/dataset/cursos-de-agua" }],
  },
];
