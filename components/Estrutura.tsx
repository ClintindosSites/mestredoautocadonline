"use client";

import Link from "next/link";
import EstruturaCard from "./EstruturaCard";

const modules = [
  {
    number: 1,
    title: "Introdução e Apresentação",
    description:
      "Download e instalação da versão gratuita do AutoCAD. Apresentação do curso e da plataforma.",
  },
  {
    number: 2,
    title: "Configurações e Comandos Iniciais",
    description:
      "Área de trabalho, comandos e configurações iniciais, primeiros desenhos, criações práticas de formas geométricas e comandos de construção e modificações.",
  },
  {
    number: 3,
    title: "Textos, Layers e Cotas",
    description:
      "Criação e configuração de layers/camadas, cotas, medidas e textos.",
  },
  {
    number: 4,
    title: "Praticando no AutoCAD",
    description:
      "Aulas práticas na criação de figuras básicas, objetos, desenhos em perspectiva e desenho técnico com diferentes tipos de vistas.",
  },
  {
    number: 5,
    title: "Planta Baixa",
    description:
      "Execução de planta baixa e planta de corte. Criação de paredes, portas, janelas, blocos, mobiliários, eletrodomésticos, elementos sanitários e detalhamento de ambientes.",
  },
  {
    number: 6,
    title: "Elétrica e Hidráulica",
    description:
      "Execução de planta elétrica com diferentes circuitos de iluminação e tomadas, suas simbologias e desenvolvimento da hidráulica isométrica.",
  },
  {
    number: 7,
    title: "Escala e Impressão",
    description:
      "Criação e configuração de diferentes tipos de escalas (metros, centímetros e milímetros). Plotagem e impressão em diferentes formatos de folha.",
  },
  {
    number: 8,
    title: "Modelagem 3D",
    description:
      "Principais comandos do AutoCAD 3D, elevação de alvenarias e pisos, ajustes de portas, janelas e telhados, materiais, texturas e renderização.",
  },
  {
    number: 9,
    title: "Criação de Peças Mecânicas",
    description:
      "Aulas práticas na criação e desenvolvimento de diferentes tipos de peças mecânicas em 2D e 3D.",
  },
  {
    number: 10,
    title: "Bônus e Projetos",
    description:
      "Folhas para impressão prontas, projetos arquitetônicos, combate e prevenção contra incêndio, fundações, topografia e projetos elétricos e hidráulicos.",
  },
];

export default function Estrutura() {
  const handleCheckoutClick = () => {
    // GA4
    window.gtag?.("event", "conteudo_checkout", {
      product: "curso_autocad",
      source: "mestredoautocad",
    });

    // Meta
    window.fbq?.("track", "InitiateCheckout");
  };

  return (
    <section className="estrutura" id="conteudo">
      <div className="container">
        <header className="estrutura-header">
          <h2>
            Estrutura completa para <span>dominar o AutoCAD</span>
          </h2>

          <p>
            Veja o que você vai aprender para se tornar o{" "}
            <strong>Mestre do AutoCAD:</strong>
          </p>
        </header>

        <div className="know-items">
          {modules.map(module => (
            <EstruturaCard
              key={module.number}
              number={module.number}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>

        <div className="estrutura-footer">
          <p>
            10 módulos com mais de 40 videoaulas + material de apoio (e-book) +
            projetos prontos para download
          </p>

          <p>
            Conteúdo <strong>100% atualizado</strong> em 2026.
          </p>

          <Link
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            className="btn-primary hover:-translate-y-1"
            onClick={handleCheckoutClick}
          >
            Torne-se um mestre do AutoCAD com acesso vitalício
          </Link>
        </div>
      </div>
    </section>
  );
}
