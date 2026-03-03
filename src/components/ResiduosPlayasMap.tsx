"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { ResiduosPlayasMapPoint } from "@/data/residuos-playas-map";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((m) => m.CircleMarker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

interface ResiduosPlayasMapProps {
  data: ResiduosPlayasMapPoint[];
}

const MONTEVIDEO_CENTER: [number, number] = [-34.9, -56.17];
const DEFAULT_ZOOM = 12;

/** Scale circle radius: area proportional to kg, so radius ~ sqrt(kg). Clamp for min/max pixels. */
function radiusFromKg(kg: number, minR = 8, maxR = 32): number {
  if (kg <= 0) return minR;
  const r = Math.sqrt(kg);
  const scale = (maxR - minR) / (Math.sqrt(500_000) - Math.sqrt(5_000));
  return Math.min(maxR, Math.max(minR, minR + (r - Math.sqrt(5_000)) * scale));
}

export default function ResiduosPlayasMap({ data }: ResiduosPlayasMapProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const radii = useMemo(() => {
    const maxKg = Math.max(...data.map((d) => d.kg), 1);
    const minKg = Math.min(...data.filter((d) => d.kg > 0).map((d) => d.kg), maxKg) || 1000;
    return new Map(data.map((d) => [d.playa, radiusFromKg(d.kg, 6, 28)]));
  }, [data]);

  if (!data?.length) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center text-slate-500 dark:text-slate-400">
        No hay datos de playas.
      </div>
    );
  }

  if (!mounted) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        Cargando mapa…
      </div>
    );
  }

  return (
    <div className="h-full w-full [&_.leaflet-container]:h-full [&_.leaflet-container]:rounded-b-2xl [&_.leaflet-container]:z-0">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <MapContainer
        center={MONTEVIDEO_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((point) => (
          <CircleMarker
            key={point.playa}
            center={[point.lat, point.lng]}
            radius={radii.get(point.playa) ?? 12}
            pathOptions={{
              fillColor: "#0d9488",
              color: "#0f766e",
              weight: 1.5,
              opacity: 0.9,
              fillOpacity: 0.6,
            }}
            eventHandlers={{
              mouseover: (e) => {
                e.target.setStyle({ fillOpacity: 0.85, weight: 2 });
                e.target.bringToFront();
              },
              mouseout: (e) => {
                e.target.setStyle({ fillOpacity: 0.6, weight: 1.5 });
              },
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>{point.playa}</strong>
                <br />
                {point.kg.toLocaleString("es-UY")} kg residuos
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
