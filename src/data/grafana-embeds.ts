/**
 * Grafana dashboard embeds for indicator detail pages.
 * Dashboard IDs and panel IDs from montevidata.montevideo.gub.uy/ambiental/[slug].
 * Used to show maps/graphs without linking to the legacy site.
 */
const GRAF_BASE = "https://graf.montevideo.gub.uy/graf/d-solo";

export interface GrafanaPanel {
  panelId: number;
  title: string;
}

export interface GrafanaConfig {
  dashboardId: string;
  dashboardName: string;
  panels: GrafanaPanel[];
  /** Optional query string (e.g. theme=light, var-anio=2024) */
  params?: string;
}

const GRAFANA_CONFIG: Record<string, GrafanaConfig> = {
  playas: {
    dashboardId: "tIK9EB57j",
    dashboardName: "datos-de-agua-de-playas",
    params: "orgId=2&kiosk=1&refresh=5m",
    panels: [
      { panelId: 15, title: "Mapa o visualización de playas" },
      { panelId: 21, title: "Datos de agua por playa" },
      { panelId: 28, title: "Calidad del agua" },
      { panelId: 29, title: "Indicadores por playa" },
      { panelId: 31, title: "Evolución o resumen" },
    ],
  },
  "calidad-del-aire": {
    dashboardId: "s9OVGkI7s",
    dashboardName: "calidad-del-aire",
    params: "orgId=2&theme=light",
    panels: [
      { panelId: 4, title: "Mapa o estaciones" },
      { panelId: 14, title: "Indicadores de calidad" },
      { panelId: 21, title: "Gráfico de evolución" },
      { panelId: 22, title: "Datos por estación" },
    ],
  },
  ecocentros: {
    dashboardId: "abc01c56-f569-4009-a2d7-83839a013be6",
    dashboardName: "ecocentros",
    params: "orgId=2&var-anio=2024",
    panels: [
      { panelId: 4, title: "Ecocentros por año" },
      { panelId: 5, title: "Datos o mapa de ecocentros" },
    ],
  },
  "boya-meteorologica": {
    dashboardId: "d93be79f-b404-40ea-8446-86eeee628cc2",
    dashboardName: "boya-externo",
    params: "orgId=2",
    panels: [
      { panelId: 2, title: "Datos de la boya" },
      { panelId: 10, title: "Visualización" },
      { panelId: 46, title: "Indicadores" },
    ],
  },
  "estacion-de-transferencia-de-residuos-solidos-urbanos": {
    dashboardId: "LdqzY9enx",
    dashboardName: "actividad-etra-por-mes",
    params: "orgId=2&refresh=15m",
    panels: [
      { panelId: 4, title: "Actividad por mes" },
      { panelId: 8, title: "Datos" },
      { panelId: 19, title: "Gráfico" },
    ],
  },
  "disposicion-final-de-residuos": {
    dashboardId: "LdqzY9enr",
    dashboardName: "actividad-dfr-por-mes",
    params: "orgId=2&refresh=15m&theme=light",
    panels: [
      { panelId: 2, title: "Actividad DFR" },
      { panelId: 4, title: "Por mes" },
    ],
  },
  "cursos-de-agua": {
    dashboardId: "5SmSAY27f",
    dashboardName: "arroyos",
    params: "orgId=2&refresh=1d&theme=light",
    panels: [
      { panelId: 10, title: "Cursos de agua" },
      { panelId: 11, title: "Mapa o datos" },
      { panelId: 12, title: "Indicadores" },
      { panelId: 13, title: "Evolución" },
    ],
  },
  "radiacion-solar": {
    dashboardId: "rWv7iZInk",
    dashboardName: "radiacion-solar",
    params: "orgId=2&refresh=1m&theme=light",
    panels: [
      { panelId: 4, title: "Índice UV / Radiación" },
    ],
  },
  "limpieza-y-gestion-de-residuos": {
    dashboardId: "dVcOCNw7z",
    dashboardName: "estado-de-la-recoleccion",
    params: "orgId=2&refresh=1d&theme=light",
    panels: [
      { panelId: 5, title: "Estado de la recolección" },
      { panelId: 7, title: "Mapa o cobertura" },
      { panelId: 13, title: "Indicadores" },
      { panelId: 17, title: "Gráfico 1" },
      { panelId: 18, title: "Gráfico 2" },
      { panelId: 20, title: "Datos por zona" },
      { panelId: 28, title: "Evolución" },
      { panelId: 29, title: "Resumen" },
    ],
  },
};

function buildGrafUrl(config: GrafanaConfig, panelId: number): string {
  const q = [config.params, `panelId=${panelId}`].filter(Boolean).join("&");
  return `${GRAF_BASE}/${config.dashboardId}/${config.dashboardName}?${q}`;
}

export function getGrafanaSlidesForSlug(slug: string): { title: string; url: string; iframeTitle: string }[] | null {
  const config = GRAFANA_CONFIG[slug];
  if (!config?.panels?.length) return null;
  return config.panels.map((p) => ({
    title: p.title,
    url: buildGrafUrl(config, p.panelId),
    iframeTitle: `${config.dashboardName} - ${p.title}`,
  }));
}
