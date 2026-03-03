import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import { indicators } from "@/data/indicators";

const HERO_BG =
  "https://montevidata.montevideo.gub.uy/sites/default/files/styles/escala_y_recorte_1600x830/public/2021-12/img-slide.jpg?itok=fDSPtr02";

const HERO_TEXT =
  "Un espacio de datos abiertos y visualizaciones de indicadores ambientales de Montevideo. El Observatorio Ambiental permite el acceso público al estado de los ecosistemas, calidad del agua, aire y suelo y un seguimiento de la gestión ambiental en general.";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-slate-100 dark:bg-slate-200">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col overflow-auto pt-0">
        {/* Hero: image extends behind the header; reduced height so carousel fits */}
        <section
          className="relative flex h-[200px] shrink-0 flex-col justify-end bg-slate-800 sm:h-[220px] md:h-[240px]"
          aria-label="Introducción"
        >
          <img
            src={HERO_BG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-4 pt-12 sm:px-6 sm:pb-5 sm:pt-14 md:pb-6">
            <p className="text-center text-base leading-snug text-white drop-shadow-md sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
              {HERO_TEXT}
            </p>
          </div>
        </section>

        <div className="min-h-0 flex-1 px-4 py-4 sm:px-6 sm:py-5">
          <div className="mx-auto max-w-5xl">
            <Carousel items={indicators} />
          </div>
        </div>
      </main>
    </div>
  );
}
