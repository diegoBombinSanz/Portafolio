export default function About() {

  return (
        <section id="sobre-mi" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 relative z-10">
                    Tecnología con un toque{" "}
                    <span className="text-blue-600">humano</span>.
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Hola, soy un apasionado de la informática con más de 4 años
                    de experiencia "trasteando" con hardware y software. Decidí
                    trabajar de forma independiente para ofrecer un trato más
                    directo y honesto.
                  </p>
                  <p>
                    Mi filosofía es sencilla: si tiene arreglo, lo arreglamos.
                    Si necesitas una herramienta, la instalamos correctamente.
                    Sin jerga técnica innecesaria y con total transparencia en
                    los precios.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold text-black">100%</h4>
                      <p className="text-sm">Garantía de satisfacción</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=60"
                    alt="Workplace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px]">
                  <p className="text-sm font-bold text-black italic">
                    "Mi prioridad es que tu equipo vuelva a ser como el primer
                    día."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}