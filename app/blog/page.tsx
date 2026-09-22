import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      {/* HEADER */}

      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-[#ff0f57] mb-4">
            Blog Mestre do AutoCAD
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conteúdos para dominar o AutoCAD
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Dicas, tutoriais e conteúdos práticos para você aprender AutoCAD e
            evoluir seus projetos.
          </p>
        </div>
      </section>

      {/* ARTIGOS */}

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Artigos recentes</h2>

          {posts.length === 0 ? (
            <p>Nenhum artigo publicado ainda.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article
                  key={post.slug}
                  className="border rounded-2xl overflow-hidden"
                >
                  {post.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <p className="text-sm font-bold text-[#ff0f57] mb-2">
                      {post.category}
                    </p>

                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                    <p className="text-gray-600 mb-5">{post.description}</p>

                    <Link href={`/blog/${post.slug}`} className="font-bold">
                      Ler artigo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
