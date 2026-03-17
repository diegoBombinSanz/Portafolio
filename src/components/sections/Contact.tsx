"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldError } from "react-hook-form";
import { toast } from "sonner";
import {
  Send,
  Loader2,
  X,
  User,
  Mail,
  Phone,
  AlertCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const contactRef = useRef(null);
  const deviceRef = useRef(null);
  const problemRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            if (entry.target.id === "contact-section") {
              setCurrentStep(1);
            }

            if (entry.target.id === "device-section") {
              setCurrentStep(2);
            }

            if (entry.target.id === "problem-section") {
              setCurrentStep(3);
            }

          }

        });
      },
      { threshold: 0.4 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    if (deviceRef.current) observer.observe(deviceRef.current);
    if (problemRef.current) observer.observe(problemRef.current);

    return () => observer.disconnect();

  }, []);

  const onSubmit = async (data: any) => {

    setSending(true);

    try {

      await emailjs.send(
        "service_7tb34ei",
        "template_lwlzv5k",
        { ...data },
        "RSZxKyDf96CM7wFq3"
      );

      toast.success("Formulario enviado correctamente");

      reset();
      setIsModalOpen(false);

    } catch (err) {

      console.error(err);
      toast.error("Error al enviar el formulario");

    } finally {

      setSending(false);

    }

  };

  const renderError = (error: FieldError | undefined) => {
    return error ? (
      <span className="text-red-500 text-xs flex items-center gap-1 mt-1">
        <AlertCircle className="w-3 h-3" />
        {error.message}
      </span>
    ) : null;
  };

  return (
    <section id="contacto" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          ¿Tienes un problema? <br />
          <span className="text-blue-600">Hablemos.</span>
        </h2>

        <p className="text-lg text-gray-600 mb-6">
          Describe tu problema técnico y te daré una solución rápida.
          Generalmente respondo en menos de 2 horas.
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-600 mb-8">
          <span>⚡ Respuesta rápida</span>
          <span>🛠️ Diagnóstico inicial gratuito</span>
          <span>🔒 Datos protegidos</span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-12 py-5 rounded-xl font-bold hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
        >
          Solicitar revisión del equipo
        </button>

      </div>

      {isModalOpen && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">

            {/* HEADER */}

            <div className="sticky top-0 bg-white border-b px-8 py-6 flex items-center justify-between rounded-t-3xl">

              <h3 className="text-2xl font-bold text-black">
                Solicitud de Servicio
              </h3>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-red-50 hover:text-red-500 rounded-xl transition"
              >
                <X className="w-6 h-6" />
              </button>

            </div>

            {/* PROGRESS */}

            <div className="px-8 pt-6">

              <div className="flex justify-between text-sm mb-6">

                <span className={currentStep === 1 ? "text-blue-600 font-semibold" : "text-gray-400"}>
                  1. Contacto
                </span>

                <span className={currentStep === 2 ? "text-blue-600 font-semibold" : "text-gray-400"}>
                  2. Dispositivo
                </span>

                <span className={currentStep === 3 ? "text-blue-600 font-semibold" : "text-gray-400"}>
                  3. Problema
                </span>

              </div>

              <div className="w-full bg-gray-200 h-1 rounded-full">

                <div
                  className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                  style={{
                    width:
                      currentStep === 1
                        ? "33%"
                        : currentStep === 2
                        ? "66%"
                        : "100%"
                  }}
                />

              </div>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">

              {/* CONTACTO */}

              <div
                id="contact-section"
                ref={contactRef}
                className="bg-gray-50 p-6 rounded-2xl space-y-4"
              >

                <h4 className="font-bold text-lg">
                  Información de contacto
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Nombre completo *
                    </label>

                    <div className="relative mt-1">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("name", { required: "El nombre es obligatorio" })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    {renderError(errors.name as FieldError)}

                  </div>

                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Email *
                    </label>

                    <div className="relative mt-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("email", {
                          required: "El email es obligatorio",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email inválido"
                          }
                        })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    {renderError(errors.email as FieldError)}

                  </div>

                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Teléfono
                    </label>

                    <div className="relative mt-1">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("phone")}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                  </div>

                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Método de contacto
                    </label>

                    <select
                      {...register("preferred_contact_method")}
                      className="w-full mt-1 px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Teléfono</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>

                  </div>

                </div>

              </div>

              {/* DISPOSITIVO */}

              <div
                id="device-section"
                ref={deviceRef}
                className="bg-gray-50 p-6 rounded-2xl space-y-4"
              >

                <h4 className="font-bold text-lg">
                  Información del dispositivo
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  <input
                    {...register("device_brand")}
                    placeholder="Marca"
                    className="px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                  />

                  <input
                    {...register("device_model")}
                    placeholder="Modelo"
                    className="px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                  />

                  <select
                    {...register("operating_system")}
                    className="px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white"
                  >
                    <option value="">Sistema Operativo</option>
                    <option value="windows">Windows</option>
                    <option value="macos">macOS</option>
                    <option value="linux">Linux</option>
                    <option value="otro">Otro</option>
                  </select>

                </div>

              </div>

              {/* PROBLEMA */}

              <div
                id="problem-section"
                ref={problemRef}
                className="bg-gray-50 p-6 rounded-2xl space-y-4"
              >

                <h4 className="font-bold text-lg">
                  Detalles del problema
                </h4>

                <textarea
                  {...register("problem_description", {
                    required: "Describe el problema"
                  })}
                  rows={4}
                  placeholder="Describe qué está ocurriendo con tu equipo..."
                  className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 resize-none"
                />

                <p className="text-xs text-gray-500">
                  Ejemplo: "El ordenador tarda mucho en arrancar y se queda bloqueado."
                </p>

                {renderError(errors.problem_description as FieldError)}

              </div>

              {/* BOTÓN */}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-black text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >

                {sending
                  ? <Loader2 className="w-5 h-5 animate-spin" />
                  : <Send className="w-5 h-5" />
                }

                {sending
                  ? "Enviando solicitud..."
                  : "Solicitar revisión del equipo"
                }

              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}