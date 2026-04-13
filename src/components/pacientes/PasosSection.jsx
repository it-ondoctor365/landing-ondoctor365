import { Search, Calendar, Video } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";

const PASOS = [
  {
    numero: "1",
    icon: Search,
    titulo: "Elegí tu especialidad",
    descripcion:
      "Encontrá el especialista que necesitás. Filtrá por especialidad, disponibilidad y calificaciones.",
  },
  {
    numero: "2",
    icon: Calendar,
    titulo: "Reservá tu turno",
    descripcion:
      "Seleccioná el horario que mejor te quede, confirmá tu turno y realizá el pago de forma segura.",
  },
  {
    numero: "3",
    icon: Video,
    titulo: "Consultá y seguí",
    descripcion:
      "Conectate con tu médico por videollamada. Recibí tu receta o diagnóstico al instante.",
  },
];

export default function PasosSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2">
            De la búsqueda a la consulta{" "}
            <span className="text-accent">en 3 pasos</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-px bg-accent/30 z-0" />
          {PASOS.map(({ numero, icon: Icon, titulo, descripcion }) => (
            <StaggerItem key={numero}>
              <div className="relative z-10 bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                <div className="flex flex-col items-center mb-4">
                  <span className="text-accent/40 text-xs font-bold tracking-widest mb-2">
                    {numero}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">
                  {titulo}
                </h3>
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
