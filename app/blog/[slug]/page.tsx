import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import { getPostBySlug, getAllPosts, getTableOfContents } from "@/lib/blog";

import BlogSidebar from "@/components/blog/BlogSidebar";
import RelatedPosts from "@/components/blog/RelatedPosts";
import TableOfContents from "@/components/blog/TableOfContents";
import { mdxComponents } from "@/components/blog/MDXComponents";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const toc = getTableOfContents(post.content);

  return (
    <main className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <article className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#ff0f57]">
                {post.category}
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-[#141414] md:text-5xl">
                {post.title}
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                {post.description}
              </p>

              <div className="mb-10 text-sm text-gray-500">
                Por {post.author} • {post.date}
              </div>

              <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>

              {toc.length > 0 && (
                <div className="mb-10">
                  <TableOfContents items={toc} />
                </div>
              )}

              <div className="prose prose-lg max-w-none text-[#141414]">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>

            <RelatedPosts
              posts={posts}
              currentSlug={post.slug}
              currentCategory={post.category}
              limit={3}
            />
          </div>

          <BlogSidebar posts={posts} currentSlug={post.slug} />
        </div>
      </div>
    </main>
  );
}
