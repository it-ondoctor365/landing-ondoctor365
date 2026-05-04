import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ACCENT = "#32b9cc";
const EASE = [0.16, 1, 0.3, 1];

const ACREDITACIONES = ["BARDA", "UCSF", "CHIME", "Health 2.0"];
const SENSORES = [
  "ECG",
  "SpO2",
  "Presión arterial",
  "Temperatura",
  "Otoscopio digital",
  "Videoconsulta",
];
const PLATAFORMA_FEATURES = [
  "Videoconsultas desde cualquier dispositivo",
  "Historia clínica digital unificada",
  "Panel de salud corporativo y ausentismo",
  "Recetas y órdenes electrónicas",
];

function useCountUp(target, inView, duration = 1.7) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    let t0 = null;
    function tick(ts) {
      if (!t0) t0 = ts;
      const t = Math.min((ts - t0) / (duration * 1000), 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return count;
}

function cardReveal(inView, delay = 0) {
  return {
    initial: { opacity: 0, y: 64, scale: 0.94, filter: "blur(8px)" },
    animate: inView
      ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      : { opacity: 0, y: 64, scale: 0.94, filter: "blur(8px)" },
    transition: { duration: 0.78, delay, ease: EASE },
    whileHover: {
      y: -6,
      boxShadow: `0 28px 64px -14px rgba(45,65,142,0.22), 0 0 0 1.5px ${ACCENT}70`,
      transition: { duration: 0.22 },
    },
  };
}

function Shimmer({ inView, delay = 0, light = false }) {
  return (
    <motion.div
      aria-hidden
      className="absolute top-0 bottom-0 pointer-events-none"
      style={{
        left: "-50%",
        width: "50%",
        background: `linear-gradient(90deg, transparent 0%, ${
          light ? "rgba(255,255,255,0.16)" : `${ACCENT}33`
        } 50%, transparent 100%)`,
        zIndex: 20,
      }}
      initial={{ x: "0%" }}
      animate={inView ? { x: "400%" } : { x: "0%" }}
      transition={{
        duration: 1.2,
        delay: delay + 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
    />
  );
}

function Watermark({ num, inView, delay = 0, light = false }) {
  return (
    <motion.span
      aria-hidden
      className="absolute top-3 right-5 font-fraunces font-extrabold select-none pointer-events-none"
      style={{
        fontSize: "5.5rem",
        lineHeight: 1,
        color: light ? "rgba(255,255,255,0.07)" : "rgba(45,65,142,0.05)",
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.8, delay: delay + 0.45, ease: EASE }}
    >
      {num}
    </motion.span>
  );
}

function FadeIn({ inView, delay = 0, children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function EcosistemaSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, amount: 0.4 });

  const r1 = useRef(null);
  const v1 = useInView(r1, { once: true, amount: 0.08 });
  const r2 = useRef(null);
  const v2 = useInView(r2, { once: true, amount: 0.08 });
  const r3 = useRef(null);
  const v3 = useInView(r3, { once: true, amount: 0.08 });
  const r4 = useRef(null);
  const v4 = useInView(r4, { once: true, amount: 0.08 });
  const r5 = useRef(null);
  const v5 = useInView(r5, { once: true, amount: 0.08 });

  const count = useCountUp(27, v2);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
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
        {/* Heading */}
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
            style={{
              color: ACCENT,
              borderColor: ACCENT + "40",
              background: ACCENT + "12",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
            />
            PRODUCTOS
          </motion.span>

          <motion.h2
            className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2"
            initial={{ opacity: 0, y: 36 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            Un ecosistema completo de{" "}
            <span className="italic" style={{ color: ACCENT }}>
              salud digital
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-3 max-w-lg mx-auto text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
          >
            Desde la atención remota hasta la presencia física con tecnología.
            Cuatro soluciones que se complementan entre sí.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1 — Tótem */}
          <motion.div
            ref={r1}
            className="rounded-3xl overflow-hidden flex flex-col relative"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            {...cardReveal(v1, 0)}
          >
            <Shimmer inView={v1} delay={0} />
            <Watermark num="01" inView={v1} delay={0} />

            <div
              className="w-full h-64 flex items-end justify-center relative z-10 overflow-hidden"
              style={{ background: "#eef1f5" }}
            >
              <img
                src="FotoTotem.png"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 flex flex-col gap-4 relative z-10">
              <FadeIn inView={v1} delay={0.28}>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border w-fit"
                  style={{
                    color: "#2d418e",
                    borderColor: "#2d418e40",
                    background: "#2d418e12",
                  }}
                >
                  Presencial + IA
                </span>
              </FadeIn>
              <FadeIn inView={v1} delay={0.38}>
                <h3 className="font-fraunces text-xl font-extrabold text-primary mb-1">
                  Tótem de Telemedicina
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sala virtual de atención médica para instalar en tu empresa.
                  Sensores integrados, videoconsulta en tiempo real y
                  prescripciones electrónicas. Sin médico en el lugar.
                </p>
              </FadeIn>
              <div className="flex flex-wrap gap-2">
                {SENSORES.map((s, i) => (
                  <motion.span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "#f1f5f9",
                      border: "1px solid #e2e8f0",
                      color: "#64748b",
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={
                      v1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }
                    }
                    transition={{
                      delay: 0.46 + i * 0.07,
                      type: "spring",
                      stiffness: 380,
                      damping: 22,
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* 2 — Reconocimiento global */}
            <motion.div
              ref={r2}
              className="rounded-3xl p-6 text-white flex flex-col gap-3 overflow-hidden relative"
              style={{
                background: `linear-gradient(145deg, ${ACCENT}22 0%, rgba(45,65,142,0.9) 100%)`,
                border: `1px solid ${ACCENT}45`,
                boxShadow: `0 0 60px ${ACCENT}15`,
                backgroundColor: "#2d418e",
              }}
              {...cardReveal(v2, 0.14)}
            >
              <Shimmer inView={v2} delay={0.14} light />
              <Watermark num="02" inView={v2} delay={0.14} light />

              <FadeIn inView={v2} delay={0.36} className="relative z-10">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border w-fit"
                  style={{
                    color: ACCENT,
                    borderColor: ACCENT + "50",
                    background: ACCENT + "18",
                  }}
                >
                  Reconocimiento global
                </span>
              </FadeIn>
              <FadeIn inView={v2} delay={0.46} className="relative z-10">
                <p
                  className="font-fraunces text-6xl font-extrabold leading-none"
                  style={{ color: ACCENT }}
                >
                  {count}
                </p>
                <p className="text-white/80 text-sm mt-1">
                  premios y acreditaciones internacionales en innovación
                </p>
              </FadeIn>
              <div className="flex flex-wrap gap-2 mt-1 relative z-10">
                {ACREDITACIONES.map((a, i) => (
                  <motion.span
                    key={a}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: ACCENT + "25",
                      color: ACCENT,
                      border: `1px solid ${ACCENT}40`,
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={
                      v2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }
                    }
                    transition={{
                      delay: 0.54 + i * 0.09,
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                  >
                    {a}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* 3 — Maletín FDA */}
            <motion.div
              ref={r3}
              className="flex-1 rounded-3xl overflow-hidden flex flex-col sm:flex-row items-stretch relative"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              {...cardReveal(v3, 0.24)}
            >
              <Shimmer inView={v3} delay={0.24} />
              <Watermark num="03" inView={v3} delay={0.24} />

              <div
                className="w-full sm:w-2/5 h-40 sm:h-full flex items-center justify-center relative z-10"
                style={{ background: "#eef1f5" }}
              >
                <img src="Maletin.png"></img>
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center gap-2 relative z-10">
                <FadeIn inView={v3} delay={0.42}>
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    Campo / Crítico
                  </span>
                </FadeIn>
                <FadeIn inView={v3} delay={0.52}>
                  <h3 className="font-fraunces text-lg font-extrabold text-primary">
                    Maletín FDA
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Para entornos críticos: embarcaciones, aeronáutico, campo y
                    desierto. Grado médico con conectividad 5G.
                  </p>
                </FadeIn>
              </div>
            </motion.div>
          </div>

          {/* 4 — Guardia Inteligente */}
          <motion.div
            ref={r4}
            className="rounded-3xl overflow-hidden flex flex-col sm:flex-row items-stretch relative"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            {...cardReveal(v4, 0.08)}
          >
            <Shimmer inView={v4} delay={0.08} />
            <Watermark num="04" inView={v4} delay={0.08} />

            <div className="w-full sm:w-3/5 h-48 sm:h-auto relative z-10 overflow-hidden">
              <img
                src="TotemGA.png"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center gap-2 relative z-10">
              <FadeIn inView={v4} delay={0.28}>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border w-fit"
                  style={{
                    color: ACCENT,
                    borderColor: ACCENT + "40",
                    background: ACCENT + "12",
                  }}
                >
                  Clínicas / Hospitales
                </span>
              </FadeIn>
              <FadeIn inView={v4} delay={0.38}>
                <h3 className="font-fraunces text-xl font-extrabold text-primary">
                  Guardia Inteligente
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Triage con IA para admisión hospitalaria. Reduce los tiempos
                  de espera, simplifica la admisión y mejora la precisión
                  diagnóstica antes de la consulta médica.
                </p>
              </FadeIn>
            </div>
          </motion.div>

          {/* 5 — Plataforma Digital */}
          <motion.div
            ref={r5}
            className="rounded-3xl p-6 text-white flex flex-col sm:flex-row gap-4 items-start sm:items-center overflow-hidden relative"
            style={{
              background: `linear-gradient(145deg, #2d418e 0%, #1a2860 100%)`,
              border: `1px solid ${ACCENT}30`,
              boxShadow: `0 0 60px ${ACCENT}10`,
            }}
            {...cardReveal(v5, 0.18)}
          >
            <Shimmer inView={v5} delay={0.18} light />
            <Watermark num="05" inView={v5} delay={0.18} light />

            <div className="flex-1 flex flex-col gap-3 relative z-10">
              <FadeIn inView={v5} delay={0.36}>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border w-fit"
                  style={{
                    color: ACCENT,
                    borderColor: ACCENT + "50",
                    background: ACCENT + "18",
                  }}
                >
                  100% Digital
                </span>
              </FadeIn>
              <FadeIn inView={v5} delay={0.46}>
                <h3 className="font-fraunces text-xl font-extrabold">
                  Plataforma Digital
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  App y web para consultas 24/7. Agenda inteligente, historia
                  clínica unificada y panel corporativo de salud.
                </p>
              </FadeIn>
              <div className="space-y-1.5 mt-1">
                {PLATAFORMA_FEATURES.map((f, i) => (
                  <motion.div
                    key={f}
                    className="flex items-start gap-2 text-white/80 text-xs"
                    initial={{ opacity: 0, x: -18 }}
                    animate={v5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                    transition={{
                      delay: 0.52 + i * 0.09,
                      duration: 0.44,
                      ease: EASE,
                    }}
                  >
                    <span style={{ color: ACCENT }} className="mt-0.5 shrink-0">
                      ●
                    </span>
                    {f}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[340px] shrink-0 relative z-10 flex items-center justify-center">
              <img src="Mockups.png" className="w-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
