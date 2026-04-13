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
            ● PARA PROFESIONALES DE LA SALUD
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-fraunces font-bold leading-tight mb-4">
            Expandí tu práctica{" "}
            <span className="text-accent font-fraunces italic font-extrabold">
              sin límites.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-s mb-8 max-w-full">
            Sumáte a la plataforma de telemedicina líder. Agenda online,
            historia clínica digital, videoconsultas y cobros automáticos. Todo
            en un lugar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Crear mi perfil
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
              src="/ProfesionalesHero.png"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
