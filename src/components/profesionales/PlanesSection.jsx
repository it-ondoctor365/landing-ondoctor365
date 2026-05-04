import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const PLANES = [
  {
    id: "especial",
    nombre: "Especial",
    badge: null,
    precio: "$0",
    periodo: "gratis por siempre",
    descripcion: "Ideal para comenzar a atender y conocer la plataforma.",
    features: [
      "Perfil público en OnDoctor365",
      "Hasta 15 consultas por mes",
      "Videoconsulta incluida",
      "Recetas digitales",
    ],
    cta: "Crear cuenta gratuita",
    highlight: false,
  },
  {
    id: "pro",
    nombre: "Pro",
    badge: "MÁS POPULAR",
    precio: "$9.990",
    periodo: "por mes",
    descripcion: "Para profesionales que quieren hacer crecer su práctica.",
    features: [
      "Todo lo del plan Especial",
      "Consultas ilimitadas",
      "Historia clínica digital",
      "Agenda de videoconsultas",
      "Panel de métricas avanzado",
      "Órdenes de estudios digitales",
      "Soporte prioritario",
    ],
    cta: "Probar 30 días gratis",
    highlight: true,
  },
  {
    id: "clinica",
    nombre: "Clínica / Equipo",
    badge: null,
    precio: "A medida",
    periodo: "edición corporativa",
    descripcion:
      "Para clínicas y equipos médicos que necesitan una solución escalable e integrada.",
    features: [
      "Todo lo del plan Pro",
      "Múltiples profesionales",
      "Sistema de atención integrado",
      "Alta e integración con HIS",
      "Branding personalizado",
      "Ejecutivo de cuenta dedicado",
    ],
    cta: "Hablar con ventas",
    highlight: false,
  },
];

export default function PlanesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
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
            PLANES
          </motion.span>

          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            Empezá gratis,{" "}
            <span className="italic" style={{ color: ACCENT }}>
              crecé sin límites
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
            Sin comisiones por consulta. Elegí el plan que mejor se adapte a tu
            práctica.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANES.map(
            (
              {
                id,
                nombre,
                badge,
                precio,
                periodo,
                descripcion,
                features,
                cta,
                highlight,
              },
              i,
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative rounded-3xl p-8 flex flex-col gap-6 h-full ${
                  highlight ? "scale-[1.02]" : ""
                }`}
                style={
                  highlight
                    ? {
                        background:
                          "linear-gradient(145deg, #2d418e 0%, #1a2860 60%, #0d1f4f 100%)",
                        border: `1px solid ${ACCENT}40`,
                        boxShadow: `0 0 60px ${ACCENT}20`,
                      }
                    : { background: "#f8fafc", border: "1px solid #e2e8f0" }
                }
              >
                {/* Corner glow */}
                {highlight && (
                  <div
                    className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
                    style={{ background: ACCENT, opacity: 0.2 }}
                  />
                )}

                {/* Badge */}
                {badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full tracking-widest"
                    style={{ background: ACCENT, color: "#FFFFFF" }}
                  >
                    {badge}
                  </span>
                )}

                {/* Header */}
                <div className="relative">
                  <p
                    className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
                    style={{ color: ACCENT }}
                  >
                    {nombre}
                  </p>
                  <p
                    className="font-fraunces text-4xl font-extrabold"
                    style={{ color: highlight ? "#fff" : "#2d418e" }}
                  >
                    {precio}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      color: highlight ? "rgba(255,255,255,0.5)" : "#94a3b8",
                    }}
                  >
                    {periodo}
                  </p>
                  <p
                    className="text-sm mt-3 leading-relaxed"
                    style={{
                      color: highlight ? "rgba(255,255,255,0.7)" : "#64748b",
                    }}
                  >
                    {descripcion}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{
                    background: highlight
                      ? `linear-gradient(90deg, ${ACCENT}50, transparent)`
                      : "#e2e8f0",
                  }}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1 relative">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold"
                        style={{ background: ACCENT + "25", color: ACCENT }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: highlight
                            ? "rgba(255,255,255,0.8)"
                            : "#475569",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full font-bold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 relative"
                  style={
                    highlight
                      ? {
                          background: ACCENT,
                          color: "#07111f",
                          boxShadow: `0 10px 36px ${ACCENT}55`,
                        }
                      : {
                          background: "transparent",
                          color: "#2d418e",
                          border: "1px solid #2d418e40",
                        }
                  }
                >
                  {cta}
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
