import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade | Mestre do AutoCAD",
  description:
    "Conheça a Política de Privacidade do Mestre do AutoCAD e saiba como informações e dados podem ser tratados durante a utilização do site.",
};
export default function PoliticaDePrivacidade() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updatedAt="22 de setembro de 2026"
      intro={
        <>
          O <strong>Mestre do AutoCAD</strong> valoriza a privacidade dos seus
          visitantes e está comprometido com a proteção dos dados pessoais
          eventualmente tratados durante a utilização deste site.
        </>
      }
      sections={[
        {
          title: "1. Sobre o Mestre do AutoCAD",
          content: (
            <>
              <p>
                O Mestre do AutoCAD é um projeto de conteúdo voltado à
                publicação de informações, dicas, tutoriais e materiais
                relacionados ao AutoCAD e à área de projetos.
              </p>

              <p>
                O site também pode apresentar informações e links direcionados a
                cursos e produtos educacionais oferecidos por terceiros.
              </p>
            </>
          ),
        },

        {
          title: "2. Dados que podem ser coletados",
          content: (
            <>
              <p>
                Dependendo da forma como o usuário utiliza o site, poderão ser
                coletadas informações como:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Endereço IP;</li>
                <li>Informações do navegador e dispositivo;</li>
                <li>Páginas acessadas;</li>
                <li>Data e horário de acesso;</li>
                <li>Informações sobre interação com o site;</li>
                <li>Origem do acesso;</li>
                <li>
                  Informações fornecidas voluntariamente pelo próprio usuário em
                  formulários eventualmente disponibilizados no site.
                </li>
              </ul>
            </>
          ),
        },

        {
          title: "3. Cookies e tecnologias semelhantes",
          content: (
            <>
              <p>
                O site poderá utilizar cookies e tecnologias semelhantes para
                permitir o funcionamento adequado de determinadas
                funcionalidades, compreender como os visitantes utilizam o site,
                analisar tráfego, medir campanhas e melhorar a experiência de
                navegação.
              </p>

              <p>
                O usuário pode configurar seu navegador para bloquear ou excluir
                cookies. Algumas funcionalidades poderão ser afetadas por essa
                configuração.
              </p>
            </>
          ),
        },

        {
          title: "4. Ferramentas de análise e publicidade",
          content: (
            <>
              <p>
                O site poderá utilizar ferramentas de terceiros para análise de
                tráfego, mensuração de conversões e publicidade.
              </p>

              <p>
                Entre os serviços que poderão ser utilizados estão ferramentas
                fornecidas por empresas como Google e Meta, conforme a
                configuração vigente do site.
              </p>

              <p>
                Cada fornecedor possui suas próprias políticas de privacidade e
                regras para tratamento de dados.
              </p>
            </>
          ),
        },

        {
          title: "5. Links para sites de terceiros",
          content: (
            <p>
              O Mestre do AutoCAD pode disponibilizar links para sites,
              plataformas, produtos e serviços de terceiros. Ao acessar esses
              links, o usuário estará sujeito às políticas de privacidade,
              termos e condições do respectivo terceiro.
            </p>
          ),
        },

        {
          title: "6. Links de afiliados",
          content: (
            <p>
              Alguns links disponibilizados no site podem ser links de afiliado.
              Isso significa que, caso o usuário realize determinada ação ou
              compra por meio de um desses links, o Mestre do AutoCAD poderá
              receber uma comissão, sem que isso necessariamente represente um
              custo adicional ao usuário.
            </p>
          ),
        },

        {
          title: "7. Processamento de pagamentos",
          content: (
            <p>
              O Mestre do AutoCAD não realiza diretamente o processamento de
              pagamentos relacionados ao curso divulgado no site. Quando o
              usuário decide adquirir um produto ou curso por meio de um link
              disponibilizado no site, poderá ser direcionado à plataforma
              responsável pela venda e pelo processamento do pagamento.
            </p>
          ),
        },

        {
          title: "8. Finalidades do tratamento",
          content: (
            <>
              <p>
                As informações eventualmente coletadas poderão ser utilizadas
                para:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Disponibilizar e melhorar o funcionamento do site;</li>
                <li>Analisar o desempenho das páginas;</li>
                <li>Compreender o comportamento dos visitantes;</li>
                <li>Melhorar conteúdos e experiência de navegação;</li>
                <li>Medir campanhas de marketing;</li>
                <li>Acompanhar conversões;</li>
                <li>Prevenir abusos e atividades indevidas;</li>
                <li>Cumprir obrigações legais quando aplicável.</li>
              </ul>
            </>
          ),
        },

        {
          title: "9. Compartilhamento de informações",
          content: (
            <p>
              Os dados eventualmente coletados poderão ser tratados por
              prestadores de serviços e plataformas utilizadas para
              funcionamento, análise, segurança, publicidade e mensuração do
              site, de acordo com suas respectivas finalidades.
            </p>
          ),
        },

        {
          title: "10. Segurança",
          content: (
            <p>
              São adotadas medidas técnicas e organizacionais razoáveis para
              proteger as informações tratadas pelo site contra acessos não
              autorizados, perda, alteração ou uso indevido. Entretanto, nenhum
              sistema conectado à internet pode ser considerado absolutamente
              seguro.
            </p>
          ),
        },

        {
          title: "11. Direitos do titular",
          content: (
            <p>
              Nos termos da legislação aplicável, especialmente da Lei Geral de
              Proteção de Dados Pessoais (Lei nº 13.709/2018), o titular poderá
              possuir direitos relacionados aos seus dados pessoais, conforme
              aplicável ao tratamento realizado.
            </p>
          ),
        },

        {
          title: "12. Crianças e adolescentes",
          content: (
            <p>
              O site não é direcionado especificamente a crianças. Caso seja
              identificado tratamento indevido de dados pessoais de crianças ou
              adolescentes, poderão ser adotadas medidas adequadas conforme a
              legislação aplicável.
            </p>
          ),
        },

        {
          title: "13. Alterações nesta Política",
          content: (
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir alterações no funcionamento do site, nos serviços
              utilizados ou na legislação aplicável. A versão mais recente
              estará sempre disponível nesta página.
            </p>
          ),
        },

        {
          title: "14. Contato",
          content: (
            <p>
              Para dúvidas relacionadas a esta Política de Privacidade ou ao
              tratamento de dados realizado pelo site, o usuário poderá utilizar
              o canal de contato disponibilizado no próprio Mestre do AutoCAD.
            </p>
          ),
        },
      ]}
    />
  );
}
