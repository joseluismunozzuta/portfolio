import type { Project } from "./types";

/**
 * Para agregar un proyecto copia un bloque, cambia el slug y usa en `stack`
 * nombres que existan en data/tech.ts (si no existen, el build falla y te
 * dice cuál falta). Las capturas van en public/projects/.
 */
export const projects: Project[] = [
  {
    slug: "hostito",
    name: "Hostito",
    kind: "Producto propio, con clientes",
    period: "2022 – hoy",
    tagline:
      "Sistema de gestión hotelera para hostales del Perú: recepción en vivo, caja que cuadra sola, boletas SUNAT automáticas y el hotel entero en un bot de Telegram.",
    proof:
      "Opera a diario en los 5 hostales de Hostales Elixer desde 2022. Lo diseñé, lo programé, lo instalo y le doy soporte yo solo.",
    highlights: [
      "Facturación electrónica propia: genera el XML UBL 2.1, lo firma digitalmente y lo envía a SUNAT por web service, y guarda la constancia de recepción de cada boleta, factura y nota de crédito",
      "Bot de Telegram para el dueño: /hoy, /turno, /stock y /dashboard responden con cifras y con un gráfico generado en el servidor",
      "Tablero de recepción en vivo por WebSocket, check-in con DNI, estadías por noche o por horas, consumos a la habitación e inventario con alertas de stock",
      "Cierre de turno que cuadra la caja por medio de pago (efectivo, Yape, tarjeta) y envía el reporte en Excel por correo y Telegram",
      "Instalador de Windows de un clic: Java reducido con jlink, MySQL y la app como servicios, licencias firmadas con RSA y funciona sin internet",
      "Marca completa: landing page, identidad visual, mascota y contenido para Instagram",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "MySQL",
      "Thymeleaf",
      "Tailwind CSS",
      "daisyUI",
      "WebSocket",
      "Chart.js",
      "Facturación electrónica SUNAT",
      "XML UBL 2.1",
      "Firma digital XML",
      "Web services SOAP",
      "Bot de Telegram",
      "Java 2D",
      "Apache POI",
      "OpenPDF",
      "Correo SMTP",
      "Firmas RSA",
      "Servicios de Windows",
      "Inno Setup",
      "Netlify",
      "Maven",
    ],
    links: [{ label: "Visitar el sitio de Hostito", href: "https://hostito.netlify.app/" }],
    images: [
      {
        src: "/projects/hostito-recepcion.jpg",
        alt: "Tablero de recepción de Hostito: habitaciones disponibles, ocupadas y en limpieza por piso",
        width: 1600,
        height: 770,
      },
      {
        src: "/projects/hostito-panel-telegram.jpg",
        alt: "El mismo panel de ingresos en la web y en el bot de Telegram de Hostito",
        width: 1080,
        height: 1350,
      },
    ],
  },
  {
    slug: "polla-mundial-2026",
    name: "Polla Mundial 2026",
    kind: "Proyecto personal",
    period: "2026",
    tagline:
      "La polla del Mundial que usamos con mis amigos: grupos privados, pronósticos partido a partido y una tabla que se actualiza sola.",
    highlights: [
      "Grupos privados con código de invitación y administradores por grupo",
      "Puntaje automático: 5 por marcador exacto, 3 por acertar el resultado y bonos en eliminatorias por clasificado y penales",
      "Comodines que duplican puntos y se ganan con rachas de aciertos, y 13 logros de bronce, plata y oro",
      "Pronósticos especiales de campeón y goleador con buscador de jugadores de las 48 selecciones",
      "Calendario de partidos, asistencia a cada partido, notificaciones push y tarjetas del ranking para compartir como imagen",
    ],
    images: [
      {
        src: "/projects/polla-tabla.jpg",
        alt: "Tabla de posiciones de un grupo de la Polla Mundial 2026 con puntos, marcadores exactos, aciertos y fallos (datos de prueba)",
        width: 1600,
        height: 770,
      },
      {
        src: "/projects/polla-partido-movil.jpg",
        alt: "Detalle de un partido en vivo en el celular: casa donde se verá y confirmación de asistencia (datos de prueba)",
        width: 780,
        height: 975,
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "FullCalendar",
      "Firebase Auth",
      "Cloud Firestore",
      "Cloud Functions",
      "Firebase Cloud Messaging",
    ],
  },
  {
    slug: "timeline-mar-jose",
    name: "Timeline Mar & Jose",
    kind: "Proyecto personal",
    period: "2026",
    tagline:
      "Una línea de tiempo privada de pareja: cada momento con su foto, el lugar, una canción y la reseña de cada uno.",
    highlights: [
      "Cambios sincronizados en vivo entre los dos con Firestore",
      "Búsqueda de canciones de Spotify desde una Cloud Function, para no exponer las claves en el navegador",
      "Fotos en Firebase Storage y carrusel de momentos con Swiper",
      "Compilado como sitio estático y publicado en Netlify",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "Swiper",
      "Cloud Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Cloud Functions",
      "Spotify API",
      "Netlify",
    ],
  },
  {
    slug: "expediente-confidencial",
    name: "Expediente Confidencial JL",
    kind: "Proyecto personal",
    period: "2026",
    tagline:
      "Invitación de cumpleaños convertida en un caso policial: los invitados son testigos citados a declarar y cada uno recibe una pregunta secreta para el interrogatorio.",
    highlights: [
      "Confirmación de asistencia con Google, editable desde cualquier dispositivo",
      "Cada testigo recibe al azar una pregunta sin repetir, asignada dentro de una transacción de Firestore",
      "La lista de preguntas se desclasifica el día del evento, y esa fecha la imponen las reglas de seguridad, no el navegador",
      "Panel de administración protegido, lista de regalos y cuenta regresiva en vivo",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "daisyUI",
      "shadcn/ui",
      "Firebase Auth",
      "Cloud Firestore",
      "Reglas de seguridad de Firestore",
    ],
  },
  {
    slug: "monitoreo-adultos-mayores",
    name: "Monitoreo de adultos mayores",
    kind: "Tesis de Ingeniería Electrónica",
    period: "PUCP",
    tagline:
      "Sistema de vida asistida que mide el pulso de un adulto mayor que vive solo y avisa a su familia ante una emergencia.",
    proof: "Validado en una vivienda real, con 93% de precisión en la medición del pulso.",
    highlights: [
      "Wearable con medición de pulso y detección de caídas",
      "Botones de emergencia inalámbricos y alertas de prevención de caídas",
      "Unidad de control ESP32 con respaldo por GSM y SMS si cae el internet",
      "App Android sobre Firebase para que la familia vea el estado en tiempo real",
    ],
    stack: ["ESP32", "Wearables", "Android", "Cloud Firestore", "GSM / SMS"],
  },
  {
    slug: "este-portafolio",
    name: "Este portafolio",
    kind: "Proyecto personal",
    period: "2026",
    tagline:
      "Sitio estático en Astro donde los datos van separados del diseño: la lista de skills se arma sola a partir de los proyectos y trabajos.",
    highlights: [
      "Catálogo único de tecnologías: el build falla si un proyecto usa un nombre que no existe",
      "Sin JavaScript en el navegador salvo lo indispensable, modo oscuro y accesible con teclado",
    ],
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
  },
];
