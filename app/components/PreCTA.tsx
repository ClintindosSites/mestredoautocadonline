import Link from "next/link";

export default function PreCTA() {
  return (
    <section className="precta">
      <div className="container">
        <div className="precta-box flex flex-col gap-4 items-center text-center bg-[#171717] p-20 rounded-2xl">
          <h2 className="text-[#ff0f57] text-4xl font-extrabold">
            Aprenda muito mais do que comandos básicos
          </h2>
          <p className="text-lg text-white">
            No curso você será especialista em elaborar planta baixa, cortes,
            desenho técnico e peças mecânicas, além de desenvolver projetos em
            2D e 3D para diferentes áreas.
          </p>

          <Link
            href={"https://go.hotmart.com/H101021157N?ap=4b22"}
            className="btn-primary"
          >
            Quero me tornar um Mestre do AutoCAD
          </Link>
        </div>

        <div className="comandos-cta">
          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>{" "}
            <p className="text-lg font-bold text-[#ff0f57] uppercase">
              Desenho Técnico
            </p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>
            <p className="text-lg font-bold text-[#ff0f57] uppercase">
              Planta Baixas
            </p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>{" "}
            <p className="text-lg font-bold text-[#ff0f57] uppercase">
              Peças Mecânicas
            </p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>
            <p className="text-lg font-bold text-[#ff0f57] uppercase">
              Elétrica e Hidráulica
            </p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>{" "}
            <p className="text-lg font-bold text-[#ff0f57] uppercase underline">
              +1000 blocos em 2D e 3D disponíveis gratuitamente
            </p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>
            <p className="text-lg font-bold text-[#ff0f57] uppercase">
              E muito mais...
            </p>
          </div>
        </div>

        <div className="estatisticas-cta flex flex-wrap items-center justify-center">
          <div className="info-stats">
            <h3 className="text-[#ff0f57] text-6xl font-extrabold">94%</h3>
            <p className="text-lg">
              Afirmam que passaram a se{" "}
              <strong>destacar mais em entrevistas e no trabalho</strong> após
              aprender AutoCAD.
            </p>
          </div>
          <div className="info-stats">
            <h3 className="text-[#ff0f57] text-6xl font-extrabold">98%</h3>
            <p className="text-lg">
              Relatam se sentir mais <strong>confiantes e preparados</strong>{" "}
              para conquistar melhores oportunidades profissionais.
            </p>
          </div>
          <div className="info-stats">
            {" "}
            <h3 className="text-[#ff0f57] text-6xl font-extrabold">95%</h3>
            <p className="text-lg">
              Dos alunos consideram que o curso foi{" "}
              <strong>um dos melhores investimentos profissionais</strong> da
              sua vida.
            </p>
          </div>
          <div className="info-stats">
            {" "}
            <h3 className="text-[#ff0f57] text-6xl font-extrabold">84%</h3>
            <p className="text-lg">
              Dizem que começaram a organizar melhor tarefas, dados e{" "}
              <strong>aumento da sua produtividade.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
