import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SPECIALTIES_PREVIEW } from "@/lib/constants";

export default function SpecialtiesPreview() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Nuestras especialidades
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Fisioterapia especializada para cada necesidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES_PREVIEW.map((spec) => (
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
                <h3 className="text-lg font-bold text-dark mb-2">{spec.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/especialidades"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-light transition-colors"
          >
            Ver todas las especialidades
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
