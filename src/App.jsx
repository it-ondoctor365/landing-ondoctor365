import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Pacientes from "./pages/Pacientes";
import Profesionales from "./pages/Profesionales";
import Empresas from "./pages/Empresas";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/pacientes" replace />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/profesionales" element={<Profesionales />} />
            <Route path="/empresas" element={<Empresas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
