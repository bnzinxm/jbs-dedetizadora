import React from 'react'

export default function PricingPage() {
  return (
    <section className="bg-white text-slate-800 py-24 px-6 md:px-12">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/jbs.png" alt="JBS Dedetizadora" className="h-14 md:h-16 cursor-pointer transition-transform hover:scale-105 duration-300" />
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-700">
          <a href="/" className="hover:text-red-600 transition-colors">Início</a>
          <a href="/sobre-nos" className="hover:text-red-600 transition-colors">Sobre Nós</a>
          <a href="/servicos" className="hover:text-red-600 transition-colors">Serviços</a>
          <a href="/precos" className="hover:text-red-600 transition-colors">Preços</a>
        </nav>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md transition-all duration-300">
          Solicitar um serviço agora!
        </button>
      </header>

      {/* Hero */}
      <div className="bg-red-50 w-full min-h-[28rem] border border-red-300 rounded-lg rounded-tr-[3rem] mt-10 p-8 shadow-inner flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Conteúdo à esquerda */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
            Você quer uma casa segura?
          </h2>
          <p className="text-slate-700 text-lg md:text-xl mb-6 max-w-xl">
            Venha com a <span className="font-semibold text-red-600">JBS Dedetizadora</span> e proteja seu lar com quem entende do assunto.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
            Ver nossos preços
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1 flex justify-center">
          <img
            src="/casa.png"
            alt="Casa Segura"
            className="w-full max-w-[550px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Seção Explicativa 1 */}
      <div className="mt-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img src="/illustration 3.svg" alt="Controle de Pragas" className="w-full max-w-md mx-auto" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Controle completo de pragas urbanas</h3>
          <p className="text-slate-700 text-lg mb-4">
            Trabalhamos com métodos eficazes e produtos aprovados para proteger sua casa de insetos, roedores e outras ameaças. Segurança e eficiência garantidas!
          </p>
          <ul className="list-disc list-inside text-slate-600">
            <li>Dedetização contra baratas, ratos, cupins, etc.</li>
            <li>Serviços 100% regulamentados</li>
            <li>Atendimento rápido e com garantia</li>
          </ul>
        </div>
      </div>

      {/* Seção Explicativa 2 */}
      <div className="mt-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Equipe especializada e atendimento humanizado</h3>
          <p className="text-slate-700 text-lg mb-4">
            Nossa equipe é formada por profissionais altamente treinados, sempre prontos para resolver seu problema com atenção e respeito.
          </p>
          <ul className="list-disc list-inside text-slate-600">
            <li>Profissionais com equipamentos modernos</li>
            <li>Atendimento de emergência disponível</li>
            <li>Orçamentos justos e personalizados</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="/illustration 4.svg" alt="Equipe Especializada" className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Cards de Preços */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Nossos Planos</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Escolha o plano ideal para sua casa, empresa ou condomínio. Todos com garantia e suporte especializado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border border-red-500">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Plano Básico</h3>
            <p className="text-slate-600 mb-4">Ideal para pequenos apartamentos.</p>
            <p className="text-3xl font-bold text-slate-800 mb-4">R$149</p>
            <ul className="text-slate-600 mb-6 text-sm space-y-1">
              <li>✔ 1 serviço de dedetização</li>
              <li>✔ Garantia de 3 meses</li>
              <li>✔ Atendimento agendado</li>
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full font-semibold transition">Escolher</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-t-4 border-red-600">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Plano Ideal</h3>
            <p className="text-slate-600 mb-4">Mais vendido. Para casas e comércios.</p>
            <p className="text-3xl font-bold text-slate-800 mb-4">R$249</p>
            <ul className="text-slate-600 mb-6 text-sm space-y-1">
              <li>✔ 2 serviços por ano</li>
              <li>✔ Garantia de 6 meses</li>
              <li>✔ Atendimento prioritário</li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full font-semibold transition">Escolher</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border shadow-lg rounded-2xl p-6 border-t-4 border-red-400">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Plano Premium</h3>
            <p className="text-slate-600 mb-4">Perfeito para empresas e condomínios.</p>
            <p className="text-3xl font-bold text-slate-800 mb-4">R$399</p>
            <ul className="text-slate-600 mb-6 text-sm space-y-1">
              <li>✔ 4 visitas por ano</li>
              <li>✔ Garantia estendida</li>
              <li>✔ Suporte dedicado</li>
            </ul>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full font-semibold transition">Escolher</button>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="relative bg-white text-slate-800 py-24 px-6 overflow-hidden">
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
                className="px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-0 focus:ring-slate-700"
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
  )
}
