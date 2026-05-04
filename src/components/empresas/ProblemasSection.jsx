import { Clock, DollarSign, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

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
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.07 }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "#2d418e", opacity: 0.06 }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left — problemas */}
          <AnimatedSection variant="fadeInLeft" className="flex-1">
            <h2 className="font-fraunces text-2xl md:text-3xl font-extrabold text-primary mb-8 leading-tight">
              Los equipos pierden días por falta de{" "}
              <span className="italic" style={{ color: ACCENT }}>
                acceso médico.
              </span>
            </h2>

            <div className="flex flex-col gap-3">
              {PROBLEMAS.map(({ icon: Icon, titulo, texto }, i) => (
                <motion.div
                  key={titulo}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4 p-5 rounded-3xl"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: ACCENT + "15" }}
                  >
                    <Icon size={18} style={{ color: ACCENT }} />
                  </span>
                  <div>
                    <p className="text-primary font-semibold text-sm mb-0.5">
                      {titulo}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {texto}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — solución */}
          <AnimatedSection
            variant="fadeInRight"
            className="w-full md:w-2/5 self-start"
          >
            <div
              className="w-full rounded-3xl p-8 text-white flex flex-col relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #2d418e 0%, #1a2860 60%, #0d1f4f 100%)",
                border: `1px solid ${ACCENT}30`,
                boxShadow: `0 0 60px ${ACCENT}15`,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
                style={{ background: ACCENT, opacity: 0.25 }}
              />
              <div
                className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                style={{ background: ACCENT, opacity: 0.1 }}
              />

              <div className="relative z-10">
                <span
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
                  style={{
                    color: ACCENT,
                    borderColor: ACCENT + "50",
                    background: ACCENT + "18",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: ACCENT,
                      boxShadow: `0 0 6px ${ACCENT}`,
                    }}
                  />
                  SOLUCIÓN
                </span>

                <h3 className="font-fraunces text-2xl font-extrabold mt-2 mb-2">
                  Salud sin límites
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  OnDoctor365 elimina las barreras de acceso médico para tu
                  equipo, sin importar dónde estén.
                </p>

                <div
                  className="h-px mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT}50, transparent)`,
                  }}
                />

                <ul className="space-y-3">
                  {SOLUCIONES.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.35,
                      }}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold"
                        style={{ background: ACCENT + "25", color: ACCENT }}
                      >
                        ✓
                      </span>
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
