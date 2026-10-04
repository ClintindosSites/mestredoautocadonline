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
  metadataBase: new URL("https://mestredoautocad.com.br"),

  title: {
    default:
      "Curso de AutoCAD 100% online com certificado e com acesso vitalício por apenas R$197",
    template: "%s | Mestre do AutoCAD",
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
    title: "Mestre do AutoCAD | Aprenda AutoCAD do Zero ao Avançado",
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
