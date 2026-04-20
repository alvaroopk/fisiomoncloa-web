import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Fisiomoncloa | Fisioterapia Madrid",
  description:
    "Contacta con Fisiomoncloa. Calle Cea Bermúdez 36, Madrid. Teléfono: 635 80 49 92. Lunes a viernes de 9:00 a 22:00.",
};

export default function ContactoPage() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Contacto
          </h1>
          <p className="text-muted text-xl max-w-xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos, llámanos o pásate por la
            clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-dark mb-5">
                Información de contacto
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <a
                      href={SITE.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-dark hover:text-primary transition-colors"
                    >
                      {SITE.address}
                    </a>
                    <p className="text-xs text-muted mt-0.5">
                      A 5 min de metro Islas Filipinas (L10) y Canal (L2/L7)
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={SITE.phoneHref}
                    className="text-sm text-dark hover:text-primary transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-dark hover:text-primary transition-colors"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm text-dark">{SITE.hours}</span>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-4">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-primary transition-colors"
                  aria-label="Instagram de Fisiomoncloa"
                >
                  Instagram
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-primary transition-colors"
                  aria-label="Facebook de Fisiomoncloa"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                title="Mapa de Fisiomoncloa en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5835413688054!2d-3.706890084598568!3d40.44396077936117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228804b67de8b%3A0x1!2sCalle+de+Cea+Berm%C3%BAdez%2C+36%2C+28003+Madrid!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-dark mb-6">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
