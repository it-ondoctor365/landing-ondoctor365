const STATS = [
  { value: "+15K", label: "Pacientes atendidos" },
  { value: "4.9★", label: "Calificación promedio" },
  { value: "3 min", label: "Tiempo de espera" },
];

export default function HeroPacientes() {
  return (
    <section className="bg-primary text-white min-h-[580px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        {/* Left — copy */}
        <div className="relative z-10 max-w-xl py-20">
          {/* Badge */}
          <span className="inline-block bg-accent/20 text-[#6EE7E7] text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6 border-2 border-[#6EE7E7] border-opacity-20">
            ● Disponible 24/7 ● 365 DÍAS
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-fraunces font-bold leading-tight mb-4">
            Atención médica online cuando{" "}
            <span className="text-accent">más lo necesitás.</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-s mb-8 max-w-full">
            Médicos, psicólogos y especialistas disponibles en minutos. Sin
            filas, sin traslados. Desde tu celular o computadora.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Solicitar turno
            </button>
            <button className="border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Buscar especialista
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {STATS.map(({ value, label }) => (
              <div key={value}>
                <p className="text-2xl font-fraunces font-bold text-white">
                  {value}
                </p>
                <p className="text-white/60 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image placeholder + floating card */}
        <div className="absolute right-0 top-0 h-full w-[100%] hidden md:block">
          {/* Placeholder imagen */}
          <div className="relative h-full">
            <img
              src="/PacientesHero.png"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Floating card — videoconsulta */}
          <div className="top-[10%] absolute left-[70%] bg-white/90 rounded-2xl shadow-xl p-4 w-70">
            <div>
              <span className="inline-block text-[#6EE7B7] text-xs font-semibold tracking-widest uppercase px-4 mb-2">
                ● MÉDICO DISPONIBLE AHORA
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                Dr
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">
                  Dr. Martínez
                </p>
                <p className="text-gray-400 text-xs">
                  Médico clínico | 12 años de experiencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
