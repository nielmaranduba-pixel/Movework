export default function MoveWorkLandingPage() {
  return (
    <div className="min-h-screen bg-[#050B18] text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full text-yellow-400 text-sm mb-6">
                Transporte Corporativo Inteligente
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                Move<span className="text-yellow-400">Work</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                A evolução do transporte empresarial. Reduza custos, aumente a pontualidade e ofereça mais conforto aos seus colaboradores.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all">
                  Solicitar Demonstração
                </button>

                <button className="border border-gray-600 hover:border-yellow-400 px-8 py-4 rounded-2xl font-semibold transition-all">
                  Conhecer Plataforma
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-3xl font-black text-yellow-400">24h</h3>
                  <p className="text-gray-400 text-sm mt-2">Monitoramento</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-3xl font-black text-yellow-400">-40%</h3>
                  <p className="text-gray-400 text-sm mt-2">Redução de custos</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-3xl font-black text-yellow-400">100%</h3>
                  <p className="text-gray-400 text-sm mt-2">Rotas inteligentes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#101C35] to-[#09111F] border border-white/10 rounded-[32px] p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop"
                  alt="MoveWork"
                  className="rounded-3xl w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black px-6 py-4 rounded-2xl shadow-2xl font-bold">
                Mobilidade Empresarial Inteligente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Por que escolher a <span className="text-yellow-400">MoveWork</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Uma solução moderna para empresas que desejam reduzir custos operacionais e melhorar a experiência dos funcionários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Redução de Custos',
              text: 'Substitua fretados caros por rotas inteligentes com veículos menores.'
            },
            {
              title: 'Pontualidade',
              text: 'Monitoramento em tempo real com rotas otimizadas.'
            },
            {
              title: 'Segurança',
              text: 'Motoristas verificados e rastreamento completo.'
            },
            {
              title: 'Painel Administrativo',
              text: 'Controle total de rotas, colaboradores e viagens.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-400/40 transition-all"
            >
              <div className="w-14 h-14 bg-yellow-400 rounded-2xl mb-6" />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[#09111F] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Como Funciona</h2>
            <p className="text-gray-400 text-lg">
              Simples, rápido e inteligente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Empresa cadastra funcionários',
                text: 'Configure rotas, horários e colaboradores rapidamente.'
              },
              {
                step: '02',
                title: 'Motoristas recebem as rotas',
                text: 'Sistema inteligente distribui as viagens automaticamente.'
              },
              {
                step: '03',
                title: 'Funcionários acompanham tudo',
                text: 'Aplicativo mostra localização em tempo real.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden"
              >
                <div className="text-7xl font-black text-yellow-400/20 absolute top-4 right-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed relative z-10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Planos Empresariais</h2>
          <p className="text-gray-400 text-lg">
            Escolha o plano ideal para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Bronze',
              price: 'R$ 1.990',
              items: ['Até 20 funcionários', 'Suporte básico', 'Rotas simples']
            },
            {
              title: 'Prata',
              price: 'R$ 4.990',
              featured: true,
              items: ['Até 80 funcionários', 'Painel completo', 'Monitoramento em tempo real']
            },
            {
              title: 'Ouro',
              price: 'R$ 9.990',
              items: ['Funcionários ilimitados', 'Gestor exclusivo', 'Relatórios avançados']
            }
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 border ${
                plan.featured
                  ? 'bg-yellow-400 text-black border-yellow-400 scale-105'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-3xl font-black mb-4">{plan.title}</h3>

              <div className="text-5xl font-black mb-8">
                {plan.price}
                <span className="text-lg font-medium">/mês</span>
              </div>

              <div className="space-y-4 mb-10">
                {plan.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-current" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-[40px] p-16 text-black text-center shadow-2xl">
          <h2 className="text-5xl font-black mb-6">
            Transforme o transporte da sua empresa
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-10">
            Economize com inteligência, acompanhe viagens em tempo real e ofereça mais conforto para seus colaboradores.
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-900 transition-all">
            Solicitar Demonstração Agora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black">
              Move<span className="text-yellow-400">Work</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Transporte corporativo inteligente.
            </p>
          </div>

          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-all">Início</a>
            <a href="#" className="hover:text-yellow-400 transition-all">Planos</a>
            <a href="#" className="hover:text-yellow-400 transition-all">Contato</a>
            <a href="#" className="hover:text-yellow-400 transition-all">Empresas</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
