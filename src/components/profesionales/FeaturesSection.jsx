import { Calendar, FileText, ClipboardList, BarChart2 } from "lucide-react";

const FEATURES = [
  {
    icon: Calendar,
    titulo: "Agenda inteligente",
    descripcion:
      "Gestión automática de turnos. Los pacientes reservan con vos que tengas nada que hacer.",
  },
  {
    icon: FileText,
    titulo: "Historia clínica digital",
    descripcion:
      "Cargá diagnósticos y seguimiento de cada paciente, organizado y accesible desde cualquier dispositivo.",
  },
  {
    icon: ClipboardList,
    titulo: "Recetas y órdenes digitales",
    descripcion:
      "Emití recetas con firma digital certificada. Válidas en todo el territorio nacional.",
  },
  {
    icon: BarChart2,
    titulo: "Panel de métricas",
    descripcion:
      "Seguí tus consultas, ingresos, notificaciones y más. Datos para tomar mejores decisiones.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="flex-1">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              PLATAFORMA
            </span>
            <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2 mb-3 leading-tight">
              Todo lo que necesitás{" "}
              <span className="text-accent font-fraunces italic">
                para crecer
              </span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Una plataforma completa que simplifica tu práctica y amplía tu
              alcance a todo el país.
            </p>

            <ul className="space-y-5">
              {FEATURES.map(({ icon: Icon, titulo, descripcion }) => (
                <li key={titulo} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-accent" />
                  </span>
                  <div>
                    <p className="text-primary font-semibold text-sm">
                      {titulo}
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                      {descripcion}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — placeholder */}
          <div className="w-full md:w-2/5 shrink-0">
            <div className="rounded-2xl bg-white w-full h-80 flex items-center justify-center shadow-sm">
              <span className="text-gray-300 text-sm">
                [ Imagen plataforma ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
