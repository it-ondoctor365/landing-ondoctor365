import { useState } from "react";

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
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            SOLUCIONES
          </span>
          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-black mt-2">
            OnDoctor365 se adapta a{" "}
            <span className="text-accent italic">
              cada tipo de organización.
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Casos de uso diseñados para tu sector.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left — copy */}
          <div className="flex-1 bg-white rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-fraunces text-2xl font-extrabold text-primary mb-3 leading-snug whitespace-pre-line">
                {org.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {org.descripcion}
              </p>
            </div>
            <button className="mt-8 text-accent font-semibold text-sm hover:underline w-fit">
              {org.cta}
            </button>
          </div>

          {/* Right — imagen + métrica */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            {/* Placeholder imagen */}
            <div className="flex-1 bg-gray-200 rounded-2xl flex items-center justify-center min-h-[350px]">
              <span className="text-gray-400 text-sm">
                [ Imagen {org.label} ]
              </span>
              {/* Métrica */}
              <div className="bg-white rounded-2xl p-5 text-white flex items-center gap-2 max-h-[30px] relative left-[5%] top-[35%]">
                <p className="font-fraunces text-3xl font-extrabold text-accent">
                  {org.metrica}
                </p>
                <p className="text-black/70 text-sm">{org.metricaLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
