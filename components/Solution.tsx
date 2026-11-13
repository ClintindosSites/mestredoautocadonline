import SolutionCard from "./SolutionCard";

const cards = [
  {
    image: "🎓",
    title: "Certificado Reconhecido",
    subtitle:
      "Válido em todo Brasil (Decreto 5.154), horas extracurriculares e para enriquecer seu currículo.",
  },
  {
    image: "🎬",
    title: "Aulas Objetivas de 10 a 25 min",
    subtitle:
      "Direto ao ponto, sem enrolação. Você aprende no seu ritmo, no seu horário, quantas vezes quiser.",
  },
  {
    image: "📱",
    title: "Acesso Vitalício + Atualizações",
    subtitle:
      "Pague uma vez e tenha acesso para sempre. O curso é atualizado conforme novas versões do AutoCAD.",
  },
  {
    image: "💬",
    title: "Suporte com o Professor",
    subtitle:
      "Tire suas dúvidas diretamente na plataforma. Você não fica sozinho na jornada.",
  },
  {
    image: "📐",
    title: "Projetos Práticos",
    subtitle:
      "Exercícios e projetos reais de plantas baixas, cortes, fachadas, perspectivas e modelagem 3D.",
  },
  {
    image: "🛡️",
    title: "Garantia de 7 Dias",
    subtitle:
      "Risco zero. Se não gostar, devolvemos 100% do seu dinheiro. Sem burocracia.",
  },
];

export default function Solution() {
  return (
    <section>
      <div className="container flex-col py-10">
        <div className="text-center py-6">
          {" "}
          <h2 className="text-4xl uppercase font-semibold py-7">
            <span className="text-[#ff0f57] font-bold">Solução completa</span>{" "}
            <br /> <span className="text-white">em um único curso</span>
          </h2>
          <p className="text-xl text-gray-300">
            Do download do software até projetos 3D completos — você vai sair do
            zero apto a trabalhar com AutoCAD em qualquer área.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((cards, index) => (
            <SolutionCard key={index} {...cards} />
          ))}
        </div>
      </div>
    </section>
  );
}
