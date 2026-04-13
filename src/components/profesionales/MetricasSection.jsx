import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const METRICAS = [
  {
    valor: "3x",
    titulo: "Más consultas en 60 días",
    descripcion:
      "Los profesionales que usan OnDoctor365 triplican su cantidad de consultas en los primeros dos meses.",
  },
  {
    valor: "$0",
    titulo: "Sin comisiones ocultas",
    descripcion:
      "Cobrás el 100% de cada consulta. Sin sorpresas, sin retenciones, sin letra chica.",
  },
  {
    valor: "+40hs",
    titulo: "Menos trabajo administrativo",
    descripcion:
      "Ahorrás tiempo en agenda, cobros y documentación al mes para dedicarle más a tus pacientes.",
  },
];

export default function MetricasSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            IMPACTO
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-white mt-2">
            Tus números, <span className="text-accent italic">tu éxito</span>
          </h2>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            Profesionales como vos que están creciendo con OnDoctor365.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICAS.map(({ valor, titulo, descripcion }) => (
            <StaggerItem
              key={valor}
              className="bg-white/10 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors duration-200"
            >
              <p className="text-5xl font-extrabold text-accent mb-3">
                {valor}
              </p>
              <p className="text-white font-bold text-lg mb-2">{titulo}</p>
              <p className="text-white/60 text-sm leading-relaxed">
                {descripcion}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
