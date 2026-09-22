import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog Mestre do AutoCAD",
    template: "%s | Mestre do AutoCAD",
  },
  description:
    "Dicas, tutoriais e conteúdos para aprender AutoCAD e desenvolver suas habilidades em projetos.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="blog-layout">{children}</div>;
}
