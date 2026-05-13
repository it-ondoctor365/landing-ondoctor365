import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";

export default function OrganizacionesSection() {
  const { t } = useTranslation();
  const organizaciones = t("organizaciones.items", { returnObjects: true });
  const [activeId, setActiveId] = useState(organizaciones[0]?.id ?? "empresa");
  const org = organizaciones.find((o) => o.id === activeId) ?? organizaciones[0];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
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
            {t("organizaciones.badge")}
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            {t("organizaciones.titulo")}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {t("organizaciones.titulo_accent")}
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
            {t("organizaciones.subtitulo")}
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant="fadeInUp"
          delay={0.1}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {organizaciones.map(({ id, label, num }) => {
            const isActive = activeId === id;
            return (
              <motion.button
                key={id}
                onClick={() => setActiveId(id)}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
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

            <div className="w-full md:w-2/5 relative">
              <div
                className="rounded-3xl w-full min-h-[380px] flex items-center justify-center"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <span className="text-gray-400 text-sm">
                  [ {org.label} ]
                </span>
              </div>

              <motion.div
                key={activeId + "-metric"}
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
