import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import HeroPsicologia from "../components/especialidades/HeroPsicologia";
import BeneficiosPsicologia from "../components/especialidades/BeneficiosPsicologia";
import HerramientasPsicologia from "../components/especialidades/HerramientasPsicologia";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import CTAFinal from "../components/pacientes/CTAFinal";

export default function Psicologia() {
  const { t } = useTranslation();

  const testimonios = t("psicologia.testimonios.items", { returnObjects: true });

  return (
    <div>
      <Helmet>
        <title>Psicología Online | OnDoctor365</title>
        <meta name="description" content="Consultá con psicólogos certificados en minutos, sin filas ni traslados. También para psicólogos que quieren expandir su práctica online." />
        <link rel="canonical" href="https://www.ondoctor365.com/especialidades/psicologia" />
      </Helmet>
      <HeroPsicologia />
      <BeneficiosPsicologia />
      <HerramientasPsicologia />
      <TestimoniosSection
        tituloAccent={t("psicologia.testimonios.titulo_accent")}
        testimonios={testimonios}
      />
      <CTAFinal
        badge={t("psicologia.ctaFinal.badge")}
        titulo={t("psicologia.ctaFinal.titulo")}
        tituloAccent={t("psicologia.ctaFinal.titulo_accent")}
        titulo2={t("psicologia.ctaFinal.titulo2")}
        subtitulo={t("psicologia.ctaFinal.subtitulo")}
        ctaPrimario={t("psicologia.ctaFinal.cta_primary")}
        ctaSecundario={t("psicologia.ctaFinal.cta_secondary")}
      />
    </div>
  );
}
