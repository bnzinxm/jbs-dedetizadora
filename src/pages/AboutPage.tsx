import { Sparkles, ShieldCheck, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white text-slate-800 py-36 px-6 md:px-12 relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/jbs.png" alt="JBS Dedetizadora" className="h-16 cursor-pointer" />
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <a href="/" className="hover:text-red-600">Início</a>
          <a href="/sobre-nos" className="hover:text-red-600">Sobre Nós</a>
          <a href="/servicos" className="hover:text-red-600">Serviços</a>
          <a href="/precos" className="hover:text-red-600">Preços</a>
        </nav>
        <button className="bg-red-500 h-12 hover:bg-red-600 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow cursor-pointer transition-all duration-300">
          Solicitar um serviço agora!
        </button>
      </header>

      {/* Efeitos de fundo */}
      <div className="absolute w-96 h-96 bg-red-100 opacity-20 rounded-full blur-3xl -top-20 -left-20 -z-10" />
      <div className="absolute w-80 h-80 bg-red-200 opacity-25 rounded-full blur-3xl top-1/3 -right-20 -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 tracking-tight">
            Sobre a JBS Dedetizadora
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Somos uma empresa especializada em controle de pragas com atuação em todo o estado de São Paulo. Trabalhamos com ética, tecnologia e compromisso real com a segurança do seu ambiente.
          </p>
        </div>

        {/* TEXTO IMPLEMENTADO COMPLETO AQUI */}
        <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
          <p>
            A JBS Dedetizadora é uma empresa especializada em controle de pragas com atuação em todo o estado de São Paulo. Atendemos tanto residências quanto empresas e comércios, oferecendo serviços de dedetização, desratização, sanitização e controle de pragas urbanas com máxima eficiência.
          </p>
          <p>
            Trabalhamos com ética, tecnologia e compromisso real com a segurança do seu ambiente. Todos os nossos produtos são aprovados pela ANVISA, e nossa equipe é formada por profissionais altamente treinados, garantindo um serviço seguro e eficaz.
          </p>
          <p>
            Desde a nossa fundação, temos atendido lares, empresas e comércios com responsabilidade e confiança. Estamos aqui para proteger seu espaço — com respeito, eficiência e total profissionalismo.
          </p>
          <p>
            Acreditamos que ambientes limpos e seguros fazem toda a diferença na vida das pessoas. Por isso, investimos continuamente em inovação, equipamentos modernos e aprimoramento técnico da equipe.
          </p>
          <p>
            Nosso compromisso é com a sua tranquilidade e bem-estar. Cuidamos da sua casa ou negócio como se fosse nosso, priorizando sempre a saúde da sua família, colaboradores e clientes.
          </p>
          <p>
            Conte com a JBS Dedetizadora para manter seu ambiente protegido e livre de pragas. Entre em contato com a gente e solicite uma avaliação sem compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-red-600">Missão, Visão e Valores</h2>
            <p>
              Nossa missão é oferecer soluções eficazes em dedetização, desratização e controle de pragas urbanas, com foco na saúde e tranquilidade dos nossos clientes.
            </p>
            <p>
              Acreditamos que ambientes limpos e seguros fazem toda a diferença na vida das pessoas, por isso trabalhamos com materiais aprovados pela ANVISA, profissionais treinados e equipamentos modernos.
            </p>
            <p>
              Transparência, respeito, agilidade e comprometimento são os pilares que sustentam cada atendimento da JBS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-red-700 font-medium">
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-md">
              <ShieldCheck className="w-6 h-6" />
              Compromisso com a segurança
            </div>
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-md">
              <Users className="w-6 h-6" />
              Atendimento personalizado
            </div>
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-md">
              <Globe className="w-6 h-6" />
              Atuação em SP e região
            </div>
            <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-md">
              <Sparkles className="w-6 h-6" />
              Resultados visíveis e duradouros
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-white p-8 rounded-2xl shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-semibold">JBS Dedetizadora</h3>
          <p className="max-w-3xl mx-auto">
            Desde a nossa fundação, temos atendido lares, empresas e comércios com responsabilidade e confiança. Estamos aqui para proteger seu espaço — com respeito, eficiência e total profissionalismo.
          </p>
          <p className="text-sm opacity-80">CNPJ: 00.000.000/0000-00 — Todos os direitos reservados © JBS</p>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="relative bg-white text-slate-800 py-20 px-6 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-radial from-red-200/30 to-transparent rounded-full blur-2xl opacity-60 -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-red-100/50 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q200,200 400,100 T800,100" fill="none" stroke="#94a3b8" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/jbs.png" alt="Logo" className="h-12 w-auto" />
              <h2 className="text-xl font-bold text-slate-800">JBS Dedetizadora</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Há mais de 14 anos protegendo famílias e empresas com segurança e responsabilidade.
            </p>
            <div className="flex gap-4 text-slate-600 text-lg">
              <a href="#"><i className="fab fa-instagram hover:text-red-500 transition"></i></a>
              <a href="#"><i className="fab fa-facebook hover:text-red-500 transition"></i></a>
              <a href="#"><i className="fab fa-whatsapp hover:text-red-500 transition"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="#">Quem Somos</a></li>
              <li className="hover:text-red-600"><a href="#">História</a></li>
              <li className="hover:text-red-600"><a href="#">Equipe</a></li>
              <li className="hover:text-red-600"><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="#">Dedetização Residencial</a></li>
              <li className="hover:text-red-600"><a href="#">Dedetização Comercial</a></li>
              <li className="hover:text-red-600"><a href="#">Desratização</a></li>
              <li className="hover:text-red-600"><a href="#">Sanitização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-600 mb-4">Receba nossas dicas e novidades direto no seu e-mail!</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-xl transition"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} JBS Dedetizadora — Todos os direitos reservados.
        </div>
      </footer>
    </section>
  );
}
