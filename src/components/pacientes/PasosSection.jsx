import { Search, Calendar, Video } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const PASOS = [
  {
    numero: "01",
    icon: Search,
    titulo: "Elegí tu especialidad",
    descripcion:
      "Encontrá el especialista que necesitás. Filtrá por especialidad, disponibilidad y calificaciones.",
  },
  {
    numero: "02",
    icon: Calendar,
    titulo: "Reservá tu turno",
    descripcion:
      "Seleccioná el horario que mejor te quede, confirmá tu turno y realizá el pago de forma segura.",
  },
  {
    numero: "03",
    icon: Video,
    titulo: "Consultá y seguí",
    descripcion:
      "Conectate con tu médico por videollamada. Recibí tu receta o diagnóstico al instante.",
  },
];

export default function PasosSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
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
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
            style={{
              color: ACCENT,
              borderColor: ACCENT + "40",
              background: ACCENT + "12",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
            />
            CÓMO FUNCIONA
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2">
            De la búsqueda a la consulta{" "}
            <span style={{ color: ACCENT }}>en 3 pasos</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[4.5rem] left-[22%] right-[22%] h-px z-0"
            style={{
              background: `linear-gradient(90deg, transparent, ${ACCENT}50, transparent)`,
            }}
          />

          {PASOS.map(({ numero, icon: Icon, titulo, descripcion }, i) => (
            <motion.div
              key={numero}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 rounded-3xl p-8 text-center"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div className="flex flex-col items-center mb-4">
                <span
                  className="font-mono text-[10px] font-bold tracking-[0.16em] mb-2"
                  style={{ color: ACCENT + "80" }}
                >
                  {numero}
                </span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "#2d418e" }}
                >
                  <Icon size={24} style={{ color: ACCENT }} />
                </div>
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">{titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
