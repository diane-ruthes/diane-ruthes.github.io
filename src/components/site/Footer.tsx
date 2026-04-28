import { Link } from "react-router-dom";
import { LINKEDIN_URL, GITHUB_URL, WHATSAPP_DISPLAY, EMAIL, whatsappLink } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-[hsl(147_45%_10%)] text-cream/70">
      <div className="container-px py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-cream mb-3">Diane Ruthes</div>
          <p className="text-sm leading-relaxed max-w-md text-cream/60 font-light">
            Engenheira Florestal especializada em dados, automação e BI.
            Soluções sob medida para empresas do setor florestal e ambiental.
          </p>
        </div>

        <div>
          <div className="text-eyebrow text-green-pale mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicos" className="hover:text-cream">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-cream">Produtos</Link></li>
            <li><Link to="/projetos" className="hover:text-cream">Projetos</Link></li>
            <li><Link to="/sobre" className="hover:text-cream">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-cream">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-eyebrow text-green-pale mb-4">Contato</div>
          <ul className="space-y-2 text-sm">
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-cream">WhatsApp · {WHATSAPP_DISPLAY}</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-cream">LinkedIn</a></li>
            <li><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-cream">GitHub</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-cream">E-mail</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-cream/40 tracking-wide">
        © {new Date().getFullYear()} Diane Ruthes · Data & Automation
      </div>
    </footer>
  );
};

export default Footer;
