import Link from "next/link";

function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-500 to-sky-500" />
        <span className="font-bold tracking-tight">EaD Radiante</span>
      </div>
      <nav className="hidden gap-6 text-sm text-mute md:flex">
        <a href="#cursos">Cursos</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#contato">Contato</a>
      </nav>
      <Link href="#matricula" className="btn btn-primary">Fale com um consultor</Link>
    </header>
  );
}

function Hero() {
  return (
    <section className="gradient-hero">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <span className="badge">100% Online • Selo MEC • Suporte dedicado</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Graduação, Pós e Formação Pedagógica <span className="text-brand-400">no seu ritmo</span>
          </h1>
          <p className="mt-3 max-w-xl text-mute">
            Desde 2003, formando profissionais com conteúdos digitais, docentes titulados e avaliações objetivas.
            Estude quando e onde quiser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#cursos" className="btn btn-primary">Ver cursos</Link>
            <Link href="#diferenciais" className="btn btn-ghost">Como funciona</Link>
          </div>

          <ul className="mt-6 grid max-w-lg grid-cols-2 gap-3 text-sm text-mute">
            <li className="card p-3">Reconhecido pelo MEC</li>
            <li className="card p-3">Tutoria e suporte</li>
            <li className="card p-3">Horário flexível</li>
            <li className="card p-3">Certificação válida</li>
          </ul>
        </div>

        <div className="card h-[360px] w-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-slate-900 to-slate-800 p-5">
            <p className="text-sm text-mute">Ambiente virtual de aprendizagem</p>
            <h3 className="mt-1 text-xl font-semibold">Estude por videoaulas e apostilas</h3>
            <p className="mt-1 text-sm text-mute">Acesso 24/7 e avaliações objetivas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cursos() {
  const categorias = [
    { titulo: "Pós-Graduação e MBA", descr: "Especialize-se com trilhas 100% online.", tag: "MEC" },
    { titulo: "Graduação", descr: "Comece sua jornada acadêmica.", tag: "EAD" },
    { titulo: "Técnico → Tecnólogo", descr: "Acelere sua formação.", tag: "Carreira" },
    { titulo: "Formação Pedagógica (R2)", descr: "Habilitação para docência.", tag: "Docência" },
    { titulo: "2ª Licenciatura", descr: "Amplie sua área de atuação.", tag: "Licenciatura" },
    { titulo: "Extensão", descr: "Aprenda de forma rápida e prática.", tag: "Curta duração" },
  ];

  return (
    <section id="cursos" className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Escolha seu caminho</h2>
          <p className="text-mute">Cursos com materiais digitais e tutoria especializada.</p>
        </div>
        <Link href="#matricula" className="btn btn-ghost">Falar no WhatsApp</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {categorias.map((c) => (
          <div key={c.titulo} className="card p-5">
            <span className="badge">{c.tag}</span>
            <h3 className="mt-2 text-xl font-semibold">{c.titulo}</h3>
            <p className="mt-1 text-mute">{c.descr}</p>
            <div className="mt-4 flex gap-2">
              <Link href="#matricula" className="btn btn-primary">Quero saber mais</Link>
              <button className="btn btn-ghost">Grade & valores</button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-mute">* Conteúdos e estrutura exemplificativos.</p>
    </section>
  );
}

function Diferenciais() {
  const itens = [
    { t: "Só cursos reconhecidos pelo MEC", d: "Certificação válida nacionalmente." },
    { t: "Horário flexível", d: "Estude no seu tempo, no seu ritmo." },
    { t: "Central de atendimento", d: "Suporte humano durante a jornada." },
    { t: "100% online", d: "Aulas, materiais e avaliações objetivas." },
    { t: "Bolsas e promoções", d: "Campanhas sazonais e benefícios." },
  ];
  return (
    <section id="diferenciais" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Diferenciais</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {itens.map((i) => (
          <div key={i.t} className="card p-5">
            <h3 className="text-lg font-semibold">{i.t}</h3>
            <p className="mt-1 text-mute">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Depoimentos() {
  const depo = [
    { n: "Leandra Maria Norberto", m: "Experiência muito boa. Consegui terminar em seis meses como falado." },
    { n: "Peterson Alves", m: "Método de aprendizado incrível e suporte excepcional." },
    { n: "Willian Alves", m: "Equipe excelente, já consegui minha 2ª atribuição no CREA." },
  ];
  return (
    <section id="depoimentos" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">O que dizem nossos alunos</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {depo.map((d) => (
          <div key={d.n} className="card p-5">
            <p className="text-sm text-mute">“{d.m}”</p>
            <p className="mt-3 text-sm font-semibold">{d.n}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-mute">Depoimentos ilustrativos.</p>
    </section>
  );
}

function Matricula() {
  return (
    <section id="matricula" className="container mx-auto px-4 py-16">
      <div className="card grid items-center gap-6 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">Pronto para começar?</h3>
          <p className="mt-2 text-mute">
            Fale com um consultor e garanta condições especiais para sua matrícula.
          </p>
          <ul className="mt-4 text-sm text-mute">
            <li>WhatsApp: (35) 99955-0895</li>
            <li>E-mail: atendimento@eadradiante.com.br</li>
            <li>Unidade: Rua Silviano Brandão, 476 – Elói Mendes, MG</li>
          </ul>
        </div>
        <form className="grid gap-3">
          <input className="card w-full p-3" placeholder="Seu nome" />
          <input className="card w-full p-3" placeholder="Seu e-mail" />
          <select className="card w-full p-3">
            <option>Selecione a área de interesse</option>
            <option>Educação/Pedagogia</option>
            <option>Administração & MBA</option>
            <option>Direito</option>
            <option>Saúde</option>
            <option>Engenharia</option>
            <option>Tecnologia</option>
            <option>Outra área</option>
          </select>
          <button type="button" className="btn btn-primary">
            Quero ser contactado
          </button>
          <p className="text-xs text-mute">Ao enviar, você concorda com nossa política de contato.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="container mx-auto px-4 py-10 text-sm text-mute">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>EaD Radiante © Todos os direitos reservados</p>
        <div className="flex gap-4">
          <a className="badge" href="#">Instagram</a>
          <a className="badge" href="#">Facebook</a>
          <a className="badge" href="#">YouTube</a>
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
      <Depoimentos />
      <Matricula />
      <Footer />
    </>
  );
}