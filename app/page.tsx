import Hero from "../components/Hero";

import Estrutura from "../components/Estrutura";
import Certificado from "../components/Certificado";
import PreCTA from "../components/PreCTA";
import Bonus from "../components/Bonus";
import Depoimentos from "../components/Depoimentos";
import Professor from "../components/Professor";
import Garantia from "../components/Garantia";
import Checkout from "../components/Checkout";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Apresentation from "@/components/Apresentation";
import Header from "@/components/Header";
import Candidatos from "@/components/Candidatos";
import Solution from "@/components/Solution";
import PriceSection from "@/components/PriceSection";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <Hero />;
      <Apresentation />;
      <Candidatos />
      <Solution />
      <Estrutura />
      <PriceSection />
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
