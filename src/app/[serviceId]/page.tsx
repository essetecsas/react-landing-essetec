"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

import { ListGroup } from "../components/ui/ListGroup/ListGroup";
import { HeroSection } from "../components/ui";

import { ServiceDetail } from "../components/service";
import { ServiceSecurity } from "../components/service";
import { ServiceInfraestructure } from "../components/service";
import { ServiceWeb } from "../components/service";

// const ServiceDetail = dynamic(
//   () => import("../components/service/ServiceDetail")
// );
// const ServiceSecurity = dynamic(
//   () => import("../components/service/ServiceSecurity")
// );
// const ServiceInfraestructure = dynamic(
//   () => import("../components/service/ServiceInfraestructure")
// );
// const ServiceWeb = dynamic(() => import("../components/service/ServiceWeb"));

const SERVICES = [
  {
    id: "services",
    name: "Servicios",
  },
  {
    id: "security",
    name: "Seguridad Electrónica",
    title: "Seguridad Electrónica",
    color: "security",
    icon: <GiCctvCamera className="color-white" />,
    paragraph:
      "Nuestros servicios de seguridad electrónica están diseñados para prevenir pérdidas, controlar accesos no autorizados y mejorar la capacidad de respuesta ante amenazas. Ofrecemos la instalación y mantenimiento de sistemas avanzados de CCTV, incluyendo cámaras análogas, IP e inalámbricas, así como soluciones de grabación con DVR y NVR. Nos adaptamos a las necesidades específicas de cada cliente para garantizar una protección óptima.",
  },
  {
    id: "infrastructure",
    name: "Infraestructura & Outsorcing De Tecnología",
    title: "Infraestructura & Outsorcing de tecnologia",
    color: "it",
    icon: <IoServer className="color-white" />,
    paragraph:
      "Proveemos soluciones completas de infraestructura tecnológica y servicios de outsourcing para ayudar a su empresa a operar de manera más eficiente. Desde la implementación y mantenimiento de redes hasta la gestión de servidores y soporte técnico, nos aseguramos de que su tecnología esté siempre en su mejor estado. Nuestro equipo de expertos está dedicado a optimizar sus recursos tecnológicos para que pueda centrarse en su negocio principal.",
  },
  {
    id: "web",
    name: "Desarrollo Web",
    title: "Desarrollo web",
    color: "web",
    icon: <MdWeb className="color-white" />,
    paragraph:
      "Ofrecemos servicios de desarrollo web personalizados para impulsar su presencia en línea. Nuestro equipo de desarrolladores crea sitios web atractivos, funcionales y optimizados para SEO que reflejan la identidad de su marca y cumplen con sus objetivos comerciales. Estamos aquí para ayudarle a alcanzar sus metas digitales.",
  },
];

export default function ServicePage({ params }) {
  const [selectedId, setSelectedId] = useState(params.serviceId);
  const [currentService, setCurrentService] = useState({ id: "" });

  useEffect(() => {
    const service = SERVICES.find((service) => service.id == selectedId);
    if (service) {
      setCurrentService(service);
    }
  }, [selectedId]);

  const handleSelectService = (serviceId: string) => {
    setSelectedId(serviceId);
  };

  return (
    <>
      <HeroSection
        isVideo={false}
        description="Explora Nuestros Servicios"
        imgUrl="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/about_us2.jpg?alt=media&token=6c750ab4-b744-4890-a06d-577c75584ecc"
      />
      {/* <h1> {params.serviceId} - page</h1> */}
      <section className="section" id="services">
        <div className="container">
          <div className="justify-content-center row">
            {/* <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Servicios
              </h5>
              <h4 className="mb-3">Explora Nuestros Servicios</h4>
              <p>
                Diseñados para satisfacer tus necesidades. Desde desarrollo web
                hasta consultoría en tecnología, nuestro equipo está aquí para
                brindarte soluciones eficientes y personalizadas.
              </p>
            </div> */}

            <div className="col-lg-4 mb-3">
              <ListGroup
                items={SERVICES}
                itemId={selectedId}
                onSelect={(id: string) => handleSelectService(id)}
              />
              <div className="mb-3">
                <Image
                  className="img-radius-20 img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/services.jpg?alt=media&token=4d65133d-d89f-4bb2-81ec-7befefe07552"
                  alt="Call center image"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <a className="btn btn-primary w-100" href="/about">
                Sobre nosotros
              </a>
            </div>
            <div className="col-lg-8">
              <div className="mb-5">
                {currentService.id == "services" && (
                  <motion.section
                    id="all-services"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ServiceDetail
                      items={SERVICES}
                      onSelect={(id: string) => handleSelectService(id)}
                    />
                  </motion.section>
                )}

                {currentService.id == "security" && (
                  <motion.section
                    id="security"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ServiceSecurity />
                  </motion.section>
                )}

                {currentService.id == "infrastructure" && (
                  <motion.section
                    id="infrastructure"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ServiceInfraestructure />
                  </motion.section>
                )}

                {currentService.id == "web" && (
                  <motion.section
                    id="web"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ServiceWeb />
                  </motion.section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
