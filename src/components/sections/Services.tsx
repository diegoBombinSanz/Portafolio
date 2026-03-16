import {
  Cpu,
  Settings,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Reparación de Ordenadores",
      description:
        "Soluciono problemas de hardware y software. Desde cambios de componentes hasta limpieza física y optimización de sistema.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      features: [
        "Ampliación de RAM/SSD",
        "Limpieza de virus",
        "Problemas de arranque",
      ],
    },
    {
      title: "Instalación de Aplicaciones",
      description:
        "Instalación y configuración de software profesional, sistemas operativos y herramientas de productividad con las mejores prácticas.",
      icon: <Settings className="w-8 h-8 text-indigo-600" />,
      features: [
        "Sistemas Operativos",
        "Software de diseño/oficina",
        "Configuración de redes",
      ],
    },
    {
      title: "Mantenimiento Preventivo",
      description:
        "No esperes a que falle. Revisión completa para asegurar que tu equipo rinda al máximo y dure mucho más tiempo.",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      features: [
        "Optimización de registro",
        "Actualización de drivers",
        "Gestión térmica",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Servicios Profesionales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrezco soluciones integrales para que tu tecnología trabaje para
            ti, no al revés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
