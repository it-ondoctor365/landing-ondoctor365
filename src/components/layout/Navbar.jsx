import { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const NAV_ITEMS = [
    {
      key: "pacientes",
      label: t("navbar.pacientes"),
      path: "/pacientes",
      dropdown: [],
    },
    {
      key: "profesionales",
      label: t("navbar.profesionales"),
      path: "/profesionales",
      dropdown: [
        {
          section: t("navbar.especialidades_label"),
          links: [
            { label: t("navbar.psicologia"), path: "/especialidades/psicologia" },
          ],
        },
      ],
    },
    {
      key: "empresas",
      label: t("navbar.empresas"),
      path: "/empresas",
      dropdown: [],
    },
  ];

  function handleNavClick(path) {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  const ctaLabel =
    location.pathname === "/profesionales"
      ? t("navbar.cta_profesionales")
      : location.pathname === "/empresas"
      ? t("navbar.cta_empresas")
      : t("navbar.cta_pacientes");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            navigate("/pacientes");
            handleNavClick("/pacientes");
          }}
          className="flex items-center gap-1 shrink-0"
        >
          <img src="/logo.svg" />
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {NAV_ITEMS.map(({ key, label, path, dropdown }) => {
            const hasDropdown = dropdown.length > 0;
            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() =>
                  setOpenDropdown(hasDropdown ? key : null)
                }
              >
                <NavLink
                  to={path}
                  onClick={() => handleNavClick(path)}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${isActive ? "text-primary" : "text-gray-600 hover:text-primary hover:bg-gray-50"}`
                  }
                >
                  {label}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </NavLink>

                {hasDropdown && openDropdown === key && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-3 min-w-[180px]">
                    {dropdown.map(({ section, links }) => (
                      <div key={section}>
                        <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {section}
                        </p>
                        {links.map(({ label: linkLabel, path: linkPath }) => (
                          <NavLink
                            key={linkPath}
                            to={linkPath}
                            onClick={() => handleNavClick(linkPath)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm transition-colors duration-150
                              ${
                                isActive
                                  ? "text-primary font-medium"
                                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
                              }`
                            }
                          >
                            {linkLabel}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/blog"
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            {t("navbar.blog")}
          </Link>
          <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("navbar.login")}
          </button>
          <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
            {ctaLabel}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t("navbar.menu_aria")}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ key, label, path, dropdown }) => (
              <div key={key}>
                <NavLink
                  to={path}
                  onClick={() => handleNavClick(path)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {label}
                </NavLink>
                {dropdown.length > 0 && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {dropdown.map(({ section, links }) => (
                      <div key={section}>
                        <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {section}
                        </p>
                        {links.map(({ label: linkLabel, path: linkPath }) => (
                          <NavLink
                            key={linkPath}
                            to={linkPath}
                            onClick={() => handleNavClick(linkPath)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm rounded-lg transition-colors duration-150
                              ${
                                isActive
                                  ? "text-primary font-medium"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`
                            }
                          >
                            {linkLabel}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <div className="py-1">
              <LanguageSwitcher />
            </div>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors py-2"
            >
              {t("navbar.blog")}
            </Link>
            <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2 text-left">
              {t("navbar.login")}
            </button>
            <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 text-center">
              {ctaLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
