"use client";

import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <a
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Política de Privacidad
          </h1>
          <p className="text-gray-600 mt-2">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          {/* Intro */}
          <section>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Tu privacidad es importante
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Esta política de privacidad describe cómo recogemos,
                    utilizamos y protegemos tu información personal cuando
                    utilizas nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsable */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-black" />
              1. Responsable del tratamiento
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Responsable:</span> Diego Bombín Sanz
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span>diesanz2003@gmail.com
              </p>
            </div>
          </section>

          {/* Datos recogidos */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-black" />
              2. Datos que recogemos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Recogemos y tratamos los siguientes datos personales cuando
              utilizas nuestro formulario de contacto o servicios:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-semibold text-black">
                    Datos de identificación
                  </p>
                  <p className="text-gray-600 text-sm">
                    Nombre completo, email, teléfono
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-semibold text-black">Datos técnicos</p>
                  <p className="text-gray-600 text-sm">
                    Descripción del problema, tipo de servicio solicitado,
                    información del dispositivo (marca, modelo, sistema
                    operativo)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-semibold text-black">
                    Datos de navegación
                  </p>
                  <p className="text-gray-600 text-sm">
                    Dirección IP, cookies, tipo de navegador, páginas visitadas
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <p className="font-semibold text-black">
                    Archivos multimedia
                  </p>
                  <p className="text-gray-600 text-sm">
                    Fotografías del problema (cuando las adjuntas
                    voluntariamente)
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Finalidad */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Utilizamos tus datos personales para:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Gestionar tu solicitud de servicio técnico</li>
              <li>Analizar y diagnosticar el problema descrito</li>
              <li>Enviarte presupuestos y propuestas de solución</li>
              <li>Mantener comunicación contigo sobre tu solicitud</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          {/* Base legal */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              4. Base legal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El tratamiento de tus datos se basa en:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3 ml-4">
              <li>
                <strong>Consentimiento:</strong> Al enviar el formulario de
                contacto, aceptas el tratamiento de tus datos
              </li>
              <li>
                <strong>Ejecución de un contrato:</strong> Para prestarte el
                servicio técnico solicitado
              </li>
              <li>
                <strong>Interés legítimo:</strong> Para mejorar nuestros
                servicios
              </li>
            </ul>
          </section>

          {/* Conservación */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Conservación de datos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tus datos personales serán conservados mientras sea necesario para
              la finalidad para la que fueron recogidos. Una vez finalizada la
              prestación del servicio, conservaremos tus datos bloqueados
              durante el plazo de prescripción de las acciones legales que
              pudieran derivarse.
            </p>
          </section>

          {/* Derechos */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-black" />
              6. Tus derechos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puedes ejercer los siguientes derechos sobre tus datos personales:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Acceso</p>
                <p className="text-sm text-gray-600">
                  Conocer qué datos tenemos sobre ti
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Rectificación</p>
                <p className="text-sm text-gray-600">
                  Corregir datos inexactos
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Supresión</p>
                <p className="text-sm text-gray-600">Eliminar tus datos</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Oposición</p>
                <p className="text-sm text-gray-600">Oponerte al tratamiento</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Limitación</p>
                <p className="text-sm text-gray-600">Limitar el tratamiento</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-black">✓ Portabilidad</p>
                <p className="text-sm text-gray-600">Recibir tus datos</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Para ejercer estos derechos, puedes contactarnos en:{" "}
              <strong>
                diesanz2003@gmail.com
              </strong>
            </p>
          </section>

          {/* Seguridad */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Seguridad</h2>
            <p className="text-gray-700 leading-relaxed">
              Hemos adoptado medidas técnicas y organizativas apropiadas para
              proteger tus datos personales contra la destrucción accidental o
              ilícita, pérdida accidental, alteración, difusión o acceso no
              autorizado.
            </p>
          </section>

          {/* RGPD */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              8. Normativa aplicable
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidad se rige por el Reglamento (UE)
              2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de
              2016 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de
              Protección de Datos Personales y garantía de los derechos
              digitales (LOPDGDD).
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-black text-white rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-3">
              ¿Dudas sobre tu privacidad?
            </h3>
            <p className="text-gray-300 mb-6">
              Si tienes preguntas sobre cómo tratamos tus datos, estamos aquí
              para ayudarte.
            </p>
            <Link
              to="/#contacto"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
