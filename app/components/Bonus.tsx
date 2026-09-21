import Image from "next/image";
import Link from "next/link";

export default function Bonus() {
  return (
    <section className="bonus" id="bonus">
      <div className="container">
        <div className="text">
          <Image
            src={"/images/mestre-do-autocad-bonus.webp"}
            height={400}
            width={400}
            alt="Mestre do AutoCAD oferece 5 aulas bonus"
          />
          <h2 className="text-3xl font-extrabold">
            Além de todo o Conteúdo do curso, <br /> o{" "}
            <span className="text-[#ff0f57]">Mestre do Autocad</span> vai te
            entregar
            <br />{" "}
            <strong className="text-[#ff0f57]">
              5 aulas bônus com projetos
            </strong>{" "}
            <br /> no AutoCAD
          </h2>
        </div>
        <div className="bonus-box">
          <div className="bonus-imgs flex gap-20 justify-center items-center">
            <div className="bonus-infos">
              <Image
                src={"/images/projeto-autocad-1.webp"}
                width={300}
                height={300}
                alt="Projeto de AutoCAD Online"
              />
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Projetos Arquitetônicos</p>
              </div>
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Projetos de fundações e topografia</p>
              </div>
            </div>
            <div className="bonus-infos">
              <Image
                src={"/images/projeto-autocad-2.webp"}
                width={300}
                height={300}
                alt="Projeto de AutoCAD Online"
              />
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Projeto de combate e prevenção contra incêndio</p>
              </div>
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Projetos elétrico e hidráulico</p>
              </div>
            </div>
            <div className="bonus-infos">
              <Image
                src={"/images/projeto-autocad-3.webp"}
                width={300}
                height={300}
                alt="Projeto de AutoCAD Online"
              />
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Projeto de paginação</p>
              </div>
              <div className="trust-item">
                <span className="icon">✓</span>
                <p>Folhas prontas para impressão</p>
              </div>
            </div>
          </div>
          <Link
            href={"https://go.hotmart.com/H101021157N?ap=4b22"}
            className="btn-primary"
            id="bonus-btn"
          >
            Clique e garanta o conteúdo bônus
          </Link>
        </div>
      </div>
    </section>
  );
}
