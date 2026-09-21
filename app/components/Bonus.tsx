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
      <div className="bonus-bonus bg-[#ff0f57]">
        <div className="container">
          <div className="text">
            <h2 className="text-4xl font-bold uppercase">E não é só isso...</h2>
            <p className="text-2xl">
              Além dos projetos prontos, acesso vitalício, suporte e
              certificado, o curso oferece ainda mais vantagens para
              potencializar sua experiência de aprendizado, confira abaixo:
            </p>
          </div>
          <div className="bonus-imgs flex gap-10">
            <div className="bg-[#242424] flex flex-col items-center text-center w-fit p-10 rounded-2xl">
              <Image
                src={"/images/apostila-pdf-autocad.webp"}
                alt="Material de Apoio Completo em PDF do curso de AutoCAD"
                width={300}
                height={300}
              />
              <h3 className="text-2xl font-bold mb-5">
                APOSTILA DO AUTOCAD EM PDF
              </h3>
              <p>
                Material de Apoio Completo em PDF com diversas dicas, atalhos,
                comandos, figuras e exercícios práticos que realizamos durante
                todas as aulas.
              </p>
            </div>
            <div className="bg-[#242424] flex flex-col items-center text-center w-fit p-10 rounded-2xl">
              <Image
                src={"/images/comunidade-alunos-autocad.webp"}
                alt="Material de Apoio Completo em PDF do curso de AutoCAD"
                width={200}
                height={200}
              />
              <h3 className="text-2xl font-bold my-5">COMUNIDADE DO AUTOCAD</h3>
              <p>
                Todos os nossos alunos tem acesso a uma Comunidade Exclusiva que
                conta com diversos alunos e profissionais que estão vivenciando
                a mesma experiência, você não estará sozinho nessa jornada.
              </p>
            </div>
            <div className="bg-[#242424] flex flex-col items-center text-center w-fit p-10 rounded-2xl">
              <Image
                src={"/images/carteirinha-estudante-autocad.webp"}
                alt="Material de Apoio Completo em PDF do curso de AutoCAD"
                width={300}
                height={300}
              />
              <h3 className="text-2xl font-bold">CARTEIRINHA DE ESTUDANTE</h3>
              <p>
                Alunos Expert Cursos podem solicitar a sua Carteira de
                Estudante, um documento oficial que garante meia-entrada em
                cinemas, shows e nos mais diversos eventos culturais e
                esportivos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bonus-checkout bg-[#f5f5f5]" id="bonus-checkout">
        <div className="container">
          <div className="price flex flex-col items-center justify-center">
            <p className="text-2xl text-[#1d1d1d]">
              Tudo isso de{" "}
              <span className="line-through font-bold">R$497,00</span>
            </p>
            <div className="flex gap-2 text-[#1d1d1d] items-center parcels">
              <p className="text-1xl font-bold text-2xl">
                Por <br /> 12x
              </p>
              <p className="text-7xl  font-bold " id="price-parcel">
                R$20,37
              </p>
            </div>
            <p className="text-[#1d1d1d] text-2xl mb-5">
              ou apenas <strong> R$197</strong> à vista
            </p>
            <Image
              src={"/images/checkout-bonus-mestre-do-autocad.webp"}
              width={700}
              height={700}
              alt="Clique e adquira agora o bonus do mestre do autocad"
            />
            <Link
              href={"https://go.hotmart.com/H101021157N?ap=4b22"}
              className="btn-primary"
              id="checkout-bonus-btn"
            >
              Compre agora e torne-se um Mestre do AutoCAD
            </Link>
            <Image
              src={"/images/metodos-pagamento.webp"}
              width={300}
              height={300}
              alt="Metodos de pagamento do curso de AutoCAD"
              className="my-5"
            />
          </div>
          <div className="bonus-checkout-items flex gap-10 items-center justify-center text-center">
            <div className="bg-[#ff0f57] p-10 rounded-2xl h-50 items-center flex flex-col">
              <Image
                src={"/images/certificado_layer.png"}
                width={70}
                height={70}
                alt="cetificado de curso de AutoCAD"
              />
              <p className="text-2xl font-bold">Curso com Certificado</p>
            </div>
            <div className="bg-[#ff0f57] p-10 rounded-2xl h-50 flex flex-col items-center">
              <Image
                src={"/images/statics_layer.png"}
                width={70}
                height={70}
                alt="cetificado de curso de AutoCAD"
              />
              <p className="text-2xl font-bold">Do Básico ao Avançado</p>
            </div>
            <div className="bg-[#ff0f57] p-10 rounded-2xl h-50 flex flex-col items-center">
              <Image
                src={"/images/acesso_layer.png"}
                width={70}
                height={70}
                alt="cetificado de curso de AutoCAD"
              />
              <p className="text-2xl font-bold">Acesso Vitalício</p>
            </div>
            <div className="bg-[#ff0f57] p-10 rounded-2xl h-50 flex flex-col items-center">
              <Image
                src={"/images/suporte_layer.png"}
                width={70}
                height={70}
                alt="cetificado de curso de AutoCAD"
              />
              <p className="text-2xl font-bold">Suporte Exclusivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
