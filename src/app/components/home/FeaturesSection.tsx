"use client";
// component
import { CardFeature } from "./CardFeature";
// icons
import { IoMdTrendingUp } from "react-icons/io";
import { IoServer } from "react-icons/io5";
import { GiCctvCamera } from "react-icons/gi";

export const FeaturesSection = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h3 className="text-primary text-uppercase">Características</h3>
              <p>
                Nuestros servicios se distinguen por una combinación de calidad
                y accesibilidad, nuestras soluciones están diseñadas para
                simplificar tus operaciones y maximizar tus resultados.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="avatar-md mb-4">
              <span className="avatar-title rounded-circle bg-soft-primary">
                <span className="color-primary">
                  <IoServer className="icons-md" />
                </span>
              </span>
            </div>
            <h5>Aumente la escalabilidad de su negocio </h5>
            <p className="mb-4">
              Prepare su negocio para el crecimiento futuro con nuestro servicio
              de infraestructura tecnológica. Desde la implementación de
              sistemas de nube hasta la optimización de redes, ofrecemos
              soluciones flexibles y escalables diseñadas para adaptarse a las
              necesidades cambiantes de su empresa.
            </p>
          </div>
          <div className="ms-lg-auto col-sm-8 col-lg-5">
            <div>
              <CardFeature
                position={1}
                image_url="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/server.jpg?alt=media&token=2c4a79c4-3eda-4183-a2e6-ed80199fa899"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-5">
            <div className="avatar-md mb-4">
              <span className="avatar-title rounded-circle bg-soft-primary">
                <span className="color-primary">
                  <GiCctvCamera className="icons-md" />
                </span>
              </span>
            </div>
            <h5>Mejore la seguridad de su negocio</h5>
            <p className="mb-4">
              Proteja su negocio y sus activos con nuestro servicio de seguridad
              electrónica. Desde la vigilancia por video hasta el monitoreo
              remoto, ofrecemos soluciones integrales diseñadas para brindarle
              tranquilidad y protección.
            </p>
          </div>
          <div className="ms-lg-auto col-sm-8 col-lg-5">
            <div>
              <CardFeature
                position={2}
                image_url="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera.jpg?alt=media&token=44cf292b-ad93-4a05-9ea6-5caa4a53b88a"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-lg-5">
            <div className="avatar-md mb-4">
              <span className="avatar-title rounded-circle bg-soft-primary">
                <span className="color-primary">
                  <IoMdTrendingUp className="icons-md" />
                </span>
              </span>
            </div>
            <h5>Aumente sus resultados de marketing</h5>
            <p className="mb-4">
              Potencie su estrategia de marketing con nuestra solución web.
              Ofrecemos herramientas poderosas y fáciles de usar para mejorar su
              presencia en línea y aumentar la interacción con sus clientes
              potenciales.
            </p>
          </div>
          <div className="ms-lg-auto col-sm-8 col-lg-5">
            <div>
              <CardFeature
                position={3}
                image_url="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/marketing.jpg?alt=media&token=ef56f7a4-0444-4cb2-9b58-44fe15b6ac36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
