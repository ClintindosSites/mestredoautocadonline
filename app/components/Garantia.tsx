import Image from "next/image";

export default function Garantia() {
  return (
    <section className="garantia bg-[#141414] py-20" id="garantia">
      <div className="container items-center gap-6">
        <div className="text flex flex-col gap-3">
          <h2 className="text-4xl font-bold">
            7 dias de Garantia Incondicional
          </h2>
          <p className="text-xl">
            Você tem 7 dias para acessar o conteúdo e se ainda achar que os
            cursos não são para você, basta enviar um e-mail solicitando o
            reembolso e devolveremos todo o seu dinheiro, sem perguntas!
          </p>
          <p className="text-xl">
            Mesmo que a compra seja efetuada via boleto, cartão de crédito ou
            pix.
          </p>
        </div>
        <div className="garantia-img">
          <Image
            src={"/images/garantia.webp"}
            width={411}
            height={324}
            className="w-150 h-full"
            loading="eager"
            alt="Garantia de 7 dias do curso de AutoCAD"
          />
        </div>
      </div>
    </section>
  );
}
