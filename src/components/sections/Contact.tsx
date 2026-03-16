"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldError } from "react-hook-form";
import { toast } from "sonner";
import { Send, Loader2, X, Upload, Trash2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [sending, setSending] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setUploadedPhotos(prev => [...prev, base64]);
      toast.success("Foto añadida");
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (index: number) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: any) => {
    setSending(true);
    try {
      await emailjs.send(
        "service_7tb34ei",   // <- Reemplaza con tu Service ID
        "template_lwlzv5k",  // <- Reemplaza con tu Template ID
        {
          ...data,
          //photos: uploadedPhotos.join("\n"), // fotos en string
        },
        "RSZxKyDf96CM7wFq3"    // <- Reemplaza con tu Public Key
      );
      toast.success("Formulario enviado correctamente");
      reset();
      setUploadedPhotos([]);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Error al enviar el formulario");
    } finally {
      setSending(false);
    }
  };

  const renderError = (error: FieldError | undefined) => {
    return error ? <span className="text-red-500 text-xs">{error.message}</span> : null;
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          ¿Tienes un problema? <br />
          <span className="text-blue-600">Hablemos.</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Describe tu problema técnico y te daré una solución rápida. Generalmente respondo en menos de 2 horas.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-12 py-5 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
        >
          Solicitar Servicio
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <h3 className="text-2xl font-bold text-black">Solicitud de Servicio</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-xl">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">

              {/* Información de Contacto */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Información de Contacto</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("name", { required: "El nombre es obligatorio" })}
                      placeholder="Nombre completo *"
                      className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                    />
                    {renderError(errors.name as FieldError)}
                  </div>
                  <div>
                    <input
                      {...register("email", {
                        required: "El email es obligatorio",
                        pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
                      })}
                      placeholder="Email *"
                      className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                    />
                    {renderError(errors.email as FieldError)}
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Teléfono"
                      className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <select
                      {...register("preferred_contact_method")}
                      className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Teléfono</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    {...register("address")}
                    placeholder="Dirección (opcional)"
                    className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Información del Dispositivo */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-lg">Información del Dispositivo</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input {...register("device_brand")} placeholder="Marca" className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100" />
                  </div>
                  <div>
                    <input {...register("device_model")} placeholder="Modelo" className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100" />
                  </div>
                  <div>
                    <select {...register("operating_system")} className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white">
                      <option value="">Sistema Operativo</option>
                      <option value="windows">Windows</option>
                      <option value="macos">macOS</option>
                      <option value="linux">Linux</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Detalles del Servicio */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-lg">Detalles del Servicio</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      {...register("service_type", { required: "Selecciona un servicio" })}
                      className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white"
                    >
                      <option value="">Tipo de Servicio *</option>
                      <option value="reparacion">Reparación de Ordenador</option>
                      <option value="instalacion">Instalación de Aplicaciones</option>
                      <option value="mantenimiento">Mantenimiento Preventivo</option>
                      <option value="otro">Otro</option>
                    </select>
                    {renderError(errors.service_type as FieldError)}
                  </div>
                  <div>
                    <select {...register("urgency")} className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 bg-white">
                      <option value="normal">Normal</option>
                      <option value="urgente">Urgente (24-48h)</option>
                      <option value="muy-urgente">Muy Urgente (mismo día)</option>
                    </select>
                  </div>
                </div>
                <textarea
                  {...register("problem_description", { required: "Describe el problema" })}
                  placeholder="Descripción del problema *"
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-blue-100 resize-none"
                />
                {renderError(errors.problem_description as FieldError)}
              </div>

              {/* Fotos */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-lg">Fotos del Problema (opcional)</h4>
                <div className="flex flex-wrap gap-4">
                  {uploadedPhotos.map((photo, i) => (
                    <div key={i} className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-gray-200">
                      <img src={photo} alt={`Foto ${i+1}`} className="w-full h-full object-cover" />
                      <button type="button" onClick={() => removePhoto(i)} className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center text-white">
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  ))}
                  <label className="w-32 h-32 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50">
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    <Upload className="w-8 h-8 mb-1" />
                    <span className="text-xs text-gray-500 text-center px-2">Añadir foto</span>
                  </label>
                </div>
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-black text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {sending ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}