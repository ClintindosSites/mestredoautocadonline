"use client";

import Link from "next/link";

export default function PriceSection() {
  const handleCheckoutClick = () => {
    // GA4
    window.gtag?.("event", "conteudo_checkout", {
      product: "curso_autocad",
      source: "mestredoautocad",
    });

    // Meta Pixel
    window.fbq?.("track", "InitiateCheckout");
  };

  return (
    <section className="bg-[#0d0d0d] py-16 md:py-20" id="price">
      <div className="container mx-auto px-4">
        {/* CABEÇALHO */}
        <header className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold uppercase text-white md:text-4xl">
            Invista no Seu Futuro Profissional
          </h2>

          <p className="mt-3 text-base text-slate-400 md:text-lg">
            Pagamento único, sem mensalidades. Acesso vitalício a todo o
            conteúdo.
          </p>
        </header>

        {/* CARD DE PREÇO */}
        <div className="mx-auto flex w-full max-w-130 flex-col items-center gap-5 rounded-2xl border border-[#393939] bg-[#1f1f1f] p-6 text-center shadow-2xl md:p-10">
          {/* PREÇO ANTIGO */}
          <span className="text-lg text-slate-400 line-through">
            de R$ 597,00
          </span>

          {/* PREÇO ATUAL */}
          <div className="flex items-baseline gap-2 text-[#ff0f57]">
            <span className="text-5xl font-extrabold leading-none md:text-6xl">
              R$ 197
            </span>

            <small className="text-sm font-medium text-white">à vista</small>
          </div>

          {/* PARCELAMENTO */}
          <p className="text-sm text-slate-300 md:text-base">
            ou <strong className="text-lg text-white">12x de R$ 20,37</strong>{" "}
            sem juros no cartão
          </p>

          {/* BOTÃO CHECKOUT */}
          <Link
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            rel="noopener noreferrer"
            onClick={handleCheckoutClick}
            className="mt-2 block w-full rounded-lg bg-[#ff0f57] px-5 py-4 text-center text-sm font-extrabold uppercase text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#d90848] hover:shadow-[0_8px_25px_rgba(255,15,87,0.25)] md:text-base"
          >
            COMPRE SEU CURSO AGORA
          </Link>

          {/* GARANTIA */}
          <div className="mt-2 flex items-center justify-center gap-3 text-sm leading-relaxed text-slate-300">
            <span className="shrink-0 text-2xl">🛡️</span>

            <p>
              Garantia incondicional de 7 dias — seu dinheiro de volta se não
              gostar.
            </p>
          </div>

          {/* FORMAS DE PAGAMENTO */}
          <div className="mt-3 flex w-full flex-wrap justify-center gap-2 border-t border-[#393939] pt-6">
            <span className="rounded-md bg-[#292929] px-3 py-2 text-xs text-slate-300">
              💳 Cartão de Crédito
            </span>

            <span className="rounded-md bg-[#292929] px-3 py-2 text-xs text-slate-300">
              📄 Boleto Bancário
            </span>

            <span className="rounded-md bg-[#292929] px-3 py-2 text-xs text-slate-300">
              ⚡ Pix
            </span>

            <span className="rounded-md bg-[#292929] px-3 py-2 text-xs text-slate-300">
              💙 PayPal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
