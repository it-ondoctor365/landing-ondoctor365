import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ACCENT = "#32b9cc";
const PRIMARY = "#2d418e";

const EMPTY = {
  nombre: "",
  apellido: "",
  documento: "",
  email: "",
  telefono: "",
  fechaNacimiento: "",
  genero: "",
  tipoMatricula: "",
  numeroMatricula: "",
  especialidad: "",
};

const inputClass =
  "bg-white border border-[#e2e8f0] rounded-2xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#32b9cc] transition-colors w-full";
const labelClass = "text-xs font-semibold text-gray-600";

export default function RegistroModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [fields, setFields] = useState(EMPTY);

  const TIPO_MATRICULA = t("registroModal.tiposMatricula", { returnObjects: true });
  const ESPECIALIDADES = t("registroModal.especialidades", { returnObjects: true });
  const GENEROS = t("registroModal.generos", { returnObjects: true });

  function set(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function handleEnviar() {
    const msg = [
      t("registroModal.whatsappMsg"),
      `${t("registroModal.msgNombre")}: ${fields.nombre} ${fields.apellido}`,
      fields.documento && `${t("registroModal.msgDNI")}: ${fields.documento}`,
      fields.email && `${t("registroModal.msgEmail")}: ${fields.email}`,
      fields.telefono && `${t("registroModal.msgTelefono")}: ${fields.telefono}`,
      fields.fechaNacimiento && `${t("registroModal.msgFecha")}: ${fields.fechaNacimiento}`,
      fields.genero && `${t("registroModal.msgGenero")}: ${fields.genero}`,
      fields.tipoMatricula && `${t("registroModal.msgTipoMatricula")}: ${fields.tipoMatricula}`,
      fields.numeroMatricula && `${t("registroModal.msgNumeroMatricula")}: ${fields.numeroMatricula}`,
      fields.especialidad && `${t("registroModal.msgEspecialidad")}: ${fields.especialidad}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/5492233404021?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
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
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 overflow-hidden"
          style={{
            background: "rgba(7, 17, 31, 0.6)",
            backdropFilter: "blur(6px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl p-8 overflow-y-auto max-h-[90vh] [&::-webkit-scrollbar]:hidden"
            style={{ background: "#f8fafc", border: "1px solid #e2e8f0", scrollbarWidth: "none", msOverflowStyle: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] pointer-events-none"
              style={{ background: ACCENT, opacity: 0.12 }}
            />

            {/* Header */}
            <div className="flex items-start justify-between mb-6 relative">
              <div>
                <span
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full border mb-3"
                  style={{
                    color: ACCENT,
                    borderColor: ACCENT + "40",
                    background: ACCENT + "12",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  {t("registroModal.badge")}
                </span>
                <h2
                  className="font-fraunces text-2xl font-extrabold leading-tight"
                  style={{ color: PRIMARY }}
                >
                  {t("registroModal.titulo")}{" "}
                  <span className="italic" style={{ color: ACCENT }}>
                    {t("registroModal.titulo_accent")}
                  </span>
                </h2>
                <p className="text-gray-400 text-xs mt-1">
                  {t("registroModal.subtitulo")}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0 mt-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.nombre")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fields.nombre}
                  onChange={(e) => set("nombre", e.target.value)}
                  placeholder={t("registroModal.placeholderNombre")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.apellido")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fields.apellido}
                  onChange={(e) => set("apellido", e.target.value)}
                  placeholder={t("registroModal.placeholderApellido")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.documento")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fields.documento}
                  onChange={(e) => set("documento", e.target.value)}
                  placeholder={t("registroModal.placeholderDocumento")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.email")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder={t("registroModal.placeholderEmail")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.telefono")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={fields.telefono}
                  onChange={(e) => set("telefono", e.target.value)}
                  placeholder={t("registroModal.placeholderTelefono")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.fechaNacimiento")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={fields.fechaNacimiento}
                  onChange={(e) => set("fechaNacimiento", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.genero")} <span className="text-red-500">*</span>
                </label>
                <select
                  value={fields.genero}
                  onChange={(e) => set("genero", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("registroModal.selectPlaceholder")}</option>
                  {GENEROS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.tipoMatricula")} <span className="text-red-500">*</span>
                </label>
                <select
                  value={fields.tipoMatricula}
                  onChange={(e) => set("tipoMatricula", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("registroModal.selectPlaceholder")}</option>
                  {TIPO_MATRICULA.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>
                  {t("registroModal.numeroMatricula")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fields.numeroMatricula}
                  onChange={(e) => set("numeroMatricula", e.target.value)}
                  placeholder={t("registroModal.placeholderMatricula")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>{t("registroModal.especialidad")}</label>
                <select
                  value={fields.especialidad}
                  onChange={(e) => set("especialidad", e.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("registroModal.selectPlaceholder")}</option>
                  {ESPECIALIDADES.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              onClick={handleEnviar}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full font-bold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 relative"
              style={{
                background: ACCENT,
                color: "#07111f",
                boxShadow: `0 10px 36px ${ACCENT}55`,
              }}
            >
              {t("registroModal.enviar")}
              <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
