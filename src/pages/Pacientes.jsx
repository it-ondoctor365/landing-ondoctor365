import ConsultasTabs from "../components/pacientes/ConsultasTabs";
import HeroPacientes from "../components/pacientes/HeroPacientes";
import PasosSection from "../components/pacientes/PasosSection";
import BeneficiosSection from "../components/pacientes/BeneficiosSection";
import EmpresasConfianza from "../components/pacientes/EmpresasConfianza";
import ProfesionalesDestacados from "../components/pacientes/ProfesionalesDestacados";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import CTAFinal from "../components/pacientes/CTAFinal";
import FAQSection from "../components/pacientes/FAQSection";

export default function Pacientes() {
  return (
    <div>
      <HeroPacientes />
      <ConsultasTabs />
      <PasosSection />
      <BeneficiosSection />
      <EmpresasConfianza />
      <ProfesionalesDestacados />
      <TestimoniosSection />
      <FAQSection />
      <CTAFinal />
    </div>
  );
}
