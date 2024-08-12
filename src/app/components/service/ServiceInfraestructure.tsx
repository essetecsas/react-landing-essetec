import Image from "next/image";
import { motion } from "framer-motion";
import { CarrouselBrand } from "../ui";

const BRANDS_SP = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fvyatta.png?alt=media&token=e958a73d-b7a5-4ee5-a25b-1ee326c5603b",
    alt: "Fvyatta-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fpfsense.png?alt=media&token=7fe3d946-7596-4d00-bfb9-238e0325e2c7",
    alt: "Fsense-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fpaloalto.png?alt=media&token=a88969f0-599e-4fd3-a803-b3601c4f3a27",
    alt: "Paloalto-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fjuniper.png?alt=media&token=e041c0ce-fe96-4f38-8072-8cc42215db0f",
    alt: "Juniper-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Ffortinet.png?alt=media&token=ae5243e3-a659-497d-8862-fb30b902f660",
    alt: "Fortinet-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2FSophos.png?alt=media&token=f0ce0844-3d59-44dc-8af5-aaec7c3558c7",
    alt: "Sophos-logo",
  },
];

const BRANDS_VR = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FHyper.png?alt=media&token=46b1856d-5dba-42b2-b7f6-3b2933e34eb9",
    alt: "Dahua-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fproxmox.png?alt=media&token=1c235f3f-82df-4810-b940-7a4568075405",
    alt: "Hikvision-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvmware.png?alt=media&token=b946a057-bac1-4ea8-a4a5-4044f5aaed32",
    alt: "Hilook-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FQemu.png?alt=media&token=7ad98179-59ad-4330-9db3-956277aeabc9",
    alt: "Kemu-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FKVM.png?alt=media&token=f258908b-a2b0-4cd9-a06b-6ede3ba6b0e2",
    alt: "Kvm-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvirtualbox.png?alt=media&token=ec6704bf-b2e3-4e4b-98a0-b09d191ef45f",
    alt: "VirtualBox-logo",
  },
];

const BRANDS_CP = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fibm_cloud.png?alt=media&token=3c361532-622a-4f91-b728-a7a35fade6ea",
    alt: "IBM-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fgoogle_cloud.png?alt=media&token=70ff6326-173e-4575-be79-c6bed8387d70",
    alt: "Google Cloud-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fazure.png?alt=media&token=0eab61b9-6ae6-446c-9fc2-b35f0e806474",
    alt: "Azure-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Famazon_web.png?alt=media&token=a65b3ef6-0712-4939-a99f-502f8cdb3b9e",
    alt: "AWS-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2FOracleCloud.png?alt=media&token=fcd3b428-eca7-4782-a7e6-5c358ca8a73e",
    alt: "Oracle-logo",
  },
];

const BRANDS_MH = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FWazuh.png?alt=media&token=8fbc1b84-d3ff-4d1f-853d-0b4e032d4597",
    alt: "Wazu-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fglpi.png?alt=media&token=6091ea81-e813-466b-bcff-c1bd234ae344",
    alt: "GLPI-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fnagiios.png?alt=media&token=0f6115c3-b694-4624-a5e4-155de0d4f8cf",
    alt: "Nagios-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FosTicket.png?alt=media&token=e0424df3-2570-4b9d-9ebb-d3c69425fd38",
    alt: "OSTicket-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fprtg.png?alt=media&token=d0254557-946a-4efb-a1b1-e7629e286c4c",
    alt: "PRTG-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fzabbix.jpeg?alt=media&token=111ea76d-8b16-4e51-b9d9-1b6afe85af82",
    alt: "Zabbix-logo",
  },
];

const BRANDS_SO = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FKernel_debian.png?alt=media&token=29944a0b-40fd-4654-9b0f-475b1b302f90",
    alt: "Debian-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FKernel_redhat.png?alt=media&token=d458069c-0e93-42ff-a98c-908dcf3406f0",
    alt: "RedHat-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FMacOS.png?alt=media&token=33ea14ca-ed87-413a-b6cb-fcc1766e729e",
    alt: "MacOS-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Flinux.png?alt=media&token=7dcc5f54-49ae-4119-9828-052f784f547d",
    alt: "Linux-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fmacos_bigsur.png?alt=media&token=9acadcd0-9fad-407d-886d-348c84ba9f1a",
    alt: "BigSur-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fwin11.png?alt=media&token=392d2550-9e15-42e8-8be7-ae3f9aeb9030",
    alt: "Windows11-logo",
  },
  {
    id: 6,
    name: "carrousel-img-7",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fwindow.png?alt=media&token=f45396c8-1027-426e-b600-b4b1b1dbfe19",
    alt: "WindowsServer-logo",
  },
];

const CARDS_OM = [
  {
    id: 0,
    title: "Google Workspace",
    description:
      "Conjunto de aplicaciones de productividad y colaboración en la nube de Google, que incluye Gmail, Google Drive, Google Docs, y Google Meet.",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/mail-ofimatica%2Fworkspace.png?alt=media&token=f0b1a66c-1453-4e1f-898c-8020e51dae03",
    alt: "GoogleWorkspace-logo",
  },
  {
    id: 1,
    title: "Office-365",
    description:
      "Microsoft 365, es un servicio de suscripción de Microsoft que ofrece aplicaciones de Office como Word, Excel y PowerPoint, junto con servicios en la nube.",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/mail-ofimatica%2Foffice-365.png?alt=media&token=367f5837-386a-45b0-89a3-27567f587003",
    alt: "Office-36-logo",
  },
  {
    id: 2,
    title: "Zimbra",
    description:
      "Plataforma de correo electrónico y colaboración de código abierto que ofrece funcionalidades como email, calendario y gestión de contactos.",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/mail-ofimatica%2Fzimbra2.jpg?alt=media&token=8e590869-449d-4589-a07b-ca65a9aa6ad8",
    alt: "Zimbra-logo",
  },
];

export const ServiceInfraestructure = () => {
  return (
    <div>
      <h4>Infraestructura & Outsorcing de tecnología</h4>
      <hr />
      <p>
        Proporcionar servicios esenciales de infraestructura y outsourcing de
        tecnología, redes seguras, almacenamiento de datos confiable, gestión de
        servidores eficiente, soporte técnico continuo.
      </p>

      <div className="my-3">
        <div id="network">
          <p>
            <b>Redes y comunicaciones</b>: ofrecemos un servicio integral de
            Redes y Comunicaciones diseñado para satisfacer todas sus
            necesidades tecnológicas. Nuestro enfoque se centra en dos pilares
            fundamentales: Cableado Estructurado y Seguridad Perimetral,
            asegurando una infraestructura robusta y segura para su empresa.
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_SP} />
            </div>
          </div>
        </div>
        <div id="virtualization">
          <p>
            <b>Virtualización</b>: Asesoría e implementación en servicios de
            visualización de tus servidores y micro servicios.
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_VR} />
            </div>
          </div>
        </div>
        <div id="SO">
          <p>
            <b>Sistemas operativos</b>: Asesoría e implementación en la gestión
            y optimización de tus sistemas operativos y entornos de software.
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_SO} />
            </div>
          </div>
        </div>
        <div id="virtualization">
          <p>
            <b>Cloud Computing</b>: Asesoría e implementación en servicios de
            computación en la nube para mejorar la escalabilidad y eficiencia de
            tu infraestructura.
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_CP} />
            </div>
          </div>
        </div>
        <div id="email">
          <p>
            <b>Ofimatica y correo</b>: Asesoría e implementación en herramientas
            de ofimática y soluciones de correo electrónico para mejorar la
            productividad de tu equipo.
          </p>
          <div className="row my-4">
            {CARDS_OM.map((card, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center"
              >
                <div
                  className="card m-2"
                  style={{ width: "260px" } as React.CSSProperties}
                >
                  <div style={{ height: "170px" } as React.CSSProperties}>
                    <Image
                      width={400}
                      height={180}
                      className="img-fluid"
                      style={
                        {
                          objectFit: "cover",
                          height: "100%",
                        } as React.CSSProperties
                      }
                      src={card.src}
                      alt={card.alt}
                    />
                  </div>
                  <div
                    className="card-body d-flex"
                    style={{ flexWrap: "wrap" }}
                  >
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="helpdesk">
            <p>
              <b>Monitoreo y Helpdesk</b>: Asesoría e implementación en sistemas
              de monitoreo y helpdesk para garantizar el rendimiento y soporte
              continuo de tus servicios.
            </p>
            <div className="row my-4">
              <div className="col">
                <CarrouselBrand slides={BRANDS_MH} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
