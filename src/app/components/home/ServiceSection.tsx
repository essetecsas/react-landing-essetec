"use client";
// icons
import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
// components
import { CardDetail, CarrouselBrand } from "../ui";

const SERVICES = [
  {
    title: "Seguridad electrónica",
    description:
      "Los sistemas de seguridad electrónica previenen pérdidas, controlan accesos no autorizados y permiten una respuesta rápida ante amenazas.",
    options: {
      color: "security",
      icon: <GiCctvCamera className="color-security" />,
      href: "/security",
    },
  },
  {
    title: "Infraestructura & Outsorcing de tecnología",
    description:
      "Ofrecemos servicios tecnológicos integrales, desde infraestructura y redes seguras hasta almacenamiento confiable de datos.",
    options: {
      color: "it",
      icon: <IoServer className="color-it" />,
      href: "/infrastructure",
    },
  },
  {
    title: "Desarrollo web",
    description:
      "Nuestro servicio web se enorgullece de ofrecer soluciones eficientes y seguras para cubrir todas tus necesidades en línea de manera optimá y segura",
    options: {
      color: "web",
      icon: <MdWeb className="color-web" />,
      href: "/web",
    },
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
  {
    id: 7,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FKernel_debian.png?alt=media&token=29944a0b-40fd-4654-9b0f-475b1b302f90",
    alt: "Debian-logo",
  },
  {
    id: 8,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FKernel_redhat.png?alt=media&token=d458069c-0e93-42ff-a98c-908dcf3406f0",
    alt: "RedHat-logo",
  },
  {
    id: 9,
    name: "carrousel-img-7",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2FMacOS.png?alt=media&token=33ea14ca-ed87-413a-b6cb-fcc1766e729e",
    alt: "MacOS-logo",
  },
  {
    id: 10,
    name: "carrousel-img-8",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Flinux.png?alt=media&token=7dcc5f54-49ae-4119-9828-052f784f547d",
    alt: "Linux-logo",
  },
  {
    id: 11,
    name: "carrousel-img-9",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fmacos_bigsur.png?alt=media&token=9acadcd0-9fad-407d-886d-348c84ba9f1a",
    alt: "BigSur-logo",
  },
  {
    id: 12,
    name: "carrousel-img-10",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fwin11.png?alt=media&token=392d2550-9e15-42e8-8be7-ae3f9aeb9030",
    alt: "Windows11-logo",
  },
  {
    id: 13,
    name: "carrousel-img-11",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/so%2Fwindow.png?alt=media&token=f45396c8-1027-426e-b600-b4b1b1dbfe19",
    alt: "WindowsServer-logo",
  },
  {
    id: 14,
    name: "carrousel-img-12",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FWazuh.png?alt=media&token=8fbc1b84-d3ff-4d1f-853d-0b4e032d4597",
    alt: "Wazu-logo",
  },
  {
    id: 15,
    name: "carrousel-img-13",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fglpi.png?alt=media&token=6091ea81-e813-466b-bcff-c1bd234ae344",
    alt: "GLPI-logo",
  },
  {
    id: 16,
    name: "carrousel-img-14",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fnagiios.png?alt=media&token=0f6115c3-b694-4624-a5e4-155de0d4f8cf",
    alt: "Nagios-logo",
  },
  {
    id: 17,
    name: "carrousel-img-15",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FosTicket.png?alt=media&token=e0424df3-2570-4b9d-9ebb-d3c69425fd38",
    alt: "OSTicket-logo",
  },
  {
    id: 18,
    name: "carrousel-img-16",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fprtg.png?alt=media&token=d0254557-946a-4efb-a1b1-e7629e286c4c",
    alt: "PRTG-logo",
  },
  {
    id: 19,
    name: "carrousel-img-17",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fzabbix.jpeg?alt=media&token=111ea76d-8b16-4e51-b9d9-1b6afe85af82",
    alt: "Zabbix-logo",
  },
  {
    id: 20,
    name: "carrousel-img-18",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fibm_cloud.png?alt=media&token=3c361532-622a-4f91-b728-a7a35fade6ea",
    alt: "IBM-logo",
  },
  {
    id: 21,
    name: "carrousel-img-19",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fgoogle_cloud.png?alt=media&token=70ff6326-173e-4575-be79-c6bed8387d70",
    alt: "Google Cloud-logo",
  },
  {
    id: 22,
    name: "carrousel-img-20",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fazure.png?alt=media&token=0eab61b9-6ae6-446c-9fc2-b35f0e806474",
    alt: "Azure-logo",
  },
  {
    id: 23,
    name: "carrousel-img-21",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Famazon_web.png?alt=media&token=a65b3ef6-0712-4939-a99f-502f8cdb3b9e",
    alt: "AWS-logo",
  },
  {
    id: 24,
    name: "carrousel-img-22",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2FOracleCloud.png?alt=media&token=fcd3b428-eca7-4782-a7e6-5c358ca8a73e",
    alt: "Oracle-logo",
  },
  {
    id: 25,
    name: "carrousel-img-23",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FHyper.png?alt=media&token=46b1856d-5dba-42b2-b7f6-3b2933e34eb9",
    alt: "Dahua-logo",
  },
  {
    id: 26,
    name: "carrousel-img-24",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fproxmox.png?alt=media&token=1c235f3f-82df-4810-b940-7a4568075405",
    alt: "Hikvision-logo",
  },
  {
    id: 27,
    name: "carrousel-img-25",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvmware.png?alt=media&token=b946a057-bac1-4ea8-a4a5-4044f5aaed32",
    alt: "Hilook-logo",
  },
  {
    id: 28,
    name: "carrousel-img-26",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FQemu.png?alt=media&token=7ad98179-59ad-4330-9db3-956277aeabc9",
    alt: "Kemu-logo",
  },
  {
    id: 29,
    name: "carrousel-img-27",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FKVM.png?alt=media&token=f258908b-a2b0-4cd9-a06b-6ede3ba6b0e2",
    alt: "Kvm-logo",
  },
  {
    id: 30,
    name: "carrousel-img-28",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvirtualbox.png?alt=media&token=ec6704bf-b2e3-4e4b-98a0-b09d191ef45f",
    alt: "VirtualBox-logo",
  },
  {
    id: 31,
    name: "carrousel-img-29",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fvyatta.png?alt=media&token=e958a73d-b7a5-4ee5-a25b-1ee326c5603b",
    alt: "Fvyatta-logo",
  },
  {
    id: 32,
    name: "carrousel-img-30",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fpfsense.png?alt=media&token=7fe3d946-7596-4d00-bfb9-238e0325e2c7",
    alt: "Fsense-logo",
  },
  {
    id: 33,
    name: "carrousel-img-31",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fpaloalto.png?alt=media&token=a88969f0-599e-4fd3-a803-b3601c4f3a27",
    alt: "Paloalto-logo",
  },
  {
    id: 34,
    name: "carrousel-img-32",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Fjuniper.png?alt=media&token=e041c0ce-fe96-4f38-8072-8cc42215db0f",
    alt: "Juniper-logo",
  },
  {
    id: 35,
    name: "carrousel-img-33",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2Ffortinet.png?alt=media&token=ae5243e3-a659-497d-8862-fb30b902f660",
    alt: "Fortinet-logo",
  },
  {
    id: 36,
    name: "carrousel-img-34",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/perimetral-security%2FSophos.png?alt=media&token=f0ce0844-3d59-44dc-8af5-aaec7c3558c7",
    alt: "Sophos-logo",
  },
];

export const ServiceSection = () => {
  return (
    <section className="section bg-tech-grey bg-center" id="services">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h3 className="text-primary text-uppercase">Servicios</h3>
              <p>
                Descubre una amplia gama de servicios diseñados para satisfacer
                tus necesidades. Desde desarrollo web hasta consultoría en
                tecnología, nuestro equipo está aquí para brindarte soluciones
                eficientes y personalizadas.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {SERVICES.map(({ title, description, options }, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <CardDetail
                title={title}
                description={description}
                options={options}
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <CarrouselBrand slides={BRANDS} />
        </div>
      </div>
    </section>
  );
};
