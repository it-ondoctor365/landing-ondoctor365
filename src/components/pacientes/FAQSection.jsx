import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-primary font-semibold text-sm md:text-base">
          {pregunta}
        </span>
        <ChevronDown
          size={18}
          className={`text-accent shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{respuesta}</p>
      </div>
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
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            {titulo} <span className="text-accent italic">{tituloAccent}</span>
          </h2>
        </div>
        <div className="bg-light-bg rounded-2xl px-6 divide-y divide-gray-100">
          {faqs.map(({ id, pregunta, respuesta }) => (
            <FAQItem key={id} pregunta={pregunta} respuesta={respuesta} />
          ))}
        </div>
      </div>
    </section>
  );
}
