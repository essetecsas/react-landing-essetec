import type { Metadata, NextPage } from "next";
import { MisionSection, VisionSection, OurValues } from "../components/about";
import { HeroSection } from "../components/ui";

export const metadata: Metadata = {
  title: "Essetec | Nosotros",
  description:
    "Proporcionamos soluciones integrales para proteger propiedades y activos mediante tecnologías innovadoras. Nos especializamos en seguridad electrónica, consultoría tecnológica, diseño de infraestructura y desarrollo web.",
  keywords: [
    "essetec",
    "soluciones",
    "protección",
    "tecnología",
    "transformación",
    "consultoría",
    "diseño",
    "desarrollo",
    "excelencia",
    "innovación",
    "asesoría",
  ],
};

const AboutPage: NextPage = () => {
  return (
    <>
      <HeroSection
        isVideo={false}
        description="Conocé quienes somos"
        imgUrl="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/about_us.jpg?alt=media&token=eec50f6f-7f34-49e3-949e-71880622a0c5"
      />

      <section className="section" id="about_us">
        <div className="container">
          <MisionSection></MisionSection>
          <VisionSection></VisionSection>
        </div>
      </section>

      <OurValues></OurValues>
    </>
  );
};

export default AboutPage;
