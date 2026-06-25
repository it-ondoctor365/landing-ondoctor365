import { X, Stethoscope, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";
const PLATFORM_URL = "https://salud.ondoctor365.com";
const MEDICO_REGISTRO_URL = "https://consultas.ondoctor365.com/od365-medicos/registro";
const MEDICO_LOGIN_URL = "https://consultas.ondoctor365.com/od365-medicos/login";
const ESPECIALISTA_REGISTRO_URL = "https://consultas.ondoctor365.com/od365-especialistas/registro";
const ESPECIALISTA_LOGIN_URL = "https://consultas.ondoctor365.com/od365-especialistas/login";

export default function ConsultaModal({ isOpen, onClose, mode }) {
  const { t } = useTranslation();

  const medicoTags = t("consultaModal.medico.tags", { returnObjects: true });
  const especialistaTags = t("consultaModal.especialista.tags", { returnObjects: true });

  function handleSelectMedico() {
    const url =
      mode === "registro" ? MEDICO_REGISTRO_URL :
      mode === "login"    ? MEDICO_LOGIN_URL :
                            PLATFORM_URL;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  function handleSelectEspecialista() {
    const url =
      mode === "registro" ? ESPECIALISTA_REGISTRO_URL :
      mode === "login"    ? ESPECIALISTA_LOGIN_URL :
                            PLATFORM_URL;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(7, 17, 31, 0.6)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl p-8"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
              style={{ background: ACCENT, opacity: 0.1 }}
            />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 p-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-8 relative">
              <span
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full border mb-3"
                style={{ color: ACCENT, borderColor: ACCENT + "40", background: ACCENT + "12" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                {t("consultaModal.badge")}
              </span>
              <h2 className="font-fraunces text-2xl font-extrabold" style={{ color: PRIMARY }}>
                {t("consultaModal.titulo")}
              </h2>
              <p className="text-gray-400 text-sm mt-1">{t("consultaModal.subtitulo")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              <OptionCard
                icon={<Stethoscope size={22} style={{ color: ACCENT }} />}
                titulo={t("consultaModal.medico.titulo")}
                subtitulo={t("consultaModal.medico.subtitulo")}
                tags={medicoTags}
                onClick={handleSelectMedico}
              />
              <OptionCard
                icon={<Brain size={22} style={{ color: ACCENT }} />}
                titulo={t("consultaModal.especialista.titulo")}
                subtitulo={t("consultaModal.especialista.subtitulo")}
                tags={especialistaTags}
                onClick={handleSelectEspecialista}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function OptionCard({ icon, titulo, subtitulo, tags, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex flex-col gap-3 p-5 rounded-2xl text-left w-full"
      style={{
        background: "#fff",
        border: "1.5px solid #e2e8f0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        transition: "border-color 0.15s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = ACCENT + "80")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
    >
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
        style={{ background: ACCENT + "18" }}
      >
        {icon}
      </div>
      <div>
        <p className="font-bold text-sm" style={{ color: PRIMARY }}>
          {titulo}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{subtitulo}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full"
            style={{ background: PRIMARY + "0d", color: PRIMARY + "bb" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}
