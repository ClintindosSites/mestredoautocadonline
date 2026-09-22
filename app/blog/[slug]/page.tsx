import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <article>
        <p className="text-sm uppercase font-bold text-[#ff0f57] mb-4">
          {post.category}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <p className="text-xl text-gray-600 mb-8">{post.description}</p>

        <div className="text-sm text-gray-500 mb-10">
          Por {post.author} • {post.date}
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
