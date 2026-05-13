import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";

export default function HeroPsicologia() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const stats = t("psicologia.hero.stats", { returnObjects: true });

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.08 }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: PRIMARY, opacity: 0.07 }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
        <AnimatedSection variant="fadeInUp" className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-6"
            style={{ color: ACCENT, borderColor: ACCENT + "40", background: ACCENT + "12" }}
          >
            <Brain size={13} />
            {t("psicologia.hero.badge")}
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-fraunces font-extrabold text-primary leading-tight mb-6">
            {t("psicologia.hero.titulo")}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {t("psicologia.hero.titulo_accent")}
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12">
            {t("psicologia.hero.subtitulo")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">
                {t("psicologia.hero.label_paciente")}
              </span>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/pacientes")}
                className="flex items-center gap-2 font-bold px-8 py-3.5 rounded-2xl text-sm text-white"
                style={{ background: PRIMARY, boxShadow: `0 10px 36px ${PRIMARY}40` }}
              >
                {t("psicologia.hero.cta_paciente")}
                <ArrowRight size={15} />
              </motion.button>
            </div>

            <div
              className="hidden sm:block w-px h-12 self-end mb-1"
              style={{ background: "#e2e8f0" }}
            />

            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">
                {t("psicologia.hero.label_profesional")}
              </span>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/profesionales")}
                className="flex items-center gap-2 font-bold px-8 py-3.5 rounded-2xl text-sm"
                style={{
                  border: `2px solid ${PRIMARY}`,
                  color: PRIMARY,
                  background: "white",
                }}
              >
                {t("psicologia.hero.cta_profesional")}
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-16 pt-10 border-t border-gray-100">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-fraunces font-extrabold text-primary">{value}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
