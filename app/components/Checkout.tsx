import Image from "next/image";
import Link from "next/link";

export default function CheckoutFinal() {
  return (
    <section className="checkout-final bg-[#f5f5f5] py-20" id="checkout-final">
      <div className="container justify-between gap-15">
        <div className="price flex flex-col items-center justify-center bg-[#141414] rounded-3xl max-w-200">
          <div className="price-title border-b-4 border-[#ff0f57] w-full h-50 text-center items-center flex justify-center uppercase mb-10">
            <h3 className="text-3xl font-bold">
              Transforme-se em um Mestre do AutoCAD com um investimento no valor
              de:
            </h3>
          </div>
          <p className="text-4xl text-[#ffffff]">
            <span className="line-through font-bold">R$497,00</span>
          </p>
          <div className="flex gap-2 text-[#ff0f57] items-center parcels">
            <p className="text-1xl font-bold text-2xl">
              Por <br /> 12x
            </p>
            <p className="text-7xl  font-bold " id="price-parcel">
              R$20,37
            </p>
          </div>
          <p className="text-[#ffffff] text-2xl mb-5 text-center">
            ou apenas <br />
            <strong className="text-[#ff0f57] text-6xl">
              {" "}
              R$197
            </strong> <br /> à vista
          </p>
          <div className="img">
            {" "}
            <Image
              src={"/images/mestre-do-autocad-checkout.webp"}
              width={1587}
              height={991}
              className="w-200 h-full"
              loading="eager"
              alt="Clique e adquira agora o bonus do mestre do autocad"
            />
          </div>
          <Link
            href={"https://go.hotmart.com/H101021157N?ap=4b22"}
            className="btn-primary"
            id="checkout-final-btn"
          >
            Clique aqui e compre agora o seu curso de AutoCAD
          </Link>
          <div className="img px-20">
            {" "}
            <Image
              src={"/images/metodos-pagamento.webp"}
              width={1307}
              height={195}
              alt="Metodos de pagamento do curso de AutoCAD"
              loading="eager"
              className="w-fit h-full"
            />
          </div>
          <p className="mb-15">
            {" "}
            Compra 100% segura. Garantia incondicional de 7 dias.
          </p>
        </div>
        <div className="text justify-center flex flex-col gap-15">
          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Aulas Práticas</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Acesso Vitalício</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Bônus Exclusivos</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Apostila do Curso</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Projetos Prontos</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Exercícios Práticos</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>7 dias de Garantia</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Parcele em até 12x</p>
          </div>
          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Suporte com o Professor</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Certificado de Conclusão</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Receba agora em seu E-mail</p>
          </div>
          <div className="trust-item">
            <span className="icon">✓</span>
            <p>Pagamento sem Mensalidades</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Treinamento Mestre do AutoCAD Expert</p>
          </div>

          <div className="trust-item">
            {" "}
            <span className="icon">✓</span>
            <p>Direito à Carteira Nacional Estudantil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
