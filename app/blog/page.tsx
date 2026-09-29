import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  const destaque = posts[0];
  const recentes = posts.slice(1);

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />

        <div className="blog-hero-content">
          <span className="blog-label">BLOG MESTRE DO AUTOCAD</span>

          <h1>
            Aprenda AutoCAD.
            <br />
            <strong>Crie. Evolua. Domine.</strong>
          </h1>

          <p>
            Tutoriais, dicas e conteúdos práticos para você aprender AutoCAD e
            desenvolver projetos com mais segurança.
          </p>

          <div className="blog-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="O que você quer aprender?"
              aria-label="Pesquisar no blog"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="blog-categories">
        <div className="blog-container">
          <div className="categories-header">
            <span>EXPLORE O CONTEÚDO</span>
            <h2>Encontre o que você precisa</h2>
          </div>

          <div className="categories-list">
            <Link href="/blog">Todos</Link>
            <Link href="/blog?categoria=autocad">AutoCAD</Link>
            <Link href="/blog?categoria=tutoriais">Tutoriais</Link>
            <Link href="/blog?categoria=dicas">Dicas</Link>
            <Link href="/blog?categoria=projetos">Projetos</Link>
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      {destaque && (
        <section className="blog-featured">
          <div className="blog-container">
            <div className="section-heading">
              <span>EM DESTAQUE</span>
              <h2>Comece por aqui</h2>
            </div>

            <article className="featured-card">
              {destaque.image ? (
                <div className="featured-image">
                  <Image
                    src={destaque.image}
                    alt={destaque.title}
                    fill
                    priority
                    sizes="(max-width: 900px) 120vw, 55vw"
                    className="blog-image"
                  />
                </div>
              ) : (
                <div className="featured-image featured-placeholder">
                  <span>AutoCAD</span>
                </div>
              )}

              <div className="featured-content">
                <span className="post-category">{destaque.category}</span>

                <h3>{destaque.title}</h3>

                <p>{destaque.description}</p>

                <div className="post-meta">
                  <span>📖 Leitura rápida</span>
                  <span>•</span>
                  <span>AutoCAD</span>
                </div>

                <Link
                  href={`/blog/${destaque.slug}`}
                  className="featured-button"
                >
                  Ler artigo
                  <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ARTIGOS RECENTES */}
      <section className="blog-posts">
        <div className="blog-container">
          <div className="section-heading posts-heading">
            <div>
              <span>CONTEÚDO RECENTE</span>
              <h2>Artigos recentes</h2>
            </div>

            <p>Conteúdos para ajudar você a aprender AutoCAD na prática.</p>
          </div>

          {recentes.length > 0 ? (
            <div className="posts-grid">
              {recentes.map(post => (
                <article key={post.slug} className="post-card">
                  <Link href={`/blog/${post.slug}`} className="post-image-link">
                    {post.image ? (
                      <div className="post-image">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          className="blog-image"
                        />
                      </div>
                    ) : (
                      <div className="post-image post-placeholder">
                        <span>AUTO</span>
                        <strong>CAD</strong>
                      </div>
                    )}
                  </Link>

                  <div className="post-content">
                    <span className="post-category">{post.category}</span>

                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p>{post.description}</p>

                    <Link href={`/blog/${post.slug}`} className="post-link">
                      Ler artigo
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-blog">
              <p>Nenhum artigo publicado ainda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-course-cta">
        <div className="blog-container">
          <div className="course-cta-content">
            <span>QUER IR ALÉM DOS TUTORIAIS?</span>

            <h2>
              Aprenda AutoCAD
              <strong> do zero ao avançado.</strong>
            </h2>

            <p>
              Tenha acesso a um curso completo, com aulas práticas para evoluir
              seus conhecimentos e desenvolver seus projetos.
            </p>

            <a
              href="https://go.hotmart.com/H101021157N?ap=4b22"
              target="_blank"
              rel="noopener noreferrer"
              className="course-cta-button"
            >
              CONHECER O CURSO
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
