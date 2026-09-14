import Hero from "./components/Hero";
import Apresentation from "./components/Apresentation";
import Estrutura from "./components/Estrutura";
import Certificado from "./components/Certificado";
import PreCTA from "./components/PreCTA";

export default function Home() {
  return (
    <>
      {" "}
      <Hero />;
      <Apresentation />;
      <Estrutura />
      <Certificado />
      <PreCTA />
    </>
  );
}
