import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import EcosistemaSection from "../components/empresas/EcoSistemaSection";
import HeroEmpresas from "../components/empresas/HeroEmpresas";
import OrganizacionesSection from "../components/empresas/OrganizacionesSection";
import ProblemaSection from "../components/empresas/ProblemasSection";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import FAQSection from "../components/pacientes/FAQSection";
import ContactoSection from "../components/empresas/ContactoSection";
import CTAFinal from "../components/pacientes/CTAFinal";

export default function Empresas() {
  const { t } = useTranslation();

  const testimonios = t("testimoniosEmpresas.items", { returnObjects: true });
  const faqs = t("faqEmpresas.items", { returnObjects: true });

  return (
    <div>
      <Helmet>
        <title>Salud corporativa para empresas | OnDoctor365</title>
        <meta name="description" content="Reducí el ausentismo y mejorá el bienestar de tu equipo con telemedicina empresarial. Implementación en 48hs, integración con obras sociales y reportes de uso." />
        <link rel="canonical" href="https://www.ondoctor365.com/empresas" />
        <meta property="og:title" content="Salud corporativa para empresas | OnDoctor365" />
        <meta property="og:description" content="Reducí el ausentismo y mejorá el bienestar de tu equipo con telemedicina empresarial. Implementación en 48hs." />
        <meta property="og:url" content="https://www.ondoctor365.com/empresas" />
      </Helmet>
      <HeroEmpresas />
      <ProblemaSection />
      <EcosistemaSection />
      <OrganizacionesSection />
      <TestimoniosSection
        tituloAccent={t("testimoniosEmpresas.titulo_accent")}
        testimonios={testimonios}
      />
      <FAQSection
        badge={t("faqEmpresas.badge")}
        titulo={t("faqEmpresas.titulo")}
        tituloAccent={t("faqEmpresas.titulo_accent")}
        faqs={faqs}
      />
      <ContactoSection />
      <CTAFinal
        badge={t("ctaFinalEmpresas.badge")}
        titulo={t("ctaFinalEmpresas.titulo")}
        tituloAccent={t("ctaFinalEmpresas.titulo_accent")}
        titulo2={t("ctaFinalEmpresas.titulo2")}
        subtitulo={t("ctaFinalEmpresas.subtitulo")}
        ctaPrimario={t("ctaFinalEmpresas.cta_primary")}
        ctaSecundario={t("ctaFinalEmpresas.cta_secondary")}
      />
    </div>
  );
}
