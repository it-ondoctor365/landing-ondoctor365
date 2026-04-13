import { Check } from "lucide-react";

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
    ctaStyle:
      "border border-primary text-primary hover:bg-primary hover:text-white",
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
    ctaStyle: "bg-accent hover:bg-accent-dark text-white",
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
    ctaStyle:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    highlight: false,
  },
];

export default function PlanesSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            PLANES
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            Empezá gratis,{" "}
            <span className="text-accent italic">crecé sin límites</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Sin comisiones por consulta. Elegí el plan que mejor se adapte a tu
            práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANES.map(
            ({
              id,
              nombre,
              badge,
              precio,
              periodo,
              descripcion,
              features,
              cta,
              ctaStyle,
              highlight,
            }) => (
              <div
                key={id}
                className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-shadow duration-200
                ${
                  highlight
                    ? "bg-primary font-fraunces text-white shadow-xl scale-[1.02]"
                    : "bg-white font-fraunces text-primary shadow-sm hover:shadow-md"
                }`}
              >
                {/* Badge */}
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest">
                    {badge}
                  </span>
                )}

                {/* Header */}
                <div>
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase mb-2 ${highlight ? "text-accent" : "text-accent"}`}
                  >
                    {nombre}
                  </p>
                  <p
                    className={`text-4xl font-extrabold ${highlight ? "text-white" : "text-primary"}`}
                  >
                    {precio}
                  </p>
                  <p
                    className={`text-xs mt-1 ${highlight ? "text-white/50" : "text-gray-400"}`}
                  >
                    {periodo}
                  </p>
                  <p
                    className={`text-sm mt-3 ${highlight ? "text-white/70" : "text-gray-500"}`}
                  >
                    {descripcion}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span
                        className={
                          highlight ? "text-white/80" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full font-semibold py-3 rounded-full transition-colors duration-200 text-sm ${ctaStyle}`}
                >
                  {cta}
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
