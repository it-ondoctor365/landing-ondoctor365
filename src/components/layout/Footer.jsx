import { useNavigate } from "react-router-dom";

const LINKS = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Nosotros", href: "#" },
  { label: "Contacto", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <button
          onClick={() => navigate("/pacientes")}
          className="text-black font-bold text-lg tracking-tight"
        >
          <img src="logo.svg"></img>
        </button>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-black/60 hover:text-black text-sm transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-black/40 text-xs">
          © {new Date().getFullYear()} ONDOCTOR365 · Mar del Plata ·
          info@ondoctor365.com
        </p>
      </div>
    </footer>
  );
}
