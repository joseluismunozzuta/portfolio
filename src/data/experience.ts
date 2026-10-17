import type { Job } from "./types";

export const jobs: Job[] = [
  {
    company: "FIS",
    context: "Plataforma de Culqi (BCP)",
    period: "abr. 2023 – hoy",
    roles: [
      { title: "Senior Consultant", period: "jul. 2025 – hoy" },
      { title: "Analyst Programmer II", period: "abr. 2023 – jul. 2025" },
    ],
    points: [
      "Líder técnico adjunto de la plataforma de procesamiento de tarjetas de Culqi: unos 2 millones de transacciones por ciclo, 3 ciclos al día y pago a comercios el mismo día.",
      "Bajé el batch de clearing de 25 a 10 minutos con carga en memoria, optimización de consultas e índices y planificación de memoria del servidor.",
      "Diseñé las reglas de calificación de tasas de intercambio Visa y Mastercard para los programas locales del Perú.",
      "Lidero la resolución de incidentes críticos en todo el flujo Switch, Clearing y MAS, y soy enlace técnico con Visa y Mastercard.",
      "Desarrollé APIs REST de onboarding de comercios en Spring Boot y customizaciones para Redeban (Colombia) y E-Global (México).",
    ],
    stack: [
      "C",
      "C++",
      "Pro*C",
      "Java",
      "Spring Boot",
      "APIs REST",
      "Python",
      "Shell scripting",
      "Oracle SQL",
      "ISO 8583",
      "EMV",
      "FIS IST Switch",
      "FIS IST Clearing",
      "FIS MAS",
      "Clearing Visa y Mastercard",
    ],
  },
  {
    company: "Hostales Elixer",
    context: "Freelance",
    period: "abr. 2022 – hoy",
    roles: [{ title: "Ingeniero de software, desarrollador único", period: "abr. 2022 – hoy" }],
    points: ["Construí y mantengo Hostito, el sistema con el que operan sus 5 hostales."],
    stack: [],
  },
  {
    company: "Oktana",
    period: "dic. 2021 – feb. 2023",
    roles: [{ title: "Software Engineer (Salesforce)", period: "dic. 2021 – feb. 2023" }],
    points: [
      "Aplicaciones Salesforce para clientes con Apex, Lightning Web Components y automatización de procesos.",
      "Frontend de un proyecto demo de Dreamforce para Salesforce.",
      "Tres certificaciones Salesforce en un año.",
    ],
    stack: ["Apex", "Lightning Web Components", "Process Automation", "JavaScript", "Node.js"],
  },
  {
    company: "Novatronic",
    period: "ene. 2020 – dic. 2021",
    roles: [
      { title: "Ingeniero de software", period: "ago. – dic. 2021" },
      { title: "Practicante C Developer", period: "ene. 2020 – ago. 2021" },
    ],
    points: [
      "Módulos en C para switches bancarios que procesan pagos de comercio electrónico, cajeros y POS.",
      "Pruebas unitarias, integrales y certificación de cada entrega.",
    ],
    stack: ["C", "ISO 8583", "EMV"],
  },
];

export const education = [
  {
    title: "Ingeniería Electrónica",
    place: "Pontificia Universidad Católica del Perú",
    period: "2016 – 2021",
    note: "Décimo superior. Título de Ingeniero Electrónico en 2023. Tesista del grupo IoT-PUCP.",
  },
  {
    title: "Intercambio en Informática",
    place: "Université de Montréal",
    period: "2019",
    note: "Beca ELAP del Gobierno de Canadá y beca DARI PUCP.",
  },
];

export const certifications = [
  { name: "Salesforce Platform Developer II", year: "2023" },
  { name: "Salesforce Platform Developer I", year: "2022" },
  { name: "Salesforce JavaScript Developer I", year: "2022" },
  { name: "Node.js Backend Development, Coderhouse", year: "2023" },
  { name: "DELF B2, France Éducation international", year: "" },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
  { name: "Francés", level: "DELF B2" },
  { name: "Portugués", level: "Avanzado" },
];
