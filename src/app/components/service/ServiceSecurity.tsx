import { CardFlip, CarrouselBrand } from "../ui";

const CAMERAS = [
  {
    id: 0,
    title: "Análogas",
    description:
      "Cámaras tradicionales que transmiten video a través de cables coaxiales a un grabador de video digital (DVR).",
    src: "/images/services/analoga.png",
    alt: "camara analoga",
  },
  {
    id: 1,
    title: "IP",
    description:
      "Cámaras que transmiten video digital a través de una red IP. Ofrecen alta resolución, permiten acceso mediante internet.",
    src: "/images/services/ip.png",
    alt: "ip",
  },
  {
    id: 2,
    title: "Inalámbricas",
    description:
      "Cámaras que se conectan a la red y transmiten video sin cables, utilizando tecnología Wi-Fi.",
    src: "/images/services/inalambrica.png",
    alt: "camara inalambrica",
  },
  {
    id: 3,
    title: "DVR / NVR",
    description:
      "Dispositivos de grabación y gestión de video. El DVR se utiliza en cámaras análogas, el NVR se utiliza en cámaras IP.",
    src: "/images/services/DVR.jpg",
    alt: "DVR",
  },
];

const BIOMETRICS = [
  {
    id: 0,
    title: "Hullero Biométrico",
    description:
      "Representan una solución moderna y eficaz para la seguridad y la gestión de acceso.",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/biometrics%2Fbiometrico.jpg?alt=media&token=61fd7e1e-6217-4ac1-bfe7-9911e3197765",
    alt: "Huellero Biométrico img",
  },
  {
    id: 1,
    title: "Video Portero",
    description:
      "Son esenciales para la seguridad y la gestión de acceso en viviendas y negocios.",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/biometrics%2Fvideoportero.jpeg?alt=media&token=731c82b8-0b78-4675-918b-be38a2b973f0",
    alt: "Video Portero img",
  },
];

const BRANDS = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2Fdahua.png?alt=media&token=a852ff6f-63d3-49d1-a90d-4cc32ddd9d61",
    alt: "Dahua-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2FHikvision.png?alt=media&token=a52e3ac4-b78b-4ba3-a5cb-f34126e75616",
    alt: "Hikvision-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2FHilook-Logo.png?alt=media&token=751a8615-2c57-4054-9426-7f4496f40210",
    alt: "Hilook-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2Fhoneywell.png?alt=media&token=44e1458c-618e-48a2-b9a7-64b688fe8cce",
    alt: "Honeywell-logo",
  },
];

export const ServiceSecurity = () => {
  return (
    <div>
      <h4>Seguridad electrónica</h4>
      <hr />
      <p>
        Los sistemas de seguridad electrónica ayudan a prevenir pérdidas,
        controlan los accesos no autorizados y mejoran la capacidad de reacción
        para evitar o mitigar las amenazas que puedan surgir.
      </p>

      <div className="my-3">
        <div id="CCTV">
          <p>
            <b>CCTV</b>: instalación de equipos conectados genera un circuito de
            imágenes que solo pueden ser visualizadas por un grupo determinado
            de personas. Estas se personalizan para adaptarse a las necesidades
            específicas de cada cliente, ya sea en seguridad, vigilancia o
            mejora de servicios.
          </p>
          <div className="row my-4">
            {CAMERAS.map(({ id, title, description, src, alt }) => (
              <div
                className="col-sm-12 col-md-3 d-flex justify-content-center"
                key={id}
              >
                <CardFlip
                  id={id}
                  width={180}
                  height={180}
                  title={title}
                  paragraph={description}
                  src={src}
                  alt={alt}
                />
              </div>
            ))}
          </div>
          <div>
            <CarrouselBrand slides={BRANDS} />
          </div>
        </div>
        <div id="Biométricos">
          <p>
            <b>Biométricos</b>: Sistemas de control de acceso, registros de
            control de ingreso personal o personal autorizado.
          </p>
          <div className="row my-4">
            {BIOMETRICS.map(({ id, title, description, src, alt }) => (
              <div
                className="col-sm-12 col-md-3 d-flex justify-content-center"
                key={id}
              >
                <CardFlip
                  id={0}
                  width={180}
                  height={180}
                  title={title}
                  paragraph={description}
                  src={src}
                  alt={alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
