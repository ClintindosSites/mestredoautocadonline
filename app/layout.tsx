import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import PageTracker from "@/components/PageTracker";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mestredaarquitetura.com.br"),

  title: {
    default: "Domine as principais ferramentas da Arquitetura e Engenharia ",
    template: "%s | Mestre da Arquitetura",
  },

  description:
    "Curso completo de AutoCAD do básico ao avançado. 30h, acesso vitalício, certificado reconhecido e suporte com professor por apenas R$197. Comece hoje mesmo e transforme-se em um Mestre do AutoCAD!",

  keywords: [
    "curso de AutoCAD",
    "curso de AutoCAD online",
    "Curso de AutoCAD com certificado",
    "curso de Revit",
    "comprar curso de autocad",
    "comprar curso de autocad online",
    "curso de autocad online",
    "curso de desenho técnico",
    "projetos arquitetônicos",
    "cursos de arquitetura",
    "cursos para arquitetos",
    "como aprender autocad",
    "curso de autocad preço",
    "como aprender autocad do zero",
    "aprender autocad do zero",
    "curso de autocad",
    "autocad para iniciantes",
    "autocad passo a passo para iniciantes",
    "dicas de autocad",
    "principais comandos do autocad",
    "autocad arquitetura",
  ],

  authors: [
    {
      name: "Mestre da Arquitetura",
      url: "https://mestredaarquitetura.com.br",
    },
  ],

  creator: "Mestre da Arquitetura",
  publisher: "Mestre da Arquitetura",

  category: "Education",

  alternates: {
    canonical: "https://mestredaarquitetura.com.br",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mestredaarquitetura.com.br",
    siteName: "Mestre da Arquitetura",
    title: "Mestre da Arquitetura | Cursos de AutoCAD, Revit, BIM e Mais",
    description:
      "Cursos, materiais e conteúdos para quem quer aprender AutoCAD, Revit, BIM, SketchUp e evoluir na área de arquitetura, engenharia e projetos.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Mestre da Arquitetura - Cursos e conteúdos profissionais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mestre da Arquitetura | Aprenda AutoCAD do Zero ao Avançado",
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
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full antialiased `}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <PageTracker />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1035243079482901&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
