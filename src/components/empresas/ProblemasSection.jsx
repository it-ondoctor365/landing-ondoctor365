import { Clock, DollarSign, MapPin, Check } from "lucide-react";

const PROBLEMAS = [
  {
    icon: Clock,
    titulo: "Tiempo de espera",
    texto:
      "Los empleados pierden horas en salas de espera o coordinando turnos con especialistas.",
  },
  {
    icon: DollarSign,
    titulo: "Costos indirectos reales",
    texto:
      "El ausentismo y la baja productividad tienen un costo invisible pero enorme para la empresa.",
  },
  {
    icon: MapPin,
    titulo: "Especialistas fuera de alcance",
    texto:
      "En muchas zonas del país acceder a un especialista puede llevar semanas.",
  },
];

const SOLUCIONES = [
  "Control de empleados: turnos sin colas",
  "Recetas digitales ilimitadas",
  "Historia clínica digital integrada",
  "Reportes digitales en tiempo real",
  "Integración con HIS, RRHH y sistemas existentes",
];

export default function ProblemaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left — problema */}
          <div className="flex-1">
            <h2 className="font-fraunces text-2xl md:text-3xl font-extrabold text-black mb-8 leading-tight">
              Los equipos pierden días por falta de{" "}
              <span className="text-accent italic">acceso médico.</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {PROBLEMAS.map(({ icon: Icon, titulo, texto }) => (
                <div
                  key={titulo}
                  className="bg-light-bg rounded-2xl p-5 flex items-start gap-4 border-2 rounded-6xl"
                >
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="text-primary font-semibold text-sm mb-0.5">
                      {titulo}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — solución con fondo degradado */}
          <div
            className="w-full md:w-2/5 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1B2D6B 0%, #0d1f4f 50%, #00BFA5 150%)",
            }}
          >
            {/* Círculo decorativo fondo */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                SOLUCIÓN
              </span>
              <h3 className="font-fraunces text-2xl font-extrabold mt-2 mb-2">
                Salud sin límites
              </h3>
              <p className="text-white/60 text-sm mb-6">
                OnDoctor365 elimina las barreras de acceso médico para tu
                equipo, sin importar dónde estén.
              </p>
              <ul className="space-y-3">
                {SOLUCIONES.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
