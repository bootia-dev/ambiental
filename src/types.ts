export interface DataLink {
  label: string;
  url: string;
}

export interface Indicator {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  /** Optional image URL for carousel card */
  image?: string;
  /** Full description for detail page (from official site) */
  description?: string;
  /** Optional "tareas" or key points list */
  tareas?: string[];
  /** Resultados section (from official site) */
  resultados?: string[];
  /** Objetivos section (from official site) */
  objetivos?: string[];
  /** Links to CKAN/datasets or external pages */
  dataLinks?: DataLink[];
  /** Official page URL (if different from /ambiental/{slug}) */
  officialPath?: string;
}
