import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";

export default function TeamPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Conoce a tu fisioterapeuta
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Un equipo especializado, cercano y comprometido con tu recuperación
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-bg shadow">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} en Fisiomoncloa`}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>
              <h3 className="text-base font-bold text-dark">{member.name}</h3>
              <p className="text-accent text-sm font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
          >
            Conocer al equipo completo
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
