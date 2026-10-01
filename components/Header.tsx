import Link from "next/link";

const BlogHeader = () => {
  return (
    <header className="w-full bg-[#111111] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between gap-8">
          {/* LOGO */}
          <Link
            href="/blog"
            className="flex flex-col leading-none shrink-0"
            aria-label="Mestre do AutoCAD - Blog"
          >
            <span className="text-xl md:text-2xl font-black tracking-tight text-white">
              MESTRE
            </span>

            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#ff0f57]">
              DO AUTOCAD
            </span>
          </Link>

          {/* NAVEGAÇÃO */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Início
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-white transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/blog/autocad"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              AutoCAD
            </Link>

            <Link
              href="/blog/tutorials"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Tutoriais
            </Link>
          </nav>

          {/* CTA */}
          <a
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#ff0f57] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#e60d4d] hover:scale-[1.02]"
          >
            CONHEÇA O CURSO
          </a>

          {/* MENU MOBILE */}
          <button
            type="button"
            aria-label="Abrir menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
