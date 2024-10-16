import type { Metadata, NextPage } from "next";

import {
  ServiceSection,
  FeaturesSection,
  ClientsSection,
  SolutionSection,
} from "./components/home";
import { HeroSection } from "./components/ui";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Essetec | Inicio",
  description:
    "Soluciones integrales que garanticen la protección de propiedades y activos mediante el uso de tecnologías innovadoras.",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="eLtZVRqL1C2l1RBNKajVytGyQPAGF0pfrW6VWG-w9-A"
        />
      </Head>
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
