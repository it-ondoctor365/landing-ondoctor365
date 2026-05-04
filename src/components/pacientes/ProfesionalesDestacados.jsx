import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";

const ACCENT = "#32b9cc";

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
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: ACCENT, opacity: 0.07 }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
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
        <AnimatedSection variant="fadeInUp" className="text-center mb-14">
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
            PROFESIONALES
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-fraunces font-extrabold text-primary mt-2 leading-tight">
            Una red de profesionales{" "}
            <span style={{ color: ACCENT }}>comprometidos</span> con una
            atención <span style={{ color: ACCENT }}>cercana y de calidad</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROFESIONALES.map(
            (
              { id, nombre, especialidad, ubicacion, rating, reviews, avatar, descripcion },
              i
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[60px] pointer-events-none"
                  style={{ background: ACCENT, opacity: 0.1 }}
                />

                <div className="flex items-center gap-4 relative">
                  <img
                    src={avatar}
                    alt={nombre}
                    className="w-14 h-14 rounded-full object-cover"
                    style={{ border: `2px solid ${ACCENT}30` }}
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

                <div
                  className="h-px"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT}40, transparent)`,
                  }}
                />

                <p className="text-gray-600 text-sm leading-relaxed italic relative">
                  "{descripcion}"
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
