import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const COLUMNS = [
    {
      heading: t("footer.col_pacientes"),
      links: [
        { label: t("footer.tipos_consulta"), href: "/pacientes#tipos-consulta" },
        { label: t("footer.como_funciona"), href: "/pacientes#como-funciona" },
        { label: t("footer.beneficios"), href: "/pacientes#beneficios" },
        { label: t("footer.testimonios"), href: "/pacientes#testimonios" },
        { label: t("footer.preguntas_frecuentes"), href: "/pacientes#faq" },
      ],
    },
    {
      heading: t("footer.col_profesionales"),
      links: [
        { label: t("footer.como_unirse"), href: "/profesionales#como-unirse" },
        { label: t("footer.herramientas"), href: "/profesionales#herramientas" },
        { label: t("footer.planes_precios"), href: "/profesionales#planes" },
        { label: t("footer.psicologia"), href: "/especialidades/psicologia" },
        { label: t("footer.preguntas_frecuentes"), href: "/profesionales#faq" },
      ],
    },
    {
      heading: t("footer.col_empresas"),
      links: [
        { label: t("footer.la_plataforma"), href: "/empresas#plataforma" },
        { label: t("footer.tipos_organizacion"), href: "/empresas#organizaciones" },
        { label: t("footer.testimonios"), href: "/empresas#testimonios" },
        { label: t("footer.solicitar_demo"), href: "/empresas#contacto" },
      ],
    },
    {
      heading: t("footer.col_contacto"),
      links: [
        { label: t("footer.blog"), href: "/blog" },
        { label: t("footer.preguntas_frecuentes"), href: "/pacientes#faq" },
        { label: t("footer.email"), href: "mailto:info@ondoctor365.com" },
        { label: t("footer.telefono"), href: "tel:+5491139911073" },
      ],
    },
  ];

  function handleLink(e, href) {
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    e.preventDefault();
    navigate(href);
    window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo + tagline */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <button
            onClick={() => { navigate("/pacientes"); window.scrollTo(0, 0); }}
            className="self-start"
          >
            <img src="/logo.svg" alt="OnDoctor365" className="h-8" />
          </button>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Link columns */}
        {COLUMNS.map(({ heading, links }) => (
          <div key={heading} className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.14em] text-gray-400 uppercase mb-1">
              {heading}
            </p>
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleLink(e, href)}
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} OnDoctor365. {t("footer.derechos")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terminos")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacidad")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
