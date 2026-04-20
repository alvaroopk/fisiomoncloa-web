"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { SITE } from "@/lib/constants";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  privacidad: boolean;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Consulta desde la web de Fisiomoncloa");
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmail: ${data.email}\nTeléfono: ${data.telefono || "No indicado"}\n\nMensaje:\n${data.mensaje}`
    );
    window.location.assign(`mailto:${SITE.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-accent/10 rounded-2xl text-center">
        <p className="text-dark font-semibold text-lg">¡Mensaje enviado!</p>
        <p className="text-muted text-sm mt-2">
          Te responderemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          {...register("nombre", { required: "El nombre es obligatorio" })}
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">
          Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
        </label>
        <input
          id="telefono"
          type="tel"
          placeholder="600 000 000"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          {...register("telefono")}
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          {...register("mensaje", { required: "El mensaje es obligatorio" })}
        />
        {errors.mensaje && (
          <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacidad"
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          {...register("privacidad", { required: "Debes aceptar la política de privacidad" })}
        />
        <label htmlFor="privacidad" className="text-xs text-muted leading-relaxed">
          He leído y acepto la política de privacidad. Mis datos serán tratados
          por Fisiomoncloa para atender mi consulta.
        </label>
      </div>
      {errors.privacidad && (
        <p className="text-red-500 text-xs">{errors.privacidad.message}</p>
      )}

      <button
        type="submit"
        className="w-full py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-light transition-colors"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
