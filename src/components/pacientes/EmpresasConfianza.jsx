import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const EMPRESAS = [
  { id: "osak", logo: "/logo-osak.svg", alt: "OSAK" },
  { id: "samak", logo: "/logo-samak.svg", alt: "SAMAK" },
  { id: "apresma", logo: "/a2-logo-apresma.svg", alt: "APresMA" },
];

export default function EmpresasConfianza() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px]"
          style={{ background: ACCENT, opacity: 0.06 }}
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
        <AnimatedSection variant="fadeInUp">
          <p className="text-center text-primary font-semibold text-lg md:text-xl max-w-2xl mx-auto leading-snug mb-12">
            Con la{" "}
            <span className="font-extrabold" style={{ color: ACCENT }}>
              confianza
            </span>{" "}
            de organizaciones de salud y profesionales que apuestan por una{" "}
            <span className="font-extrabold" style={{ color: ACCENT }}>
              atención médica más eficiente.
            </span>
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {EMPRESAS.map(({ id, logo, alt }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="cursor-default"
            >
              <div
                className="h-16 px-8 rounded-2xl flex items-center justify-center"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <img
                  src={logo}
                  alt={alt}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
