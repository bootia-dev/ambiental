import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ResiduosPlayasChart from "@/components/ResiduosPlayasChart";
import ResiduosPlayasMap from "@/components/ResiduosPlayasMap";
import PanelsCarousel from "@/components/PanelsCarousel";
import { getGrafanaSlidesForSlug } from "@/data/grafana-embeds";
import { getResiduosPlayasChartData } from "@/data/residuos-playas-chart";
import { getResiduosPlayasMapData } from "@/data/residuos-playas-map";
import { indicators } from "@/data/indicators";

const RECOLECCION_PLAYAS_SLUG = "recoleccion-de-residuos-en-playas";

export async function generateStaticParams() {
  return indicators.map((i) => ({ slug: i.slug }));
}

export default async function IndicadorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const indicator = indicators.find((i) => i.slug === slug);
  if (!indicator) notFound();

  const body = indicator.description ?? indicator.shortDescription;
  const isRecoleccionPlayas = slug === RECOLECCION_PLAYAS_SLUG;

  // Recolección de residuos en playas: map (circles by beach) + chart in carousel
  if (isRecoleccionPlayas) {
    const [mapData, chartData] = await Promise.all([
      getResiduosPlayasMapData(),
      getResiduosPlayasChartData(),
    ]);
    const slides = [
      {
        title: "Residuos recolectados por playa — tamaño del círculo por cantidad (kg)",
        content: <ResiduosPlayasMap data={mapData} />,
      },
      {
        title: "Evolución por mes de los residuos retirados desde 2023",
        content: <ResiduosPlayasChart data={chartData} />,
      },
    ];
    return (
      <div className="flex min-h-screen flex-col bg-slate-100 dark:bg-slate-200">
        <Header />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
            <h1 className="mb-6 text-xl font-bold text-slate-950 dark:text-slate-900 sm:text-2xl">
              {indicator.title}
            </h1>

            {/* Data above carousel */}
            <article className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow dark:border-slate-700 dark:bg-slate-800/80">
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                {body}
              </p>
            </article>

            <PanelsCarousel slides={slides} />

            {/* Data below carousel */}
            <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow dark:border-slate-700 dark:bg-slate-800/80">
              <div className="p-6 sm:p-8 space-y-6">
                {indicator.tareas && indicator.tareas.length > 0 && (
                  <section>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Tareas principales
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {indicator.tareas.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {indicator.resultados && indicator.resultados.length > 0 && (
                  <section>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Resultados
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {indicator.resultados.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {indicator.objetivos && indicator.objetivos.length > 0 && (
                  <section>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Objetivos
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {indicator.objetivos.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>
          </div>
        </main>
      </div>
    );
  }

  const grafanaSlides = getGrafanaSlidesForSlug(slug);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 dark:bg-slate-200">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="mb-6 text-xl font-bold text-slate-950 dark:text-slate-900 sm:text-2xl">
            {indicator.title}
          </h1>

          <article className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow dark:border-slate-700 dark:bg-slate-800/80">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {body}
            </p>
          </article>

          {grafanaSlides && grafanaSlides.length > 0 && (
            <PanelsCarousel slides={grafanaSlides} />
          )}

          <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow dark:border-slate-700 dark:bg-slate-800/80">
            <div className="p-6 sm:p-8 space-y-6">
              {indicator.tareas && indicator.tareas.length > 0 && (
                <section>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Tareas principales
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    {indicator.tareas.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </section>
              )}
              {indicator.resultados && indicator.resultados.length > 0 && (
                <section>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Resultados
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    {indicator.resultados.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>
              )}
              {indicator.objetivos && indicator.objetivos.length > 0 && (
                <section>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Objetivos
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    {indicator.objetivos.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
