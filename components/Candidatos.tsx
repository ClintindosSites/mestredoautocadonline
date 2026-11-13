import CandidatoCard from "./CandidatoCard";

const cards = [
  {
    title: "😫 Perde vagas por não saber AutoCAD",
    subtitle:
      "Você tem o conhecimento técnico da sua área, mas quando pedem AutoCAD no currículo, você precisa recusar a oportunidade.",
  },
  {
    title: "😤 Já tentou aprender sozinho e desistiu",
    subtitle:
      "Tutorial no YouTube solto, informação solta, sem sequência lógica — você se sente perdido e acaba desistindo.",
  },
  {
    title: "😰 Tem medo de não conseguir acompanhar",
    subtitle:
      "Acha que é muito difícil, que precisa ser engenheiro ou arquiteto formado para dominar a ferramenta.",
  },
  {
    title: "😞 Está estagnado na carreira",
    subtitle:
      "Você sente que sem o AutoCAD está limitado a funções operacionais e sem chance de crescimento.",
  },
  {
    title: "⏳ Não tem tempo para cursos presenciais",
    subtitle:
      "Sua rotina é corrida e você precisa de algo flexível, que encaixe no seu horário, sem horário fixo.",
  },
  {
    title: "💰 Acha que cursos bons são caros demais",
    subtitle:
      "Já viu cursos por R$ 1.000, R$ 2.000 e achou que aprender AutoCAD era inacessível para você.",
  },
];

export default function Candidatos() {
  return (
    <section className="candidatos">
      <div className="container flex-col py-10">
        <div className="text text-center p-7">
          <h2 className="text-4xl font-bold uppercase">
            Você se identifica com alguma dessas situações?
          </h2>
          <p className="text-gray-400 text-xl">
            Se você respondeu {"SIM"} a qualquer uma delas, esse curso foi feito
            para você.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((cards, index) => (
            <CandidatoCard key={index} {...cards} />
          ))}
        </div>
      </div>
    </section>
  );
}
