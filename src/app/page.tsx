import type { Metadata, NextPage } from "next";

import {
  ServiceSection,
  FeaturesSection,
  ClientsSection,
  SolutionSection,
} from "./components/home";
import { HeroSection } from "./components/ui";

export const metadata: Metadata = {
  title: "Essetec | Inicio",
  description:
    "Soluciones integrales que garanticen la protección de propiedades y activos mediante el uso de tecnologías innovadoras.",
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
