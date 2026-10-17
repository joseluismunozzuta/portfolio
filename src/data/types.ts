export type TechCategory =
  | "Medios de pago"
  | "Backend"
  | "Frontend"
  | "Datos"
  | "Nube e infraestructura"
  | "Integraciones"
  | "Salesforce"
  | "Hardware e IoT";

export type ProjectImage = {
  /** Ruta dentro de /public */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  period: string;
  /** Qué tipo de proyecto es: producto con clientes, personal, tesis... */
  kind: string;
  /** Una frase: qué es y para quién */
  tagline: string;
  /** Dato que demuestra que el proyecto es real (uso, escala, estado) */
  proof?: string;
  highlights: string[];
  /** Nombres exactos de data/tech.ts */
  stack: string[];
  links?: { label: string; href: string }[];
  /** Capturas reales; la primera es la principal */
  images?: ProjectImage[];
};

export type Role = { title: string; period: string };

export type Job = {
  company: string;
  context?: string;
  period: string;
  roles: Role[];
  points: string[];
  stack: string[];
};
