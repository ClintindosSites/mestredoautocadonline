import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* MARCA */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-main">MESTRE</span>
              <span className="footer-logo-sub">DO AUTOCAD</span>
            </div>

            <p>
              Aprenda AutoCAD do zero ao avançado e desenvolva suas habilidades
              para criar projetos profissionais.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="footer-column">
            <h3>Navegação</h3>

            <a href="#">Início</a>
            <a href="#curso">O Curso</a>
            <a href="#bonus">Bônus</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">Perguntas Frequentes</a>
          </div>

          {/* CURSO */}
          <div className="footer-column">
            <h3>Curso</h3>

            <a href="#conteudo">Conteúdo do Curso</a>
            <a href="#bonus">Bônus</a>
            <a href="#garantia">Garantia</a>

            <a
              href="https://go.hotmart.com/H101021157N?ap=4b22"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar o Curso
            </a>
          </div>

          {/* BLOG */}
          <div className="footer-column">
            <h3>Conteúdos</h3>

            <Link href="/blog">Blog Mestre do AutoCAD</Link>

            <Link href="/blog/autocad">Dicas de AutoCAD</Link>

            <Link href="/blog/tutorials">Tutoriais</Link>
          </div>

          {/* SEGURANÇA */}
          <div className="footer-column">
            <h3>Compra Segura</h3>

            <p className="footer-security">
              🔒 Pagamento processado pela Hotmart
            </p>

            <p className="footer-security">🛡️ Ambiente seguro</p>

            <p className="footer-security">✓ Garantia de 7 dias</p>

            <p className="footer-security">✓ Acesso online</p>
          </div>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <div>
            <h3>Pronto para dominar o AutoCAD?</h3>

            <p>
              Comece agora sua jornada e dê o próximo passo no seu aprendizado.
            </p>
          </div>

          <a
            href="https://go.hotmart.com/H101021157N?ap=4b22"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mestre do AutoCAD. Todos os direitos
            reservados.
          </p>

          <div className="footer-links">
            <a href="/politica-de-privacidade">Política de Privacidade</a>

            <a href="/termos-de-uso">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
