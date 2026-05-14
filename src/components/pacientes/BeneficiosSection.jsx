import { Clock, Star, Earth, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";

export default function BeneficiosSection() {
  const { t } = useTranslation();

  const BENEFICIOS = [
    {
      icon: Clock,
      titulo: t("beneficios.items.espera_titulo"),
      descripcion: t("beneficios.items.espera_desc"),
    },
    {
      icon: Earth,
      titulo: t("beneficios.items.especialistas_titulo"),
      descripcion: t("beneficios.items.especialistas_desc"),
    },
    {
      icon: Star,
      titulo: t("beneficios.items.resenas_titulo"),
      descripcion: t("beneficios.items.resenas_desc"),
    },
    {
      icon: ShieldCheck,
      titulo: t("beneficios.items.privacidad_titulo"),
      descripcion: t("beneficios.items.privacidad_desc"),
    },
  ];

  return (
    <section id="beneficios" className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px]"
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
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left — image */}
          <AnimatedSection
            variant="fadeInLeft"
            className="w-full md:w-2/5 shrink-0"
          >
            <div className="rounded-3xl overflow-hidden border border-[#e2e8f0]">
              <img
                src="/Beneficios.png"
                alt="Beneficios"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right */}
          <div className="flex-1">
            <AnimatedSection variant="fadeInUp">
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
                  style={{
                    background: ACCENT,
                    boxShadow: `0 0 6px ${ACCENT}`,
                  }}
                />
                {t("beneficios.badge")}
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2 mb-3 leading-tight">
                {t("beneficios.titulo")}{" "}
                <span style={{ color: ACCENT }}>{t("beneficios.titulo_accent")}</span>{" "}
                {t("beneficios.titulo2")}
              </h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
                {t("beneficios.subtitulo")}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENEFICIOS.map(({ icon: Icon, titulo, descripcion }, i) => (
                <motion.div
                  key={titulo}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: ACCENT + "15" }}
                  >
                    <Icon size={16} style={{ color: ACCENT }} />
                  </span>
                  <div>
                    <p className="text-primary font-semibold text-sm">
                      {titulo}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                      {descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
