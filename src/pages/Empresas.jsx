import EcosistemaSection from "../components/empresas/EcoSistemaSection";
import HeroEmpresas from "../components/empresas/HeroEmpresas";
import OrganizacionesSection from "../components/empresas/OrganizacionesSection";
import ProblemaSection from "../components/empresas/ProblemasSection";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import FAQSection from "../components/pacientes/FAQSection";
import ContactoSection from "../components/empresas/ContactoSection";
import CTAFinal from "../components/pacientes/CTAFinal";

const TESTIMONIOS_EMPRESAS = [
  {
    id: 1,
    nombre: "Gonzalo M.",
    ubicacion: "Director de RRHH · Retail",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    texto:
      "Implementamos OnDoctor365 y en el primer trimestre redujimos el ausentismo un 28%. El equipo lo adoptó de inmediato, es muy intuitivo.",
  },
  {
    id: 2,
    nombre: "Analía F.",
    ubicacion: "Gerente de Beneficios · Fintech",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=44",
    texto:
      "Para nuestra empresa fue una de las mejores decisiones del año. Los empleados valoran mucho tener acceso médico sin salir de casa.",
  },
  {
    id: 3,
    nombre: "Carlos M.",
    ubicacion: "CEO · Logística",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=53",
    texto:
      "La integración fue sencilla y el soporte excelente. En 48hs ya estábamos operativos. Los reportes de uso son muy completos.",
  },
];

const FAQS_EMPRESAS = [
  {
    id: 1,
    pregunta: "¿Cómo puedo dar de alta mi empresa?",
    respuesta:
      "Completá el formulario de contacto y un especialista te guiará en el proceso de onboarding en menos de 48hs.",
  },
  {
    id: 2,
    pregunta: "¿Cuánto tiempo lleva la implementación?",
    respuesta:
      "La plataforma digital se activa en 48hs. El Tótem de Telemedicina requiere instalación física, que coordinamos con tu equipo.",
  },
  {
    id: 3,
    pregunta: "¿El servicio es compatible con las normativas ISO o HIS?",
    respuesta:
      "Sí, cumplimos con las principales normativas del sector salud y tenemos integraciones nativas con los sistemas HIS más utilizados.",
  },
  {
    id: 4,
    pregunta: "¿OnDoctor365 se integra con obras sociales o prepaga?",
    respuesta:
      "Sí, tenemos integraciones con las principales obras sociales y prepagas del país para facilitar la cobertura de consultas.",
  },
  {
    id: 5,
    pregunta: "¿Se pueden generar reportes médicos internos?",
    respuesta:
      "Sí, el panel corporativo genera reportes de uso, consultas por especialidad, ausentismo y bienestar general del equipo.",
  },
];
export default function Empresas() {
  return (
    <div>
      <HeroEmpresas />
      <ProblemaSection />
      <EcosistemaSection />
      <OrganizacionesSection />
      <TestimoniosSection
        tituloAccent="nuestros clientes"
        testimonios={TESTIMONIOS_EMPRESAS}
      />
      <FAQSection
        badge="PREGUNTAS FRECUENTES"
        titulo="Todo lo que necesitás"
        tituloAccent="saber"
        faqs={FAQS_EMPRESAS}
      />
      <ContactoSection />
      <CTAFinal
        badge="SUMATE AL FUTURO"
        titulo="Sumate al futuro de"
        tituloAccent="la salud corporativa"
        titulo2=""
        subtitulo="Más de 200 empresas ya confían en OnDoctor365 para cuidar la salud de sus equipos."
        ctaPrimario="Solicitar tu demo"
        ctaSecundario="Ver productos"
      />
    </div>
  );
}
