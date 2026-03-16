export default function Hero() {
  return (
    <section className="min-h-screen bg-white relative flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-700 text-sm font-medium">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-8 tracking-tight">
          Reparación Experta y Soluciones{" "}
          <span className="text-blue-600">Tecnológicas</span> a tu medida.
        </h1>

        {/* Sub-description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Soy experto en hardware y software. Desde revivir ordenadores lentos
          hasta instalaciones de aplicaciones críticas. Servicio freelance
          rápido, profesional y transparente.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Cuéntame tu problema
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto bg-white text-black border-2 border-gray-100 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all active:scale-95"
          >
            Ver servicios
          </a>
        </div>

        {/* Trust signal */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 grayscale opacity-50">
          <span className="font-bold text-xl tracking-tighter">HARDWARE</span>
          <span className="font-bold text-xl tracking-tighter">SOFTWARE</span>
          <span className="font-bold text-xl tracking-tighter">SOPORTE</span>
          <span className="font-bold text-xl tracking-tighter">
            OPTIMIZACIÓN
          </span>
        </div>
      </div>
    </section>
  );
}
