import React, { useState } from 'react';
import { Check, X, Star, ChevronDown } from "lucide-react"
import Toast from '../components/Toast';
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Função para exibir o Toast
  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);

    // Ocultar o Toast após 3 segundos
    setTimeout(() => {
        setShowToast(false);
    }, 3000);
  }

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleShowToast("Inscrição realizada com sucesso!");
  }

  const toggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Quanto tempo dura o efeito da dedetização?",
      answer: "Depende do serviço, mas em média dura de 3 a 6 meses. Fornecemos garantia conforme o tipo do tratamento.",
    },
    {
      question: "Vocês usam produtos tóxicos?",
      answer: "Utilizamos apenas produtos autorizados pela Anvisa, seguros para crianças e pets após o tempo de secagem.",
    },
    {
      question: "Preciso sair de casa para dedetizar?",
      answer: "Depende do serviço. Em alguns casos recomendamos ficar fora por 6 horas, mas há opções sem necessidade de saída.",
    },
    {
      question: "Vocês atendem fins de semana?",
      answer: "Sim! Trabalhamos com agendamento flexível, incluindo finais de semana e feriados.",
    },
  ];

  return (
    <div className="font-sans bg-[#F2F2F2]">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center"
      >
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
      </motion.header>


      {/* Toast Container */}
      {showToast && (
            <div className="absolute fixed my-26 right-4 z-50">
                <Toast type="success" message={toastMessage} />
            </div>
      )}

      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-65 px-6 text-center text-black"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Proteja seu lar com quem <br />
            <span className="text-red-600 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
              entende do assunto.
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 font-medium text-gray-800">
            Com a JBS Dedetizadora, seu ambiente fica livre de pragas<br />
            com rapidez, segurança e total confiança.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300"
            >
              Agendar agora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-red-400 text-red-500 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300"
            >
              Fale com a gente!
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Serviços */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Formas geométricas com parallax */}
      <motion.div
        className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-red-100 rounded-full opacity-40 blur-2xl pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-300 opacity-20 rotate-45 rounded-3xl blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Bolinhas flutuando */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-400 rounded-full opacity-30 blur-md pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute top-[80%] left-[15%] w-8 h-8 bg-red-500 rounded-full opacity-20 blur-xl pointer-events-none"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute top-10 right-[30%] w-4 h-4 bg-red-300 rounded-full opacity-50 blur-sm pointer-events-none"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Linhas curvas SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        fill="none"
        viewBox="0 0 800 600"
      >
        <path
          d="M0,200 C200,300 600,100 800,200"
          stroke="red"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <path
          d="M0,400 C200,500 600,300 800,400"
          stroke="red"
          strokeWidth="2"
          strokeDasharray="10 6"
        />
      </svg>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md"
        >
          Por que nos escolher?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-500 max-w-2xl mx-auto mb-20 text-lg"
        >
          Soluções profissionais, atendimento ágil e garantia de resultados reais. A dedetização do futuro é com a gente.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "⚡",
              title: "Atendimento Imediato",
              desc: "Resolva em poucas horas, com agilidade de verdade.",
            },
            {
              icon: "🔒",
              title: "Segurança em 1º Lugar",
              desc: "Procedimentos certificados e sem risco à saúde.",
            },
            {
              icon: "🔥",
              title: "Alta Eficiência",
              desc: "Acabou o ciclo das pragas na sua casa ou empresa.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * i, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white/60 border border-red-200 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Brilho no topo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400 opacity-50 group-hover:opacity-80 transition-all duration-500 rounded-t-3xl"></div>

              {/* Brilho giratório */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-red-300 opacity-20 rounded-full blur-2xl animate-spin-slow pointer-events-none"></div>

              {/* Badge rotativo */}
              <div className="absolute top-6 right-6 bg-red-100 text-red-500 text-sm font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                NOVO
              </div>

              {/* Ícone */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-red-100 text-red-500 rounded-full flex items-center justify-center text-3xl shadow-inner drop-shadow-md">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 mb-6">{item.desc}</p>

              <button className="mt-auto bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition-all duration-300 cursor-pointer">
                Saiba mais
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      <section className="relative py-36 px-6 bg-white overflow-hidden">
        {/* Efeitos de fundo com parallax */}
        <motion.div
          className="absolute top-[-60px] left-[-40px] w-72 h-72 bg-red-100 rounded-full opacity-30 blur-2xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-40px] w-96 h-96 bg-red-300 opacity-20 rotate-45 rounded-3xl blur-3xl pointer-events-none"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bolinhas decorativas com bounce/ping suave */}
        <motion.div
          className="absolute top-1/3 left-[10%] w-5 h-5 bg-red-400 rounded-full opacity-30 blur-md pointer-events-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[70%] right-[15%] w-7 h-7 bg-red-500 rounded-full opacity-20 blur-xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center gap-32">

          {/* Texto à esquerda com animação por swipe */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Como trabalhamos?
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Da primeira visita até a última praga eliminada, a JBS garante um processo claro, seguro e eficiente para sua tranquilidade.
            </p>
            <ul className="text-gray-700 text-base space-y-3 font-medium">
              <li>✅ Agendamento imediato e gratuito</li>
              <li>✅ Avaliação técnica com garantia</li>
              <li>✅ Procedimentos rápidos e eficazes</li>
              <li>✅ Suporte completo no pós-atendimento</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 my-6 cursor-pointer p-4 text-white w-42 rounded-xl"
            >
              Saiba mais
            </motion.button>
          </motion.div>

          {/* Ilustração à direita com fade-up */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/illustration 1.svg"
              alt="Ilustração explicativa"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Seção de Serviços */}
    <section className="relative py-32 px-6 bg-[#fff] overflow-hidden">
      {/* Decorações de fundo */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-red-100 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 opacity-20 rounded-3xl rotate-45 blur-2xl pointer-events-none"></div>

      {/* Linhas curvas SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        fill="none"
        viewBox="0 0 800 600"
      >
        <path d="M0,300 C200,200 600,400 800,300" stroke="red" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M0,500 C200,400 600,600 800,500" stroke="red" strokeWidth="2" strokeDasharray="8 4" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
          Nossos Serviços
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Atendimento especializado em diversos tipos de dedetização para residências, empresas, indústrias e comércios.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: "🪳", title: "Dedetização de Baratas", desc: "Elimine baratas com segurança e eficácia." },
            { icon: "🐀", title: "Controle de Ratos", desc: "Combate profissional contra roedores em qualquer ambiente." },
            { icon: "🪰", title: "Moscas e Mosquitos", desc: "Reduza drasticamente infestações com tratamento focado." },
            { icon: "🕷️", title: "Aranhas e Escorpiões", desc: "Proteção reforçada para locais com risco elevado." },
            { icon: "🛠️", title: "Desentupimento", desc: "Serviço rápido e sem sujeira para ralos e tubulações." },
            { icon: "🧹", title: "Limpeza Pós-Praga", desc: "Higienização completa após dedetizações pesadas." },
          ].map((servico, i) => (
            <div
              key={i}
              className="relative bg-white/70 border border-red-200 p-8 rounded-3xl shadow-md hover:shadow-xl backdrop-blur-lg transition-all group overflow-hidden"
            >
              {/* Brilho decorativo */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-300 opacity-10 rounded-full blur-2xl animate-spin-slow pointer-events-none"></div>

              {/* Ícone */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-red-100 text-red-500 rounded-full flex items-center justify-center text-3xl shadow-inner drop-shadow-md">
                  {servico.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{servico.title}</h3>
              <p className="text-gray-600">{servico.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tela de Estatísticas */}
      <section className="h-32 bg-slate-800 text-white flex items-center justify-center px-6 relative overflow-hidden">
        {/* Efeito de fundo com linhas curvas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 800 200"
        >
          <path d="M0,100 C200,0 600,200 800,100" stroke="#f87171" strokeWidth="2" strokeDasharray="5 5" />
        </svg>

        <div className="relative z-10 max-w-6xl w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-red-400">+500</p>
            <p className="text-sm">Clientes Atendidos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">99%</p>
            <p className="text-sm">Satisfação Garantida</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">24h</p>
            <p className="text-sm">Atendimento Rápido</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">+14</p>
            <p className="text-sm">Anos de Experiência</p>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute top-[-50px] left-[-30px] w-72 h-72 bg-red-100 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-[-60px] right-[-20px] w-80 h-80 bg-red-300 opacity-20 rotate-45 rounded-3xl blur-3xl pointer-events-none"></div>

        {/* Linhas SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 800 600"
        >
          <path
            d="M0,100 C200,200 600,0 800,100"
            stroke="red"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M0,300 C200,400 600,200 800,300"
            stroke="red"
            strokeWidth="2"
            strokeDasharray="10 8"
          />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Veja como transformamos ambientes e superamos expectativas!
          </p>

          {/* Cards de Depoimentos */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                nome: "Ana Silva",
                texto: "Serviço impecável! Chegaram rápido e resolveram o problema no mesmo dia.",
                foto: "https://randomuser.me/api/portraits/women/12.jpg",
              },
              {
                nome: "Carlos Lima",
                texto: "Equipe educada e profissional. Nunca mais tive problemas com insetos!",
                foto: "https://randomuser.me/api/portraits/men/35.jpg",
              },
              {
                nome: "Fernanda Rocha",
                texto: "Atendimento excelente e o preço justo. Recomendo de olhos fechados.",
                foto: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 border border-red-200 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.foto}
                    alt={`Foto de ${item.nome}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-400"
                  />
                  <p className="font-bold text-red-500">{item.nome}</p>
                </div>
                <p className="text-gray-700 italic">"{item.texto}"</p>
              </div>
            ))}
          </div>

          {/* Formulário de Avaliação */}
          <form className="bg-white/80 border border-red-200 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Deixe sua avaliação!</h3>
            <p className="text-gray-600 mb-3">Queremos saber o que você achou de nossos serviços, então sinta-se à vontade para se expressar aqui!</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <textarea
              placeholder="Seu comentário"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Enviar Avaliação
            </button>
          </form>
        </div>
      </section>

      {/* Seção de Diferenciais com comparação */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute top-[-40px] left-[-30px] w-80 h-80 bg-red-100 opacity-30 blur-2xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-60px] right-[-40px] w-96 h-96 bg-red-300 opacity-20 rotate-12 rounded-3xl blur-3xl pointer-events-none"></div>

        {/* Linhas SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 800 600"
        >
          <path
            d="M0,150 C250,250 550,50 800,150"
            stroke="red"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          {/* Texto à esquerda */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
              Quando a JBS entra em ação, o cenário muda.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com atendimento imediato, segurança garantida e eficiência comprovada, nós resolvemos o problema de verdade. Veja a diferença de ambientes antes e depois da nossa atuação.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li>✅ Atendimento imediato</li>
              <li>✅ Técnicas seguras e certificadas</li>
              <li>✅ Resultados duradouros</li>
              <li>✅ Equipe qualificada e simpática</li>
            </ul>
          </div>

          {/* Comparação à direita */}
          <div className="relative w-full h-80 md:h-96 bg-gray-200 rounded-3xl shadow-xl overflow-hidden border-4 border-gray-300">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('https://s2-g1.glbimg.com/mQxsQAWVVkqkbpMFhJZcpddSu04=/0x0:2560x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/H/9/zQm9BrSdqEjAy7EaiGAw/colagem-sem-titulo.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black/30 flex items-end justify-center text-white p-4 font-bold text-lg">
                Antes da JBS
              </div>
            </div>
            <div className="absolute top-0 left-1/2 w-1/2 h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJtXnYLMaMBjmSEf_JYMqXDs9RGPDcGO5ww&s')] bg-cover bg-center border-l border-white">
              <div className="absolute inset-0 bg-black/20 flex items-end justify-center text-white p-4 font-bold text-lg">
                Com JBS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Onde estamos localizados</h2>
          <p className="text-gray-300 text-lg">
            Estamos na <strong>R. Pinhal, 192 - Jardim Sabiá, Cotia - SP</strong>, em frente a um mercado vermelho.
            Te esperamos para um atendimento rápido e eficiente!
          </p>
          <div className="mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Pinhal,+192+-+Jardim+Sabiá,+Cotia+-+SP,+06716-575"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow"
            >
              Ver rotas no Google Maps
            </a>
          </div>
        </div>

        {/* Mapa à direita */}
        <div className="md:w-1/2 w-full h-80 rounded-xl overflow-hidden shadow-lg border-2 border-red-500">
          <iframe
            title="Localização JBS"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=R.+Pinhal,+192+-+Jardim+Sabiá,+Cotia+-+SP,+06716-575&output=embed"
          ></iframe>
        </div>
      </section>

      <section className="w-full py-20 bg-slate-50 text-slate-900" id="planos">


        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-lg text-slate-600 mb-12">Soluções para cada tipo de necessidade — da sua casa à sua empresa!</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between border border-slate-200 hover:scale-105 transition">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Plano Básico</h3>
                <p className="text-slate-600 mb-4">Ideal para residências pequenas com foco em prevenção.</p>
                <ul className="text-left text-slate-700 mb-6 space-y-2">
                  <li>✔️ Atendimento em até 48h</li>
                  <li>✔️ Dedetização contra insetos</li>
                  <li>✔️ Garantia de 3 meses</li>
                </ul>
              </div>
              <div>
                <p className="text-3xl font-bold mb-4 text-red-500">R$ 199</p>
                <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
                  Contratar
                </button>
              </div>
            </div>

            {/* Plano Recomendado */}
            <div className="bg-red-500 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border-4 border-red-700 hover:scale-105 transition relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-md">MAIS ESCOLHIDO</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Plano Completo</h3>
                <p className="text-white/90 mb-4">Para casas maiores ou locais com histórico de infestação.</p>
                <ul className="text-left mb-6 space-y-2">
                  <li>✔️ Atendimento em até 24h</li>
                  <li>✔️ Dedetização completa</li>
                  <li>✔️ Garantia de 6 meses</li>
                  <li>✔️ Reforço grátis em até 30 dias</li>
                </ul>
              </div>
              <div>
                <p className="text-3xl font-bold mb-4">R$ 299</p>
                <button className="bg-white text-red-600 font-semibold py-2 px-6 rounded-full hover:bg-red-100 transition">
                  Contratar
                </button>
              </div>
            </div>

            {/* Plano Empresarial */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between border border-slate-200 hover:scale-105 transition">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">Plano Empresarial</h3>
                <p className="text-slate-600 mb-4">Ideal para comércios, indústrias e escritórios.</p>
                <ul className="text-left text-slate-700 mb-6 space-y-2">
                  <li>✔️ Atendimento personalizado</li>
                  <li>✔️ Visita técnica gratuita</li>
                  <li>✔️ Garantia de 1 ano</li>
                  <li>✔️ Relatório técnico mensal</li>
                </ul>
              </div>
              <div>
                <p className="text-3xl font-bold mb-4 text-red-500">Sob consulta</p>
                <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full py-20" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-4 shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-slate-700">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === i && (
                <div className="mt-3 text-slate-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-slate-50 py-20" id="sobre">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Quem Somos Nós
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Somos uma empresa especializada em controle de pragas urbanas, atendendo com excelência Cotia e região há mais de 10 anos.
            Trabalhamos com soluções eficazes, seguras e sustentáveis para proteger lares, comércios e indústrias contra insetos, roedores e outros invasores.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Nosso time é formado por profissionais capacitados, utilizamos produtos regulamentados pela Anvisa e oferecemos garantia nos serviços.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Com a <strong className="text-primary font-semibold">JBS Dedetizadora</strong>, sua tranquilidade é prioridade!
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://media.licdn.com/dms/image/v2/C562DAQGfBlUy5wEA2g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1602364086890?e=1744977600&v=beta&t=KPggtoYk18VodSj6_EXQgmoxbSzoiwK60wgpRYfRFyY"
              alt="Equipe da JBS Dedetizadora"
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Dicas e Informações Úteis</h2>
          <p className="text-slate-600 mb-12">Tudo o que você precisa saber sobre o controle de pragas, do nosso jeito 👇</p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=252,fit=crop/dJoB1Qp4zjfVbBOw/whatsapp-image-2023-12-28-at-12.32.08-dJoBj7xN6LTWXlZz.jpeg"
                alt="Atendimento"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Como funciona o nosso atendimento?
                </h3>
                <p className="text-slate-600 mb-4">
                  Agendamos a visita, avaliamos sua necessidade e realizamos o serviço com segurança e eficácia. Tudo com garantia!
                </p>
                <button className="text-blue-600 hover:underline font-medium">Saiba mais →</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS45iXwfs16lmExK6WxVGEgj_zDFmriHEGA&s"
                alt="Formigas e Cupins"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Como se livrar de formigas e cupins?
                </h3>
                <p className="text-slate-600 mb-4">
                  Damos dicas práticas e aplicamos técnicas específicas para eliminar esses invasores sem prejudicar sua família.
                </p>
                <button className="text-blue-600 hover:underline font-medium">Ver dicas →</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsu61vvh9_qmKQIKpfiTCEzC0jTjHWjot5Q&s"
                alt="Eliminar pragas"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Como eliminar pragas facilmente?
                </h3>
                <p className="text-slate-600 mb-4">
                  Usamos métodos profissionais e produtos aprovados pela Anvisa para garantir a eliminação rápida e segura das pragas.
                </p>
                <button className="text-blue-600 hover:underline font-medium">Ver como funciona →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-800 py-20 relative overflow-hidden">
        {/* Enfeite de fundo */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossa Jornada</h2>

          <div className="relative border-l-4 border-red-400 pl-6 space-y-14">

            {/* Evento */}
            {[
              {
                ano: "2010",
                titulo: "Nascimento da JBS",
                texto: "Começamos com atendimentos locais em Cotia, SP, sempre focando em confiança, segurança e resultados."
              },
              {
                ano: "2015",
                titulo: "Consolidação Regional",
                texto: "Nos tornamos referência na região com dezenas de parceiros e centenas de clientes satisfeitos."
              },
              {
                ano: "2020",
                titulo: "Tecnologias Sustentáveis",
                texto: "Adotamos soluções ecológicas e aumentamos nosso leque de serviços com foco em eficiência."
              },
              {
                ano: "2024",
                titulo: "Plataforma Digital",
                texto: "Lançamos um portal moderno para facilitar o atendimento, agendamento e relacionamento com o cliente."
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-5 top-1 w-8 h-8 bg-red-400 rounded-full border-4 border-white"></div>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
                  <h3 className="text-xl font-bold text-red-600">{item.ano} - {item.titulo}</h3>
                  <p className="text-slate-600 mt-2">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-45 px-6">
      <div className="absolute top-[-60px] left-[-40px] w-80 h-80 bg-red-100 rounded-full opacity-40 blur-2xl animate-pulse pointer-events-none"></div>

        {/* CONTEÚDO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10 relative">
          {/* TEXTO */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Por que escolher a JBS Dedetizadora?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Com mais de 14 anos de experiência no mercado, atuamos com responsabilidade, agilidade e foco total em eliminar pragas urbanas com eficiência.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>✔️ Técnicos especializados e licenciados</li>
              <li>✔️ Atendimento rápido e personalizado</li>
              <li>✔️ Produtos seguros e autorizados pela ANVISA</li>
            </ul>
          </div>

          {/* ILUSTRAÇÃO */}
          <div className="flex justify-center">
            <img
              src="/illustration 2.svg"
              alt="Ilustração"
              className="w-[400px] h-auto rounded-xl shadow-none"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Entre em Contato</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-slate-600 font-medium mb-1">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-600 font-medium mb-1">E-mail</label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-600 font-medium mb-1">Telefone</label>
              <input
                type="tel"
                placeholder="(11) 91234-5678"
                className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-600 font-medium mb-1">Assunto</label>
              <input
                type="text"
                placeholder="Ex: Dedetização residencial"
                className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-3 rounded-2xl transition shadow-lg"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
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
              <a href="https://www.facebook.com/jbsdedetizadora/?locale=pt_BR"><i className="fab fa-instagram hover:text-red-500 transition"></i></a>
              <a href="#"><i className="fab fa-facebook hover:text-red-500 transition"></i></a>
              <a href="#"><i className="fab fa-whatsapp hover:text-red-500 transition"></i></a>
            </div>
          </div>

          {/* LINKS - EMPRESA */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="/sobre-nos">Quem Somos</a></li>
              <li className="hover:text-red-600"><a href="/historia">História</a></li>
              <li className="hover:text-red-600"><a href="/equipe">Equipe</a></li>
              <li className="hover:text-red-600"><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* LINKS - SERVIÇOS */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-red-600"><a href="/servicos">Dedetização Residencial</a></li>
              <li className="hover:text-red-600"><a href="/servicos">Dedetização Comercial</a></li>
              <li className="hover:text-red-600"><a href="/servicos">Desratização</a></li>
              <li className="hover:text-red-600"><a href="/servicos">Sanitização</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-600 mb-4">Receba nossas dicas e novidades direto no seu e-mail!</p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
  );
}
