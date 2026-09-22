import Hero from "./components/Hero";
import Apresentation from "./components/Apresentation";
import Estrutura from "./components/Estrutura";
import Certificado from "./components/Certificado";
import PreCTA from "./components/PreCTA";
import Bonus from "./components/Bonus";
import Depoimentos from "./components/Depoimentos";
import Professor from "./components/Professor";
import Garantia from "./components/Garantia";
import Checkout from "./components/Checkout";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

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
      <Professor />
      <Garantia />
      <Checkout />
      <FAQ />
      <Footer />
    </>
  );
}
