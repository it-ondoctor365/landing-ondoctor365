import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { LANGUAGES, flagUrl } from "../../i18n/index.js";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function select(code) {
    i18n.changeLanguage(code);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
      >
        <img
          src={flagUrl(current.country)}
          alt={current.label}
          className="w-5 h-auto rounded-sm"
        />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 py-1.5 z-50 overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150
                ${
                  lang.code === current.code
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
            >
              <img
                src={flagUrl(lang.country)}
                alt={lang.label}
                className="w-5 h-auto rounded-sm"
              />
              <span>{lang.label}</span>
              {lang.code === current.code && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
