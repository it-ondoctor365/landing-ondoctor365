import { UserCircle, ShieldCheck, Users, CreditCard } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const PASOS = [
  {
    id: 1,
    icon: UserCircle,
    titulo: "Creá tu perfil",
    descripcion:
      "Completá tu información profesional, especialidades, formación académica y horarios disponibles.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    titulo: "Verificación en 24hs",
    descripcion:
      "Nuestro equipo valida tu matrícula y activa tu perfil público en la plataforma.",
  },
  {
    id: 3,
    icon: Users,
    titulo: "Recibís pacientes",
    descripcion:
      "Tu perfil aparece en los resultados de búsqueda. Los pacientes reservan y pagan online.",
  },
  {
    id: 4,
    icon: CreditCard,
    titulo: "Cobros automáticos",
    descripcion:
      "Recibís el pago de cada consulta en los primeros días hábiles de cada semana. Sin comisiones.",
  },
];

export default function PasosOnboarding() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            ONBOARDING
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            Empezás a atender{" "}
            <span className="text-accent font-fraunces italic ">
              en 24 horas
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Proceso de alta simple y guiado para que nada te frene.
          </p>
        </AnimatedSection>

        {/* Pasos grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PASOS.map(({ id, icon: Icon, titulo, descripcion }) => (
            <StaggerItem
              key={id}
              className="bg-light-bg rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Icon size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-primary font-bold text-sm mb-1">{titulo}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {descripcion}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
