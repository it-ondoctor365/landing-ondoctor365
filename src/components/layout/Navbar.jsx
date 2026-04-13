import { NavLink, useNavigate } from "react-router-dom";

const NAV_TABS = [
  { label: "Pacientes", path: "/pacientes" },
  { label: "Profesionales", path: "/profesionales" },
  { label: "Empresas", path: "/empresas" },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { navigate("/pacientes"); window.scrollTo(0, 0); }}
          className="flex items-center gap-1"
        >
          <img src="logo.svg"></img>
        </button>

        {/* Tabs */}
        <nav className="flex items-center gap-1 w-fit bg-gray-200 p-1 rounded-2xl flex gap-1 shadow-inner">
          {NAV_TABS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => window.scrollTo(0, 0)}
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Iniciar sesión
          </button>
          <button className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200">
            Solicitar turno →
          </button>
        </div>
      </div>
    </header>
  );
}
