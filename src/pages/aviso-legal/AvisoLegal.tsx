"use client";

import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Aviso Legal
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
          {/* Identificación */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              1. Datos identificativos
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                En cumplimiento con el deber de información recogido en artículo
                10 de la Ley 34/2002, de 11 de julio, de Servicios de la
                Sociedad de la Información y del Comercio Electrónico, a
                continuación se reflejan los siguientes datos:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2 mt-4">
                <p className="flex items-start">
                  <span className="font-semibold min-w-[140px]">Titular:</span>
                  <span>Diego Bombín Sanz</span>
                </p>
                <p className="flex items-start">
                  <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span className="font-semibold min-w-[120px]">Email:</span>
                  <span>diesanz2003@gmail.com</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span className="font-semibold min-w-[120px]">Teléfono:</span>
                  <span>636208104</span>
                </p>
              </div>
            </div>
          </section>

          {/* Objeto */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Objeto</h2>
            <p className="text-gray-700 leading-relaxed">
              El presente aviso legal regula el uso del sitio web
              [tudominio.com] (en adelante, LA WEB).
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              La navegación por el sitio web atribuye la condición de usuario
              del mismo e implica la aceptación plena y sin reservas de todas y
              cada una de las disposiciones incluidas en este Aviso Legal, que
              pueden sufrir modificaciones.
            </p>
          </section>

          {/* Servicios */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Servicios</h2>
            <p className="text-gray-700 leading-relaxed">
              A través de LA WEB se facilita a los usuarios el acceso y la
              utilización de diversos servicios y contenidos relacionados con:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3 ml-4">
              <li>Soporte técnico informático</li>
              <li>Reparación de ordenadores y equipos electrónicos</li>
              <li>Diagnóstico y solución de problemas técnicos</li>
              <li>Asesoramiento en informática</li>
              <li>Formulario de contacto para solicitud de servicios</li>
            </ul>
          </section>

          {/* Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              4. Responsabilidad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El titular de LA WEB se exime de cualquier tipo de responsabilidad
              derivada de la información publicada en su sitio web, siempre que
              esta información haya sido manipulada o introducida por un tercero
              ajeno al mismo.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              El sitio web puede contener enlaces a otros sitios de terceros,
              cuyas políticas de privacidad son ajenas a LA WEB. Al acceder a
              tales sitios web, usted puede decidir si acepta sus políticas de
              privacidad y de cookies.
            </p>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Propiedad intelectual e industrial
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El sitio web, incluyendo a título enunciativo pero no limitativo
              su programación, edición, compilación y demás elementos necesarios
              para su funcionamiento, los diseños, logotipos, texto y/o gráficos
              son propiedad del titular o en su caso dispone de licencia o
              autorización expresa por parte de los autores.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Todos los contenidos del sitio web se encuentran debidamente
              protegidos por la normativa de propiedad intelectual e industrial.
            </p>
          </section>

          {/* Legislación */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              6. Legislación aplicable
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para la resolución de todas las controversias o cuestiones
              relacionadas con el presente sitio web o de las actividades en él
              desarrolladas, será de aplicación la legislación española, a la
              que se someten expresamente las partes.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-black text-white rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-3">
              ¿Tienes alguna duda legal?
            </h3>
            <p className="text-gray-300 mb-6">
              Si necesitas más información sobre nuestros términos legales, no
              dudes en contactarnos.
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
