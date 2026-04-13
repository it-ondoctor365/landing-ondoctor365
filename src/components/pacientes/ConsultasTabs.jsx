import { useState } from "react";
import { FileText, ClipboardList, Monitor, ShoppingBag } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-10">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            ESPECIALIDADES
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces italic font-extrabold text-primary mt-2">
            ¿Qué tipo de consulta{" "}
            <span className="text-accent">necesitás?</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Elegí tu especialidad y encontrá profesionales disponibles en
            minutos.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection
          variant="fadeInUp"
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {ESPECIALIDADES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  activeTab === id
                    ? "bg-primary text-white"
                    : "bg-light-bg text-gray-600 hover:bg-primary/10 hover:text-primary"
                }`}
            >
              {label}
            </button>
          ))}
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection variant="fadeInUp" delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-6 items-stretch"
            >
              {/* Features card */}
              <div className="flex-1 bg-light-bg rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {active.label}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {active.descripcion}
                </p>
                <StaggerContainer className="space-y-4">
                  {active.features.map(({ icon: Icon, text }) => (
                    <StaggerItem key={text}>
                      <div className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-accent" />
                        </span>
                        {text}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Precio card */}
              <div className="w-full md:w-64 bg-primary rounded-2xl p-8 flex flex-col justify-between text-white">
                <div>
                  <p className="text-white/60 text-sm mb-1">
                    Precio por consulta
                  </p>
                  <p className="text-4xl font-extrabold text-accent">
                    {active.moneda}
                    {active.precio}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{active.periodo}</p>
                </div>
                <button className="mt-8 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm">
                  Reservar turno →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
