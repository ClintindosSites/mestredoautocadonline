import Image from "next/image";
import Link from "next/link";

const Apresentation = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-text gap-2">
          <h2 className="text-3xl">
            <span className="text-[#ff0f57] font-bold text-4xl">
              Transforme-se em um Mestre do AutoCAD certificado
            </span>{" "}
            <br />e ganhe destaque e autoridade no mercado.
          </h2>
          <p className="text-lg">
            <strong>
              {" "}
              O curso Online de{" "}
              <span className="text-[#ff0f57] font-extrabold">AutoCAD</span>
            </strong>{" "}
            foi criado para você dominar o desenho técnico de forma{" "}
            <strong>100% prática,</strong> economizando tempo com{" "}
            <strong>aulas diretas e objetivas</strong>.
          </p>
          <p className="text-lg">
            Em{" "}
            <strong className="text-[#ff0f57]">
              10 módulos com 40 videoaulas
            </strong>{" "}
            passo a passo, você aprende desde os{" "}
            <strong>comandos básicos até recursos avançados,</strong> incluindo
            a criação de objetos, planta baixa, cortes, desenho técnico, peças
            mecânicas, detalhamentos, plotagem e impressão completa,{" "}
            <strong>tudo online, na prática e sem complicação</strong>.
          </p>
          <p className="text-lg">
            Você vai do{" "}
            <strong className="text-[#ff0f57] font-extrabold">
              básico ao avançado
            </strong>
            , com exercícios práticos em cada aula. Além disso,conta com uma
            área de membros exclusiva para tirar todas as duvidas diretamente
            com o professor{" "}
            <a href="https://go.hotmart.com/H101021157N">
              <strong>VICTOR BRIENCE</strong>
            </a>
            , e ao concluir o curso, recebe um{" "}
            <strong>certificado reconhecido</strong> de capacitação profissional
            da escola{" "}
            <a href="https://go.hotmart.com/H101021157N">
              <strong>Expert Cursos</strong>
            </a>
            , que vai te formar um{" "}
            <strong className="text-[#ff0f57] ">Mestre do AutoCAD</strong>.
          </p>
        </div>
        <div className="intro-img">
          <Image
            src={"/images/mestreautocad3d.webp"}
            alt="Avatar do Mestre do AutoCAD, curso de AutoCAD online"
            width={1024}
            height={1536}
            className="mestre w-150 h-full"
          />
          <Link
            href={"https://go.hotmart.com/H101021157N?ap=4b22"}
            className="btn-primary"
          >
            Torne-se um mestre do autocad por apenas R$197
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Apresentation;
