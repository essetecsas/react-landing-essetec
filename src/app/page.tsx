import type { Metadata, NextPage } from "next";

import {
  ServiceSection,
  FeaturesSection,
  ClientsSection,
  SolutionSection,
} from "./components/home";
import { HeroSection } from "./components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.essetecsas.com/"),
  title: "Essetec | Inicio",
  description:
    "Soluciones integrales que garanticen la protección de propiedades y activos mediante el uso de tecnologías innovadoras.",
  keywords: [
    "especialistas en seguridad electrónica",
    "tecnología",
    "soluciones tecnológicas",
    "soporte técnico",
    "soporte de hardware",
    "mantenimiento de CCTV",
    "cámaras de seguridad",
    "DVR",
    "NVR",
    "cámaras análogas",
    "cámaras IP",
    "cámaras inalámbricas",
    "seguridad electrónica",
    "prevención de pérdidas",
    "control de accesos",
    "respuesta ante amenazas",
    "infraestructura tecnológica",
    "outsourcing de tecnología",
    "almacenamiento confiable de datos",
    "redes seguras",
    "desarrollo web",
    "consultoría en tecnología",
    "soluciones personalizadas",
    "escalabilidad del negocio",
    "vigilancia por video",
    "monitoreo remoto",
    "protección de activos",
    "herramientas de marketing digital",
    "optimización de redes",
    "implementación de sistemas en la nube",
    "Google Workspace",
    "Microsoft 365",
    "Zimbra",
    "IBM",
    "Google Cloud",
    "Azure",
    "AWS",
    "Oracle",
    "FyVyatta",
    "Fsense",
    "Paloalto",
    "Juniper",
    "Fortinet",
    "Sophos",
    "Kemu",
    "KVM",
    "VirtualBox",
    "Debian",
    "RedHat",
    "Linux",
    "Windows",
    "Zabbix",
    "GLPI",
    "Nagios",
    "OSTicket",
    "PRTG",
    "desarrollo web corporativo",
    "SEO",
    "diseño responsivo",
    "mantenimiento web",
    "soporte continuo",
    "experiencia tecnológica",
    "innovación",
    "transformación digital",
    "implementación de POS",
    "facturación electrónica",
  ],
  openGraph: {
    description:
      "Convierte tu negocio en una experiencia tecnológica sorprendente, única e innovadora",
  },
  other: {
    "google-site-verification": "eLtZVRqL1C2l1RBNKajVytGyQPAGF0pfrW6VWG-w9-A",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <HeroSection description="Convierte tu negocio en una experiencia tecnológica sorprendente, única e innovadora." />
      <ServiceSection />
      <FeaturesSection />
      <SolutionSection />
      <ClientsSection />
      {/* <SubscribeSection /> */}
    </>
  );
};

export default Home;
