import Hero from "./components/Hero";
import Apresentation from "./components/Apresentation";
import Estrutura from "./components/Estrutura";
import Certificado from "./components/Certificado";
import PreCTA from "./components/PreCTA";
import Bonus from "./components/Bonus";
import Depoimentos from "./components/Depoimentos";

export default function Home() {
  return (
    <>
      {" "}
      <Hero />;
      <Apresentation />;
      <Estrutura />
      <Certificado />
      <PreCTA />
      <Bonus />
      <Depoimentos />
    </>
  );
}
