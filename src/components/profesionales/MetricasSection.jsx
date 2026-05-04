import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const METRICAS = [
  {
    valor: "3x",
    titulo: "Más consultas en 60 días",
    descripcion:
      "Los profesionales que usan OnDoctor365 triplican su cantidad de consultas en los primeros dos meses.",
  },
  {
    valor: "$0",
    titulo: "Sin comisiones ocultas",
    descripcion:
      "Cobrás el 100% de cada consulta. Sin sorpresas, sin retenciones, sin letra chica.",
  },
  {
    valor: "+40hs",
    titulo: "Menos trabajo administrativo",
    descripcion:
      "Ahorrás tiempo en agenda, cobros y documentación al mes para dedicarle más a tus pacientes.",
  },
];

export default function MetricasSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#2d418e" }}
    >
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.1 }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
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
              borderColor: ACCENT + "50",
              background: ACCENT + "18",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
            />
            IMPACTO
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-white mt-2">
            Tus números,{" "}
            <span className="italic" style={{ color: ACCENT }}>
              tu éxito
            </span>
          </h2>
          <p className="text-white/60 mt-3 max-w-lg mx-auto text-sm">
            Profesionales como vos que están creciendo con OnDoctor365.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICAS.map(({ valor, titulo, descripcion }, i) => (
            <motion.div
              key={valor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-3xl p-8 text-center relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${ACCENT}30`,
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[50px] pointer-events-none"
                style={{ background: ACCENT, opacity: 0.15 }}
              />
              <p
                className="text-5xl font-extrabold font-fraunces mb-3 relative"
                style={{ color: ACCENT }}
              >
                {valor}
              </p>
              <p className="text-white font-bold text-lg mb-2 relative">{titulo}</p>
              <p className="text-white/60 text-sm leading-relaxed relative">{descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
