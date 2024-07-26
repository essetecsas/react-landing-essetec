import Image from "next/image";
export const VisionSection = () => {
  return (
    <div className="justify-content-center row" id="vision">
      <div className="col-lg-6">
        <div className="mb-5">
          {/* <h5 className="text-primary text-uppercase small-title">
                Acerca de nosotros
              </h5> */}
          <h3 className="mb-3">Visión</h3>
          <p>
            Ser reconocidos como líderes en soluciones integrales de seguridad
            electrónica y tecnológica, brindando tranquilidad y confianza a
            nuestros clientes a través de la implementación de las tecnologías
            más innovadoras.
            <br />
            <br />
            Nos comprometemos a asegurar entornos seguros y conectados, siendo
            el aliado estratégico en la transformación digital tanto para
            empresas como particulares. Nos impulsa la excelencia y la
            innovación constante, permitiendo a nuestros clientes prosperar y
            destacarse en un mundo cada vez más exigente.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="text-center mb-5">
          <Image
            className="img-radius-20 img-fluid"
            src="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/vision.jpg?alt=media&token=197ef9fa-391d-450e-90d4-f06a92b57c84"
            alt="vision image"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
