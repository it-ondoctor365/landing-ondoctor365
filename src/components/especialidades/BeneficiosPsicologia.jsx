import { motion } from "framer-motion";
import { Clock, Shield, Heart, FileCheck, Calendar, FileText, Banknote, BarChart2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";

const PATIENT_ICONS = [Clock, Shield, Heart, FileCheck];
const PRO_ICONS = [Calendar, FileText, Banknote, BarChart2];

export default function BeneficiosPsicologia() {
  const { t } = useTranslation();
  const pacientes = t("psicologia.beneficios.pacientes", { returnObjects: true });
  const profesionales = t("psicologia.beneficios.profesionales", { returnObjects: true });

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.06 }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
            style={{ color: ACCENT, borderColor: ACCENT + "40", background: ACCENT + "12" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
            />
            {t("psicologia.beneficios.badge")}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            {t("psicologia.beneficios.titulo")}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {t("psicologia.beneficios.titulo_accent")}
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedSection variant="fadeInLeft">
            <div
              className="rounded-3xl p-8 h-full"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
                style={{ background: PRIMARY + "12", color: PRIMARY }}
              >
                {t("psicologia.beneficios.tab_pacientes")}
              </div>
              <StaggerContainer className="space-y-6">
                {pacientes.map(({ titulo, desc }, i) => {
                  const Icon = PATIENT_ICONS[i];
                  return (
                    <StaggerItem key={i} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: ACCENT + "18", color: ACCENT }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm mb-1">{titulo}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeInRight">
            <div
              className="rounded-3xl p-8 h-full"
              style={{ background: PRIMARY }}
            >
              <div
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
                style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
              >
                {t("psicologia.beneficios.tab_profesionales")}
              </div>
              <StaggerContainer className="space-y-6">
                {profesionales.map(({ titulo, desc }, i) => {
                  const Icon = PRO_ICONS[i];
                  return (
                    <StaggerItem key={i} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: ACCENT + "28", color: ACCENT }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm mb-1">{titulo}</p>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {desc}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
