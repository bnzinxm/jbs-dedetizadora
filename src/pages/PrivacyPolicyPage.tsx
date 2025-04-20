// pages/PoliticaPrivacidade.jsx
export default function PoliticaPrivacidade() {
     return (
       <section className="bg-white text-slate-800 py-36 px-6 md:px-12">
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

         <div className="max-w-4xl mx-auto space-y-10 relative">
           <div className="absolute top-0 left-0 w-60 h-60 bg-red-100 rounded-full opacity-20 blur-3xl -z-10" />
           <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-200 rounded-full opacity-20 blur-3xl -z-10" />

           <h1 className="text-4xl font-bold text-center text-red-700">
             Política de Privacidade & Termos de Uso
           </h1>

           <div className="space-y-6 text-justify text-lg leading-relaxed">
             <p><strong>Termo de consentimento de uso de dado (LGPD / Lei Geral de Proteção de Dados Pessoais). Lei nº 13.709/2018</strong></p>

             <p>
               A <strong>JBS DEDETIZADORA</strong> ("Nós"/"este Site") coleta e mantém certas informações (incluindo endereços de e-mail, nomes, endereço postal, números de telefone, número de documentos CPF/RG ou CNPJ quando for solicitado prestação de serviço em nome de pessoa jurídica). Obs: Serviço para empresa só deve ser solicitado por um responsável legal que tenha autorização do proprietário.
             </p>

             <p>
               Usamos seus dados ou da sua empresa para emissão de documentos como ficha de vistoria, proposta financeira/orçamento, ordem de serviço, certificado de garantia, faturamento, e liberação de acesso à área do cliente em nosso sistema/site na página “já sou cliente”.
             </p>

             <p>
               Dedicamo-nos a proteger as informações pessoais e envidaremos esforços razoáveis para lidar adequadamente com as informações coletadas. Não vendemos ou alugamos nenhuma de suas informações pessoais a terceiros. No entanto, pode haver momentos em que podemos ser obrigados a divulgar suas informações pessoais sem o seu consentimento expresso; por exemplo, quando exigido por lei.
             </p>

             <p>
               Reservamo-nos o direito de fazer alterações nesta Política a qualquer momento, publicando os termos alterados neste site. Se fizermos alterações materiais, elas entrarão em vigor automaticamente 30 dias após serem publicadas. Ao usar este site, você concorda com os termos aqui contidos. Se não concorda, por favor, não o utilize.
             </p>

             <p>
               Se você tem menos de 18 anos, só pode usar este site sob supervisão de seus pais ou responsáveis e com a permissão expressa da JBS DEDETIZADORA. Pedimos que crianças não enviem nenhuma informação pessoal. Em caso de dúvidas, entre em contato conosco.
             </p>

             <h2 className="text-2xl font-semibold text-red-600 mt-10">Termos de Uso</h2>

             <p><strong>1. Definições</strong> — "Você" refere-se ao usuário da área do cliente, qualquer parte autorizada a agir em seu nome, empresa, parceiro ou parte representada.</p>

             <p><strong>2. Representações</strong> — Você declara ter pelo menos 18 anos e fornecer informações corretas. Garante total autoridade e boa fé em suas ações.</p>

             <p><strong>3. Foro e Escolha da Lei</strong> — Este contrato é regido pelas leis do Estado de São Paulo. Disputas serão resolvidas em tribunal estadual ou municipal. O uso indevido implicará em reembolso de taxas legais à JBS DEDETIZADORA.</p>

             <p><strong>4. Conteúdo da Área do Cliente</strong> — A JBS DEDETIZADORA se isenta de responsabilidade por erros e omissões. Documentos são de responsabilidade do usuário.</p>

             <p><strong>5. Autorização de Imagem</strong> — Podemos gravar vídeos/fotos durante os serviços para medidas preventivas. Nada será divulgado ou gravado sem consentimento.</p>

             <p><strong>6. Comunicação</strong> — Toda comunicação com a área do cliente é confidencial. Não copie ou compartilhe sem permissão por escrito.</p>

             <p><strong>7. Limitação de Responsabilidade</strong> — Seus dados serão mantidos por tempo indeterminado. Para exclusão, entre em contato.</p>

             <p><strong>8. Força Maior</strong> — Não nos responsabilizamos por falhas causadas por eventos fora do nosso controle (desastres, guerras, greves, etc.).</p>

             <p><strong>9. Separabilidade</strong> — Se qualquer cláusula for inválida, o restante do contrato permanece em vigor. A JBS DEDETIZADORA substituirá por uma válida, próxima do sentido original.</p>

             <p className="text-sm text-slate-500">Revisado: 20/07/2022</p>
             <p className="text-sm text-slate-500">Fonte: <a href="https://www.jbsdedetizadora.com.br" className="underline text-red-600" target="_blank" rel="noopener noreferrer">www.jbsdedetizadora.com.br</a></p>
           </div>
         </div>

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
       </section>
     );
   }
