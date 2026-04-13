import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

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

export default function EcosistemaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            PRODUCTOS
          </span>
          <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-black mt-2">
            Un ecosistema completo de{" "}
            <span className="text-accent italic">salud digital</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Desde la atención remota hasta la presencia física con tecnología.
            Cuatro soluciones que se complementan entre sí.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1 — Tótem (imagen izq, contenido abajo) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">[ Imagen Tótem ]</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full w-fit">
                Presencial + IA
              </span>
              <div>
                <h3 className="font-fraunces text-xl font-extrabold text-primary mb-1">
                  Tótem de Telemedicina
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sala virtual de atención médica para instalar en tu empresa.
                  Sensores integrados, videoconsulta en tiempo real y
                  prescripciones electrónicas. Sin médico en el lugar.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {SENSORES.map((s) => (
                  <span
                    key={s}
                    className="border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2 — Reconocimiento + Maletín (columna derecha, 2 cards apiladas) */}
          <div className="flex flex-col gap-4">
            {/* Reconocimiento global */}
            <div className="bg-accent rounded-2xl p-6 text-white flex flex-col gap-3">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                Reconocimiento global
              </span>
              <div>
                <p className="font-fraunces text-6xl font-extrabold leading-none">
                  27
                </p>
                <p className="text-white/80 text-sm mt-1">
                  premios y acreditaciones internacionales en innovación
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {ACREDITACIONES.map((a) => (
                  <span
                    key={a}
                    className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Maletín FDA */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-row gap-0 items-stretch min-h-[180px]">
              <div className="w-2/5 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center px-2">
                  [ Imagen Maletín ]
                </span>
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  Campo / Crítico
                </span>
                <h3 className="font-fraunces text-lg font-extrabold text-primary">
                  Maletín FDA
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Para entornos críticos: embarcaciones, aeronáutico, campo y
                  desierto. Grado médico con conectividad 5G.
                </p>
              </div>
            </div>
          </div>

          {/* 3 — Guardia Inteligente */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-row gap-0 items-stretch min-h-[220px]">
            <div className="w-2/5 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-xs text-center px-2">
                [ Imagen Guardia ]
              </span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center gap-2">
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Clínicas / Hospitales
              </span>
              <h3 className="font-fraunces text-xl font-extrabold text-primary">
                Guardia Inteligente
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Triage con IA para admisión hospitalaria. Reduce los tiempos de
                espera, simplifica la admisión y mejora la precisión diagnóstica
                antes de la consulta médica.
              </p>
            </div>
          </div>

          {/* 4 — Plataforma Digital */}
          <div className="bg-primary rounded-2xl p-6 text-white flex flex-row gap-4 items-center overflow-hidden relative min-h-[220px]">
            <div className="flex-1 flex flex-col gap-3 relative z-10">
              <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full w-fit">
                100% Digital
              </span>
              <h3 className="font-fraunces text-xl font-extrabold">
                Plataforma Digital
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                App y web para consultas 24/7. Agenda inteligente, historia
                clínica unificada y panel corporativo de salud.
              </p>
              <ul className="space-y-1.5 mt-1">
                {PLATAFORMA_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-white/80 text-xs"
                  >
                    <span className="text-accent mt-0.5">●</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Placeholder mockup */}
            <div className="w-32 h-48 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-white/30 text-xs text-center px-2">
                [ Mockup app ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
