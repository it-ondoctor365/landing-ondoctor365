import { UserCircle, ShieldCheck, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const PASOS = [
  {
    id: 1,
    num: "01",
    icon: UserCircle,
    titulo: "Creá tu perfil",
    descripcion:
      "Completá tu información profesional, especialidades, formación académica y horarios disponibles.",
  },
  {
    id: 2,
    num: "02",
    icon: ShieldCheck,
    titulo: "Verificación en 24hs",
    descripcion:
      "Nuestro equipo valida tu matrícula y activa tu perfil público en la plataforma.",
  },
  {
    id: 3,
    num: "03",
    icon: Users,
    titulo: "Recibís pacientes",
    descripcion:
      "Tu perfil aparece en los resultados de búsqueda. Los pacientes reservan y pagan online.",
  },
  {
    id: 4,
    num: "04",
    icon: CreditCard,
    titulo: "Cobros automáticos",
    descripcion:
      "Recibís el pago de cada consulta en los primeros días hábiles de cada semana. Sin comisiones.",
  },
];

export default function PasosOnboarding() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.07 }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
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
        {/* Heading */}
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
            ONBOARDING
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            Empezás a atender{" "}
            <span className="italic" style={{ color: ACCENT }}>
              en 24 horas
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
            Proceso de alta simple y guiado para que nada te frene.
          </p>
        </AnimatedSection>

        {/* Pasos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden md:block"
            style={{
              background: `linear-gradient(90deg, transparent, ${ACCENT}40, ${ACCENT}40, transparent)`,
            }}
          />

          {PASOS.map(({ id, num, icon: Icon, titulo, descripcion }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-[40px] pointer-events-none"
                style={{ background: ACCENT, opacity: 0.08 }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#2d418e" }}
                >
                  <Icon size={22} style={{ color: ACCENT }} />
                </div>
                <span
                  className="font-mono text-xs font-bold opacity-30"
                  style={{ color: "#2d418e" }}
                >
                  {num}
                </span>
              </div>

              <div>
                <p className="text-primary font-bold text-sm mb-1">{titulo}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
