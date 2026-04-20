import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { PRICING, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifas — Fisiomoncloa | Precios fisioterapia Madrid",
  description:
    "Tarifas y precios de fisioterapia en Fisiomoncloa Madrid. Sesiones individuales y bonos para fisioterapia general, suelo pélvico, NESA, y más.",
};

export default function TarifasPage() {
  return (
    <>
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Tarifas
            </h1>
            <p className="text-muted text-xl max-w-xl mx-auto">
              Precios claros, sin sorpresas. Invierte en tu salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRICING.map((item) => (
              <div
                key={item.category}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-dark">{item.category}</h2>
                  {item.note && (
                    <p className="text-xs text-muted mt-1">{item.note}</p>
                  )}
                </div>
                <table className="w-full">
                  <tbody>
                    {item.rows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-t border-gray-100 first:border-0"
                      >
                        <td className="py-2.5 text-sm text-muted pr-4">
                          {row.label}
                        </td>
                        <td className="py-2.5 text-sm font-bold text-primary text-right">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/10 text-sm text-muted text-center">
            Las sesiones con Sara son individuales a <strong className="text-dark">70 €</strong>, sin bono disponible.
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-4">¿Tienes dudas sobre qué bono elegir?</p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors"
            >
              Consúltanos por WhatsApp
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
