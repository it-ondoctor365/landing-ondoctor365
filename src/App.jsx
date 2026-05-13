import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Pacientes from "./pages/Pacientes";
import Profesionales from "./pages/Profesionales";
import Empresas from "./pages/Empresas";
import Psicologia from "./pages/Psicologia";

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/pacientes" replace />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/profesionales" element={<Profesionales />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/especialidades/psicologia" element={<Psicologia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}
