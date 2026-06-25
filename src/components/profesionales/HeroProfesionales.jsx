import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroProfesionales({ onCtaPrimario, onCtaSecundario }) {
  const { t } = useTranslation();
  const bullets = t("heroProfesionales.bullets", { returnObjects: true });

  return (
    <section
      className="relative min-h-[580px] overflow-hidden text-white"
      style={{ background: "#2d418e" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.12 }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px]"
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

      {/* Doctor image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute right-0 top-0 h-full w-[100%] hidden md:block"
      >
        <img
          src="/ProfesionalesHero.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 py-16">

          {/* LEFT — text content */}
          <div className="flex-1 max-w-xl">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span
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
                {t("heroProfesionales.badge")}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-fraunces font-bold leading-tight mb-4"
            >
              {t("heroProfesionales.titulo")}{" "}
              <br />
              <span className="font-fraunces italic" style={{ color: ACCENT }}>
                {t("heroProfesionales.titulo_accent")}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/70 text-sm mb-6 leading-relaxed"
            >
              {t("heroProfesionales.subtitulo")}
            </motion.p>

            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 mb-8"
            >
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCtaSecundario}
                className="font-semibold px-6 py-3 rounded-2xl text-sm text-white/85"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                {t("heroProfesionales.cta_secondary")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCtaPrimario}
                className="font-bold px-6 py-3 rounded-2xl text-sm"
                style={{
                  background: ACCENT,
                  color: "#07111f",
                  boxShadow: `0 10px 36px ${ACCENT}55`,
                }}
              >
                {t("heroProfesionales.cta_primary")}
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
