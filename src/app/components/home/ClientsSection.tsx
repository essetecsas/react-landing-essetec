"use client";
//  components
import { EmblaOptionsType } from "embla-carousel";
import { Carrousel } from "../ui/Carrousel/Carrousel";
// next image
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    name: "carrousel-img-1",
    src: "/images/carrousel/img-1.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-2",
    src: "/images/carrousel/img-2.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-3",
    src: "/images/carrousel/img-3.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-4",
    src: "/images/carrousel/img-4.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-5",
    src: "/images/carrousel/img-5.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-6",
    src: "/images/carrousel/img-6.jpg",
    alt: "carrousel img",
  },
];

const CLIENTS = [
  {
    name: "client-1",
    src: "/images/logos/clients/client-1.jpeg",
    href: "https://www.instagram.com/leds_storeimportador/?igsh=MzRhcDhqaW44MHlp",
  },
];

export const ClientsSection = () => {
  return (
    <section className="section bg-world" id="clients">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h5 className="h3 text-primary text-uppercase">
                Nuestras Historias de Éxito
              </h5>
              <p>
                Desde instalaciones impresionantes hasta trabajos excepcionales,
                cada testimonio cuenta una historia de satisfacción y éxito.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Carrousel slides={SLIDES} options={OPTIONS} controls={true} />
          </div>
        </div>
        <div className="row mt-5">
          {CLIENTS.map((client, index) => (
            <div className="col text-center" key={index}>
              <a href={client.href} target="_blank">
                <Image
                  className="img-opacity img-radius-20"
                  src={client.src}
                  alt="logo client"
                  width={160}
                  height={100}
                  priority
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
