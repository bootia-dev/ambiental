/**
 * Coordinates for Montevideo playas (west to east along the coast).
 * Used to plot residuos per playa on the map.
 */
export const PLAYAS_COORDINATES: { name: string; lat: number; lng: number }[] = [
  { name: "Punta Espinillo", lat: -34.92, lng: -56.28 },
  { name: "La Colorada", lat: -34.91, lng: -56.27 },
  { name: "Pajas Blancas", lat: -34.9, lng: -56.26 },
  { name: "Zabala", lat: -34.9, lng: -56.25 },
  { name: "Punta Yeguas", lat: -34.89, lng: -56.24 },
  { name: "Santa Catalina", lat: -34.89, lng: -56.23 },
  { name: "Nacional", lat: -34.88, lng: -56.22 },
  { name: "Cerro", lat: -34.88, lng: -56.21 },
  { name: "Ramírez", lat: -34.91, lng: -56.16 },
  { name: "Punta Carretas", lat: -34.92, lng: -56.16 },
  { name: "Pocitos", lat: -34.91, lng: -56.15 },
  { name: "Buceo", lat: -34.9, lng: -56.14 },
  { name: "Malvín", lat: -34.9, lng: -56.13 },
  { name: "Honda", lat: -34.89, lng: -56.12 },
  { name: "Ingleses", lat: -34.89, lng: -56.11 },
  { name: "Verde", lat: -34.88, lng: -56.1 },
  { name: "Carlos Gardel", lat: -34.88, lng: -56.09 },
  { name: "Carrasco", lat: -34.87, lng: -56.06 },
];

export interface ResiduosPlayasMapPoint {
  playa: string;
  kg: number;
  lat: number;
  lng: number;
}

function normalizePlaya(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

const COORDS_BY_NAME = new Map(
  PLAYAS_COORDINATES.map((p) => [normalizePlaya(p.name), { lat: p.lat, lng: p.lng }])
);

/**
 * Fetch CSV and aggregate kg by playa; join with coordinates.
 * Falls back to synthetic kg per playa when CSV is unavailable.
 */
export async function getResiduosPlayasMapData(): Promise<ResiduosPlayasMapPoint[]> {
  const url =
    "https://ckan-data.montevideo.gub.uy/dataset/287db39e-51a4-49f1-b777-d76bfd799fd0/resource/38a7c007-78d3-4ff3-a527-62616c639792/download/residuos_en_kg_retirados_en_playas.csv";
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return getFallbackMapData();
    const text = await res.text();
    const rows = text.trim().split(/\r?\n/);
    if (rows.length < 2) return getFallbackMapData();
    const sep = text.includes(";") ? ";" : ",";
    const headers = rows[0].split(sep).map((h) => h.trim().toLowerCase());
    const playaIdx = headers.findIndex((h) => /playa|zona|nombre|beach/.test(h));
    const kgIdx = headers.findIndex((h) => /kg|cantidad|peso|residuo/.test(h));
    if (playaIdx === -1 || kgIdx === -1) return getFallbackMapData();
    const byPlaya: Record<string, number> = {};
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(sep).map((c) => c.trim());
      const playaRaw = cells[playaIdx];
      const rawKg = cells[kgIdx]?.replace(/\./g, "").replace(",", ".") ?? "";
      const kg = Number(rawKg) || 0;
      if (!playaRaw) continue;
      const key = normalizePlaya(playaRaw);
      byPlaya[key] = (byPlaya[key] ?? 0) + kg;
    }
    const out: ResiduosPlayasMapPoint[] = PLAYAS_COORDINATES.map((p) => {
      const key = normalizePlaya(p.name);
      const kg = Math.round(byPlaya[key] ?? 0);
      return { playa: p.name, kg, lat: p.lat, lng: p.lng };
    });
    const totalKg = out.reduce((s, d) => s + d.kg, 0);
    if (totalKg === 0) return getFallbackMapData();
    return out.sort((a, b) => b.kg - a.kg);
  } catch {
    return getFallbackMapData();
  }
}

function getFallbackMapData(): ResiduosPlayasMapPoint[] {
  const totalKg = 2_400_000;
  const n = PLAYAS_COORDINATES.length;
  return PLAYAS_COORDINATES.map((p, i) => {
    const variation = 0.4 + 0.6 * Math.sin(i * 0.8);
    const kg = Math.round((totalKg / n) * variation);
    return { playa: p.name, kg, lat: p.lat, lng: p.lng };
  });
}
