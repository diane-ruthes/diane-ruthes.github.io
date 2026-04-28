import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-cream-dark"
          : "bg-cream/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between py-4">
        <Link to="/" className="font-serif text-xl text-green-deep tracking-wide">
          Diane Ruthes
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[0.78rem] uppercase tracking-[0.08em] font-medium transition-colors ${
                  isActive ? "text-green-deep" : "text-text-mid hover:text-green-mid"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Olá Diane! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.")}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-green-deep text-cream text-[0.8rem] font-medium tracking-wide px-4 py-2 rounded-full hover:bg-green-mid transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
          <button
            className="lg:hidden text-green-deep"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-cream border-t border-cream-dark px-[6vw] py-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1 ${isActive ? "text-green-deep font-medium" : "text-text-mid"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink("Olá Diane! Gostaria de conversar sobre um projeto.")}
            target="_blank"
            rel="noreferrer"
            className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 bg-green-deep text-cream text-sm font-medium px-4 py-2.5 rounded-full"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
