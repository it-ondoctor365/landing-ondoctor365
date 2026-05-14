import { UserCircle, ShieldCheck, Users, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";
const ICONS = [UserCircle, ShieldCheck, Users, CreditCard];

export default function PasosOnboarding() {
  const { t } = useTranslation();
  const pasos = t("pasosOnboarding.items", { returnObjects: true });

  return (
    <section id="como-unirse" className="relative py-24 overflow-hidden bg-white">
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
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
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
            {t("pasosOnboarding.badge")}
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            {t("pasosOnboarding.titulo")}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {t("pasosOnboarding.titulo_accent")}
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
            {t("pasosOnboarding.subtitulo")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden md:block"
            style={{
              background: `linear-gradient(90deg, transparent, ${ACCENT}40, ${ACCENT}40, transparent)`,
            }}
          />

          {pasos.map(({ num, titulo, descripcion }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-[40px] pointer-events-none"
                  style={{ background: ACCENT, opacity: 0.08 }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "#2d418e" }}
                  >
                    <Icon size={22} style={{ color: ACCENT }} />
                  </div>
                  <span
                    className="font-mono text-xs font-bold opacity-30"
                    style={{ color: "#2d418e" }}
                  >
                    {num}
                  </span>
                </div>

                <div>
                  <p className="text-primary font-bold text-sm mb-1">{titulo}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{descripcion}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
