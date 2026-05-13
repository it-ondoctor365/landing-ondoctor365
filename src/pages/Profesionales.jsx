import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import FeaturesSection from "../components/profesionales/FeaturesSection";
import HeroProfesionales from "../components/profesionales/HeroProfesionales";
import MetricasSection from "../components/profesionales/MetricasSection";
import PasosOnboarding from "../components/profesionales/PasosOnBoarding";
import PlanesSection from "../components/profesionales/PlanesSection";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import FAQSection from "../components/pacientes/FAQSection";
import CTAFinal from "../components/pacientes/CTAFinal";

export default function Profesionales() {
  const { t } = useTranslation();

  const testimonios = t("testimoniosProfesionales.items", { returnObjects: true });
  const faqs = t("faqProfesionales.items", { returnObjects: true });

  return (
    <div>
      <Helmet>
        <title>Atendé pacientes online | OnDoctor365 para profesionales</title>
        <meta name="description" content="Sumá pacientes de todo el país sin trabajo administrativo. Agenda automática, cobros seguros y seguimiento clínico en una sola plataforma." />
        <link rel="canonical" href="https://www.ondoctor365.com/profesionales" />
        <meta property="og:title" content="Atendé pacientes online | OnDoctor365 para profesionales" />
        <meta property="og:description" content="Sumá pacientes de todo el país sin trabajo administrativo. Agenda automática, cobros seguros y seguimiento clínico." />
        <meta property="og:url" content="https://www.ondoctor365.com/profesionales" />
      </Helmet>
      <HeroProfesionales />
      <PasosOnboarding />
      <FeaturesSection />
      <MetricasSection />
      <PlanesSection />
      <TestimoniosSection
        tituloAccent={t("testimoniosProfesionales.titulo_accent")}
        testimonios={testimonios}
      />
      <FAQSection faqs={faqs} />
      <CTAFinal
        badge={t("ctaFinalProfesionales.badge")}
        titulo={t("ctaFinalProfesionales.titulo")}
        tituloAccent={t("ctaFinalProfesionales.titulo_accent")}
        titulo2={t("ctaFinalProfesionales.titulo2")}
        subtitulo={t("ctaFinalProfesionales.subtitulo")}
        ctaPrimario={t("ctaFinalProfesionales.cta_primary")}
        ctaSecundario={t("ctaFinalProfesionales.cta_secondary")}
      />
    </div>
  );
}
