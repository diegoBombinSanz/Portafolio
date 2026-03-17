"use client";

import { Send, Search, FileText, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Send,
      title: "Envía tu solicitud",
      description:
        "Completa el formulario explicando el problema que tienes con tu equipo.",
      iconColor: "#3b82f6",
      lightColor: "bg-blue-50",
    },
    {
      number: "02",
      icon: Search,
      title: "Analizo el problema",
      description:
        "Reviso la información enviada para entender el fallo y preparar una solución.",
      iconColor: "#a855f7",
      lightColor: "bg-purple-50",
    },
    {
      number: "03",
      icon: FileText,
      title: "Recibes una propuesta",
      description:
        "Te envío una posible solución o presupuesto según el problema detectado.",
      iconColor: "#f97316",
      lightColor: "bg-orange-50",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Solucionamos el problema",
      description:
        "Aplicamos la solución para que tu ordenador vuelva a funcionar correctamente.",
      iconColor: "#22c55e",
      lightColor: "bg-green-50",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Cómo funciona el servicio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente para solucionar tus problemas
            técnicos de forma rápida y profesional.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group hover:scale-105 transition-transform duration-300"
              >
                {/* Connector Line (hidden on mobile, shown on desktop between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gray-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: step.iconColor }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para solucionar tu problema técnico?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
          >
            Solicitar servicio ahora
          </a>
        </div>
      </div>
    </section>
  );
}
