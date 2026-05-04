import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const ORGANIZACIONES = [
  {
    id: "empresa",
    label: "Empresa de Retail",
    num: "01",
    metrica: "-32%",
    metricaLabel: "Ausentismo",
    titulo: "Menos ausentismo,\nMás productividad",
    descripcion:
      "Tus empleados acceden a atención médica inmediata sin salir del trabajo. Menos días perdidos, más energía y compromiso en el equipo.",
    cta: "Saber más",
  },
  {
    id: "clinica",
    label: "Clínica / Hospital",
    num: "02",
    metrica: "-45%",
    metricaLabel: "Tiempos de espera",
    titulo: "Admisión inteligente,\nmenos cuellos de botella",
    descripcion:
      "Optimizá el triage y la admisión hospitalaria con IA. Reducí los tiempos de espera y mejorá la experiencia del paciente desde el primer contacto.",
    cta: "Saber más",
  },
  {
    id: "obraSocial",
    label: "Obra Social",
    num: "03",
    metrica: "+60%",
    metricaLabel: "Uso preventivo",
    titulo: "Más afiliados activos,\nmenos costos de internación",
    descripcion:
      "Promové el uso preventivo de la salud entre tus afiliados. Reducí internaciones evitables y mejorá los indicadores de tu obra social.",
    cta: "Saber más",
  },
  {
    id: "sindicato",
    label: "Sindicato / Gremio",
    num: "04",
    metrica: "24/7",
    metricaLabel: "Disponibilidad",
    titulo: "Un beneficio real\npara tus afiliados",
    descripcion:
      "Ofrecé atención médica online como beneficio diferencial. Sin filas, sin traslados, disponible en cualquier momento y desde cualquier lugar.",
    cta: "Saber más",
  },
];

export default function OrganizacionesSection() {
  const [active, setActive] = useState("empresa");
  const org = ORGANIZACIONES.find((o) => o.id === active);

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
        <AnimatedSection variant="fadeInUp" className="text-center mb-12">
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
            SOLUCIONES
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            OnDoctor365 se adapta a{" "}
            <span className="italic" style={{ color: ACCENT }}>
              cada tipo de organización.
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
            Casos de uso diseñados para tu sector.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection
          variant="fadeInUp"
          delay={0.1}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {ORGANIZACIONES.map(({ id, label, num }) => {
            const isActive = active === id;
            return (
              <motion.button
                key={id}
                onClick={() => setActive(id)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors duration-300"
                style={{
                  background: isActive ? ACCENT + "15" : "#f8fafc",
                  border: `1px solid ${isActive ? ACCENT + "70" : "#e2e8f0"}`,
                  color: isActive ? ACCENT : "#64748b",
                  boxShadow: isActive ? `0 0 24px ${ACCENT}30` : "none",
                }}
              >
                {label}
                <span className="font-mono text-[10px] opacity-40 ml-0.5">
                  {num}
                </span>
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Left — copy */}
            <div className="flex-1 flex flex-col justify-center gap-4 py-8">
              <h3 className="font-fraunces text-2xl font-extrabold text-primary leading-snug whitespace-pre-line">
                {org.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {org.descripcion}
              </p>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 text-sm font-bold w-fit mt-2 px-5 py-2.5 rounded-2xl"
                style={{
                  background: ACCENT + "15",
                  color: ACCENT,
                  border: `1px solid ${ACCENT}40`,
                }}
              >
                {org.cta}
                <span>→</span>
              </motion.button>
            </div>

            {/* Right — imagen + métrica */}
            <div className="w-full md:w-2/5 relative">
              <div
                className="rounded-3xl w-full min-h-[380px] flex items-center justify-center"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <span className="text-gray-400 text-sm">
                  [ Imagen {org.label} ]
                </span>
              </div>

              {/* Métrica flotante */}
              <motion.div
                key={active + "-metric"}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="absolute bottom-4 right-4 rounded-2xl px-5 py-3 flex items-center gap-3"
                style={{
                  background: "white",
                  border: `1px solid ${ACCENT}30`,
                  boxShadow: `0 8px 32px ${ACCENT}20`,
                }}
              >
                <p
                  className="font-fraunces text-2xl font-extrabold"
                  style={{ color: ACCENT }}
                >
                  {org.metrica}
                </p>
                <p className="text-gray-600 text-sm">{org.metricaLabel}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
