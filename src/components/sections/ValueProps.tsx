import { Award, Zap, MapPin } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={32} className="text-primary" aria-hidden="true" />,
  zap: <Zap size={32} className="text-primary" aria-hidden="true" />,
  "map-pin": <MapPin size={32} className="text-primary" aria-hidden="true" />,
};

export default function ValueProps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            ¿Por qué elegir Fisiomoncloa?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-bg border border-gray-100"
            >
              <div className="mb-5 p-4 bg-primary/10 rounded-full">
                {iconMap[prop.icon]}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{prop.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{prop.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
