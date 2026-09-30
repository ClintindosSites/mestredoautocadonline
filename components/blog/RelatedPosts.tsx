import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  author: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
  currentSlug: string;
  currentCategory?: string;
  limit?: number;
}

/**
 * Normaliza textos para comparação.
 *
 * Exemplo:
 * "AutoCAD Básico" → "autocad basico"
 */
function normalizeText(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Converte diferentes formatos de data
 * para um Date válido.
 */
function parseDate(date: unknown): Date | null {
  if (typeof date !== "string" || !date.trim()) {
    return null;
  }

  const normalizedDate = date.trim();

  // ISO:
  // 2026-09-30
  // 2026-09-30T10:00:00
  if (/^\d{4}-\d{2}-\d{2}/.test(normalizedDate)) {
    const parsedDate = new Date(normalizedDate);

    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
  }

  // Brasileiro:
  // 30/09/2026
  const brazilianMatch = normalizedDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (brazilianMatch) {
    const [, day, month, year] = brazilianMatch;

    const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

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
 * Formata a data para pt-BR.
 */
function formatDate(date: unknown): string {
  const parsedDate = parseDate(date);

  if (!parsedDate) {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

const RelatedPosts = ({
  posts,
  currentSlug,
  currentCategory,
  limit = 3,
}: RelatedPostsProps) => {
  const safeLimit =
    Number.isFinite(limit) && limit > 0 ? Math.min(Math.floor(limit), 12) : 3;

  const normalizedCurrentCategory = normalizeText(currentCategory);

  /**
   * Remove:
   * - posts inválidos;
   * - o artigo atual;
   * - posts sem slug;
   * - posts sem título.
   */
  const validPosts = posts.filter(post => {
    if (!post || typeof post !== "object") {
      return false;
    }

    if (!post.slug || !post.title) {
      return false;
    }

    return post.slug !== currentSlug;
  });

  /**
   * Primeiro buscamos artigos da mesma categoria.
   */
  const sameCategoryPosts = validPosts
    .filter(post => {
      if (!normalizedCurrentCategory) {
        return false;
      }

      return normalizeText(post.category) === normalizedCurrentCategory;
    })
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
    });

  /**
   * Se não houver artigos suficientes na mesma categoria,
   * usamos artigos recentes de outras categorias.
   */
  const otherPosts = validPosts
    .filter(post => {
      if (!normalizedCurrentCategory) {
        return true;
      }

      return normalizeText(post.category) !== normalizedCurrentCategory;
    })
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
    });

  /**
   * Junta primeiro os artigos relacionados
   * e depois completa com artigos recentes.
   */
  const relatedPosts = [...sameCategoryPosts, ...otherPosts]
    .filter(
      (post, index, array) =>
        array.findIndex(item => item.slug === post.slug) === index
    )
    .slice(0, safeLimit);

  /**
   * Se não houver nenhum artigo relacionado,
   * não renderizamos o componente.
   */
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-gray-200 pt-10">
      {/* Cabeçalho */}
      <div className="mb-6">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#ff0f57]">
          Continue lendo
        </span>

        <h2 className="text-2xl font-black tracking-tight text-gray-900">
          Artigos relacionados
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Confira outros conteúdos que podem ajudar você.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map(post => {
          const formattedDate = formatDate(post.date);

          return (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Imagem */}
                {post.image ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title || "Artigo relacionado"}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-gray-100">
                    <span className="text-sm font-medium text-gray-400">
                      Mestre do AutoCAD
                    </span>
                  </div>
                )}

                {/* Conteúdo */}
                <div className="p-5">
                  {/* Categoria */}
                  {post.category && (
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-[#ff0f57]">
                      {post.category}
                    </span>
                  )}

                  {/* Título */}
                  <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#ff0f57]">
                    {post.title}
                  </h3>

                  {/* Descrição */}
                  {post.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                      {post.description}
                    </p>
                  )}

                  {/* Data + CTA */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    {formattedDate ? (
                      <time className="text-xs text-gray-400">
                        {formattedDate}
                      </time>
                    ) : (
                      <span />
                    )}

                    <span className="text-sm font-bold text-[#ff0f57] transition-transform group-hover:translate-x-1">
                      Ler artigo →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedPosts;
