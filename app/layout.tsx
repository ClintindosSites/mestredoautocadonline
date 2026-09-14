import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mestredoautocad.com.br"),

  title: {
    default: "Mestre do AutoCAD | Cursos de AutoCAD, Revit, BIM e Mais",
    template: "%s | Mestre do AutoCAD",
  },

  description:
    "Aprenda AutoCAD, Revit, BIM, SketchUp e outras ferramentas profissionais para arquitetura, engenharia e projetos. Encontre cursos online, materiais e conteúdos para evoluir profissionalmente.",

  keywords: [
    "curso de AutoCAD",
    "curso de AutoCAD online",
    "Curso de AutoCAD com certificado",
    "curso de Revit",
    "curso de Revit online",
    "curso de SketchUp",
    "curso de BIM",
    "AutoCAD online",
    "Revit online",
    "BIM",
    "arquitetura",
    "engenharia",
    "desenho técnico",
    "projetos arquitetônicos",
    "cursos de arquitetura",
    "cursos para arquitetos",
  ],

  authors: [
    {
      name: "Mestre do AutoCAD",
      url: "https://mestredoautocad.com.br",
    },
  ],

  creator: "Mestre do AutoCAD",
  publisher: "Mestre do AutoCAD",

  category: "Education",

  alternates: {
    canonical: "https://mestredoautocad.com.br",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mestredoautocad.com.br",
    siteName: "Mestre do AutoCAD",
    title: "Mestre do AutoCAD | Cursos de AutoCAD, Revit, BIM e Mais",
    description:
      "Cursos, materiais e conteúdos para quem quer aprender AutoCAD, Revit, BIM, SketchUp e evoluir na área de arquitetura, engenharia e projetos.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Mestre do AutoCAD - Cursos e conteúdos profissionais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mestre do AutoCAD | AutoCAD, Revit, BIM e Mais",
    description:
      "Aprenda ferramentas profissionais para arquitetura, engenharia e projetos.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
