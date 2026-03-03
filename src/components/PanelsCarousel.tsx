"use client";

import { useCallback, useState } from "react";

export interface PanelSlide {
  title: string;
  url?: string;
  iframeTitle?: string;
  /** When set, renders this instead of an iframe (e.g. custom chart) */
  content?: React.ReactNode;
}

interface PanelsCarouselProps {
  slides: PanelSlide[];
}

export default function PanelsCarousel({ slides }: PanelsCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = slides[index] ?? null;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        if (next < 0) return slides.length - 1;
        if (next >= slides.length) return 0;
        return next;
      });
    },
    [slides.length]
  );

  if (slides.length === 0) return null;

  const renderSlide = () => {
    if (!current) return null;
    if (current.content)
      return (
        <div className="absolute inset-0 h-full w-full">
          {current.content}
        </div>
      );
    if (current.url)
      return (
        <iframe
          key={current.url}
          title={current.iframeTitle ?? current.title}
          src={current.url}
          className="absolute inset-0 h-full w-full border-0"
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      );
    return null;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800/80">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-slate-800/50">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {current?.title}
        </h2>
      </div>
      <div className="relative w-full aspect-[16/10] min-h-[320px] sm:aspect-[16/9]">
        {current && renderSlide()}
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg ring-1 ring-slate-200 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-slate-100 dark:ring-slate-600 sm:left-4 md:h-12 md:w-12"
          aria-label="Visualización anterior"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg ring-1 ring-slate-200 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-slate-100 dark:ring-slate-600 sm:right-4 md:h-12 md:w-12"
          aria-label="Siguiente visualización"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all sm:h-2.5 ${
                i === index
                  ? "w-6 bg-[#0c2340] sm:w-8 dark:bg-sky-500"
                  : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500 sm:w-2.5"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="absolute right-4 top-4 rounded bg-slate-800/80 px-2 py-1 text-xs text-white/90 sm:right-6 sm:text-sm dark:bg-slate-900/80">
          {index + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
