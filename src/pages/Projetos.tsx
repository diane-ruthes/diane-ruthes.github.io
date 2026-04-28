import { ExternalLink, Github, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import SectionHeader from "@/components/site/SectionHeader";

const featured = [
  {
    tag: "🛒 Data App · Python",
    title: "Análise de Varejo Americano — Superstore",
    desc: "Dashboard interativo de Sales Analytics em Python + Streamlit, com SQLite, Plotly e exportação PDF. Aplica boas práticas de engenharia de dados: cache, ETL automatizado e filtros encadeados.",
    metrics: [
      { v: "5", k: "Gráficos" },
      { v: "4", k: "KPIs" },
      { v: "CSV+PDF", k: "Exportação" },
    ],
    chips: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite", "FPDF2", "ETL"],
    appUrl: "https://superstore-dashboard-aqdqgh7dftvxkhjguyhex5.streamlit.app/",
    repoUrl: "https://github.com/diane-ruthes/superstore-dashboard",
    color: "blue" as const,
  },
  {
    tag: "🌳 R Shiny · Setor Florestal",
    title: "Sistema de Auditoria Florestal IFC",
    desc: "App R + Shiny para comparar medições do Inventário Florestal Contínuo entre equipe auditora e auditada. Filtros hierárquicos por Fazenda → Talhão → Parcela e relatório com 5 abas Excel.",
    metrics: [
      { v: "IFC", k: "Norma" },
      { v: "5", k: "Abas Excel" },
      { v: "DAP+Alt", k: "Análises" },
    ],
    chips: ["R", "Shiny", "dplyr", "readxl", "writexl", "DT", "janitor"],
    appUrl: "https://a4zpzb-diane-ruthes.shinyapps.io/App1/",
    repoUrl: "https://github.com/diane-ruthes/auditoria-florestal-shiny",
    color: "green" as const,
  },
];

const scripts = [
  {
    lang: "python",
    title: "Processamento de Inventário Florestal",
    desc: "Pipeline para consolidar arquivos de parcelas e gerar arquivos em Excel.",
    chips: ["Pandas", "openpyxl", "ETL", "Validação"],
  },
  {
    lang: "python",
    title: "Qualidade de Avaliações de Viveiro Florestal",
    desc: "Aplica regras de negócio para calcular índices de não conformidade e gera Excel pronto para dashboard de qualidade.",
    chips: ["Pandas", "ETL", "KPIs", "Dashboard-ready"],
  },
  {
    lang: "python",
    title: "Aderência de Cubagem e DAP vs Altura",
    desc: "Gera abas Excel com distribuição de indivíduos por classe de DAP e altura, com percentual por talhão, fazenda e clone.",
    chips: ["Pandas", "NumPy", "Cubagem"],
  },
  {
    lang: "r",
    title: "Análise Fitossociológica de Vegetação Nativa",
    desc: "Calcula IVI, VC, Shannon-Wiener, Pielou por espécie e parcela. Distribuição diamétrica e relatórios Excel/PDF.",
    chips: ["tidyverse", "ggplot2", "writexl"],
  },
  {
    lang: "r",
    title: "Análise IFC — Relação DAP vs Altura",
    desc: "Integra base IFC com dados cadastrais SGF e cubagem, gerando dispersão segmentada por clone e zona climática.",
    chips: ["ggplot2", "dplyr", "readxl"],
  },
  {
    lang: "r",
    title: "Seleção de Árvores para Cubagem",
    desc: "Filtra candidatos por sobreposição em grade DAP vs Altura, gera gráficos de aderência e exporta Excel.",
    chips: ["ggplot2", "dplyr", "Amostragem Espacial"],
  },
];

const Projetos = () => {
  return (
    <>
      <section className="container-px pt-20 pb-12 bg-cream">
        <p className="text-eyebrow text-green-mid mb-4 inline-flex items-center">
          <span className="inline-block w-7 h-px bg-green-mid mr-3" />
          Projetos
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-green-deep leading-[1.05] max-w-3xl">
          Cases & <em className="not-italic italic text-green-soft">automações</em>
        </h1>
        <p className="text-text-mid font-light leading-relaxed text-lg max-w-2xl mt-5">
          Uma seleção de projetos, scripts e dashboards em Python, R e Power BI —
          do varejo americano à auditoria florestal.
        </p>
      </section>

      {/* FEATURED */}
      <section className="container-px py-12 bg-cream-dark space-y-10">
        {featured.map((f) => (
          <article
            key={f.title}
            className="bg-white rounded-3xl border border-black/5 overflow-hidden grid lg:grid-cols-2"
          >
            <div
              className={`p-10 flex items-center justify-center min-h-[320px] relative overflow-hidden ${
                f.color === "blue"
                  ? "bg-gradient-to-br from-[#1a2740] to-[#0f1e30]"
                  : "bg-gradient-to-br from-[#1a4a1c] via-[#2c7a2e] to-[#3d9c40]"
              }`}
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
              <div className="relative z-10 w-full max-w-xs">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-[0.65rem] text-cream/50 uppercase tracking-widest mb-3">
                    Preview · KPIs
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {f.metrics.map((m) => (
                      <div
                        key={m.k}
                        className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
                      >
                        <div className="font-serif text-lg text-green-pale">{m.v}</div>
                        <div className="text-[0.6rem] text-white/40 uppercase tracking-wider mt-1">
                          {m.k}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 flex flex-col">
              <span className="text-[0.7rem] uppercase tracking-wider bg-green-mist text-green-mid px-3 py-1 rounded-full font-medium w-fit mb-4">
                {f.tag}
              </span>
              <h3 className="font-serif text-2xl text-green-deep mb-3 leading-tight">{f.title}</h3>
              <p className="text-text-mid font-light leading-relaxed mb-5">{f.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {f.chips.map((c) => (
                  <span key={c} className="text-xs bg-cream-dark text-text-mid px-2.5 py-1 rounded">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 flex-wrap">
                <a
                  href={f.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-green-mid"
                >
                  <ExternalLink className="w-4 h-4" /> Acessar o app
                </a>
                <a
                  href={f.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-cream-dark text-text-mid text-sm font-medium px-5 py-2.5 rounded-full hover:border-green-pale"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* SCRIPTS */}
      <section className="container-px py-24">
        <SectionHeader
          eyebrow="Scripts & Automações"
          title={<>Trabalhos em <em className="not-italic italic text-green-soft">Python e R</em></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {scripts.map((s) => (
            <a
              key={s.title}
              href="https://github.com/diane-ruthes/dianeruthes.github.io"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-cream-dark rounded-2xl p-6 flex flex-col gap-3 hover:border-green-pale hover:-translate-y-1 transition-all"
            >
              <span
                className={`text-[0.7rem] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium w-fit ${
                  s.lang === "python"
                    ? "bg-[#e8f4e8] text-[#2d6a4f]"
                    : "bg-[#e8eef8] text-[#1e4080]"
                }`}
              >
                {s.lang === "python" ? "🐍 Python" : "📈 R Studio"}
              </span>
              <div className="font-medium text-green-deep leading-snug">{s.title}</div>
              <div className="text-sm text-text-muted font-light leading-relaxed">{s.desc}</div>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="text-[0.68rem] bg-cream text-text-mid border border-cream-dark px-2 py-0.5 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-green-deep py-20 container-px text-center">
        <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] text-cream leading-tight">
          Algo parecido na <em className="not-italic italic text-green-soft">sua empresa</em>?
        </h2>
        <p className="text-green-pale/70 mt-4 max-w-xl mx-auto font-light">
          Posso adaptar qualquer um desses projetos para sua realidade.
        </p>
        <a
          href={whatsappLink("Olá Diane! Vi um projeto seu e gostaria de algo parecido para minha empresa.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-cream text-green-deep text-sm font-medium px-7 py-3.5 rounded-full mt-8 hover:bg-green-pale transition-all hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          Conversar no WhatsApp
        </a>
      </section>
    </>
  );
};

export default Projetos;
