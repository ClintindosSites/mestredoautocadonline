import Analytics from "@/components/Analytics";
import Footer from "@/components/blog/BlogFooter";
import BlogHeader from "@/components/blog/BlogHeader";
import PageTracker from "@/components/PageTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog Mestre da Arquitetura",
    template: "%s | Mestre da Arquitetura",
  },
  description:
    "Dicas, tutoriais e conteúdos para aprender AutoCAD e desenvolver suas habilidades em projetos.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="blog-layout">
      <Analytics />
      <PageTracker />
      <BlogHeader />
      {children}
      <Footer />
    </div>
  );
}
