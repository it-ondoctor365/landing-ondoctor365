import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const FAQS_DEFAULT = [
  {
    id: 1,
    pregunta: "¿Necesito descargar alguna aplicación?",
    respuesta:
      "No, OnDoctor365 funciona directamente desde tu navegador. Solo necesitás una conexión a internet y una cámara.",
  },
  {
    id: 2,
    pregunta: "¿Puedo usar el servicio si soy menor de edad?",
    respuesta:
      "Sí, los menores pueden ser atendidos con la presencia y autorización de un adulto responsable.",
  },
  {
    id: 3,
    pregunta: "¿Las recetas digitales tienen validez legal?",
    respuesta:
      "Sí, todas las recetas tienen firma digital certificada y validez legal en todo el territorio nacional.",
  },
  {
    id: 4,
    pregunta: "¿Qué pasa si el médico no puede atenderme al instante?",
    respuesta:
      "Podés reservar un turno programado o unirte a la lista de espera. Te avisamos cuando haya disponibilidad.",
  },
  {
    id: 5,
    pregunta: "¿Mis datos médicos están seguros?",
    respuesta:
      "Sí, toda tu información está encriptada. Solo vos y tu médico tienen acceso a tu historial.",
  },
];

function FAQItem({ pregunta, respuesta }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b last:border-0"
      style={{ borderColor: "#e2e8f0" }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-primary font-semibold text-sm md:text-base">
          {pregunta}
        </span>
        <span
          className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
          style={{
            background: open ? ACCENT + "20" : "#f1f5f9",
            border: `1px solid ${open ? ACCENT + "50" : "#e2e8f0"}`,
          }}
        >
          <ChevronDown
            size={15}
            style={{ color: ACCENT }}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-5">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({
  badge = "PREGUNTAS FRECUENTES",
  titulo = "Tus dudas más",
  tituloAccent = "comunes",
  faqs = FAQS_DEFAULT,
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
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

      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-12">
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
            {badge}
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            {titulo}{" "}
            <span className="italic" style={{ color: ACCENT }}>
              {tituloAccent}
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeInUp" delay={0.1}>
          <div
            className="rounded-3xl px-6 divide-y"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              divideColor: "#e2e8f0",
            }}
          >
            {faqs.map(({ id, pregunta, respuesta }) => (
              <FAQItem key={id} pregunta={pregunta} respuesta={respuesta} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
