import Link from "next/link";

const navigation = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030b1f]/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="#" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-400 to-[#ffd07f]">
            <span className="absolute inset-1 rounded-2xl border border-white/30" />
            <span className="relative text-sm font-black text-[#04122a]">EaD</span>
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#facc87]">Radiante</span>
            <span className="text-lg font-semibold">Educação a distância</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-mute md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="#matricula" className="btn btn-ghost">
            Área do aluno
          </Link>
          <Link href="#matricula" className="btn btn-primary">
            Fale com um consultor
          </Link>
        </div>

        <Link href="#matricula" className="btn btn-primary md:hidden">
          Contato
        </Link>
      </div>
    </header>
  );
}

const heroHighlights = [
  { title: "+150 cursos", subtitle: "Graduação, Pós e Formação" },
  { title: "Avaliações objetivas", subtitle: "Notas lançadas com rapidez" },
  { title: "Certificação MEC", subtitle: "Reconhecido nacionalmente" },
];

function Hero() {
  return (
    <section className="gradient-hero">
      <div className="container relative z-10 mx-auto grid items-center gap-16 px-4 py-20 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="section-heading">Desde 2003 transformando carreiras</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
            A universidade EaD que ilumina o seu futuro
          </h1>
          <p className="mt-5 max-w-2xl text-base text-mute md:text-lg">
            Escolha uma formação que combina conteúdo de excelência, tutores dedicados e a flexibilidade que você precisa. No EaD
            Radiante, você acessa o ambiente virtual 24h, consome videoaulas, apostilas e aplica o conhecimento na prática desde o
            primeiro módulo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#cursos" className="btn btn-primary">
              Conheça os cursos
            </Link>
            <Link href="#diferenciais" className="btn btn-ghost">
              Entenda a metodologia
            </Link>
          </div>
          <div className="mt-12 grid gap-6 text-sm text-mute sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#facc87]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-12 top-12 hidden h-20 w-20 rounded-full bg-gradient-to-tr from-brand-300/40 to-brand-500/20 blur-2xl md:block" />
          <div className="card relative overflow-hidden p-8">
            <div className="absolute -top-40 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-brand-400/40 via-brand-500/30 to-[#ffd07f]/40 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.5em] text-[#facc87]">Ambiente Virtual</p>
            <h3 className="mt-4 text-2xl font-semibold">Aprenda de qualquer lugar</h3>
            <p className="mt-3 text-sm text-mute">
              Videoaulas, apostilas digitais, fóruns ativos e suporte por especialistas acompanhando seu progresso.
            </p>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                <p>Trilhas com roadmap claro e avaliações objetivas.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                <p>Certificados emitidos rapidamente após a conclusão.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                <p>Suporte por WhatsApp, chat e plantões pedagógicos.</p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-[#04122a]/70 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-[#facc87]">Tempo médio</p>
                <p className="text-lg font-semibold text-white">6 a 18 meses</p>
              </div>
              <Link href="#matricula" className="btn btn-primary">
                Iniciar agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const categorias = [
  {
    titulo: "Pós-graduação & MBA",
    descr: "Atualize-se com conteúdos digitais, encontros síncronos opcionais e professores com experiência de mercado.",
    destaque: "Certificação lato sensu",
  },
  {
    titulo: "Graduação EaD",
    descr: "Construa sua base acadêmica com disciplinas atualizadas, laboratórios virtuais e apoio de tutoria ativa.",
    destaque: "Diploma reconhecido MEC",
  },
  {
    titulo: "Segunda Licenciatura",
    descr: "Amplie sua área de atuação docente com itinerários acelerados para quem já possui formação inicial.",
    destaque: "Planos com bolsas",
  },
  {
    titulo: "Formação Pedagógica (R2)",
    descr: "Conquiste a habilitação para lecionar aliando metodologias digitais e acompanhamento permanente.",
    destaque: "Entradas mensais",
  },
  {
    titulo: "Cursos Técnicos → Tecnólogo",
    descr: "Transforme o conhecimento técnico em diploma superior com aproveitamento de estudos e carga horária inteligente.",
    destaque: "Grade otimizada",
  },
  {
    titulo: "Extensão e Aperfeiçoamento",
    descr: "Aprenda rápido com módulos intensivos, materiais objetivos e emissão imediata de certificados.",
    destaque: "Formações curtas",
  },
];

function Cursos() {
  return (
    <section id="cursos" className="container mx-auto px-4 py-20">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="section-heading">Formações para cada etapa da sua jornada</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Escolha seu caminho com a EaD Radiante</h2>
          <p className="mt-3 text-mute">
            Planos flexíveis, aproveitamento de disciplinas, avaliação objetiva e certificação válida em todo o território nacional.
          </p>
        </div>
        <Link href="#matricula" className="btn btn-ghost">
          Falar com um consultor
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categorias.map((categoria) => (
          <div key={categoria.titulo} className="card p-6">
            <span className="badge">{categoria.destaque}</span>
            <h3 className="mt-5 text-xl font-semibold text-white">{categoria.titulo}</h3>
            <p className="mt-3 text-sm text-mute">{categoria.descr}</p>
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
    descricao: "Instituição com nota de excelência no MEC, parcerias com conselhos profissionais e certificações válidas em todo o Brasil.",
  },
  {
    titulo: "Metodologia radiante",
    descricao: "Aulas on-demand, trilhas guiadas e atividades práticas que mantêm você conectado ao mercado.",
  },
  {
    titulo: "Tutoria ativa",
    descricao: "Suporte especializado via WhatsApp, plantões semanais e fóruns para tirar dúvidas em tempo real.",
  },
  {
    titulo: "Flexibilidade total",
    descricao: "Monte seu ritmo com calendários adaptáveis, avaliações objetivas e possibilidade de aceleração.",
  },
  {
    titulo: "Investimento inteligente",
    descricao: "Bolsas institucionais, convênios corporativos e descontos progressivos na segunda matrícula.",
  },
  {
    titulo: "Ambiente intuitivo",
    descricao: "Plataforma responsiva com indicadores de progresso, biblioteca digital e acompanhamento personalizado.",
  },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="split-section">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl">
          <p className="section-heading">Por que escolher a EaD Radiante</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Diferenciais que aquecem sua trajetória</h2>
          <p className="mt-3 text-mute">
            Todo o ecossistema foi pensado para tornar a experiência digital acolhedora, eficiente e reconhecida pelo mercado.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
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

const depoimentos = [
  {
    nome: "Leandra Maria Norberto",
    mensagem: "Experiência muito boa. Consegui terminar em seis meses como prometido e tive suporte em todas as etapas.",
    curso: "Formação Pedagógica",
  },
  {
    nome: "Peterson Alves",
    mensagem: "Método de aprendizado incrível e equipe atenciosa. Senti segurança em cada disciplina.",
    curso: "Pós-graduação em Gestão",
  },
  {
    nome: "Willian Alves",
    mensagem: "Equipe excelente, consegui minha 2ª atribuição no CREA rapidamente após finalizar o curso.",
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
          Resultados alcançados por quem escolheu aprender com flexibilidade e suporte humano.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {depoimentos.map((depo) => (
          <div key={depo.nome} className="card flex h-full flex-col justify-between p-6">
            <div>
              <p className="text-sm leading-relaxed text-mute">“{depo.mensagem}”</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">{depo.nome}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#facc87]">{depo.curso}</p>
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
    "Descontos para egressos",
    "Biblioteca digital 24/7",
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="card flex flex-col items-center gap-8 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="max-w-xl">
          <p className="section-heading">Rede de confiança</p>
          <h3 className="mt-4 text-2xl font-semibold">Mais de 20 anos de tradição em educação a distância</h3>
          <p className="mt-3 text-sm text-mute">
            Trabalhamos com conselhos profissionais, empresas parceiras e polos autorizados em todo o Brasil, garantindo qualidade e
            suporte em cada fase do curso.
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

function Matricula() {
  return (
    <section id="matricula" className="container mx-auto px-4 py-20">
      <div className="card grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-heading">Pronto para começar?</p>
          <h3 className="mt-4 text-2xl font-semibold">Converse com nossos consultores educacionais</h3>
          <p className="mt-3 text-mute">
            Garanta condições especiais de matrícula, tire dúvidas sobre documentação e conheça os calendários de ingresso.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-mute">
            <p>WhatsApp: (35) 99955-0895</p>
            <p>E-mail: atendimento@eadradiante.com.br</p>
            <p>Unidade: Rua Silviano Brandão, 476 – Elói Mendes, MG</p>
          </div>
        </div>
        <form className="grid gap-4">
          <input className="rounded-2xl border border-white/10 bg-[#04122a]/70 px-4 py-3 text-sm text-white placeholder:text-mute" placeholder="Seu nome" />
          <input className="rounded-2xl border border-white/10 bg-[#04122a]/70 px-4 py-3 text-sm text-white placeholder:text-mute" placeholder="Seu e-mail" />
          <select className="rounded-2xl border border-white/10 bg-[#04122a]/70 px-4 py-3 text-sm text-white">
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
            className="min-h-[120px] rounded-2xl border border-white/10 bg-[#04122a]/70 px-4 py-3 text-sm text-white placeholder:text-mute"
            placeholder="Conte-nos como podemos ajudar"
          />
          <button type="button" className="btn btn-primary">
            Quero ser contactado
          </button>
          <p className="text-xs text-mute">Ao enviar, você concorda com nossa política de contato e de uso de dados.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10 text-sm text-mute md:flex-row md:items-center md:justify-between">
        <p>EaD Radiante © {new Date().getFullYear()} — Todos os direitos reservados.</p>
        <div className="flex flex-wrap gap-3">
          <a className="badge" href="#">
            Instagram
          </a>
          <a className="badge" href="#">
            Facebook
          </a>
          <a className="badge" href="#">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Cursos />
      <Diferenciais />
      <Credenciais />
      <Depoimentos />
      <Matricula />
      <Footer />
    </>
  );
}
