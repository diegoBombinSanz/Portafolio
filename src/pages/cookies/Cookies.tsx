"use client";

import { ArrowLeft, Cookie, Info, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cookies() {
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
            Política de Cookies
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
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start">
                <Cookie className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">
                    ¿Qué son las cookies?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Las cookies son pequeños archivos de texto que se almacenan
                    en tu dispositivo cuando visitas nuestra web. Nos ayudan a
                    mejorar tu experiencia y analizar el uso del sitio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Qué son */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
              <Info className="w-6 h-6 mr-3 text-black" />
              1. Información general sobre cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Una cookie es un fichero que se descarga en tu ordenador,
              smartphone o tablet al acceder a determinadas páginas web. Las
              cookies permiten a una página web, entre otras cosas, almacenar y
              recuperar información sobre los hábitos de navegación de un
              usuario o de su equipo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En función de la información que contengan y de la forma en que
              utilices tu equipo, pueden utilizarse para reconocerte.
            </p>
          </section>

          {/* Tipos */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              2. Tipos de cookies que utilizamos
            </h2>

            <div className="space-y-4">
              {/* Técnicas */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start mb-3">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    NECESARIAS
                  </div>
                </div>
                <h3 className="font-bold text-black text-lg mb-2">
                  Cookies técnicas o estrictamente necesarias
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Son esenciales para el correcto funcionamiento de la web.
                  Permiten la navegación y el uso de diferentes opciones o
                  servicios.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Ejemplos:</strong> Control de tráfico, identificación
                  de sesión, recordar elementos del carrito de compra
                </p>
              </div>

              {/* Analíticas */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ANALÍTICAS
                  </div>
                </div>
                <h3 className="font-bold text-black text-lg mb-2">
                  Cookies de análisis
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Permiten cuantificar el número de usuarios y examinar su
                  navegación para mejorar la oferta de productos o servicios.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Ejemplos:</strong> Google Analytics para medir
                  interacciones del usuario
                </p>
              </div>

              {/* Funcionales */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start mb-3">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    FUNCIONALES
                  </div>
                </div>
                <h3 className="font-bold text-black text-lg mb-2">
                  Cookies de preferencias o personalización
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Permiten recordar información para que accedas al servicio con
                  determinadas características que pueden diferenciar tu
                  experiencia.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Ejemplos:</strong> Idioma preferido, región,
                  configuración de accesibilidad
                </p>
              </div>

              {/* Terceros */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start mb-3">
                  <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                    TERCEROS
                  </div>
                </div>
                <h3 className="font-bold text-black text-lg mb-2">
                  Cookies de terceros
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Son cookies instaladas por sitios web que no son el que estás
                  visitando en ese momento.
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Ejemplos:</strong> Botones de redes sociales, mapas
                  integrados
                </p>
              </div>
            </div>
          </section>

          {/* Cookies específicas */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              3. Cookies utilizadas en este sitio web
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">
                      Cookie
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Duración
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Finalidad
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_session</td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">Sesión</td>
                    <td className="px-4 py-3">
                      Mantener la sesión del usuario
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">2 años</td>
                    <td className="px-4 py-3">
                      Google Analytics - distinguir usuarios
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">24 horas</td>
                    <td className="px-4 py-3">
                      Google Analytics - distinguir usuarios
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      cookie_consent
                    </td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">1 año</td>
                    <td className="px-4 py-3">
                      Almacenar preferencias de cookies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Gestión */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-black" />
              4. Cómo gestionar las cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu
              equipo mediante la configuración de las opciones de tu navegador:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-black">Google Chrome</p>
                  <p className="text-xs text-gray-500">Configurar cookies →</p>
                </div>
              </a>

              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  🦊
                </div>
                <div>
                  <p className="font-semibold text-black">Mozilla Firefox</p>
                  <p className="text-xs text-gray-500">Configurar cookies →</p>
                </div>
              </a>

              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  🧭
                </div>
                <div>
                  <p className="font-semibold text-black">Safari</p>
                  <p className="text-xs text-gray-500">Configurar cookies →</p>
                </div>
              </a>

              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  🔷
                </div>
                <div>
                  <p className="font-semibold text-black">Microsoft Edge</p>
                  <p className="text-xs text-gray-500">Configurar cookies →</p>
                </div>
              </a>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Importante:</strong> Si bloqueas o eliminas las
                cookies, es posible que algunas funcionalidades de la web no
                funcionen correctamente.
              </p>
            </div>
          </section>

          {/* Actualización */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">
              5. Actualización de la política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Cookies puede ser modificada en función de
              exigencias legislativas, reglamentarias, o con la finalidad de
              adaptar dicha política a las instrucciones dictadas por la Agencia
              Española de Protección de Datos. Te recomendamos revisarla
              periódicamente.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="bg-black text-white rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-3">
              ¿Preguntas sobre cookies?
            </h3>
            <p className="text-gray-300 mb-6">
              Si tienes dudas sobre nuestra política de cookies, estamos
              disponibles para ayudarte.
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



