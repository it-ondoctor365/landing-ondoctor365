import { Clock, Star, Earth, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

const BENEFICIOS = [
  {
    icon: Clock,
    titulo: "Sin sala de espera",
    descripcion:
      "Tu turno es a la hora que elegiste. Sin esperar 40 minutos en un pasillo ni trasladarte.",
  },
  {
    icon: Earth,
    titulo: "Especialistas de todo el país",
    descripcion:
      "Accedé a profesionales que quizás no están en tu ciudad. La mejor atención sin importar dónde estés.",
  },
  {
    icon: Star,
    titulo: "Reseñas reales y verificadas",
    descripcion:
      "Todas las opiniones son de pacientes que realmente consultaron. Elegí con información real.",
  },
  {
    icon: ShieldCheck,
    titulo: "Total privacidad",
    descripcion:
      "Tu información médica está encriptada bajo los más altos estándares de seguridad.",
  },
];

export default function BeneficiosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left — imagen placeholder */}
          <AnimatedSection
            variant="fadeInLeft"
            className="w-full md:w-2/5 shrink-0"
          >
            <div className="rounded-2xl bg-light-bg w-full h-full overflow-hidden">
              <img
                src="/Beneficios.png"
                alt="Beneficios"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right — copy + beneficios */}
          <div className="flex-1">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            POR QUÉ ELEGIR ONDOCTOR365
          </span>
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2 mb-3 leading-tight">
              Atención médica{" "}
              <span className="text-accent">sin las esperas</span> de siempre
            </h2>
            <span className="inline-block text-gray-500 text-sm mb-8 max-w-md">
              Una nueva forma de cuidar tu salud: accesible, inmediata y sin
              complicaciones.
            </span>
          </AnimatedSection>

          <ul className="space-y-5">
            {BENEFICIOS.map(({ icon: Icon, titulo, descripcion }) => (
              <li key={titulo} className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className="text-accent" />
                </span>
                <div>
                  <p className="text-primary font-semibold text-sm">{titulo}</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
