import Link from "next/link";

const LOGO_SRC = "https://montevidata.montevideo.gub.uy/sites/default/files/marcaimm.svg";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-14 items-center justify-between border-b border-white/10 bg-[#0c2340]/95 px-4 shadow-md backdrop-blur-sm sm:h-16 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <img
          src={LOGO_SRC}
          alt="Intendencia de Montevideo"
          className="h-9 w-auto sm:h-10"
        />
        <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
          Ambiental
        </span>
      </Link>
    </header>
  );
}
