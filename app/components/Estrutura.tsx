import Link from "next/link";

export default function Estrutura() {
  return (
    <section className="estrutura">
      <div className="container">
        <div className="text-center items-center py-15">
          <h2 className="text-3xl font-bold text-[#0d0d0d] uppercase">
            Estrutura completa para{" "}
            <span className="text-[#ff0f57] ">dominar o AutoCAD</span>
          </h2>
          <p className="text-2xl text-[#0d0d0d]">
            Veja o que você vai aprender para se tornar o{" "}
            <span className="text-[#ff0f57] font-bold">Mestre do AutoCAD:</span>
          </p>
        </div>
        <div className="know-items">
          <div className="col">
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 1</span> - Introdução e
                Apresentação
              </h3>
              <p>
                Download e instalação da versão gratuita do Autocad.
                Apresentação do curso e da plataforma.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 2</span> - Configurações
                e Comandos Iniciais
              </h3>
              <p>
                Área de trabalho, comandos e configurações iniciais, primeiros
                desenhos, criações práticas de formas geométricas, comandos de
                construção e de modificações utilitárias.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 3</span> - Textos,
                Layers e Cotas
              </h3>
              <p>
                Criação e configuração de layers/camadas, criação e configuração
                de cotas, medidas e textos.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 4</span> - Praticando no
                AutoCAD
              </h3>
              <p>
                Aulas práticas na criação de figuras básicas, objetos, desenhos
                em perspectiva e desenho técnico com diferentes tipos de vistas
                (superior, frontal, lateral esquerda).
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 5</span> - Planta Baixa
              </h3>
              <p>
                Execução de planta baixa e planta de corte. Criação de paredes,
                portas, janelas, blocos, mobiliários, eletrodomésticos,
                elementos sanitários e detalhamento de cômodos e área dos
                ambientes.{" "}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 6</span> - Elétrica e
                Hidráulica
              </h3>
              <p>
                Execução de planta elétrica com diferentes circuitos de
                iluminação e tomadas, com as respectivas simbologias.
                Desenvolvimento da hidráulica isométrica.
              </p>
            </div>

            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 7</span> - Escala e
                Impressão
              </h3>
              <p>
                Criação e configuração de diferentes tipos de escalas (metros,
                centímetros, milímetros). Plotagem e impressão completa em
                diferentes tipos de folha de impressão.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 8</span> - Modelagem 3D
              </h3>
              <p>
                Principais comandos do Autocad 3D, elevação de alvenarias e
                pisos, ajuste de portas, janelas e telhado. Configuração de
                materiais, texturas, background e renderização. Escada 3D.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 9</span> - Criação de
                Peças Mecânicas
              </h3>
              <p>
                Aulas práticas na criação e desenvolvimento de diferentes tipos
                de peças mecânicas 2D e 3D.
              </p>
            </div>
            <div className="know-item">
              <h3 className="text-2xl font-bold">
                <span className="text-[#ff0f57]">MÓDULO 10</span> - Bônus e
                Projetos
              </h3>
              <p>
                Folhas para impressão prontas, projetos arquitetônicos, projeto
                de combate e prevenção contra incêndio, fundações, topografia,
                projeto elétrico e hidráulico e muito mais...
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-black text-center mt-20">
          10 módulos com mais de 40 videoaulas + material de apoio (e-book) +
          projetos prontos para download
        </p>
        <p className="text-lg text-black text-center mb-10">
          Conteúdo <strong>100% atualizado</strong> em 2026.
        </p>
        <Link
          href={"https://go.hotmart.com/H101021157N?ap=4b22"}
          className="btn-primary"
        >
          Torne-se um mestre do autocad com acesso vitalício
        </Link>
      </div>
    </section>
  );
}
