import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";

const CONTACTO_INFO = [
  { icon: Phone, texto: "+54 11 0000-0000" },
  { icon: Mail, texto: "empresas@ondoctor365.com" },
  { icon: MapPin, texto: "Buenos Aires, Argentina" },
  { icon: Globe, texto: "www.ondoctor365.com" },
];

export default function ContactoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInLeft" className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left — copy */}
          <div className="flex-1">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              CONTACTO
            </span>
            <h2 className="font-fraunces text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-3 leading-tight">
              Hablemos de <span className="text-accent italic">tu empresa</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm">
              Completá el formulario y un especialista se pondrá en contacto
              para diseñar la solución ideal para tu organización.
            </p>

            <ul className="space-y-4">
              {CONTACTO_INFO.map(({ icon: Icon, texto }) => (
                <li
                  key={texto}
                  className="flex items-center gap-3 text-gray-500 text-sm"
                >
                  <span className="w-9 h-9 rounded-xl bg-light-bg flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </span>
                  {texto}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — formulario */}
          <div className="w-full md:w-3/5 bg-light-bg rounded-2xl p-8">
            <h3 className="font-fraunces text-xl font-extrabold text-primary mb-6">
              Solicitar una demo
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Tu apellido"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Cargo
                </label>
                <input
                  type="text"
                  placeholder="Tu cargo"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Email corporativo
                </label>
                <input
                  type="email"
                  placeholder="email@empresa.com"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+54 11 0000-0000"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-gray-600">
                  Mensaje (opcional)
                </label>
                <textarea
                  placeholder="Contanos sobre tu organización y qué necesitás..."
                  rows={3}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
            </div>

            <button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-full transition-colors duration-200 text-sm">
              Enviar solicitud →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
