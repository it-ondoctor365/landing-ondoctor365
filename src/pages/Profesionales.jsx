import FeaturesSection from "../components/profesionales/FeaturesSection";
import HeroProfesionales from "../components/profesionales/HeroProfesionales";
import MetricasSection from "../components/profesionales/MetricasSection";
import PasosOnboarding from "../components/profesionales/PasosOnBoarding";
import PlanesSection from "../components/profesionales/PlanesSection";
import TestimoniosSection from "../components/pacientes/TestimonionsSection";
import FAQSection from "../components/pacientes/FAQSection";
import CTAFinal from "../components/pacientes/CTAFinal";

const TESTIMONIOS_PROFESIONALES = [
  {
    id: 1,
    nombre: "Dra. Sofía Leal",
    ubicacion: "Médica Clínica · Santa Cruz",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
    texto:
      "En tres meses tripliqué mis consultas. Lo que más valoro es la agenda automática, ya no pierdo tiempo coordinando.",
  },
  {
    id: 2,
    nombre: "Lic. Jimena Paredes",
    ubicacion: "Psicóloga · Córdoba",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=45",
    texto:
      "La posibilidad de tener seguimiento de mis pacientes cambia mi práctica. El panel de métricas es increíble.",
  },
  {
    id: 3,
    nombre: "Dr. Matías Ruiz",
    ubicacion: "Cirujano · Tucumán",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    texto:
      "Menos tiempo en trabajo administrativo, más tiempo con mis pacientes. La integración con HIS fue sencilla.",
  },
];

const FAQS_PROFESIONALES = [
  {
    id: 1,
    pregunta: "¿Necesito experiencia previa con telemedicina?",
    respuesta:
      "No, la plataforma es intuitiva y te guiamos en cada paso del onboarding.",
  },
  {
    id: 2,
    pregunta: "¿Cómo se gestionan los cobros?",
    respuesta:
      "Los pagos se acreditan automáticamente en tu cuenta bancaria los primeros días hábiles de cada semana.",
  },
  {
    id: 3,
    pregunta: "¿Puedo atender sin obra social?",
    respuesta:
      "Sí, podés atender pacientes particulares sin necesidad de estar afiliado a ninguna obra social.",
  },
  {
    id: 4,
    pregunta: "¿Puedo combinarlo con mi consultorio presencial?",
    respuesta:
      "Sí, la agenda inteligente te permite gestionar turnos online y presenciales desde un solo lugar.",
  },
  {
    id: 5,
    pregunta: "¿Qué pasa si hay problemas técnicos durante una consulta?",
    respuesta:
      "Contamos con soporte técnico en tiempo real y protocolo de contingencia para reprogramar sin costo.",
  },
];
export default function Profesionales() {
  return (
    <div>
      <HeroProfesionales />
      <PasosOnboarding />
      <FeaturesSection />
      <MetricasSection />
      <PlanesSection />
      <TestimoniosSection
        tituloAccent="los profesionales"
        testimonios={TESTIMONIOS_PROFESIONALES}
      />
      <FAQSection faqs={FAQS_PROFESIONALES} />
      <CTAFinal
        titulo="Empezá"
        tituloAccent="hoy,"
        titulo2="sin costo"
        subtitulo="Creá tu perfil en minutos y comenzá a atender pacientes de todo el país."
        ctaPrimario="Crear mi perfil gratuito"
        ctaSecundario="Hablar con el equipo"
      />
    </div>
  );
}
