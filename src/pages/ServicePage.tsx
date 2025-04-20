import React from 'react'
import {
     Bug,
     SprayCan,
     ShieldCheck,
     Biohazard,
     MousePointer,
     ArrowRight,
     CheckCircle,
   } from "lucide-react";

export default function ServicePage() {
  return (
    <div className="bg-white text-slate-800">
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

       {/* HERO */}
      <section className="bg-red-50 py-64 border-b border-red-200 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-200 opacity-20 rounded-full blur-3xl top-0 -left-20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-extrabold text-red-600 mb-4">Soluções Rápidas e Eficientes</h1>
            <p className="text-slate-600 text-lg">
              A JBS Dedetizadora oferece serviços de alto impacto no combate a pragas urbanas. Com mais de 14 anos de experiência, protegemos lares e empresas com eficiência, segurança e agilidade.
            </p>

            <button className="p-4 bg-red-500 my-5 text-white w-36 rounded-xl hover:bg-red-600 cursor-pointer transition-colors duration-300">Saiba mais</button>
          </div>
          <img
            src="/illustration 1.svg"
            alt="Ilustração"
            className="w-full max-w-md mx-auto lg:mx-0 drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-red-600">Nossos Serviços</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Bug, title: "Dedetização Geral", desc: "Eliminação de baratas, formigas, aranhas e outros insetos." },
              { icon: SprayCan, title: "Descupinização", desc: "Remoção completa de cupins com produtos ecológicos." },
              { icon: ShieldCheck, title: "Controle de Roedores", desc: "Eliminação de ratos e camundongos com segurança." },
              { icon: Biohazard, title: "Sanitização", desc: "Higienização contra vírus, fungos e bactérias." },
              { icon: MousePointer, title: "Controle de Pombos", desc: "Métodos humanizados para afastar aves urbanas." },
              { icon: SprayCan, title: "Controle de Mosquitos", desc: "Combate ao Aedes aegypti e outras espécies." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all"
              >
                <Icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
                <p className="text-slate-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Como funciona o atendimento?</h2>
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              "Solicitação de Orçamento",
              "Agendamento Imediato",
              "Execução Profissional",
              "Garantia de Satisfação",
            ].map((step, i) => (
              <div key={i}>
                <div className="w-16 h-16 mx-auto bg-red-100 border-4 border-red-400 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">{i + 1}</div>
                <p className="mt-4 text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">Com ou Sem JBS?</h2>
            <p className="text-slate-600 text-lg">
              Veja a diferença de contar com uma equipe profissional e treinada, com produtos seguros e duradouros.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" />
                Atendimento 24h com agendamento fácil
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" />
                Produtos não-tóxicos e com ação prolongada
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-red-600" />
                Técnicos uniformizados e certificados
              </li>
            </ul>
          </div>
          <img src="/illustration 2.svg" alt="Comparação" className="rounded-xl" />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-red-600 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute -top-10 right-10 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Quer se ver livre das pragas?</h2>
          <p className="text-lg mb-6">Preencha nosso formulário e receba atendimento personalizado agora mesmo.</p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
          >
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="relative bg-white text-slate-800 py-20 px-6 overflow-hidden">
        {/* ENFEITES DE FUNDO */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-radial from-red-200/30 to-transparent rounded-full blur-2xl opacity-60 -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-red-100/50 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q200,200 400,100 T800,100" fill="none" stroke="#94a3b8" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LOGO + DESCRIÇÃO */}
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

          {/* LINKS - EMPRESA */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="#">Quem Somos</a></li>
              <li className="hover:text-red-600"><a href="#">História</a></li>
              <li className="hover:text-red-600"><a href="#">Equipe</a></li>
              <li className="hover:text-red-600"><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* LINKS - SERVIÇOS */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="#">Dedetização Residencial</a></li>
              <li className="hover:text-red-600"><a href="#">Dedetização Comercial</a></li>
              <li className="hover:text-red-600"><a href="#">Desratização</a></li>
              <li className="hover:text-red-600"><a href="#">Sanitização</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
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
    </div>
  )
}
