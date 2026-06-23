import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";
import { Search, Calendar, MapPin } from "lucide-react";

const ACCENT = "#32b9cc";
const APP_URL = "https://app.ondoctor365.com";

const AVATARS = [
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=45",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=25",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=38",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=26",
  "https://i.pravatar.cc/150?img=49",
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.643 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function BuscarEspecialista() {
  const { t } = useTranslation();
  const [busqueda, setBusqueda] = useState("");
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const especialistas = t("buscarEspecialista.items", { returnObjects: true });
  const filtros = t("buscarEspecialista.filtros", { returnObjects: true });

  const especialistasFiltrados = useMemo(() => {
    return especialistas.filter((e) => {
      const matchFiltro = filtroActivo === "todos" || e.categoria === filtroActivo;
      const matchBusqueda =
        busqueda === "" ||
        e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        e.especialidad.toLowerCase().includes(busqueda.toLowerCase());
      return matchFiltro && matchBusqueda;
    });
  }, [especialistas, filtroActivo, busqueda]);

  return (
    <section id="buscar-especialista" className="relative py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: "#2d418e", opacity: 0.05 }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: ACCENT, opacity: 0.07 }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2d418e18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeInUp" className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-5"
            style={{ color: ACCENT, borderColor: ACCENT + "40", background: ACCENT + "12" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
            />
            {t("buscarEspecialista.badge")}
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-fraunces font-extrabold text-primary mt-2 leading-tight">
            {t("buscarEspecialista.titulo")}{" "}
            <span style={{ color: ACCENT }}>{t("buscarEspecialista.titulo_accent")}</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            {t("buscarEspecialista.subtitulo")}
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeInUp" className="mb-10">
          <div className="relative max-w-lg mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder={t("buscarEspecialista.buscar_placeholder")}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm"
              style={{ outline: "none" }}
              onFocus={(e) => (e.target.style.boxShadow = `0 0 0 2px ${ACCENT}40`)}
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filtros.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFiltroActivo(key)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                style={
                  filtroActivo === key
                    ? { background: "#2d418e", color: "#fff", border: "1px solid #2d418e" }
                    : { background: "#fff", color: "#64748b", border: "1px solid #e2e8f0" }
                }
              >
                {label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {especialistasFiltrados.map(({ nombre, especialidad, ubicacion, descripcion, rating, resenas, disponible }, i) => (
            <motion.div
              key={`${nombre}-${i}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: Math.min(i * 0.07, 0.4),
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl p-5 flex flex-col gap-3 relative overflow-hidden bg-white"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[60px] pointer-events-none"
                style={{ background: ACCENT, opacity: 0.08 }}
              />

              {disponible && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {t("buscarEspecialista.disponible")}
                </div>
              )}

              <div className="flex items-center gap-3 pt-1 relative">
                <img
                  src={AVATARS[i % AVATARS.length]}
                  alt={nombre}
                  className="w-14 h-14 rounded-2xl object-cover flex-shrink-0"
                  style={{ border: `2px solid ${ACCENT}30` }}
                />
                <div className="min-w-0">
                  <p className="text-primary font-bold text-sm leading-tight truncate">{nombre}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{especialidad}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-400 text-xs truncate">{ubicacion}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <StarRating rating={rating} />
                <span className="text-gray-400 text-xs">
                  ({resenas} {t("buscarEspecialista.resenas")})
                </span>
              </div>

              <div
                className="h-px"
                style={{ background: `linear-gradient(90deg, ${ACCENT}40, transparent)` }}
              />

              <p className="text-gray-500 text-xs leading-relaxed flex-1">"{descripcion}"</p>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #2d418e, #32b9cc)" }}
              >
                <Calendar className="w-3.5 h-3.5" />
                {t("buscarEspecialista.cta")}
              </a>
            </motion.div>
          ))}
        </div>

        {especialistasFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-base">{t("buscarEspecialista.sin_resultados")}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
