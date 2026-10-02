import Image from "next/image";
const Depoimentos = () => {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container flex-col justify-between">
        <h2 className="text-2xl uppercase font-bold text-center my-20 mx-auto text-[#ffffff]">
          Veja depoimentos de alunos que se tornaram Mestres do AutoCAD:
        </h2>

        <div className="depoimentos-imgs flex flex-wrap gap-5 mx-auto justify-center mb-20">
          <div className="depoimento-img">
            <Image
              src={"/images/depoimentos/depoimento-autocad-1.webp"}
              width={709}
              height={861}
              className="w-62.5 h-auto"
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
              fetchPriority="high"
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
