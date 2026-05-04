import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ACCENT = "#32b9cc";

const STATS = [
  { value: "+15K", label: "Pacientes atendidos" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "3 min", label: "Tiempo de espera" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroPacientes() {
  return (
    <section
      className="relative min-h-[580px] overflow-hidden text-white"
      style={{ background: "#2d418e" }}
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.12 }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "#1a2860", opacity: 0.8 }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        {/* Left — copy */}
        <div className="relative z-10 max-w-xl py-20">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-6"
              style={{
                color: ACCENT,
                borderColor: ACCENT + "50",
                background: ACCENT + "18",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
              />
              Disponible 24/7 · 365 días
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-fraunces font-bold leading-tight mb-4"
          >
            Atención médica online cuando{" "}
            <span style={{ color: ACCENT }}>más lo necesitás.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-sm mb-8 max-w-full leading-relaxed"
          >
            Médicos, psicólogos y especialistas disponibles en minutos. Sin
            filas, sin traslados. Desde tu celular o computadora.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-2xl text-sm"
              style={{
                background: ACCENT,
                color: "#07111f",
                boxShadow: `0 10px 36px ${ACCENT}55`,
              }}
            >
              Solicitar turno
              <ArrowRight size={14} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold px-6 py-3 rounded-2xl text-sm text-white/85"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Buscar especialista
            </motion.button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-6 gap-y-4 mt-10"
          >
            {STATS.map(({ value, label }) => (
              <div key={value}>
                <p className="text-2xl font-fraunces font-bold text-white">
                  {value}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — image + floating card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="absolute right-0 top-0 h-full w-[100%] hidden md:block"
        >
          <div className="relative h-full">
            <img
              src="/PacientesHero.png"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -12, x: 16 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="top-[10%] absolute left-[70%] rounded-3xl shadow-xl p-4 w-70"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-3 mb-2"
                style={{ color: ACCENT }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
                />
                Médico disponible ahora
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: ACCENT + "20", color: ACCENT }}
              >
                Dr
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">
                  Dr. Martínez
                </p>
                <p className="text-gray-400 text-xs">
                  Médico clínico · 12 años de experiencia
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
