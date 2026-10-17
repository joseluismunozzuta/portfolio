import { categoryOrder, tech } from "../data/tech";
import { projects } from "../data/projects";
import { jobs } from "../data/experience";
import type { TechCategory } from "../data/types";

/** Dónde se usó una tecnología: el proyecto o trabajo, con su ancla en la página. */
export type Usage = { label: string; href: string };

export type TechGroup = { category: TechCategory; items: string[] };

function assertKnown(name: string, source: string): void {
  if (!(name in tech)) {
    throw new Error(
      `"${name}" (en ${source}) no existe en src/data/tech.ts. ` +
        `Agrégalo al catálogo o corrige el nombre.`,
    );
  }
}

/** Agrupa una lista de tecnologías por categoría, en el orden del catálogo. */
export function groupByCategory(names: string[], source = "un stack"): TechGroup[] {
  const groups = new Map<TechCategory, string[]>();
  for (const name of names) {
    assertKnown(name, source);
    const category = tech[name]!;
    groups.set(category, [...(groups.get(category) ?? []), name]);
  }
  return categoryOrder
    .filter((category) => groups.has(category))
    .map((category) => ({ category, items: groups.get(category)! }));
}

/**
 * El índice de skills: por cada categoría, cada tecnología con los lugares
 * donde la usé. Una tecnología del catálogo que no se usa en ningún lado
 * no aparece.
 */
export type SkillRow = { name: string; usages: Usage[] };
export type SkillSection = { category: TechCategory; rows: SkillRow[] };

function buildIndex(): SkillSection[] {
  const usagesByTech = new Map<string, Usage[]>();

  const record = (name: string, usage: Usage, source: string) => {
    assertKnown(name, source);
    const list = usagesByTech.get(name) ?? [];
    if (!list.some((u) => u.label === usage.label)) list.push(usage);
    usagesByTech.set(name, list);
  };

  for (const project of projects) {
    for (const name of project.stack) {
      record(name, { label: project.name, href: `#${project.slug}` }, `projects.ts → ${project.slug}`);
    }
  }
  for (const job of jobs) {
    for (const name of job.stack) {
      record(name, { label: job.company, href: "#experiencia" }, `experience.ts → ${job.company}`);
    }
  }

  return categoryOrder
    .map((category) => ({
      category,
      rows: Object.keys(tech)
        .filter((name) => tech[name] === category && usagesByTech.has(name))
        .map((name) => ({ name, usages: usagesByTech.get(name)! })),
    }))
    .filter((section) => section.rows.length > 0);
}

export const skillIndex: SkillSection[] = buildIndex();

export const skillCount: number = skillIndex.reduce((total, s) => total + s.rows.length, 0);
