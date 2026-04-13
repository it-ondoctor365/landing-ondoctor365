const EMPRESAS = [
  { id: "osak", nombre: "OSAK", subtitulo: "Obra Social" },
  { id: "samak", nombre: "SAMAK", subtitulo: "Salud Preventiva" },
  { id: "apresma", nombre: "APresMA", subtitulo: "Asociación Médica" },
];

export default function EmpresasConfianza() {
  return (
    <section className="py-16 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-primary font-semibold text-lg md:text-xl max-w-2xl mx-auto leading-snug mb-12">
          Con la <span className="text-accent font-extrabold">confianza</span>{" "}
          de organizaciones de salud y profesionales que apuestan por una{" "}
          <span className="text-accent font-extrabold">
            atención médica más eficiente.
          </span>
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {EMPRESAS.map(({ id, nombre, subtitulo }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              {/* Placeholder logo */}
              <div className="h-12 px-6 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <span className="text-primary font-extrabold text-xl tracking-tight">
                  {nombre}
                </span>
              </div>
              <span className="text-gray-400 text-xs">{subtitulo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
