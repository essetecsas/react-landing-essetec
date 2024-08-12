import { Metadata, NextPage } from "next";
import { HeroSection } from "../components/ui";
import { ServiceContent } from "../components/service";

export const metadata: Metadata = {
  title: "Essetec | Servicios",
  description:
    "Explora nuestra variada oferta de servicios, desde desarrollo web hasta consultoría tecnológica. Nuestro equipo de expertos se dedica a ofrecerte soluciones personalizadas y eficientes para todas tus necesidades.",
};

const ServicePage: NextPage<any> = ({ params }) => {
  console.log("params", params);
  return (
    <>
      <HeroSection
        isVideo={false}
        description="Explora Nuestros Servicios"
        imgUrl="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/about_us2.jpg?alt=media&token=6c750ab4-b744-4890-a06d-577c75584ecc"
      />
      <section className="section" id="services">
        <div className="container">
          <ServiceContent params={params} />
        </div>
      </section>
    </>
  );
};
export default ServicePage;
