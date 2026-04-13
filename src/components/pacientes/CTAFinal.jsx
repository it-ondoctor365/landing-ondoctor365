export default function CTAFinal({
  badge = "¿Listo para sumarte?",
  titulo = "Tu salud,",
  tituloAccent = "a un clic",
  titulo2 = "de distancia",
  subtitulo = "Registrate gratis y accedé a los mejores profesionales de salud del país en minutos.",
  ctaPrimario = "Iniciá tu turno ahora",
  ctaSecundario = "Buscar profesional",
}) {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-accent text-xs font-semibold tracking-widest uppercase">
          {badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-fraunces font-extrabold text-white mt-3 mb-4 leading-tight">
          {titulo} <span className="text-accent italic">{tituloAccent}</span>{" "}
          {titulo2}
        </h2>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
          {subtitulo}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200">
            {ctaPrimario}
          </button>
          <button className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200">
            {ctaSecundario}
          </button>
        </div>
      </div>
    </section>
  );
}
