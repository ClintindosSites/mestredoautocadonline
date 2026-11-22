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

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
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

export function getTableOfContents(content: string): TocItem[] {
  const lines = content.split("\n");
  const items: TocItem[] = [];
  const usedIds = new Set<string>();

  let insideCodeBlock = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("```")) {
      insideCodeBlock = !insideCodeBlock;
      continue;
    }

    if (insideCodeBlock) {
      continue;
    }

    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(trimmedLine);

    if (!match) {
      continue;
    }

    const level = match[1].length as 2 | 3;

    const text = match[2]
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .trim();

    if (!text) {
      continue;
    }

    const baseId = slugifyHeading(text);

    let id = baseId;
    let counter = 2;

    while (usedIds.has(id)) {
      id = `${baseId}-${counter}`;
      counter++;
    }

    usedIds.add(id);

    items.push({
      id,
      text,
      level,
    });
  }

  return items;
}
