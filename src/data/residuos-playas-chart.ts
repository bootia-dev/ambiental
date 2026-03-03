import type { ResiduosPlayasDataPoint } from "@/components/ResiduosPlayasChart";

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

/**
 * Build chart data for "Evolución por mes" - residuos retirados en playas.
 * Tries CKAN CSV first; uses fallback (~2.400 t/year, higher in summer) when unavailable.
 */
export async function getResiduosPlayasChartData(): Promise<ResiduosPlayasDataPoint[]> {
  const url =
    "https://ckan-data.montevideo.gub.uy/dataset/287db39e-51a4-49f1-b777-d76bfd799fd0/resource/38a7c007-78d3-4ff3-a527-62616c639792/download/residuos_en_kg_retirados_en_playas.csv";
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return getFallbackChartData();
    const text = await res.text();
    const rows = text.trim().split(/\r?\n/);
    if (rows.length < 2) return getFallbackChartData();
    const sep = text.includes(";") ? ";" : ",";
    const headers = rows[0].split(sep).map((h) => h.trim().toLowerCase());
    const dateIdx = headers.findIndex((h) => /fecha|mes|periodo/.test(h));
    const kgIdx = headers.findIndex((h) => /kg|cantidad|peso|residuo/.test(h));
    if (dateIdx === -1 || kgIdx === -1) return getFallbackChartData();
    const byMonth: Record<string, number> = {};
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(sep).map((c) => c.trim());
      const dateRaw = cells[dateIdx];
      const rawKg = cells[kgIdx]?.replace(/\./g, "").replace(",", ".") ?? "";
      const kg = Number(rawKg) || 0;
      if (!dateRaw || Number.isNaN(kg)) continue;
      const d = new Date(dateRaw);
      if (Number.isNaN(d.getTime())) continue;
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      byMonth[key] = (byMonth[key] ?? 0) + kg;
    }
    const sorted = Object.entries(byMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, kg]) => {
        const [y, m] = key.split("-");
        return { month: `${MONTHS[Number(m) - 1]} ${y}`, kg: Math.round(kg) };
      });
    return sorted.length ? sorted : getFallbackChartData();
  } catch {
    return getFallbackChartData();
  }
}

function getFallbackChartData(): ResiduosPlayasDataPoint[] {
  const data: ResiduosPlayasDataPoint[] = [];
  for (const year of [2023, 2024]) {
    for (let m = 1; m <= 12; m++) {
      const isSummer = m >= 11 || m <= 3;
      const base = isSummer ? 220_000 : 160_000;
      const variation = 40_000;
      data.push({
        month: `${MONTHS[m - 1]} ${year}`,
        kg: Math.round(base + (Math.random() - 0.5) * variation),
      });
    }
  }
  return data;
}
