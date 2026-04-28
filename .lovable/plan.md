## Visão geral

Vamos transformar seu HTML atual num site multi-página em React, mantendo a identidade visual (verde profundo, creme, DM Serif Display + DM Sans), porém reorganizando a navegação e a hierarquia de conteúdo para empurrar o visitante para o objetivo principal: **briefing de projeto sob medida via WhatsApp**.

## Estrutura de páginas

```
/                 Home — vitrine + provas + CTAs fortes
/servicos         Serviços sob medida (foco principal de venda)
/produtos         Os 2 apps prontos (Auditoria, Cubagem)
/projetos         Cases, scripts e dashboards
/sobre            Trajetória, formação, stack
/contato          Hub de contato + form opcional
```

Navegação fixa no topo com logo "DR", links das páginas, e um botão verde "Falar no WhatsApp" sempre visível (a maior alavanca de conversão de leads).

## Página por página

### Home (/)
- **Hero** mantém o split atual (esquerda texto + estatísticas à direita), mas o eyebrow muda para "Dados & Automação para o setor florestal" e o CTA primário vira **"Solicitar orçamento"** (WhatsApp) com secundário "Ver serviços".
- **Faixa de credibilidade**: 10 anos de carreira · 7 com BI · Engenheira Florestal · Python/R/Power BI — em barra horizontal limpa.
- **Bloco "Como posso ajudar"**: 3 cards resumindo Serviços / Produtos / Projetos, cada um linkando para sua página.
- **Cases em destaque** (versão resumida): Superstore, Auditoria IFC Shiny — com métricas e link "ver detalhes".
- **Faixa de prova social não-formal**: bloco com métricas concretas dos seus cases ("X horas economizadas", "Y mil registros processados", "Z relatórios automatizados") — já que você não tem depoimentos formais ainda.
- **CTA final**: "Tem um desafio com dados florestais? Vamos conversar." → WhatsApp.

### Serviços (/servicos) — página principal de venda
- Hero curto explicando: "Soluções sob medida para empresas florestais."
- **4 cards de serviço expandidos** (Script de Inventário, Power BI, Integração/Automação, Manutenção Mensal) — agora com:
  - Problema que resolve (1 frase de dor)
  - O que é entregue
  - Prazo e faixa de preço
  - Mini case relacionado ("Já entreguei algo parecido para...")
  - Botão "Pedir proposta" → WhatsApp pré-preenchido com o nome do serviço
- Bloco **"Como funciona"** (4 passos: Conversa inicial → Escopo → Entrega → Suporte) para reduzir fricção.
- Bloco **FAQ** curto (4–5 perguntas: "Trabalha com quais formatos?", "Atende remoto?", "Como é o pagamento?", "E se meu caso for diferente?").
- CTA final grande verde: "Conte seu desafio no WhatsApp".

### Produtos (/produtos)
- Os 2 apps (Auditoria Florestal e Recomendação de Cubagem), cada um em seção full-width:
  - Mockup/preview maior (similar aos blocos verdes/azuis que você já tem)
  - Lista de funcionalidades
  - Preço de implantação + suporte
  - 2 CTAs: "Ver demo" (link app online quando houver) + "Quero implantar" (WhatsApp)
- Bloco "Posso adaptar para sua realidade?" → WhatsApp.

### Projetos (/projetos)
- Featured projects: Superstore Dashboard + Auditoria IFC Shiny (mantém os mocks dark/verde que você fez, ficaram ótimos).
- Grid "Scripts & Automações" com os 6 cards atuais.
- CTA final: "Algo parecido na sua empresa? Vamos conversar."

### Sobre (/sobre)
- Texto atual sobre você + foto/avatar opcional.
- Timeline de formação e cursos.
- Stack completa (cards verdes escuros do bloco "stack" atual).
- Valores de trabalho (2–3 frases curtas: governança, eficiência, sob medida).

### Contato (/contato)
- Hub com 3 cartões grandes: WhatsApp (destacado), LinkedIn, E-mail.
- Faixa de horário/atendimento e tempo médio de resposta para gerar confiança.

## Melhorias transversais

- **Header sticky** com botão WhatsApp verde sempre visível (desktop e mobile).
- **Botão flutuante WhatsApp** no canto inferior direito em todas as páginas.
- **Links de WhatsApp pré-preenchidos** com mensagem contextual (ex: na página /servicos clicar em "Power BI" abre o WhatsApp já com "Olá Diane, quero conversar sobre o serviço de Dashboard Power BI").
- **Footer** com navegação completa, contatos, GitHub, LinkedIn e copyright.
- **SEO básico**: títulos, meta descriptions e Open Graph por página (com foco em "automação de dados florestais", "Power BI florestal", "auditoria IFC", etc.).
- **Animações suaves** de fadeUp ao entrar em cada seção (mantendo o que você já tem na home).
- **Responsivo** completo (já cuidado nos breakpoints atuais — vou replicar/melhorar).

## Detalhes técnicos (para referência)

- React + React Router DOM com as rotas listadas; layout compartilhado com `<Header />` e `<Footer />`.
- Design tokens em `index.css` (HSL): `--green-deep`, `--green-mid`, `--green-soft`, `--cream`, `--accent` etc., refletindo a paleta atual.
- Tailwind config estendida para usar essas variáveis (`bg-green-deep`, `text-cream`...).
- Fontes DM Serif Display + DM Sans via `<link>` no `index.html`.
- Componentes reutilizáveis: `SectionHeader`, `ServiceCard`, `ProductCard`, `ProjectCard`, `WhatsAppButton`, `StatCard`.
- Telefone WhatsApp centralizado em uma constante (`5547991826787`) com helper `whatsappLink(message)` para gerar URLs com mensagem pré-preenchida.

## O que NÃO vai entrar nesta etapa

- Formulário de briefing (você optou por WhatsApp/LinkedIn diretos).
- Sistema de depoimentos (você ainda não tem material formal — fica para uma evolução futura).
- Backend / banco de dados (não é necessário para esse objetivo).

Quando aprovar, eu implemento tudo de uma vez e você revê o resultado no preview.