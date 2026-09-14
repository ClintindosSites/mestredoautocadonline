import Image from "next/image";

export default function Certificado() {
  return (
    <section className="certificado">
      <div className="container py-40">
        <div className="certificado-row flex">
          <div className="text">
            <h2 className="text-[#ff0f57] font-bold text-4xl">
              Seja um Mestre do AutoCAD com Certificado Reconhecido{" "}
            </h2>
            <p className="text-lg">
              Certificado incluso, emitido de forma online em PDF. Válido em
              todo território nacional na comprovação de atividades de
              capacitação profissional, aperfeiçoamento e atividades
              complementares.(Lei 9394/96, Decreto 5154, Deliberação CEE 14/97)
            </p>
          </div>
          <Image
            src={"/images/certificado-autocad.webp"}
            alt="Certificado do Curso de AutoCAD online"
            width={400}
            height={400}
          />
        </div>
        <div className="certificado-row flex">
          <div className="text">
            <h2 className="text-[#ff0f57] font-bold text-4xl">
              PARA QUEM SERVE O CURSO
            </h2>
            <p className="text-lg">
              O Curso AutoCAD Expert foi criado para quem sente dificuldade em
              desenvolver projetos técnicos, perde tempo tentando aprender
              sozinho por tutoriais soltos ou não consegue apresentar desenhos
              de forma profissional.
            </p>
            <p>
              Ele é indicado para qualquer pessoa que queira aprender a usar o
              AutoCAD de maneira prática e eficiente, conquistando mais
              segurança e destaque na área.
            </p>
            <p>
              Mesmo que você nunca tenha aberto o programa, o curso começa do
              zero e evolui passo a passo até recursos avançados. Tudo em aulas
              claras e diretas, que você pode assistir no computador, notebook,
              tablet ou celular — online ou offline.
            </p>
          </div>
          <Image
            src={"/images/estudantes-autocad.webp"}
            alt="Para quem serve o curso de autocad? estudantes de engenharia e arquitetura e demais que queiram ganhar dinheiro com desenho técnico."
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
