import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const TESTIMONIOS_DEFAULT = [
  {
    id: 1,
    nombre: "Laura G.",
    ubicacion: "Buenos Aires",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
    texto:
      "No tenía que salir de casa con mi hijo enfermo. En 5 minutos estaba hablando con un médico. La receta me llegó al instante.",
  },
  {
    id: 2,
    nombre: "Rodrigo P.",
    ubicacion: "Mendoza",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=52",
    texto:
      "Increíble la rapidez. Siempre que lo necesité tuve un médico disponible. La historia clínica digital es un diferencial enorme.",
  },
  {
    id: 3,
    nombre: "Vanesa S.",
    ubicacion: "Rosario",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=48",
    texto:
      "Lo uso para toda la familia. Los profesionales son muy atentos y el sistema es súper fácil. Lo recomiendo a todos.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.643 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimoniosSection({
  badge = "TESTIMONIOS",
  titulo = "Lo que dicen",
  tituloAccent = "nuestros pacientes",
  testimonios = TESTIMONIOS_DEFAULT,
}) {
  return (
    <section className="py-20 bg-[#EEF1FA]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-fraunces font-extrabold text-primary mt-2">
            {titulo}{" "}
            <span className="text-accent font-fraunces italic">
              {tituloAccent}
            </span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map(
            ({ id, nombre, ubicacion, rating, avatar, texto }) => (
              <StaggerItem key={id}>
              <div
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <StarRating rating={rating} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "{texto}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={avatar}
                    alt={nombre}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-primary font-semibold text-sm">
                      {nombre}
                    </p>
                    <p className="text-gray-400 text-xs">{ubicacion}</p>
                  </div>
                </div>
              </div>
              </StaggerItem>
            ),
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
