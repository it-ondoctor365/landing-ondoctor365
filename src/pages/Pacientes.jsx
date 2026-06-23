import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ConsultaModal from "../components/ui/ConsultaModal";
import ConsultasTabs from "../components/pacientes/ConsultasTabs";
import HeroPacientes from "../components/pacientes/HeroPacientes";
import PasosSection from "../components/pacientes/PasosSection";
import BeneficiosSection from "../components/pacientes/BeneficiosSection";
import EmpresasConfianza from "../components/pacientes/EmpresasConfianza";
import ProfesionalesDestacados from "../components/pacientes/ProfesionalesDestacados";
import BuscarEspecialista from "../components/pacientes/BuscarEspecialista";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import CTAFinal from "../components/pacientes/CTAFinal";
import FAQSection from "../components/pacientes/FAQSection";

export default function Pacientes() {
  const { t } = useTranslation();
  const [consultaOpen, setConsultaOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title>{t("pageTitles.pacientes.title")}</title>
        <meta name="description" content={t("pageTitles.pacientes.description")} />
        <link rel="canonical" href="https://www.ondoctor365.com/pacientes" />
        <meta property="og:title" content={t("pageTitles.pacientes.og_title")} />
        <meta property="og:description" content={t("pageTitles.pacientes.og_description")} />
        <meta property="og:url" content="https://www.ondoctor365.com/pacientes" />
      </Helmet>
      <HeroPacientes />
      <ConsultasTabs />
      <PasosSection />
      <BeneficiosSection />
      <EmpresasConfianza />
      <ProfesionalesDestacados />
      <BuscarEspecialista />
      <TestimoniosSection />
      <FAQSection />
      <CTAFinal
        onClickPrimario={() => setConsultaOpen(true)}
        ctaSecundario={false}
      />
      <ConsultaModal isOpen={consultaOpen} onClose={() => setConsultaOpen(false)} />
    </div>
  );
}
