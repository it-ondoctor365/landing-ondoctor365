import { useState } from "react";
import {
  FileText,
  ClipboardList,
  Monitor,
  ShoppingBag,
  Stethoscope,
  Brain,
  Apple,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const META = {
  clinico: { Icon: Stethoscope, accent: "#32b9cc", num: "01" },
  psicologia: { Icon: Brain, accent: "#32b9cc", num: "02" },
  nutricion: { Icon: Apple, accent: "#32b9cc", num: "03" },
  guardia: { Icon: ShieldCheck, accent: "#32b9cc", num: "04" },
};

const TRUST_ITEMS = [
  "Sin obra social requerida",
  "Disponible las 24hs",
  "Profesionales certificados",
];

const ESPECIALIDADES = [
  {
    id: "clinico",
    label: "Médico Clínico",
    descripcion:
      "Consultas generales, diagnósticos, seguimiento de salud y más.",
    features: [
      { icon: FileText, text: "Recetas digitales ilimitadas" },
      { icon: ClipboardList, text: "Historia clínica digital" },
      { icon: Monitor, text: "Videoconsulta HD" },
      { icon: ShoppingBag, text: "Órdenes de estudios" },
    ],
    precio: "55.000",
    moneda: "$",
    periodo: "por consulta",
  },
  {
    id: "psicologia",
    label: "Psicología",
    descripcion: "Atención psicológica con profesionales certificados.",
    features: [
      { icon: FileText, text: "Sesiones individuales" },
      { icon: ClipboardList, text: "Seguimiento continuo" },
      { icon: Monitor, text: "Videoconsulta HD" },
      { icon: ShoppingBag, text: "Notas de sesión" },
    ],
    precio: "60.000",
    moneda: "$",
    periodo: "por consulta",
  },
  {
    id: "nutricion",
    label: "Nutrición",
    descripcion: "Planes alimentarios personalizados con nutricionistas.",
    features: [
      { icon: FileText, text: "Plan alimentario digital" },
      { icon: ClipboardList, text: "Seguimiento de peso" },
      { icon: Monitor, text: "Videoconsulta HD" },
      { icon: ShoppingBag, text: "Lista de compras" },
    ],
    precio: "50.000",
    moneda: "$",
    periodo: "por consulta",
  },
  {
    id: "guardia",
    label: "Guardia ENT",
    descripcion: "Atención de urgencias las 24hs con médicos de guardia.",
    features: [
      { icon: FileText, text: "Atención inmediata" },
      { icon: ClipboardList, text: "Derivación si es necesario" },
      { icon: Monitor, text: "Videoconsulta HD" },
      { icon: ShoppingBag, text: "Recetas de urgencia" },
    ],
    precio: "45.000",
    moneda: "$",
    periodo: "por consulta",
  },
];

export default function ConsultasTabs() {
  const [activeTab, setActiveTab] = useState("clinico");
  const active = ESPECIALIDADES.find((e) => e.id === activeTab);
  const { Icon: SpecIcon, accent, num } = META[activeTab];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Animated background orbs — shift with tab */}
      <AnimatePresence>
        <motion.div
          key={activeTab + "-orb"}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        >
          <div
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: accent, opacity: 0.07 }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "#2d418e", opacity: 0.06 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Heading ── */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <motion.span
            key={activeTab + "-badge"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
            style={{
              color: accent,
              borderColor: accent + "40",
              background: accent + "12",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
            />
            ESPECIALIDADES — {num}
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-fraunces italic font-extrabold text-primary leading-tight">
            ¿Qué tipo de consulta{" "}
            <motion.span
              key={activeTab + "-h"}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ color: accent }}
            >
              necesitás?
            </motion.span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Elegí tu especialidad y encontrá profesionales disponibles en
            minutos.
          </p>
        </AnimatedSection>

        {/* ── Tab selector ── */}
        <AnimatedSection
          variant="fadeInUp"
          delay={0.1}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {ESPECIALIDADES.map((esp) => {
            const m = META[esp.id];
            const TabIcon = m.Icon;
            const isActive = activeTab === esp.id;
            return (
              <motion.button
                key={esp.id}
                onClick={() => setActiveTab(esp.id)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors duration-300"
                style={{
                  background: isActive ? m.accent + "15" : "#f8fafc",
                  border: `1px solid ${isActive ? m.accent + "70" : "#e2e8f0"}`,
                  color: isActive ? m.accent : "#64748b",
                  boxShadow: isActive ? `0 0 24px ${m.accent}30` : "none",
                }}
              >
                <span
                  className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: isActive ? m.accent + "20" : "#e2e8f0",
                  }}
                >
                  <TabIcon size={14} />
                </span>
                {esp.label}
                <span className="font-mono text-[10px] opacity-40 ml-0.5">
                  {m.num}
                </span>
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* ── Content panels ── */}
        <AnimatedSection variant="fadeInUp" delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            >
              {/* ── Features card ── */}
              <div
                className="lg:col-span-2 rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] pointer-events-none"
                  style={{ background: accent, opacity: 0.15 }}
                />

                {/* Specialty header */}
                <div className="flex items-start gap-4 mb-8 relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      background: accent + "20",
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    <SpecIcon size={24} style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-fraunces italic font-bold text-primary">
                      {active.label}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {active.descripcion}
                    </p>
                  </div>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.features.map(({ icon: FeatIcon, text }, i) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.07,
                        duration: 0.38,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center gap-3 p-4 rounded-2xl group cursor-default"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                        style={{ background: accent + "15" }}
                      >
                        <FeatIcon size={16} style={{ color: accent }} />
                      </span>
                      <span className="text-gray-600 text-sm font-medium">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Price card ── */}
              <motion.div
                className="rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${accent}22 0%, rgba(45,65,142,0.55) 100%)`,
                  border: `1px solid ${accent}45`,
                  boxShadow: `0 0 60px ${accent}15`,
                }}
              >
                {/* Top glow orb */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
                  style={{ background: accent, opacity: 0.25 }}
                />

                <div className="relative">
                  <p className="text-black/60 text-[11px] font-bold tracking-[0.16em] uppercase mb-4">
                    Precio por consulta
                  </p>

                  <motion.p
                    key={activeTab + "-price"}
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 22,
                    }}
                    className="text-5xl font-extrabold tracking-tight leading-none"
                    style={{ color: accent }}
                  >
                    {active.moneda}
                    {active.precio}
                  </motion.p>
                  <p className="text-black/50 text-xs mt-2">{active.periodo}</p>
                </div>

                <div
                  className="my-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${accent}50, transparent)`,
                  }}
                />

                <div className="relative space-y-2.5 mb-8">
                  {TRUST_ITEMS.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
                      className="flex items-center gap-2.5"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold"
                        style={{
                          background: accent + "25",
                          color: accent,
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-black/70 text-xs">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2"
                  style={{
                    background: accent,
                    color: "#07111f",
                    boxShadow: `0 10px 36px ${accent}55`,
                  }}
                >
                  Reservar turno
                  <ArrowRight size={15} />
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
