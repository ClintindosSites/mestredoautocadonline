import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter(file => file.endsWith(".mdx"))
    .map(file => {
      const slug = file.replace(/\.mdx$/, "");

      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        image: data.image,
        author: data.author,
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();

  return posts.find(post => post.slug === slug);
}
