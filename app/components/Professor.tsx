import Link from "next/link";
import Image from "next/image";

export default function Professor() {
  return (
    <section className="professor" id="professor">
      <div className="container gap-10">
        <div className="professor-img">
          <Image
            src={"/images/professor-autocad.webp"}
            width={2611}
            height={3264}
            className="max-w-500 w-full h-full rounded-2xl"
            loading="eager"
            alt="Professor do curso de AutoCAD"
          />
        </div>
        <div className="text gap-2 flex flex-col">
          <h2 className="text-4xl font-bold">
            Quem está por trás do seu aprendizado?
          </h2>
          <p className="text-xl font-bold">
            Conheça o professor que vai{" "}
            <span className="text-[#ff0f57]">
              tranformar você em um Mestre do AutoCAD
            </span>
          </p>
          <p>
            O curso é oferecido pela{" "}
            <Link
              href={"https://go.hotmart.com/H101021157N?ap=4b22"}
              className="text-[#ff0f57] font-bold"
            >
              Expert Cursos
            </Link>
            , uma escola de educação profissionalizante online que já formou
            milhares de alunos e oferece{" "}
            <span className="text-[#ff0f57] font-bold">
              cursos do básico ao avançado,
            </span>{" "}
            com acesso vitalício, área de membros e suporte ao aluno.
          </p>
          <p>
            E para conduzir você nesta jornada pelo AutoCAD, você terá aulas com
            Victor, engenheiro e{" "}
            <span className="text-[#ff0f57] font-bold">
              especialista em AutoCAD
            </span>{" "}
            e outros softwares utilizados no mercado.
          </p>
          <p>
            Com uma metodologia direta, didática e focada na prática, Victor
            apresenta os conteúdos passo a passo e utiliza exercícios para
            <span className="text-[#ff0f57] font-bold">
              {" "}
              ajudar você a transformar o conhecimento em habilidade.
            </span>
          </p>
          <h3 className="text-3xl font-bold">
            Do primeiro comando ao{" "}
            <span className="text-[#ff0f57] font-bold"> do AutoCAD</span>
          </h3>
          <p>
            <span className="text-[#ff0f57] font-bold">
              {" "}
              A proposta do curso é levar você por uma jornada completa de
              aprendizado:
            </span>{" "}
            começando pelos fundamentos e avançando gradualmente para recursos e
            ferramentas que permitem desenvolver projetos com mais segurança e
            autonomia.
          </p>
          <p>
            É por isso que o{" "}
            <span className="text-[#ff0f57] font-bold">Mestre do AutoCAD </span>{" "}
            representa mais do que simplesmente aprender onde ficam as
            ferramentas do programa: é uma formação para quem quer{" "}
            <span className="text-[#ff0f57] font-bold">
              aprender AutoCAD de forma prática e evoluir
            </span>{" "}
            no uso do software.
          </p>
          <p>
            <span className="text-[#ff0f57] font-bold">
              {" "}
              Você aprende com Victor, através da estrutura e metodologia da
              Expert Cursos,
            </span>{" "}
            e coloca o conhecimento em prática para desenvolver suas próprias
            habilidades no AutoCAD.
          </p>
        </div>
      </div>
    </section>
  );
}
