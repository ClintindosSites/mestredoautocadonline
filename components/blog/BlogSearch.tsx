"use client";

import { useMemo, useState } from "react";
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

interface BlogSearchProps {
  posts: BlogPost[];
}

const BlogSearch = ({ posts }: BlogSearchProps) => {
  const [search, setSearch] = useState("");

  /**
   * Normaliza o texto para facilitar a pesquisa.
   *
   * Exemplo:
   * "AutoCAD Básico" → "autocad basico"
   *
   * Também remove acentos, permitindo:
   * "autocad basico"
   * encontrar
   * "AutoCAD Básico"
   */
  const normalizeText = (value: unknown): string => {
    if (typeof value !== "string") {
      return "";
    }

    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  /**
   * Resultados filtrados.
   *
   * A busca considera:
   * - título
   * - descrição
   * - categoria
   * - autor
   */
  const filteredPosts = useMemo(() => {
    const term = normalizeText(search);

    // Quando não existe pesquisa,
    // não precisa filtrar nada.
    if (!term) {
      return [];
    }

    return posts.filter(post => {
      const title = normalizeText(post?.title);
      const description = normalizeText(post?.description);
      const category = normalizeText(post?.category);
      const author = normalizeText(post?.author);

      return (
        title.includes(term) ||
        description.includes(term) ||
        category.includes(term) ||
        author.includes(term)
      );
    });
  }, [posts, search]);

  const hasSearch = search.trim().length > 0;

  return (
    <div className="relative">
      {/* Campo de pesquisa */}
      <div className="relative">
        <input
          type="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Pesquisar artigos..."
          aria-label="Pesquisar artigos"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-11 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#ff0f57] focus:bg-white focus:ring-2 focus:ring-[#ff0f57]/10"
        />

        {/* Ícone de pesquisa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </div>

      {/* Resultados */}
      {hasSearch && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          {filteredPosts.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              {filteredPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={() => setSearch("")}
                  className="block border-b border-gray-100 p-4 last:border-b-0 transition-colors hover:bg-gray-50"
                >
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-[#ff0f57]">
                    {post.category || "Artigo"}
                  </span>

                  <h3 className="text-sm font-bold leading-snug text-gray-900">
                    {post.title || "Artigo sem título"}
                  </h3>

                  {post.description && (
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
                      {post.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </div>

              <p className="text-sm font-semibold text-gray-700">
                Nenhum artigo encontrado
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Tente pesquisar por outro termo.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
