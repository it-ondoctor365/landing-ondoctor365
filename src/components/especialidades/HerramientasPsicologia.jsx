import { motion } from "framer-motion";
import { Video, FileText, BookOpen, Calendar, Banknote, BarChart2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";

const ICONS = [Video, FileText, BookOpen, Calendar, Banknote, BarChart2];

export default function HerramientasPsicologia() {
  const { t } = useTranslation();
  const items = t("psicologia.herramientas.items", { returnObjects: true });

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#f8fafc" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: PRIMARY, opacity: 0.05 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
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
            {t("psicologia.herramientas.badge")}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            {t("psicologia.herramientas.titulo")}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {t("psicologia.herramientas.titulo_accent")}
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-base">
            {t("psicologia.herramientas.subtitulo")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ titulo, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden group"
                style={{ background: "white", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-[50px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: ACCENT }}
                />

                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: PRIMARY + "0e", color: PRIMARY }}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-fraunces font-bold text-primary text-base mb-1.5">
                    {titulo}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>

                <div
                  className="mt-auto h-px"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}30, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
