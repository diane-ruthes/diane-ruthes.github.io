import { MessageCircle, Linkedin, Mail, Clock, MapPin, Github } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY, LINKEDIN_URL, EMAIL, GITHUB_URL } from "@/lib/contact";

const Contato = () => {
  return (
    <>
      <section className="container-px pt-20 pb-12 bg-cream">
        <p className="text-eyebrow text-green-mid mb-4 inline-flex items-center">
          <span className="inline-block w-7 h-px bg-green-mid mr-3" />
          Contato
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-green-deep leading-[1.05] max-w-3xl">
          Vamos <em className="not-italic italic text-green-soft">conversar</em>
        </h1>
        <p className="text-text-mid font-light leading-relaxed text-lg max-w-2xl mt-5">
          Escolha o canal que preferir. Respondo em até 24 horas úteis com uma proposta inicial sem compromisso.
        </p>
      </section>

      <section className="container-px py-12 grid lg:grid-cols-3 gap-5">
        {/* WhatsApp destacado */}
        <a
          href={whatsappLink("Olá Diane! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.")}
          target="_blank"
          rel="noreferrer"
          className="lg:col-span-2 bg-green-deep text-cream rounded-3xl p-10 flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-all relative overflow-hidden group"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-soft/15 group-hover:bg-green-soft/25 transition-colors" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-green-soft text-white flex items-center justify-center mb-5">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div className="text-eyebrow text-green-pale mb-2">Canal preferido</div>
            <h2 className="font-serif text-3xl text-cream mb-2">WhatsApp</h2>
            <p className="text-cream/70 font-light max-w-md">
              Resposta rápida, atendimento direto. Conta seu cenário, formatos de arquivo e o resultado que espera.
            </p>
          </div>
          <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-green-pale text-sm">
            <span>{WHATSAPP_DISPLAY}</span>
            <span className="opacity-50">→</span>
          </div>
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-white border border-cream-dark rounded-3xl p-8 flex flex-col justify-between hover:border-green-pale hover:-translate-y-1 transition-all"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-mist flex items-center justify-center mb-4 text-green-mid">
              <Linkedin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-green-deep mb-2">LinkedIn</h3>
            <p className="text-sm text-text-mid font-light">
              Para conexões profissionais e contato corporativo.
            </p>
          </div>
          <span className="text-green-mid text-sm mt-5">/dianejanaineruthes →</span>
        </a>

        <a
          href={`mailto:${EMAIL}`}
          className="bg-white border border-cream-dark rounded-3xl p-8 flex flex-col justify-between hover:border-green-pale hover:-translate-y-1 transition-all"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-mist flex items-center justify-center mb-4 text-green-mid">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-green-deep mb-2">E-mail</h3>
            <p className="text-sm text-text-mid font-light">
              Para envio de documentos, briefings e propostas formais.
            </p>
          </div>
          <span className="text-green-mid text-sm mt-5">{EMAIL} →</span>
        </a>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-white border border-cream-dark rounded-3xl p-8 flex flex-col justify-between hover:border-green-pale hover:-translate-y-1 transition-all"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-mist flex items-center justify-center mb-4 text-green-mid">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-green-deep mb-2">GitHub</h3>
            <p className="text-sm text-text-mid font-light">
              Veja meu código aberto, scripts e projetos públicos.
            </p>
          </div>
          <span className="text-green-mid text-sm mt-5">/diane-ruthes →</span>
        </a>
      </section>

      {/* INFO BAR */}
      <section className="container-px pb-24">
        <div className="bg-cream-dark rounded-3xl p-10 grid sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-green-mid shrink-0 mt-1" />
            <div>
              <div className="text-sm font-medium text-green-deep mb-1">Horário de atendimento</div>
              <div className="text-sm text-text-mid font-light">Segunda a sexta · 9h às 18h</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="w-6 h-6 text-green-mid shrink-0 mt-1" />
            <div>
              <div className="text-sm font-medium text-green-deep mb-1">Tempo de resposta</div>
              <div className="text-sm text-text-mid font-light">Até 24 horas úteis</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-green-mid shrink-0 mt-1" />
            <div>
              <div className="text-sm font-medium text-green-deep mb-1">Atendimento</div>
              <div className="text-sm text-text-mid font-light">100% remoto · Brasil</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
