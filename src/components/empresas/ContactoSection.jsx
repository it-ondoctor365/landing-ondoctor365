import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

const CONTACTO_INFO = [
  { icon: Phone, texto: "+54 11 0000-0000" },
  { icon: Mail, texto: "empresas@ondoctor365.com" },
  { icon: MapPin, texto: "Buenos Aires, Argentina" },
  { icon: Globe, texto: "www.ondoctor365.com" },
];

export default function ContactoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px]"
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
        <AnimatedSection
          variant="fadeInLeft"
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Left — copy */}
          <div className="flex-1">
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
              CONTACTO
            </motion.span>

            <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-3 leading-tight">
              Hablemos de{" "}
              <span className="italic" style={{ color: ACCENT }}>
                tu empresa
              </span>
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-sm leading-relaxed">
              Completá el formulario y un especialista se pondrá en contacto
              para diseñar la solución ideal para tu organización.
            </p>

            <ul className="space-y-3">
              {CONTACTO_INFO.map(({ icon: Icon, texto }, i) => (
                <motion.li
                  key={texto}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="flex items-center gap-3 text-gray-500 text-sm"
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: ACCENT + "15" }}
                  >
                    <Icon size={16} style={{ color: ACCENT }} />
                  </span>
                  {texto}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — formulario */}
          <div
            className="w-full md:w-3/5 rounded-3xl p-8 relative overflow-hidden"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
              style={{ background: ACCENT, opacity: 0.1 }}
            />

            <h3 className="font-fraunces text-xl font-extrabold text-primary mb-6 relative">
              Solicitar una demo
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {[
                { label: "Nombre", placeholder: "Tu nombre", type: "text" },
                { label: "Apellido", placeholder: "Tu apellido", type: "text" },
                { label: "Empresa", placeholder: "Nombre de tu empresa", type: "text" },
                { label: "Cargo", placeholder: "Tu cargo", type: "text" },
                { label: "Email corporativo", placeholder: "email@empresa.com", type: "email" },
                { label: "Teléfono", placeholder: "+54 11 0000-0000", type: "tel" },
              ].map(({ label, placeholder, type }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="bg-white border border-[#e2e8f0] rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-gray-600">
                  Mensaje (opcional)
                </label>
                <textarea
                  placeholder="Contanos sobre tu organización y qué necesitás..."
                  rows={3}
                  className="bg-white border border-[#e2e8f0] rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full font-bold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 relative"
              style={{
                background: ACCENT,
                color: "#07111f",
                boxShadow: `0 10px 36px ${ACCENT}55`,
              }}
            >
              Enviar solicitud
              <ArrowRight size={15} />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
