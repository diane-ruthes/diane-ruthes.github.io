import { MessageCircle, Check, ExternalLink } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import SectionHeader from "@/components/site/SectionHeader";

const products = [
  {
    icon: "🌲",
    name: "App de Auditoria Florestal",
    tagline: "R Studio + Shiny · Para empresas com IFC",
    desc: "Aplicativo para validação de dados de auditoria, comparando medições da equipe auditada e da equipe auditora. Calcula desvios de DAP, altura, volume e impacto percentual no estoque florestal.",
    features: [
      "Comparação DAP e altura: auditada vs auditora",
      "Cálculo de volume com fator de forma (FF eucalipto)",
      "Impacto % no volume — Aceitável / Atenção / Crítico",
      "Análise por parcela e por árvore individual",
      "Exportação Excel com 4 abas estruturadas",
      "Filtros por talhão, equipe e tipo de medição",
    ],
    price: "R$ 1.100",
    priceLabel: "Implantação",
    support: "Suporte mensal opcional: R$ 120/mês",
    demo: "https://a4zpzb-diane-ruthes.shinyapps.io/App1/",
    color: "green",
  },
  {
    icon: "📐",
    name: "App de Recomendação de Cubagem",
    tagline: "Python · Para inventário florestal",
    desc: "Aplicativo para definir quantas árvores cubar por classe de DAP e altura. Gráfico interativo por estrato e clone, recomendação automática e exportação do plano completo.",
    features: [
      "Gráfico DAP × Altura por clone e estrato",
      "Recomendação de número de árvores por classe",
      "Edição manual da recomendação por linha",
      "Dados sintéticos para classes sub-representadas",
      "Exportação do plano de cubagem em Excel",
      "Afilamento calibrado por material genético",
    ],
    price: "R$ 1.500",
    priceLabel: "Implantação",
    support: "Suporte mensal opcional: R$ 120/mês",
    demo: null,
    color: "blue",
  },
];

const Produtos = () => {
  return (
    <>
      <section className="container-px pt-20 pb-12 bg-cream">
        <p className="text-eyebrow text-green-mid mb-4 inline-flex items-center">
          <span className="inline-block w-7 h-px bg-green-mid mr-3" />
          Produtos
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-green-deep leading-[1.05] max-w-3xl">
          Apps prontos para <em className="not-italic italic text-green-soft">implantar</em>
        </h1>
        <p className="text-text-mid font-light leading-relaxed text-lg max-w-2xl mt-5">
          Aplicativos prontos para uso em empresas florestais, com implantação rápida,
          documentação completa e suporte mensal opcional.
        </p>
      </section>

      <section className="container-px py-16 space-y-12">
        {products.map((p, i) => (
          <article
            key={p.name}
            className="bg-white border border-cream-dark rounded-3xl overflow-hidden grid lg:grid-cols-5 gap-0"
          >
            <div
              className={`lg:col-span-2 p-12 flex flex-col items-center justify-center text-center min-h-[320px] relative overflow-hidden ${
                p.color === "green"
                  ? "bg-gradient-to-br from-[#1a4a1c] via-[#2c7a2e] to-[#3d9c40]"
                  : "bg-gradient-to-br from-[#1a2740] to-[#0f1e30]"
              }`}
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/5" />
              <div className="text-7xl mb-4 relative z-10">{p.icon}</div>
              <div className="font-serif text-2xl text-cream relative z-10 max-w-xs">{p.name}</div>
              <div className="text-xs text-cream/60 mt-3 tracking-widest uppercase relative z-10">
                {p.tagline}
              </div>
            </div>

            <div className="lg:col-span-3 p-10 flex flex-col">
              <div className="text-eyebrow text-green-mid mb-3">
                Produto {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="font-serif text-3xl text-green-deep mb-3">{p.name}</h2>
              <p className="text-text-mid font-light leading-relaxed mb-6">{p.desc}</p>

              <div className="text-eyebrow text-green-mid mb-3">Funcionalidades</div>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-mid leading-snug">
                    <Check className="w-4 h-4 text-green-soft shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-cream-dark flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-serif text-2xl text-green-deep">{p.price}</div>
                  <div className="text-xs text-text-muted">{p.priceLabel}</div>
                  <div className="text-xs text-green-mid mt-1">{p.support}</div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-green-deep text-green-deep text-sm font-medium px-5 py-2.5 rounded-full hover:bg-green-mist"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver demo
                    </a>
                  )}
                  <a
                    href={whatsappLink(`Olá Diane! Quero implantar o "${p.name}" na minha empresa.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-green-mid"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Quero implantar
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-px pb-24">
        <div className="bg-green-mist rounded-3xl p-10 sm:p-14 flex items-center justify-between gap-8 flex-wrap">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl text-green-deep mb-3">
              Posso adaptar para a sua realidade?
            </h3>
            <p className="text-text-mid font-light leading-relaxed">
              Cada operação florestal tem suas particularidades — formatos de arquivos, normas internas,
              clones e métodos próprios. Os apps podem ser personalizados conforme sua necessidade.
            </p>
          </div>
          <a
            href={whatsappLink("Olá Diane! Gostaria de adaptar um dos seus apps para a minha empresa.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium px-6 py-3 rounded-full hover:bg-green-mid whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Falar sobre adaptação
          </a>
        </div>
      </section>
    </>
  );
};

export default Produtos;
