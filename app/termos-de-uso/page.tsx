import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso | Mestre do AutoCAD",
  description: "Confira os Termos de Uso do site Mestre do AutoCAD.",
};

export default function TermosDeUso() {
  return (
    <LegalPage
      title="Termos de Uso"
      updatedAt="22 de setembro de 2026"
      intro={
        <>
          Bem-vindo ao <strong>Mestre do AutoCAD</strong>. Ao acessar e utilizar
          este site, você concorda com os presentes Termos de Uso.
        </>
      }
      sections={[
        {
          title: "1. Sobre o site",
          content: (
            <p>
              O Mestre do AutoCAD é um site destinado à publicação de conteúdos
              educacionais e informativos relacionados ao AutoCAD, incluindo
              dicas, tutoriais, artigos, materiais e informações sobre
              aprendizado e utilização do software.
            </p>
          ),
        },

        {
          title: "2. Conteúdo disponibilizado",
          content: (
            <p>
              Os conteúdos publicados no Mestre do AutoCAD possuem finalidade
              educacional e informativa. O conteúdo não deve ser interpretado
              como garantia de resultado profissional, financeiro ou de qualquer
              outra natureza.
            </p>
          ),
        },

        {
          title: "3. Informações sobre cursos e produtos",
          content: (
            <p>
              O Mestre do AutoCAD poderá divulgar cursos, produtos e serviços
              oferecidos por terceiros. Quando o usuário clicar em determinados
              links, poderá ser direcionado para uma plataforma externa
              responsável pela apresentação do produto, contratação, pagamento,
              entrega e suporte.
            </p>
          ),
        },

        {
          title: "4. Afiliados",
          content: (
            <p>
              Determinados links presentes no site podem ser links de afiliados.
              Quando uma compra ou outra ação elegível é realizada por meio
              desses links, o Mestre do AutoCAD poderá receber uma comissão.
              Essa relação de afiliado não altera necessariamente o preço
              apresentado ao consumidor.
            </p>
          ),
        },

        {
          title: "5. Propriedade intelectual",
          content: (
            <p>
              Os textos, elementos gráficos, identidade visual, código,
              organização e demais conteúdos próprios disponibilizados no site
              são protegidos pela legislação aplicável. Salvo quando
              expressamente permitido, não é autorizada a reprodução,
              distribuição, comercialização ou modificação desses conteúdos para
              fins comerciais sem autorização prévia.
            </p>
          ),
        },

        {
          title: "6. Uso permitido",
          content: (
            <>
              <p>
                O usuário compromete-se a utilizar o site de maneira legal e
                adequada.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Praticar atividades ilícitas;</li>
                <li>Tentar obter acesso não autorizado a sistemas;</li>
                <li>Comprometer o funcionamento do site;</li>
                <li>Distribuir código malicioso;</li>
                <li>Realizar tentativas de fraude;</li>
                <li>Interferir na experiência de outros usuários.</li>
              </ul>
            </>
          ),
        },

        {
          title: "7. Links externos",
          content: (
            <p>
              O site poderá apresentar links para páginas e serviços de
              terceiros. Esses sites possuem seus próprios termos, políticas e
              condições. O Mestre do AutoCAD não é responsável pelo conteúdo,
              funcionamento, disponibilidade ou políticas de sites externos.
            </p>
          ),
        },

        {
          title: "8. Disponibilidade do site",
          content: (
            <p>
              O objetivo é manter o site disponível e funcionando adequadamente.
              Entretanto, poderão ocorrer interrupções temporárias decorrentes
              de manutenção, atualizações, problemas técnicos, falhas de
              terceiros, serviços de hospedagem ou outros fatores.
            </p>
          ),
        },

        {
          title: "9. Precisão das informações",
          content: (
            <p>
              São empregados esforços para manter as informações publicadas
              atualizadas e adequadas ao propósito educacional do site.
              Entretanto, comandos, funcionalidades, versões de softwares,
              preços, condições comerciais e outras informações podem sofrer
              alterações.
            </p>
          ),
        },

        {
          title: "10. Limitação de responsabilidade",
          content: (
            <p>
              O Mestre do AutoCAD não garante que a utilização dos conteúdos
              disponibilizados produzirá determinado resultado profissional,
              acadêmico ou financeiro. O uso das informações publicadas é de
              responsabilidade do próprio usuário.
            </p>
          ),
        },

        {
          title: "11. Alterações dos Termos",
          content: (
            <p>
              Estes Termos de Uso poderão ser modificados ou atualizados
              periodicamente. A versão vigente estará disponível nesta página.
            </p>
          ),
        },

        {
          title: "12. Legislação aplicável",
          content: (
            <p>
              Estes Termos serão interpretados de acordo com a legislação
              brasileira aplicável, respeitadas as normas de proteção ao
              consumidor e demais disposições legais pertinentes.
            </p>
          ),
        },

        {
          title: "13. Contato",
          content: (
            <p>
              Em caso de dúvidas relacionadas a estes Termos de Uso, o usuário
              poderá utilizar os canais de contato disponibilizados pelo Mestre
              do AutoCAD.
            </p>
          ),
        },
      ]}
    />
  );
}
