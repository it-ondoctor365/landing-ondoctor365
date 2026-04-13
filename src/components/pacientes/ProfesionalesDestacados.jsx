import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/AnimatedSection";

const PROFESIONALES = [
  {
    id: 1,
    nombre: "Dr. Martín López",
    especialidad: "Médico Clínico",
    ubicacion: "Buenos Aires",
    rating: 5,
    reviews: 128,
    avatar: "https://i.pravatar.cc/150?img=11",
    descripcion:
      "Lo que más valoro es poder atender a mis pacientes desde cualquier lugar. La plataforma simplifica todo el proceso.",
  },
  {
    id: 2,
    nombre: "Lic. Sofía Ramírez",
    especialidad: "Psicóloga",
    ubicacion: "Córdoba",
    rating: 5,
    reviews: 94,
    avatar: "https://i.pravatar.cc/150?img=47",
    descripcion:
      "Puedo conectarme con mis pacientes de forma segura y mantener un seguimiento continuo sin complicaciones.",
  },
  {
    id: 3,
    nombre: "Lic. Valeria Torres",
    especialidad: "Nutricionista",
    ubicacion: "Rosario",
    rating: 4,
    reviews: 76,
    avatar: "https://i.pravatar.cc/150?img=45",
    descripcion:
      "Mis pacientes tienen todo en un solo lugar: turnos, planes alimentarios y seguimiento. Es muy fácil de usar.",
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

export default function ProfesionalesDestacados() {
  return (
    <section className="py-20 bg-[#EEF1FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            PROFESIONALES
          </span>
          <h2 className="text-3xl md:text-5xl font-fraunces font-extrabold text-primary mt-2">
            Una red de profesionales{" "}
            <span className="text-accent">comprometidos</span> con una atención{" "}
            <span className="text-accent">cercana y de calidad</span>
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFESIONALES.map(
            ({
              id,
              nombre,
              especialidad,
              ubicacion,
              rating,
              reviews,
              avatar,
              descripcion,
            }) => (
              <StaggerItem
                key={id}
                className="bg-light-bg rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <img
                    src={avatar}
                    alt={nombre}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-primary font-bold text-sm">{nombre}</p>
                    <p className="text-gray-500 text-xs">
                      {especialidad} · {ubicacion}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <StarRating rating={rating} />
                      <span className="text-gray-400 text-xs">({reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Descripcion */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{descripcion}"
                </p>
              </StaggerItem>
            ),
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
