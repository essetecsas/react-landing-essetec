import type { Metadata, NextPage } from "next";
import { MisionSection, VisionSection, OurValues } from "../components/about";
import { HeroSection } from "../components/ui";

export const metadata: Metadata = {
  title: "ESSETEC",
  description:
    "En ESSETEC, proporcionamos soluciones integrales para proteger propiedades y activos mediante tecnologías innovadoras. Nos especializamos en seguridad electrónica, consultoría tecnológica, diseño de infraestructura y desarrollo web. Nuestro compromiso con la excelencia y la innovación nos posiciona como líderes en la transformación digital, brindando tranquilidad y confianza a nuestros clientes en un mundo cada vez más digital.",
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
