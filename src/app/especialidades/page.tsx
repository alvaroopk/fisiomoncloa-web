import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { ALL_SPECIALTIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Especialidades — Fisiomoncloa | Fisioterapia Madrid",
  description:
    "Suelo pélvico, fisioterapia deportiva, osteopatía, Indiba, NESA, drenaje linfático y más. Todas las especialidades de Fisiomoncloa en Madrid.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <section className="py-20 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Especialidades
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              Tratamientos especializados para cada patología y cada momento de tu vida
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SPECIALTIES.map((spec) => (
              <div
                key={spec.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={spec.image}
                    alt={spec.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-dark mb-2">
                    {spec.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
