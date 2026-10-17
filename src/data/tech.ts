import type { TechCategory } from "./types";

/**
 * Catálogo de tecnologías. Proyectos y trabajos referencian estos nombres y
 * la sección de skills se arma sola: si agregas algo aquí y no lo usas en
 * ningún lado, no aparece.
 */
export const tech: Record<string, TechCategory> = {
  "ISO 8583": "Medios de pago",
  "EMV": "Medios de pago",
  "FIS IST Switch": "Medios de pago",
  "FIS IST Clearing": "Medios de pago",
  "FIS MAS": "Medios de pago",
  "Clearing Visa y Mastercard": "Medios de pago",
  "Facturación electrónica SUNAT": "Medios de pago",

  "C": "Backend",
  "C++": "Backend",
  "Pro*C": "Backend",
  "Java": "Backend",
  "Spring Boot": "Backend",
  "Spring Security": "Backend",
  "APIs REST": "Backend",
  "WebSocket": "Backend",
  "Python": "Backend",
  "Shell scripting": "Backend",
  "Node.js": "Backend",
  "Maven": "Backend",
  "Java 2D": "Backend",
  "Firmas RSA": "Backend",

  "Astro": "Frontend",
  "React": "Frontend",
  "Next.js": "Frontend",
  "TypeScript": "Frontend",
  "JavaScript": "Frontend",
  "Tailwind CSS": "Frontend",
  "daisyUI": "Frontend",
  "shadcn/ui": "Frontend",
  "Thymeleaf": "Frontend",
  "Chart.js": "Frontend",
  "Swiper": "Frontend",
  "FullCalendar": "Frontend",

  "Oracle SQL": "Datos",
  "MySQL": "Datos",
  "JPA / Hibernate": "Datos",
  "Cloud Firestore": "Datos",
  "Reglas de seguridad de Firestore": "Datos",
  "XML UBL 2.1": "Datos",
  "Apache POI": "Datos",
  "OpenPDF": "Datos",

  "Firebase Auth": "Nube e infraestructura",
  "Firebase Storage": "Nube e infraestructura",
  "Cloud Functions": "Nube e infraestructura",
  "Firebase Cloud Messaging": "Nube e infraestructura",
  "Netlify": "Nube e infraestructura",
  "Servicios de Windows": "Nube e infraestructura",
  "Inno Setup": "Nube e infraestructura",

  "Bot de Telegram": "Integraciones",
  "Web services SOAP": "Integraciones",
  "Firma digital XML": "Integraciones",
  "Google Maps API": "Integraciones",
  "Spotify API": "Integraciones",
  "Correo SMTP": "Integraciones",
  "GSM / SMS": "Integraciones",

  "Apex": "Salesforce",
  "Lightning Web Components": "Salesforce",
  "Process Automation": "Salesforce",

  "ESP32": "Hardware e IoT",
  "Wearables": "Hardware e IoT",
  "Android": "Hardware e IoT",
};

export const categoryOrder: TechCategory[] = [
  "Medios de pago",
  "Backend",
  "Frontend",
  "Datos",
  "Nube e infraestructura",
  "Integraciones",
  "Salesforce",
  "Hardware e IoT",
];
