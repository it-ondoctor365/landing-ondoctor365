import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";

export default function CTAFinal({ badge, titulo, tituloAccent, titulo2, subtitulo, ctaPrimario, ctaSecundario }) {
  const { t } = useTranslation();

  const resolvedBadge = badge ?? t("ctaFinal.badge");
  const resolvedTitulo = titulo ?? t("ctaFinal.titulo");
  const resolvedTituloAccent = tituloAccent ?? t("ctaFinal.titulo_accent");
  const resolvedTitulo2 = titulo2 ?? t("ctaFinal.titulo2");
  const resolvedSubtitulo = subtitulo ?? t("ctaFinal.subtitulo");
  const resolvedCtaPrimario = ctaPrimario ?? t("ctaFinal.cta_primary");
  const resolvedCtaSecundario = ctaSecundario ?? t("ctaFinal.cta_secondary");

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#2d418e" }}>
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.15 }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
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

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection variant="fadeInUp">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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
            {resolvedBadge}
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-fraunces font-extrabold text-white mt-3 mb-4 leading-tight">
            {resolvedTitulo}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {resolvedTituloAccent}
            </span>{" "}
            {resolvedTitulo2}
          </h2>

          <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
            {resolvedSubtitulo}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 font-bold px-8 py-3.5 rounded-2xl text-sm transition-colors duration-200"
              style={{
                background: ACCENT,
                color: "#07111f",
                boxShadow: `0 10px 36px ${ACCENT}55`,
              }}
            >
              {resolvedCtaPrimario}
              <ArrowRight size={15} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold px-8 py-3.5 rounded-2xl text-sm transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {resolvedCtaSecundario}
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
