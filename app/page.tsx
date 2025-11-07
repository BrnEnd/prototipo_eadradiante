import Link from "next/link";

const topInfos = [
  { label: "Central de atendimento", value: "0800 941 7000" },
  { label: "WhatsApp", value: "(35) 99955-0895" },
  { label: "Credenciada", value: "Portaria MEC 158/2019" },
];

const navigation = [
  { label: "Modalidades", href: "#modalidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#042219]/90 backdrop-blur">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-2 text-[0.75rem] text-mute md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {topInfos.map((info) => (
            <div key={info.label} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              <span className="uppercase tracking-[0.3em] text-[#ffe08a]">{info.label}</span>
              <span className="font-medium text-white">{info.value}</span>
            </div>
          ))}
        </div>
        <Link href="#aluno" className="badge-outline">
          Portal do aluno
        </Link>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#02140f]/85 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="#" className="flex items-center gap-4">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-400 via-brand-500 to-[#ffd55f] text-[#102344] shadow-glow">
            <span className="absolute inset-1 rounded-3xl border border-white/40" />
            <span className="relative text-base font-black uppercase tracking-[0.4em]">EaD</span>
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ffe08a]">Radiante</span>
            <span className="text-lg font-semibold text-white">Educação a Distância</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-mute lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="#contato" className="btn btn-secondary">
            Fale com um consultor
          </Link>
          <Link href="#matricula" className="btn btn-primary">
            Quero iniciar hoje
          </Link>
        </div>
        <Link href="#contato" className="btn btn-primary lg:hidden">
          Contato
        </Link>
      </div>
    </header>
  );
}

const heroStats = [
  { value: "20 anos", label: "de história na EaD" },
  { value: "120+", label: "polos parceiros" },
  { value: "Nota 5", label: "avaliação MEC" },
];

const heroHighlights = [
  "Ambiente virtual com aulas 24h",
  "Certificação rápida após conclusão",
  "Tutoria ativa por especialistas",
];

function Hero() {
  return (
    <section className="gradient-hero">
      <div className="container relative z-10 grid items-center gap-12 px-4 pb-20 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] xl:gap-16">
        <div className="space-y-6 lg:space-y-8">
          <span className="badge">Universidade corporativa EaD</span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            Uma experiência luminosa para acelerar sua carreira
          </h1>
          <p className="mt-5 max-w-2xl text-base text-mute sm:text-lg lg:max-w-3xl">
            A EaD Radiante combina tecnologia, acolhimento e acompanhamento para quem busca graduação, pós-graduação ou formações pedagógicas com credibilidade. Flexibilidade para estudar quando quiser, com a segurança de uma instituição reconhecida pelo MEC.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-5">
            <Link href="#modalidades" className="btn btn-primary">
              Conheça os cursos
            </Link>
            <Link href="#metodologia" className="btn btn-secondary">
              Veja como funciona
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-tile">
                <p className="text-xl font-semibold text-white lg:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#ffe08a]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 text-sm text-mute sm:max-w-lg">
            {heroHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-lg xl:max-w-xl">
          <div className="absolute -left-16 top-12 hidden h-24 w-24 rounded-full bg-gradient-to-tr from-emerald-300/40 to-emerald-100/10 blur-3xl lg:block" />
          <div className="hero-illustration p-8 sm:p-10 lg:p-12">
            <div className="relative z-10 space-y-6">
              <div>
                <p className="section-subtitle">Portal exclusivo</p>
                <h3 className="mt-3 text-2xl font-semibold">Tudo o que você precisa em um único ambiente</h3>
                <p className="mt-3 text-sm text-mute">
                  Acesse videoaulas em alta definição, roteiros de estudo, fóruns de dúvidas e notificações em tempo real.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-mute">
                <div className="rounded-2xl border border-white/10 bg-[#073b2a]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#ffe08a]">Trilhas guiadas</p>
                  <p className="mt-1 text-white">Planos personalizados conforme sua disponibilidade semanal.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#073b2a]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#67f0c6]">Suporte integrado</p>
                  <p className="mt-1 text-white">Equipe pedagógica, mentoria e atendimento administrativo em um clique.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-[#ffe08a]/20 bg-[#084230]/80 p-4 text-sm text-mute">
                <p>Agenda semanal com lembretes inteligentes</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#ffe08a]">Integração com app mobile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AtendimentoRibbon() {
  return (
    <section className="relative z-20 px-4">
      <div className="container -mt-12 max-w-5xl sm:-mt-16">
        <div className="ribbon flex flex-col gap-6 rounded-3xl px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-10">
          <div>
            <p className="section-heading">Atendimento ágil</p>
            <h3 className="mt-4 text-2xl font-semibold">Consultores prontos para indicar o melhor caminho</h3>
            <p className="mt-2 text-sm text-mute">
              Entre em contato e descubra bolsas, documentação necessária e prazos de entrada mais próximos.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="https://wa.me/5535999550895" className="btn btn-primary" target="_blank">
              Conversar no WhatsApp
            </Link>
            <Link href="#catalogo" className="btn btn-secondary">
              Baixar catálogo de cursos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const modalidades = [
  {
    titulo: "Graduação EaD",
    descr: "Cursos 100% online com polos presenciais para atividades práticas e avaliações oficiais.",
    destaque: "Diploma reconhecido MEC",
  },
  {
    titulo: "Pós-graduação & MBA",
    descr: "Trilhas intensivas com professores atuantes no mercado e certificação lato sensu.",
    destaque: "Conclusão a partir de 6 meses",
  },
  {
    titulo: "Formação Pedagógica (R2)",
    descr: "Transforme sua experiência em sala de aula com habilitação docente acelerada.",
    destaque: "Entradas mensais",
  },
  {
    titulo: "Segunda Licenciatura",
    descr: "Expanda sua atuação com aproveitamento de estudos e suporte pedagógico dedicado.",
    destaque: "Planos especiais",
  },
  {
    titulo: "Tecnólogos & Carreiras Tech",
    descr: "Conteúdos atualizados, foco prático e projetos orientados por especialistas do setor.",
    destaque: "Formações de 2 anos",
  },
  {
    titulo: "Extensão & Aperfeiçoamento",
    descr: "Cursos rápidos para atualizar competências com certificação emitida em até 48h.",
    destaque: "Certificado imediato",
  },
];

function Modalidades() {
  return (
    <section id="modalidades" className="container mx-auto px-4 py-20">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="section-heading">Formações para cada momento</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Escolha o formato ideal para o seu objetivo</h2>
          <p className="mt-3 text-mute">
            Currículos atualizados, avaliação objetiva e suporte integral desde a matrícula até a certificação.
          </p>
        </div>
        <Link href="#metodologia" className="btn btn-secondary">
          Como é estudar na Radiante
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {modalidades.map((modalidade) => (
          <div key={modalidade.titulo} className="card flex h-full flex-col p-6">
            <span className="badge">{modalidade.destaque}</span>
            <h3 className="mt-5 text-xl font-semibold text-white">{modalidade.titulo}</h3>
            <p className="mt-3 text-sm text-mute">{modalidade.descr}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#matricula" className="btn btn-primary">
                Quero mais detalhes
              </Link>
              <button className="btn btn-ghost">Grade curricular</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const diferenciais = [
  {
    titulo: "Credibilidade reconhecida",
    descricao: "Instituição nota máxima no MEC, com professores mestres e doutores atuantes no mercado.",
  },
  {
    titulo: "Experiência acolhedora",
    descricao: "Tutoria humana, canais diretos e acompanhamento ativo para garantir evolução constante.",
  },
  {
    titulo: "Tecnologia que aproxima",
    descricao: "Ambiente responsivo, app mobile e recursos acessíveis para estudar em qualquer dispositivo.",
  },
  {
    titulo: "Investimento inteligente",
    descricao: "Planos com bolsas institucionais, convênios corporativos e descontos progressivos.",
  },
  {
    titulo: "Avaliações descomplicadas",
    descricao: "Provas objetivas com feedback rápido e calendário adaptável ao seu ritmo.",
  },
  {
    titulo: "Rede de polos",
    descricao: "Mais de 120 polos parceiros pelo Brasil garantindo suporte presencial quando necessário.",
  },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="split-section">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl">
          <p className="section-heading">Por que escolher a EaD Radiante</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Aprender com brilho, entregar resultados reais</h2>
          <p className="mt-3 text-mute">
            Um ecossistema digital pensado para apoiar cada fase da sua formação, do ingresso à conclusão.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {diferenciais.map((item) => (
            <div key={item.titulo} className="card p-6">
              <h3 className="text-lg font-semibold text-white">{item.titulo}</h3>
              <p className="mt-3 text-sm text-mute">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const metodologia = [
  {
    etapa: "01",
    titulo: "Diagnóstico personalizado",
    descricao: "Entenda seu objetivo com nossos consultores e receba um plano de estudos sob medida.",
  },
  {
    etapa: "02",
    titulo: "Trilhas de aprendizagem",
    descricao: "Videoaulas, podcasts, roteiros e simulados para fixar conteúdo com flexibilidade.",
  },
  {
    etapa: "03",
    titulo: "Tutoria ativa",
    descricao: "Mentores disponíveis por chat, WhatsApp e plantões semanais para tirar dúvidas.",
  },
  {
    etapa: "04",
    titulo: "Avaliação e certificação",
    descricao: "Avaliações objetivas com feedback imediato e emissão rápida do certificado.",
  },
];

function Metodologia() {
  return (
    <section id="metodologia" className="container mx-auto px-4 py-20">
      <div className="max-w-xl">
        <p className="section-heading">Como funciona</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Metodologia para potencializar sua jornada</h2>
        <p className="mt-3 text-mute">
          A união entre tecnologia, acompanhamento humano e avaliações objetivas garante ritmo de aprendizado consistente.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
        {metodologia.map((item) => (
          <div key={item.titulo} className="card p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#67f0c6]">{item.etapa}</span>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.titulo}</h3>
            <p className="mt-3 text-sm text-mute">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const depoimentos = [
  {
    nome: "Leandra Maria Norberto",
    mensagem: "Experiência acolhedora. Concluí a formação pedagógica em 6 meses com apoio em todas as etapas.",
    curso: "Formação Pedagógica",
  },
  {
    nome: "Peterson Alves",
    mensagem: "Equipe muito atenciosa e uma plataforma intuitiva. As avaliações são objetivas e o suporte é rápido.",
    curso: "Pós-graduação em Gestão",
  },
  {
    nome: "Willian Alves",
    mensagem: "Com o diploma em mãos consegui minha segunda atribuição no CREA logo após concluir o curso.",
    curso: "Graduação Tecnológica",
  },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="container mx-auto px-4 py-20">
      <div className="mb-12 max-w-xl">
        <p className="section-heading">Histórias reais</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">O que dizem nossos estudantes</h2>
        <p className="mt-3 text-mute">
          Resultados de quem escolheu estudar com liberdade, acolhimento e reconhecimento de mercado.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {depoimentos.map((depo) => (
          <div key={depo.nome} className="card flex h-full flex-col justify-between p-6">
            <p className="text-sm leading-relaxed text-mute">“{depo.mensagem}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">{depo.nome}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#ffe08a]">{depo.curso}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-mute">Depoimentos autorizados e ilustrativos para este protótipo.</p>
    </section>
  );
}

function Credenciais() {
  const itens = [
    "Selo MEC",
    "Parcerias corporativas",
    "Biblioteca digital 24/7",
    "Atendimento omnichannel",
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="card flex flex-col items-center gap-8 p-10 text-center md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-10 md:text-left lg:gap-16">
        <div className="max-w-xl">
          <p className="section-heading">Rede de confiança</p>
          <h3 className="mt-4 text-2xl font-semibold">Mais de duas décadas iluminando trajetórias</h3>
          <p className="mt-3 text-sm text-mute">
            Trabalhamos com conselhos profissionais, empresas parceiras e polos autorizados em todo o Brasil para garantir qualidade, proximidade e segurança em cada fase do curso.
          </p>
        </div>
        <ul className="grid gap-4 text-sm text-mute sm:grid-cols-2">
          {itens.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faq = [
  {
    pergunta: "A EaD Radiante é reconhecida pelo MEC?",
    resposta: "Sim. Todos os cursos são autorizados e reconhecidos pelo Ministério da Educação, com nota máxima nas últimas avaliações."
  },
  {
    pergunta: "Como acontecem as provas e atividades presenciais?",
    resposta: "As avaliações são marcadas com antecedência e realizadas em polos parceiros. A maior parte da jornada é online, com apoio da nossa equipe."
  },
  {
    pergunta: "Posso aproveitar disciplinas já cursadas?",
    resposta: "Sim. Realizamos análise de documentos para aproveitamento de estudos e redução de carga horária quando aplicável."
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta: "Oferecemos planos mensais, semestrais e anuais, além de convênios com empresas e descontos especiais para ex-alunos."
  }
];

function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-20">
      <div className="max-w-xl">
        <p className="section-heading">Perguntas frequentes</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Tudo o que você precisa saber antes de começar</h2>
        <p className="mt-3 text-mute">
          Selecionamos as principais dúvidas dos estudantes para você planejar sua matrícula com confiança.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:gap-6 lg:grid-cols-2">
        {faq.map((item) => (
          <div key={item.pergunta} className="faq-item">
            <p className="text-sm font-semibold text-white">{item.pergunta}</p>
            <p className="mt-3 text-sm text-mute">{item.resposta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Matricula() {
  return (
    <section id="matricula" className="container mx-auto px-4 py-20">
      <div className="card grid gap-8 p-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_1fr] lg:p-10">
        <div>
          <p className="section-heading">Pronto para começar?</p>
          <h3 className="mt-4 text-2xl font-semibold">Fale com nossos consultores educacionais</h3>
          <p className="mt-3 text-mute">
            Garanta condições especiais de matrícula, tire dúvidas sobre documentação e conheça os calendários de ingresso.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-mute">
            <p>WhatsApp: (35) 99955-0895</p>
            <p>E-mail: atendimento@eadradiante.com.br</p>
            <p>Unidade: Rua Silviano Brandão, 476 – Elói Mendes, MG</p>
          </div>
        </div>
        <form className="grid gap-4 md:gap-5">
          <input className="rounded-2xl border border-white/10 bg-[#06261d]/70 px-4 py-3 text-sm text-white placeholder:text-mute" placeholder="Seu nome" />
          <input className="rounded-2xl border border-white/10 bg-[#06261d]/70 px-4 py-3 text-sm text-white placeholder:text-mute" placeholder="Seu e-mail" />
          <select className="rounded-2xl border border-white/10 bg-[#06261d]/70 px-4 py-3 text-sm text-white">
            <option className="text-gray-900">Selecione a área de interesse</option>
            <option className="text-gray-900">Educação e Pedagogia</option>
            <option className="text-gray-900">Administração &amp; MBA</option>
            <option className="text-gray-900">Direito</option>
            <option className="text-gray-900">Saúde</option>
            <option className="text-gray-900">Engenharia</option>
            <option className="text-gray-900">Tecnologia</option>
            <option className="text-gray-900">Outra área</option>
          </select>
          <textarea
            className="min-h-[120px] rounded-2xl border border-white/10 bg-[#06261d]/70 px-4 py-3 text-sm text-white placeholder:text-mute"
            placeholder="Conte-nos como podemos ajudar"
          />
          <button type="button" className="btn btn-primary">
            Quero ser contactado
          </button>
          <p className="text-xs text-mute">Ao enviar, você concorda com nossa política de contato e uso de dados.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container grid gap-8 px-4 py-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-400 via-brand-500 to-[#ffd55f] text-[#102344]">
              <span className="absolute inset-1 rounded-3xl border border-white/40" />
              <span className="relative text-sm font-black uppercase tracking-[0.35em]">EaD</span>
            </span>
            <span className="text-lg font-semibold">Radiante</span>
          </Link>
          <p className="text-sm text-mute">
            Educação a distância pensada para quem busca flexibilidade, acolhimento e reconhecimento oficial.
          </p>
          <p className="text-xs text-mute">© {new Date().getFullYear()} EaD Radiante. Todos os direitos reservados.</p>
        </div>
        <div>
          <p className="section-heading">Atendimento</p>
          <ul className="mt-4 space-y-2 text-sm text-mute">
            <li>Central: 0800 941 7000</li>
            <li>WhatsApp: (35) 99955-0895</li>
            <li>E-mail: atendimento@eadradiante.com.br</li>
          </ul>
        </div>
        <div>
          <p className="section-heading">Acesse</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-mute">
            <Link className="badge" href="#">Instagram</Link>
            <Link className="badge" href="#">Facebook</Link>
            <Link className="badge" href="#">YouTube</Link>
            <Link className="badge" href="#">Portal do aluno</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsappFloat() {
  return (
    <Link href="https://wa.me/5535999550895" className="whatsapp-float" target="_blank">
      WhatsApp EaD Radiante
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AtendimentoRibbon />
      <Modalidades />
      <Diferenciais />
      <Metodologia />
      <Credenciais />
      <Depoimentos />
      <FAQ />
      <Matricula />
      <Footer />
      <WhatsappFloat />
    </>
  );
}
