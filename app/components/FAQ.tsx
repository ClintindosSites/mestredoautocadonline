"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Quanto tempo terei de acesso ao curso?",
    resposta:
      "Você recebe acesso vitalício ao curso. Pode estudar no seu tempo e no seu horário, assistir e reassistir às aulas quantas vezes quiser.",
  },
  {
    pergunta: "Como vou receber o curso?",
    resposta:
      "Após realizar a sua inscrição, você receberá o acesso ao curso diretamente em seu e-mail. Basta clicar no botão “Acessar meu produto”, criar sua senha e começar seus estudos.",
  },
  {
    pergunta: "O certificado é válido em todo o Brasil?",
    resposta:
      "Nossos cursos profissionalizantes são classificados como cursos livres e possuem certificado de conclusão. Os cursos livres são uma modalidade de ensino permitida pela legislação brasileira. O certificado pode ser utilizado para comprovação de capacitação e, conforme as regras da instituição de ensino, também pode ser aceito para atividades extracurriculares.",
  },
  {
    pergunta: "Quem pode fazer esse curso?",
    resposta:
      "Qualquer pessoa que esteja buscando conhecimento e capacitação profissional pode fazer o curso. Não é necessário ter conhecimento prévio de AutoCAD: você começa pelos primeiros passos e evolui gradualmente até conteúdos mais avançados.",
  },
  {
    pergunta: "Terei suporte durante o curso?",
    resposta:
      "Sim. Você terá acesso à área de membros do curso e poderá tirar suas dúvidas relacionadas às aulas diretamente com o professor.",
  },
  {
    pergunta: "Os cursos possuem legendas?",
    resposta:
      "Sim. As videoaulas contam com legendas disponíveis para facilitar o acompanhamento do conteúdo.",
  },
  {
    pergunta: "Emitem nota fiscal?",
    resposta:
      "Sim. Os cursos e produtos contam com emissão de Nota Fiscal. O documento é enviado para o e-mail informado no momento da compra.",
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta:
      "Você pode realizar o pagamento utilizando as opções disponibilizadas no checkout, como cartão de crédito, boleto bancário, Pix e PayPal.",
  },
  {
    pergunta: "Terei direito a carteirinha de estudante?",
    resposta:
      "Os alunos podem solicitar a carteira estudantil conforme as condições e regras da instituição responsável pela emissão. Consulte as condições disponíveis após sua matrícula.",
  },
  {
    pergunta: "Esse site é seguro?",
    resposta:
      "Sim. O pagamento é realizado por meio da Hotmart, uma plataforma especializada em pagamentos e distribuição de produtos digitais. Seus dados são transmitidos por conexão segura durante o processo de pagamento.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState(null);

  const toggleFAQ = index => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">TIRE SUAS DÚVIDAS</span>

          <h2>
            Perguntas <strong>Frequentes</strong>
          </h2>

          <p>
            Ainda ficou com alguma dúvida? Confira as respostas para as
            principais perguntas sobre o curso Mestre do AutoCAD.
          </p>
        </div>

        <div className="faq-list">
          {perguntas.map((item, index) => (
            <div
              className={`faq-item ${
                aberta === index ? "faq-item-active" : ""
              }`}
              key={index}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={aberta === index}
              >
                <span>{item.pergunta}</span>

                <span className="faq-icon">{aberta === index ? "−" : "+"}</span>
              </button>

              <div
                className={`faq-answer ${
                  aberta === index ? "faq-answer-open" : ""
                }`}
              >
                <p>{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Pronto para dominar o AutoCAD?</h3>

          <p>Comece agora sua jornada para se tornar um Mestre do AutoCAD.</p>

          <a
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            className="faq-button"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
