# Ambiental POC — Indicadores ambientales (Montevideo)

Proof of concept para una experiencia unificada del [Observatorio Ambiental de Montevideo](https://montevidata.montevideo.gub.uy/ambiental): **listado de indicadores y detalle en un solo nivel**, sin navegar a otra página al hacer "Conocer más".

## Stack (igual que oan-poc)

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS**
- TypeScript

## Cómo correr

```bash
cd ambiental-poc
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Qué hace esta POC

- **Un solo nivel**: a la izquierda, lista de indicadores ambientales (recolección playas, ecocentros, calidad del aire, etc.). A la derecha, el detalle del indicador seleccionado (descripción, resultados, objetivos y bloque para futuras visualizaciones).
- **Sin "Conocer más" que lleve a otra ruta**: al elegir un ítem de la lista se actualiza el panel de la derecha en la misma vista.
- **Contenido**: los 21 indicadores del sitio oficial, con texto resumido y en detalle. Donde el sitio original tiene enlaces a tablas (ej. CKAN), se muestra un enlace en el bloque "Visualizaciones y datos".

## Estructura

- `src/app/page.tsx` — Página principal (header + intro + layout list+detail).
- `src/app/AmbientalPage.tsx` — Contenedor cliente con estado de selección.
- `src/components/IndicatorList.tsx` — Lista de indicadores (cards clicables).
- `src/components/IndicatorDetail.tsx` — Panel de detalle (descripción, resultados, objetivos, enlace a datos).
- `src/components/Header.tsx` — Cabecera Ambiental / Montevideo.
- `src/data/indicators.ts` — Datos de los indicadores (títulos, descripciones, resultados, objetivos).
- `src/types.ts` — Tipo `Indicator`.

## Próximos pasos posibles

- Integrar gráficos o iframes de las visualizaciones reales del observatorio en el panel de detalle.
- Búsqueda o filtro por texto en la lista.
- Enlaces profundos (ej. `/ambiental#calidad-del-aire`) para compartir un indicador concreto.
