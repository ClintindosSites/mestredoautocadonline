import Image from "next/image";
const Depoimentos = () => {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container flex-col justify-between">
        <h2 className="text-2xl uppercase font-bold text-center my-20 mx-auto">
          Veja depoimentos de alunos que se tornaram Mestres do AutoCAD:
        </h2>

        <div className="depoimentos-videos w-full max-w-5xl mx-auto aspect-video  items-stretch flex flex-wrap justify-center gap-5 mb-20">
          <div className="video-depoimento flex flex-col gap-4 text-center items-center max-w-60">
            <iframe
              className="w-60 h-50 rounded-2xl"
              src="https://www.youtube.com/embed/OVc2rdJgc4k?rel=0&modestbranding=1"
              title="Depoimento de aluno - Mestre do AutoCAD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className="text-xl font-bold text-[#ff0f57]">Anderson Félix</p>
            <Image
              src={"/images/star.webp"}
              alt="Curso de AutoCAD avaliação 5 estrelas"
              width={1198}
              height={190}
              className="w-37.5 h-auto"
            />
            <p>
              &quot; Sou estudante de Engenharia Civil e quero dizer para vocês
              que estou muito satisfeito em ter começado esse curso, aprendi a
              mexer profundamente no AutoCAD, bem mais que no período da
              faculdade. É um curso barato e prático que tem um suporte
              excelente.&quot;
            </p>
          </div>
          <div className="video-depoimento flex flex-col gap-4 text-center items-center max-w-60">
            <iframe
              className="w-60 h-50 rounded-2xl"
              src="https://www.youtube.com/embed/1vvUPj-Fc34?si=_zLedCGR8DNAJSt3"
              title="Depoimento de aluno - Mestre do AutoCAD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className="text-xl font-bold text-[#ff0f57]">Alice Coelho</p>
            <Image
              src={"/images/star.webp"}
              alt="Curso de AutoCAD avaliação 5 estrelas"
              width={1198}
              height={190}
              className="w-37.5 h-auto"
            />
            <p>
              &quot;Atualmente já tenho o diploma de AutoCAD, foi umas das
              melhores coisas que eu fiz, antes da Expert eu não sabia mexer em
              cad, a Expert mudou a minha visão, quero trabalhar como
              projetista. É algo muito bom para você já ter uma profissão, você
              aprende rápido, recomendo.&quot;
            </p>
          </div>
          <div className="video-depoimento flex flex-col gap-4 text-center items-center max-w-60">
            <iframe
              className="w-60 h-50 rounded-2xl"
              src="https://www.youtube.com/embed/h04zQ4zEFWI?si=F8zDtxuMhPL4FB1e"
              title="Depoimento de aluno - Mestre do AutoCAD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className="text-xl font-bold text-[#ff0f57]">Moisés Cardoso</p>
            <Image
              src={"/images/star.webp"}
              alt="Curso de AutoCAD avaliação 5 estrelas"
              width={1198}
              height={190}
              className="w-37.5 h-auto"
            />
            <p>
              &quot;Realmente o Curso de Autocad 2D e 3D é sensacional, superou
              as minhas expectativas, imprimi o meu ceritifcado hoje e vai
              agregar também para apresentar na faculdade. A dinâmica do Victor
              e da Expert Cursos é ímpar, todos os cuidados.&quot;
            </p>
          </div>
          <div className="video-depoimento flex flex-col gap-4 text-center items-center max-w-60">
            <iframe
              className="w-60 h-50 rounded-2xl"
              src="https://www.youtube.com/embed/iurtRdZfwn8?si=0OWFKgYR-GxKXghL"
              title="Depoimento de aluno - Mestre do AutoCAD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className="text-xl font-bold text-[#ff0f57]">Guilherme Lima</p>
            <Image
              src={"/images/star.webp"}
              alt="Curso de AutoCAD avaliação 5 estrelas"
              width={1198}
              height={190}
              className="w-37.5 h-auto"
            />
            <p>
              &quot;Já assisti todas as aulas e gostei bastante, o professor é
              um engenheiro bastante qualificado na área, as aulas são bem
              explicadas e detalhadas com o passo a passo ensinando os comandos
              do começo ao fim do que realmente se deve aprender.&quot;
            </p>
          </div>
        </div>
        <div className="depoimentos-imgs flex flex-wrap gap-5 mx-auto justify-center mb-20">
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-1.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-2.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-3.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-4.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-5.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-6.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-7.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-8.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-9.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-10.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-11.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              loading="eager"
              alt="Depoimento de aluno que fez o curso de AutoCAD e se tornou um Mestre do Autocad"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
