import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";

const CARD_IMAGES = [
  "/CardLogin-.png",
  "/CardMediktor.png",
  "/CardLlamada.png",
];

export default function PasosSection() {
  const { t } = useTranslation();

  const PASOS = [
    {
      numero: 1,
      titulo: t("pasos.items.paso1_titulo"),
      descripcion: t("pasos.items.paso1_desc"),
      img: CARD_IMAGES[0],
    },
    {
      numero: 2,
      titulo: t("pasos.items.paso2_titulo"),
      descripcion: t("pasos.items.paso2_desc"),
      img: CARD_IMAGES[1],
      imgMaxHeight: "340px",
    },
    {
      numero: 3,
      titulo: t("pasos.items.paso3_titulo"),
      descripcion: t("pasos.items.paso3_desc"),
      img: CARD_IMAGES[2],
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.07 }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: PRIMARY, opacity: 0.06 }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
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
            {t("pasos.badge")}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2">
            {t("pasos.titulo")}{" "}
            <span style={{ color: ACCENT }}>{t("pasos.titulo_accent")}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PASOS.map(({ numero, titulo, descripcion, img, imgMaxHeight }, i) => (
            <motion.div
              key={numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden flex flex-col"
              style={{ background: PRIMARY }}
            >
              {/* Card image */}
              <div className="w-full overflow-hidden" style={{ background: PRIMARY }}>
                <img
                  src={img}
                  alt={titulo}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: imgMaxHeight ?? "260px" }}
                />
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 px-6 py-5 gap-2">
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: ACCENT }}
                  >
                    {numero}
                  </span>
                  <h3 className="font-bold text-base" style={{ color: ACCENT }}>
                    {titulo}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-blue-100/80 pl-10">
                  {descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
