import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] text-white">
      {/* Conteúdo principal */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              <span className="text-white">Mestre do</span>{" "}
              <span className="text-[#ff0f57]">AutoCAD</span>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Conteúdos, dicas e materiais para quem deseja aprender AutoCAD,
              desenho técnico e ferramentas utilizadas em projetos de
              arquitetura e engenharia.
            </p>

            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff0f57] transition-colors hover:text-white"
            >
              Explorar o blog
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/categorias/autocad"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  AutoCAD
                </Link>
              </li>

              <li>
                <Link
                  href="/categorias/arquitetura"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Arquitetura
                </Link>
              </li>
            </ul>
          </div>

          {/* Conteúdos */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Conteúdos
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Dicas de AutoCAD
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Comandos
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Projetos
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 transition-colors hover:text-[#ff0f57]"
                >
                  Tutoriais
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-y border-white/10 bg-[#171717]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-lg font-bold text-white">
              Quer aprender AutoCAD de forma estruturada?
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Conheça um treinamento completo e avance nos seus estudos.
            </p>
          </div>

          <a
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-[#ff0f57] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e60d4e] hover:shadow-lg hover:shadow-[#ff0f57]/20"
          >
            Conhecer o treinamento
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-gray-500">
          © {currentYear} Mestre do AutoCAD. Todos os direitos reservados.
        </p>

        <div className="flex flex-wrap gap-5">
          <Link
            href="/politica-de-privacidade"
            className="text-xs text-gray-500 transition-colors hover:text-gray-300"
          >
            Política de Privacidade
          </Link>

          <Link
            href="/termos-de-uso"
            className="text-xs text-gray-500 transition-colors hover:text-gray-300"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
