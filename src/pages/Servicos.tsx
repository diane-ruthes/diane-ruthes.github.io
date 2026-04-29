import { MessageCircle, Check, Workflow, BarChart3, Plug, Wrench } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import SectionHeader from "@/components/site/SectionHeader";

const services = [
  {
    icon: <Workflow className="w-6 h-6" />,
    name: "Script de Processamento de Inventário",
    pain: "Sua equipe perde dias consolidando arquivos de campo e validando parcelas no Excel.",
    deliverables: [
      "Script Python customizado para sua estrutura de dados",
      "Validação conforme normas e legislação vigente",
      "3 arquivos Excel de saída prontos para análise",
      "Documentação técnica e treinamento",
      "30 dias de suporte pós-entrega",
    ],
    price: "A partir de R$ 2.500",
    deadline: "10–15 dias úteis",
    miniCase: "Já entreguei pipelines que processam +50k registros de parcelas em minutos.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    name: "Dashboard em Power BI",
    pain: "Reuniões longas porque ninguém sabe o número certo, e cada gerente tem sua planilha.",
    deliverables: [
      "Painel de acompanhamento com seus dados e metas",
      "Integração com banco de dados (governança e segurança)",
      "Filtros configurados por equipe, talhão e período",
      "Manual de uso e treinamento",
    ],
    price: "A partir de R$ 2.200",
    deadline: "10–12 dias úteis",
    miniCase: "Dashboards já em produção para acompanhamento de qualidade de viveiro e inventário.",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    name: "Integração e Automação de Dados",
    pain: "Dados ficam presos em sistemas diferentes e ninguém tem tempo de unir tudo manualmente.",
    deliverables: [
      "Pipeline automatizado entre sistemas de coleta e análise",
      "Leitura automática de múltiplos formatos",
      "Consolidação e envio de relatórios periódicos",
      "Documentação técnica completa",
    ],
    price: "A partir de R$ 3.500",
    deadline: "15–20 dias úteis",
    miniCase: "Reduzi em mais de 80% o tempo de consolidação de relatórios mensais em projetos anteriores.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    name: "Manutenção e Evolução Mensal",
    pain: "O script funciona, mas quando muda uma coluna ou o layout, ninguém da equipe consegue ajustar.",
    deliverables: [
      "Até 8h/mês de alterações e melhorias",
      "Resposta em até 24h úteis",
      "Versões documentadas a cada entrega",
      "Suporte para scripts e apps já implantados",
    ],
    price: "R$ 600 a R$ 1.200/mês",
    deadline: "Início imediato",
    miniCase: "Mantenho apps em produção há mais de um ano com evolução contínua.",
  },
];

const steps = [
  { n: "01", t: "Conversa inicial", d: "Conta seu cenário no WhatsApp. Entendo o problema, os dados e o resultado esperado." },
  { n: "02", t: "Escopo & proposta", d: "Em até 48h envio o escopo, prazo e investimento de forma clara." },
  { n: "03", t: "Desenvolvimento", d: "Entregas parciais para validação. Você acompanha o progresso." },
  { n: "04", t: "Entrega & suporte", d: "Implantação, treinamento e 30 dias de suporte inclusos." },
];

const faqs = [
  { q: "Atende remoto ou só presencial?", a: "100% remoto, com reuniões por Google Meet ou Teams. Atendo empresas de todo o Brasil." },
  { q: "Como funciona o pagamento?", a: "Em projetos: 50% no início e 50% na entrega. Em mensalidades de manutenção: faturado mês a mês." },
  { q: "E se meu caso for diferente do que está aqui?", a: "Esses são os formatos mais comuns, mas trabalho sob medida. Me conta seu desafio e vejo o melhor caminho." },
  { q: "Trabalha com dados de outros setores?", a: "Sim. Dados florestais são minha especialidade, mas atendo qualquer setor que precise de automação e BI." },
];

const Servicos = () => {
  return (
    <>
      {/* HERO */}
      <section className="container-px pt-20 pb-12 bg-cream">
        <p className="text-eyebrow text-green-mid mb-4 inline-flex items-center">
          <span className="inline-block w-7 h-px bg-green-mid mr-3" />
          Serviços
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-green-deep leading-[1.05] max-w-3xl">
          Soluções <em className="not-italic italic text-green-soft">sob medida</em> para empresas florestais
        </h1>
        <p className="text-text-mid font-light leading-relaxed text-lg max-w-2xl mt-5">
          Cada empresa tem sua realidade — formatos de dados, processos e normas próprios.
          Aqui você encontra serviços desenhados para se adaptar ao seu contexto.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section className="container-px py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="bg-white border border-cream-dark rounded-2xl p-8 flex flex-col hover:border-green-pale hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-mist text-green-mid flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[0.7rem] text-green-mid uppercase tracking-widest font-medium opacity-70 mb-1">
                    Serviço {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl text-green-deep leading-tight">{s.name}</h3>
                </div>
              </div>

              <p className="text-sm text-text-mid italic font-light leading-relaxed border-l-2 border-accent pl-3 mb-5">
                "{s.pain}"
              </p>

              <div className="text-eyebrow text-green-mid mb-3">O que você recebe</div>
              <ul className="space-y-2 mb-5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-text-mid leading-snug">
                    <Check className="w-4 h-4 text-green-soft shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-cream-dark flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-serif text-xl text-green-deep">{s.price}</div>
                  <div className="text-xs text-text-muted mt-1">Prazo: {s.deadline}</div>
                </div>
                <a
                  href={whatsappLink(`Olá Diane! Tenho interesse no serviço "${s.name}". Pode me passar uma proposta?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-deep text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-green-mid"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir proposta
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-cream-dark py-24 container-px">
        <SectionHeader
          eyebrow="Processo"
          title={<>Como <em className="not-italic italic text-green-soft">trabalhamos</em> juntas</>}
          subtitle="Um caminho simples e transparente, do primeiro contato até a entrega."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {steps.map((s) => (
            <div key={s.n} className="bg-white border border-cream-dark rounded-2xl p-6">
              <div className="font-serif text-3xl text-green-soft mb-2">{s.n}</div>
              <div className="font-medium text-green-deep mb-2">{s.t}</div>
              <div className="text-sm text-text-mid font-light leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-24">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={<>Perguntas <em className="not-italic italic text-green-soft">rápidas</em></>}
        />
        <div className="mt-12 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white border border-cream-dark rounded-xl p-5 group">
              <summary className="cursor-pointer font-medium text-green-deep flex items-center justify-between gap-4 list-none">
                {f.q}
                <span className="text-green-soft text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-text-mid mt-3 font-light leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-deep py-24 container-px text-center">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-cream leading-tight">
          Conte seu desafio no <em className="not-italic italic text-green-soft">WhatsApp</em>
        </h2>
        <p className="text-green-pale/70 mt-4 max-w-xl mx-auto font-light">
          Resposta em até 24h úteis, com proposta inicial sem compromisso.
        </p>
        <a
          href={whatsappLink("Olá Diane! Quero conversar sobre um serviço sob medida.")}
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

export default Servicos;
