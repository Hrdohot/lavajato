/**
 * CONFIGURAÇÃO DO SITE
 * ---------------------------------------------------------
 * Este é o único arquivo que precisa mudar para reaproveitar
 * este site em outro lava-rápido / estética automotiva.
 * Troque os textos, preços e contatos abaixo e publique —
 * não é necessário mexer em index.html, styles.css ou script.js.
 * ---------------------------------------------------------
 */
window.SITE_CONFIG = {

  // Identidade -------------------------------------------------
  brand: {
    name: "Maré",
    full: "Maré Lava Rápido & Estética Automotiva",
    year: "2026"
  },

  // Contato / localização ---------------------------------------
  contact: {
    whatsappNumber: "5511999999999", // DDI+DDD+número, só dígitos
    whatsappMessage: "Olá! Quero agendar uma lavagem.",
    phoneDisplay: "(11) 99999-9999",
    address: "Av. Industrial, 482 — Vila Guarani, São Paulo",
    hours: "Segunda a sábado, 8h às 19h",
    capacity: "Vagas cobertas para até 14 veículos"
  },

  // Menu -----------------------------------------------------
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Unidade", href: "#unidade" }
  ],

  // Hero -------------------------------------------------------
  hero: {
    eyebrow: "Vila Guarani, São Paulo",
    title: "Do pátio à garagem, seu carro sai impecável.",
    lead: "Lavagem rápida com padrão de estética: equipe treinada, produtos certos para cada tipo de pintura e horário que cabe na sua rotina."
  },

  // Números de confiança ----------------------------------------
  stats: [
    { value: "12 anos", label: "cuidando de carros na região" },
    { value: "48 mil+", label: "lavagens realizadas" },
    { value: "4.9", label: "nota média dos clientes" },
    { value: "35 min", label: "tempo médio da lavagem completa" }
  ],

  // Serviços avulsos ---------------------------------------------
  services: [
    { name: "Lavagem Simples", desc: "Lavagem externa, rodas, pneus e secagem manual.", price: "R$ 35" },
    { name: "Lavagem Completa", desc: "Externa e interna, aspiração, painel e vidros.", price: "R$ 60" },
    { name: "Polimento Técnico", desc: "Remoção de marcas finas e holograma, devolvendo o brilho original da pintura.", price: "R$ 180" },
    { name: "Vitrificação de Pintura", desc: "Proteção de longa duração contra sol, chuva ácida e maresia.", price: "R$ 650" },
    { name: "Higienização Interna", desc: "Bancos, carpete e forração, com remoção de odores.", price: "R$ 150" },
    { name: "Lavagem a Seco", desc: "Ideal para dias de pouca água ou garagens fechadas.", price: "R$ 45" }
  ],

  // Planos mensais (assinatura) -----------------------------------
  plans: [
    {
      name: "Essencial",
      price: "180",
      featured: false,
      features: [
        "4 lavagens completas por mês",
        "Agendamento prioritário",
        "Válido de segunda a sábado"
      ]
    },
    {
      name: "Performance",
      price: "320",
      featured: true,
      tag: "Mais escolhido",
      features: [
        "8 lavagens completas por mês",
        "1 higienização interna por trimestre",
        "Agendamento no mesmo dia",
        "Carro retirado em até 30 min"
      ]
    },
    {
      name: "Blindado",
      price: "590",
      featured: false,
      features: [
        "Lavagens completas ilimitadas",
        "Polimento técnico semestral incluso",
        "Vitrificação anual com 30% off",
        "Atendimento com hora marcada"
      ]
    }
  ],

  // Como funciona (passo a passo) -------------------------------
  steps: [
    { title: "Agende", desc: "Escolha o horário pelo WhatsApp ou telefone — resposta em poucos minutos." },
    { title: "Deixe o carro", desc: "Nossa equipe recebe e faz a vistoria com você na chegada, sem letras miúdas." },
    { title: "Retire brilhando", desc: "Avisamos quando estiver pronto. Você confere e retira no horário combinado." }
  ],

  // Depoimentos --------------------------------------------------
  testimonials: [
    { text: "Assinei o Performance há seis meses e nunca mais lavei meu carro no fim de semana. Sempre pronto quando eu preciso.", name: "Marina T.", detail: "HB20, Vila Guarani" },
    { text: "Levei pra vitrificar depois de uma pintura nova e o resultado ficou melhor do que eu esperava. Equipe explicou cada etapa.", name: "Eduardo R.", detail: "Corolla, Ipiranga" },
    { text: "Uso o carro pra trabalho o dia todo. A lavagem a seco salva minha semana quando não dá tempo de passar com calma.", name: "Camila S.", detail: "Onix, Sacomã" }
  ],

  // Imagens --------------------------------------------------------
  // Troque pelos arquivos reais em /images quando o cliente enviar fotos.
  // Enquanto não houver fotos, o hero usa um desenho vetorial (sem custo e sem dependência de imagem).
  images: {
    logo: null,          // ex: "images/logo.png"
    heroPhoto: null,      // ex: "images/hero.jpg"
    gallery: []           // ex: ["images/antes-depois-1.jpg", ...]
  },

  // SEO ------------------------------------------------------------
  seo: {
    title: "Maré — Lava Rápido & Estética Automotiva em Vila Guarani, SP",
    description: "Lavagem completa, polimento, vitrificação e planos mensais de assinatura. Agende pelo WhatsApp e retire seu carro brilhando."
  }
};
