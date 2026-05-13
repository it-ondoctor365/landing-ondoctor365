import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Consultas médicas online | OnDoctor365</title>
        <meta name="description" content="Consultá con un médico desde tu casa, en minutos y sin turnos. Especialistas verificados disponibles las 24hs. Probá OnDoctor365 gratis." />
        <link rel="canonical" href="https://www.ondoctor365.com/pacientes" />
        <meta property="og:title" content="Consultas médicas online | OnDoctor365" />
        <meta property="og:description" content="Consultá con un médico desde tu casa, en minutos y sin turnos. Especialistas verificados disponibles las 24hs." />
        <meta property="og:url" content="https://www.ondoctor365.com/pacientes" />
      </Helmet>
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
