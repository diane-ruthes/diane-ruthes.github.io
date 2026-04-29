import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Database, Workflow, BarChart3, Code2, GitBranch, Leaf } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import SectionHeader from "@/components/site/SectionHeader";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="grid lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        <div className="flex flex-col justify-center px-[8vw] py-16 lg:py-20">
          <p className="text-eyebrow text-green-mid mb-5 inline-flex items-center animate-fade-up delay-100">
            <span className="inline-block w-8 h-px bg-green-mid mr-3" />
            Dados & Automação · Setor Florestal
          </p>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1] text-green-deep mb-5 animate-fade-up delay-200">
            Diane<br />
            <em className="not-italic font-serif italic text-green-soft">Ruthes</em>
          </h1>
          <p className="text-[1.05rem] text-text-mid font-light leading-[1.7] max-w-md mb-8 animate-fade-up delay-300">
            Engenheira Florestal especialista em dados e automação de processos.
            Transformo dados florestais em decisões com Python, Power BI, R e integração de sistemas.
          </p>
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up delay-400">
            {[
              { label: "🌿 Dados Florestais", c: "green" },
              { label: "📊 Power BI", c: "green" },
              { label: "🐍 Python", c: "green" },
              { label: "⚙️ Automação", c: "accent" },
              { label: "📈 R / RStudio", c: "green" },
            ].map((t) => (
              <span
                key={t.label}
                className={`text-[0.78rem] px-3.5 py-1.5 rounded-full ${
                  t.c === "green"
                    ? "bg-green-mist text-green-deep"
                    : "bg-accent-light text-[#7a5a1e]"
                }`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-wrap animate-fade-up delay-500">
            <a
              href={whatsappLink("Olá Diane! Vim pelo seu portfólio e gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium tracking-wide px-6 py-3 rounded-full hover:bg-green-mid transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar orçamento
            </a>
            <Link
              to="/servicos"
              className="text-sm text-text-mid border-b border-text-muted hover:text-green-mid transition-colors"
            >
              Ver serviços →
            </Link>
          </div>
        </div>

        <div className="bg-green-deep relative overflow-hidden flex items-center justify-center p-12 min-h-[340px]">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-green-soft/10" />
          <div className="absolute -bottom-20 -left-16 w-[300px] h-[300px] rounded-full bg-accent/10" />
          <div className="relative z-10 grid grid-cols-2 gap-5 w-full max-w-sm">
            <StatCard num="10" label="Anos de carreira" />
            <StatCard num="7" label="Anos com Power BI & dados" />
            <StatCard label="Projetos" desc="Vários scripts & dashboards em Python, R e Power BI" />
            <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-[0.78rem] text-green-pale/60 uppercase tracking-wider mb-2">Especialidade</div>
              <div className="text-sm text-white/70 leading-relaxed font-light">
                Automação de pipelines de dados, integração de sistemas e dashboards estratégicos para o setor florestal e ambiental.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO POSSO AJUDAR */}
      <section className="container-px py-24">
        <SectionHeader
          eyebrow="Como posso ajudar"
          title={<>Três caminhos para <em className="not-italic italic text-green-soft">resolver</em> seu desafio</>}
          subtitle="De um script pontual a uma plataforma completa, encontre o formato que melhor se ajusta ao momento da sua empresa."
        />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <PathCard
            icon={<Workflow className="w-6 h-6 text-green-mid" />}
            title="Serviços sob medida"
            desc="Scripts, dashboards e integrações desenvolvidas a partir do seu processo, sua estrutura de dados e suas normas."
            to="/servicos"
            cta="Ver serviços"
          />
          <PathCard
            icon={<Database className="w-6 h-6 text-green-mid" />}
            title="Apps prontos"
            desc="Aplicativos prontos para Auditoria Florestal e Recomendação de Cubagem, com implantação rápida e suporte mensal."
            to="/produtos"
            cta="Ver produtos"
          />
          <PathCard
            icon={<BarChart3 className="w-6 h-6 text-green-mid" />}
            title="Projetos & cases"
            desc="Conheça scripts, dashboards e apps reais que já desenvolvi para o setor florestal e análise de dados."
            to="/projetos"
            cta="Ver projetos"
          />
        </div>
      </section>

      {/* CASES EM DESTAQUE */}
      <section className="container-px py-24 bg-cream-dark">
        <SectionHeader
          eyebrow="Em destaque"
          title={<>Cases que <em className="not-italic italic text-green-soft">contam</em> a história</>}
        />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <FeaturedMiniCase
            tag="🛒 Data App · Python"
            title="Análise de Varejo — Superstore"
            desc="Dashboard interativo em Python + Streamlit com SQLite, ETL automatizado e exportação PDF."
            chips={["Python", "Streamlit", "Plotly", "SQLite"]}
            link="/projetos"
            color="blue"
          />
          <FeaturedMiniCase
            tag="🌳 R Shiny · Florestal"
            title="Sistema de Auditoria Florestal IFC"
            desc="App R + Shiny para comparar medições de equipes auditora e auditada conforme normas IFC."
            chips={["R", "Shiny", "dplyr", "writexl"]}
            link="/projetos"
            color="green"
          />
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-green-deep font-medium border-b border-green-pale pb-1 hover:text-green-mid"
          >
            Ver todos os projetos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-green-deep py-24 container-px text-center">
        <Leaf className="w-10 h-10 text-green-soft mx-auto mb-5" />
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-cream leading-tight">
          Tem um desafio com dados <em className="not-italic italic text-green-soft">florestais</em>?
        </h2>
        <p className="text-green-pale/70 mt-4 max-w-xl mx-auto font-light">
          Conta seu cenário no WhatsApp. Em até 24h úteis eu volto com uma proposta inicial sem compromisso.
        </p>
        <a
          href={whatsappLink("Olá Diane! Tenho um desafio com dados florestais e gostaria de conversar.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-cream text-green-deep text-sm font-medium px-7 py-3.5 rounded-full mt-8 hover:bg-green-pale transition-all hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </a>
      </section>
    </>
  );
};

const StatCard = ({ num, label, desc }: { num?: string; label: string; desc?: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
    {num && <div className="font-serif text-[2.5rem] text-green-pale leading-none mb-1">{num}</div>}
    <div className="text-[0.75rem] text-green-pale/60 uppercase tracking-wider">{label}</div>
    {desc && <div className="text-sm text-white/70 mt-2 font-light leading-snug">{desc}</div>}
  </div>
);

const ResultCard = ({ num, label }: { num: string; label: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <div className="font-serif text-4xl text-green-pale leading-none mb-3">{num}</div>
    <div className="text-sm text-cream/65 font-light leading-relaxed">{label}</div>
  </div>
);

const PathCard = ({
  icon,
  title,
  desc,
  to,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
  cta: string;
}) => (
  <Link
    to={to}
    className="group bg-white border border-cream-dark rounded-2xl p-7 hover:border-green-pale hover:-translate-y-1 transition-all flex flex-col"
  >
    <div className="w-12 h-12 rounded-xl bg-green-mist flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="font-serif text-xl text-green-deep mb-2">{title}</h3>
    <p className="text-sm text-text-mid font-light leading-relaxed mb-5 flex-1">{desc}</p>
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-mid group-hover:gap-2.5 transition-all">
      {cta} <ArrowRight className="w-4 h-4" />
    </span>
  </Link>
);

const FeaturedMiniCase = ({
  tag,
  title,
  desc,
  chips,
  link,
  color,
}: {
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  link: string;
  color: "blue" | "green";
}) => (
  <Link
    to={link}
    className="bg-white rounded-2xl border border-black/5 overflow-hidden flex flex-col hover:-translate-y-1 transition-all"
  >
    <div
      className={`p-8 ${
        color === "blue"
          ? "bg-gradient-to-br from-[#1a2740] to-[#0f1e30]"
          : "bg-gradient-to-br from-[#1a4a1c] to-[#3d9c40]"
      }`}
    >
      <div className="flex justify-center gap-2">
        {chips.slice(0, 3).map((c) => (
          <span key={c} className="text-[0.65rem] bg-white/10 text-white/70 px-2.5 py-1 rounded-full border border-white/10">
            {c}
          </span>
        ))}
      </div>
      <div className="text-center mt-6 text-cream/50 text-xs uppercase tracking-widest">
        Preview do projeto
      </div>
    </div>
    <div className="p-7">
      <span className="text-[0.7rem] uppercase tracking-wider text-green-mid bg-green-mist px-3 py-1 rounded-full font-medium">
        {tag}
      </span>
      <h3 className="font-serif text-xl text-green-deep mt-3 mb-2">{title}</h3>
      <p className="text-sm text-text-mid font-light leading-relaxed">{desc}</p>
    </div>
  </Link>
);

export default Home;
