import { GraduationCap, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";

const stack = [
  { icon: "🐍", name: "Python", detail: "Pandas, NumPy, openpyxl, Streamlit" },
  { icon: "📊", name: "Power BI", detail: "Modelagem, DAX, RLS e governança" },
  { icon: "📈", name: "R / RStudio", detail: "tidyverse, ggplot2, Shiny" },
  { icon: "🗄️", name: "SQL", detail: "PostgreSQL, SQL Server, SQLite" },
  { icon: "⚙️", name: "Automação", detail: "ETL, scripts agendados, integrações" },
  { icon: "📁", name: "Excel avançado", detail: "Power Query, fórmulas e VBA" },
  { icon: "🌍", name: "Dados Geoespaciais", detail: "Shapefile, QGIS básico" },
  { icon: "🔧", name: "Git & GitHub", detail: "Versionamento e colaboração" },
];

const formacao = [
  { icon: "🎓", t: "Engenharia Florestal", d: "Graduação · Ciências Florestais, Manejo e Meio Ambiente" },
  { icon: "📊", t: "Power BI & Análise de Dados", d: "Cursos avançados de modelagem, DAX e dashboards" },
  { icon: "🐍", t: "Python para Análise de Dados", d: "Pandas, NumPy, automação e desenvolvimento de apps" },
  { icon: "📈", t: "R para Estatística e BI", d: "Análise estatística, ggplot2 e Shiny" },
];

const valores = [
  { icon: <ShieldCheck className="w-5 h-5" />, t: "Governança", d: "Dados confiáveis, rastreáveis e auditáveis." },
  { icon: <Workflow className="w-5 h-5" />, t: "Eficiência", d: "Menos trabalho manual, mais tempo para análise." },
  { icon: <Sparkles className="w-5 h-5" />, t: "Sob medida", d: "Cada solução respeita a realidade da empresa." },
];

const Sobre = () => {
  return (
    <>
      <section className="container-px pt-20 pb-12 bg-cream">
        <p className="text-eyebrow text-green-mid mb-4 inline-flex items-center">
          <span className="inline-block w-7 h-px bg-green-mid mr-3" />
          Sobre mim
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-green-deep leading-[1.05] max-w-3xl">
          Dados que <em className="not-italic italic text-green-soft">transformam</em> decisões
        </h1>
      </section>

      <section className="container-px py-16 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-5 text-text-mid font-light leading-[1.8] text-[1.05rem]">
          <p>
            Sou Engenheira Florestal com especialização em dados e automação de processos.
            Atuo com tratamento e modelagem de dados, com forte expertise em Python, Power BI,
            R e integração de sistemas.
          </p>
          <p>
            Tenho mais de 10 anos de carreira na área florestal e 7 anos dedicados à análise de
            dados e Business Intelligence. Desenvolvo soluções que reduzem tempo operacional e
            aumentam a eficiência analítica, unindo o conhecimento técnico florestal à análise
            avançada de dados.
          </p>
          <p>
            Meu diferencial está em entender o problema do setor por dentro: já vivi a coleta
            de campo, a inconsistência de planilhas e a dor de gerar relatórios manuais. Por isso
            construo soluções pensadas para realmente serem usadas no dia a dia.
          </p>
          <p>
            Estou aberta a novas oportunidades e colaborações em projetos de dados, automação e BI.
          </p>
        </div>

        <div>
          <div className="text-eyebrow text-green-mid mb-5 inline-flex items-center">
            <GraduationCap className="w-4 h-4 mr-2" />
            Formação & Cursos
          </div>
          <div className="space-y-4">
            {formacao.map((f) => (
              <div key={f.t} className="flex gap-4 items-start bg-white border border-cream-dark rounded-xl p-5 hover:border-green-pale transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-deep flex items-center justify-center text-base shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-green-deep">{f.t}</div>
                  <div className="text-xs text-text-muted mt-1">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-eyebrow text-green-mid mb-5">Valores</div>
            <div className="space-y-3">
              {valores.map((v) => (
                <div key={v.t} className="flex items-start gap-3 bg-green-mist/40 rounded-xl p-4">
                  <div className="w-9 h-9 rounded-lg bg-green-deep text-green-pale flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-deep">{v.t}</div>
                    <div className="text-xs text-text-mid mt-0.5">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-green-deep py-24 container-px">
        <SectionHeader
          eyebrow="Stack técnica"
          title={<>Ferramentas que <em className="not-italic italic text-green-soft">domino</em></>}
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stack.map((s) => (
            <div
              key={s.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="text-cream font-medium mb-1">{s.name}</div>
              <div className="text-xs text-green-pale/60 leading-relaxed">{s.detail}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sobre;
