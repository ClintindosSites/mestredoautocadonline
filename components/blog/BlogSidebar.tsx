import Link from "next/link";

import BlogSearch from "./BlogSearch";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  author: string;
}

interface BlogSidebarProps {
  posts: BlogPost[];
  currentSlug?: string;
}

/**
 * Converte diferentes formatos de data para um objeto Date válido.
 *
 * Formatos suportados:
 * - 2026-09-30
 * - 2026-09-30T00:00:00
 * - 2026-09-30T00:00:00-03:00
 * - 30/09/2026
 */
function parseDate(date: string): Date | null {
  if (!date || typeof date !== "string") {
    return null;
  }

  const normalizedDate = date.trim();

  if (!normalizedDate) {
    return null;
  }

  // Formatos ISO:
  // 2026-09-30
  // 2026-09-30T00:00:00
  // 2026-09-30T00:00:00-03:00
  if (/^\d{4}-\d{2}-\d{2}/.test(normalizedDate)) {
    const parsedDate = new Date(normalizedDate);

    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  }

  // Formato brasileiro:
  // 30/09/2026
  const brazilianDateMatch = normalizedDate.match(
    /^(\d{2})\/(\d{2})\/(\d{4})$/
  );

  if (brazilianDateMatch) {
    const [, day, month, year] = brazilianDateMatch;

    const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

    // Verificação adicional para impedir datas inexistentes,
    // como 31/02/2026.
    if (
      parsedDate.getFullYear() !== Number(year) ||
      parsedDate.getMonth() !== Number(month) - 1 ||
      parsedDate.getDate() !== Number(day)
    ) {
      return null;
    }

    return parsedDate;
  }

  return null;
}

/**
 * Formata a data para exibição no blog.
 *
 * Exemplo:
 * 30 de set. de 2026
 */
function formatDate(date: string): string {
  const parsedDate = parseDate(date);

  if (!parsedDate) {
    return "Data não disponível";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

/**
 * Cria uma URL amigável para categorias.
 *
 * Exemplo:
 * "AutoCAD Básico" → "autocad-basico"
 */
function createCategorySlug(category: string): string {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const BlogSidebar = ({ posts, currentSlug }: BlogSidebarProps) => {
  /**
   * ARTIGOS RECENTES
   *
   * - Remove o artigo atualmente aberto.
   * - Datas inválidas são colocadas no final.
   * - Ordena do mais recente para o mais antigo.
   * - Limita a 5 artigos.
   */
  const recentPosts = [...posts]
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      if (!dateA && !dateB) {
        return 0;
      }

      if (!dateA) {
        return 1;
      }

      if (!dateB) {
        return -1;
      }

      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  /**
   * CATEGORIAS ÚNICAS
   *
   * - Remove categorias vazias.
   * - Remove espaços desnecessários.
   * - Remove duplicadas.
   */
  const categories = Array.from(
    new Set(
      posts
        .map(post => post.category?.trim())
        .filter((category): category is string => Boolean(category))
    )
  );

  return (
    <aside className="w-full space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* =========================
          BUSCA
      ========================= */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Pesquisar</h2>

        <BlogSearch posts={posts} />
      </div>

      {/* =========================
          CATEGORIAS
      ========================= */}
      {categories.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-gray-900">Categorias</h2>

          <div className="space-y-2">
            {categories.map(category => {
              const categorySlug = createCategorySlug(category);

              return (
                <Link
                  key={category}
                  href={`/blog/${categorySlug}`}
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#ff0f57]"
                >
                  <span>{category}</span>

                  <span className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#ff0f57]">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================
          ARTIGOS RECENTES
      ========================= */}
      {recentPosts.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-gray-900">
            Artigos recentes
          </h2>

          <div className="space-y-5">
            {recentPosts.map(post => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#ff0f57]">
                    {post.category}
                  </span>

                  <h3 className="text-sm font-bold leading-snug text-gray-800 transition-colors group-hover:text-[#ff0f57]">
                    {post.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    {formatDate(post.date)}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* =========================
          CTA DO CURSO
      ========================= */}
      <div className="overflow-hidden rounded-2xl bg-[#111111] p-6 text-white shadow-sm">
        <div className="mb-4 inline-flex rounded-full bg-[#ff0f57]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#ff0f57]">
          Curso completo
        </div>

        <h2 className="text-xl font-black leading-tight">
          Quer dominar o AutoCAD?
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-300">
          Aprenda AutoCAD do zero ao avançado com uma formação estruturada e
          prática.
        </p>

        <a
          href="https://go.hotmart.com/H101021157N?ap=4b22"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#ff0f57] px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#e60d4d]"
        >
          CONHECER O CURSO
        </a>
      </div>
    </aside>
  );
};

export default BlogSidebar;
