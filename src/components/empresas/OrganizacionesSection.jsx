import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ORGANIZACIONES = [
  {
    id: "empresa",
    label: "Empresa de Retail",
    metrica: "-32%",
    metricaLabel: "Ausentismo",
    titulo: "Menos ausentismo,\nMás productividad",
    descripcion:
      "Tus empleados acceden a atención médica inmediata sin salir del trabajo. Menos días perdidos, más energía y compromiso en el equipo.",
    cta: "Saber más →",
  },
  {
    id: "clinica",
    label: "Clínica / Hospital",
    metrica: "-45%",
    metricaLabel: "Tiempos de espera",
    titulo: "Admisión inteligente,\nmenos cuellos de botella",
    descripcion:
      "Optimizá el triage y la admisión hospitalaria con IA. Reducí los tiempos de espera y mejorá la experiencia del paciente desde el primer contacto.",
    cta: "Saber más →",
  },
  {
    id: "obraSocial",
    label: "Obra Social",
    metrica: "+60%",
    metricaLabel: "Uso preventivo",
    titulo: "Más afiliados activos,\nmenos costos de internación",
    descripcion:
      "Promové el uso preventivo de la salud entre tus afiliados. Reducí internaciones evitables y mejorá los indicadores de tu obra social.",
    cta: "Saber más →",
  },
  {
    id: "sindicato",
    label: "Sindicato / Gremio",
    metrica: "24/7",
    metricaLabel: "Disponibilidad",
    titulo: "Un beneficio real\npara tus afiliados",
    descripcion:
      "Ofrecé atención médica online como beneficio diferencial. Sin filas, sin traslados, disponible en cualquier momento y desde cualquier lugar.",
    cta: "Saber más →",
  },
];

export default function OrganizacionesSection() {
  const [active, setActive] = useState("empresa");
  const org = ORGANIZACIONES.find((o) => o.id === active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-12">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            SOLUCIONES
          </span>
          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2">
            OnDoctor365 se adapta a{" "}
            <span className="text-accent italic">
              cada tipo de organización.
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Casos de uso diseñados para tu sector.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection
          variant="fadeInUp"
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {ORGANIZACIONES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  active === id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200"
                }`}
            >
              {label}
            </button>
          ))}
        </AnimatedSection>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Left — copy */}
            <div className="flex-1 flex flex-col justify-center gap-4 py-8">
              <h3 className="font-fraunces text-2xl font-extrabold text-primary leading-snug whitespace-pre-line">
                {org.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {org.descripcion}
              </p>
              <button className="text-accent font-semibold text-sm hover:underline w-fit mt-2">
                {org.cta}
              </button>
            </div>

            {/* Right — imagen + métrica superpuesta */}
            <div className="w-full md:w-2/5 relative">
              <div className="bg-gray-200 rounded-2xl w-full min-h-[380px] flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  [ Imagen {org.label} ]
                </span>
              </div>
              {/* Métrica flotante */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
                <p className="font-fraunces text-2xl font-extrabold text-accent">
                  {org.metrica}
                </p>
                <p className="text-gray-600 text-sm">{org.metricaLabel}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
