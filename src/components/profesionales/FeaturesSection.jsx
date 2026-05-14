import { Calendar, FileText, ClipboardList, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";
const ICONS = [Calendar, FileText, ClipboardList, BarChart2];

export default function FeaturesSection() {
  const { t } = useTranslation();
  const features = t("featuresProfesionales.items", { returnObjects: true });

  return (
    <section id="herramientas" className="relative py-24 overflow-hidden bg-white">
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <AnimatedSection variant="fadeInLeft" className="flex-1">
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
              {t("featuresProfesionales.badge")}
            </motion.span>

            <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-3 leading-tight">
              {t("featuresProfesionales.titulo")}{" "}
              <span className="italic" style={{ color: ACCENT }}>
                {t("featuresProfesionales.titulo_accent")}
              </span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
              {t("featuresProfesionales.subtitulo")}
            </p>

            <div className="flex flex-col gap-3">
              {features.map(({ titulo, descripcion }, i) => {
                const Icon = ICONS[i];
                return (
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
                        {descripcion}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection
            variant="fadeInRight"
            className="w-full md:w-2/5 shrink-0"
          >
            <div className="rounded-3xl w-full h-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
