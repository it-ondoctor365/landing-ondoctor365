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
        <title>{t("pageTitles.empresas.title")}</title>
        <meta name="description" content={t("pageTitles.empresas.description")} />
        <link rel="canonical" href="https://www.ondoctor365.com/empresas" />
        <meta property="og:title" content={t("pageTitles.empresas.og_title")} />
        <meta property="og:description" content={t("pageTitles.empresas.og_description")} />
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
