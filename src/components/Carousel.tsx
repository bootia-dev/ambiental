"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Indicator } from "@/types";

interface CarouselProps {
  items: Indicator[];
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const current = items[index] ?? null;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        if (next < 0) return items.length - 1;
        if (next >= items.length) return 0;
        return next;
      });
    },
    [items.length]
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  if (items.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-600 shadow-xl">
      {/* Slide */}
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
        <img
          src={current?.image ?? ""}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-8 md:p-10">
          <h2 className="text-2xl font-bold drop-shadow-md sm:text-3xl md:text-4xl">
            {current?.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base md:mt-3 md:text-lg">
            {current?.shortDescription}
          </p>
          {current && (
            <Link
              href={`/indicador/${current.slug}`}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/80 sm:mt-5 sm:px-5 sm:py-3 sm:text-base"
            >
              Ver detalles
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm:left-4 md:h-12 md:w-12"
        aria-label="Anterior"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm:right-4 md:h-12 md:w-12"
        aria-label="Siguiente"
      >
        <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 sm:bottom-6">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all sm:h-2.5 ${
              i === index
                ? "w-6 bg-white sm:w-8"
                : "w-2 bg-white/50 hover:bg-white/70 sm:w-2.5"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute right-4 top-4 rounded bg-black/50 px-2 py-1 text-xs text-white/90 sm:right-6 sm:text-sm">
        {index + 1} / {items.length}
      </div>
    </div>
  );
}
