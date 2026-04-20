import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Equipo — Fisiomoncloa | Fisioterapeutas en Madrid",
  description:
    "Conoce al equipo de fisioterapeutas de Fisiomoncloa: Sara Zeitun, Ainhoa Ramos, Azael Durán y Romina Martínez. Más de 15 años de experiencia en Madrid.",
};

export default function EquipoPage() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Nuestro equipo
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              Fisioterapeutas especializados con más de 15 años combinados de
              experiencia en Madrid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-bg border border-gray-100"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 mx-auto sm:mx-0 border-4 border-white shadow">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} en Fisiomoncloa`}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">{member.name}</h2>
                  <p className="text-accent font-medium text-sm mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <h2 className="text-2xl font-bold text-dark mb-3">
              Comprometidos con la formación
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Colaboramos con la Universidad Francisco de Vitoria y otras
              universidades de Madrid en la formación de los fisioterapeutas del
              mañana.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
