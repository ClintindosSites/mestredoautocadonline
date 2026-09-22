import Link from "next/link";
import type { ReactNode } from "react";

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  title: string;
  updatedAt: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

const LegalPage = ({ title, updatedAt, intro, sections }: LegalPageProps) => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}

      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-block text-sm text-[#ff0f57] font-semibold mb-8 hover:opacity-80 transition"
          >
            ← Voltar para o Mestre do AutoCAD
          </Link>

          <p className="text-sm uppercase tracking-widest text-[#ff0f57] font-bold mb-4">
            Mestre do AutoCAD
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

          <p className="text-sm text-gray-400">
            Última atualização: {updatedAt}
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {intro && (
            <div className="text-lg text-gray-700 leading-8 mb-12">{intro}</div>
          )}

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                  {section.title}
                </h2>

                <div className="text-gray-700 leading-8 space-y-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalPage;
