import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="flex flex-col text-4xl">
            <span className="text-[#ff0f57] font-bold">
              Domine o AutoCAD do Zero ao 3D Avançado
            </span>
            <span>E conquiste as melhores oportunidades do mercado</span>
          </h1>
          <p className="text-lg">
            <strong>
              Curso de AutoCAD Online completo do básico ao avançado{" "}
            </strong>
            com 30 horas de carga horária, com{" "}
            <span className="font-bold">
              certificado reconhecido em todo o Brasil
            </span>
            , acesso vitalício e suporte direto com o professor.
          </p>
          <Link
            href={"https://go.hotmart.com/H101021157N?ap=4b22"}
            className="btn-primary"
          >
            Quero me tornar um Mestre do AutoCAD
          </Link>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">30h</div>
              <div className="label">Carga Horária</div>
            </div>
            <div className="hero-stat">
              <div className="num">40+</div>
              <div className="label">Videoaulas</div>
            </div>
            <div className="hero-stat">
              <div className="num">10</div>
              <div className="label">Módulos</div>
            </div>
            <div className="hero-stat">
              <div className="num">7 dias</div>
              <div className="label">Garantia Total</div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <Image
            src={"/images/autocad-total.webp"}
            alt="Imagem de planta baixa do Curso de AutoCAD Online"
            width={3253}
            height={3293}
            className="w-150 h-full"
            loading="eager"
          />
        </div>
      </div>
      <div className="trust-bar">
        <div className="container">
          <div className="trust-item">
            <span className="icon">✓</span> Acesso Vitalício
          </div>
          <div className="trust-item">
            <span className="icon">✓</span> Certificado Reconhecido
          </div>
          <div className="trust-item">
            <span className="icon">✓</span> Suporte com Professor
          </div>
          <div className="trust-item">
            <span className="icon">✓</span> Pagamento Único
          </div>
          <div className="trust-item">
            <span className="icon">✓</span> Compra 100% Segura
          </div>
        </div>
      </div>
    </section>
  );
}
