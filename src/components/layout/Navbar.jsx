import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_TABS = [
  { label: "Pacientes", path: "/pacientes" },
  { label: "Profesionales", path: "/profesionales" },
  { label: "Empresas", path: "/empresas" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(path) {
    setMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  const ctaLabel =
    location.pathname === "/profesionales"
      ? "Crear mi perfil →"
      : location.pathname === "/empresas"
      ? "Solicitar demo →"
      : "Solicitar turno →";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            navigate("/pacientes");
            handleNavClick("/pacientes");
          }}
          className="flex items-center gap-1"
        >
          <img src="logo.svg" />
        </button>

        {/* Desktop Tabs */}
        <nav className="hidden md:flex items-center gap-1 w-fit bg-gray-200 p-1 rounded-2xl shadow-inner">
          {NAV_TABS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => handleNavClick(path)}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-white text-black-600"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Iniciar sesión
          </button>
          <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
            {ctaLabel}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          <nav className="flex flex-col gap-1">
            {NAV_TABS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => handleNavClick(path)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2 text-left">
              Iniciar sesión
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
