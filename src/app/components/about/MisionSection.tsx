import Image from "next/image";

export const MisionSection = () => {
  return (
    <div className="justify-content-center row mb-5" id="mision">
      <div className="col-lg-6">
        <div className="text-center mb-5">
          <Image
            className="img-radius-20 img-fluid"
            src="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/mision.jpg?alt=media&token=edec1697-01f1-4b88-b62b-4eb357efe767"
            alt="mision image"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mb-5">
          <h3 className="mb-3">Misión</h3>
          <p>
            Proporcionar soluciones integrales que garanticen la protección de
            propiedades y activos mediante el uso de tecnologías innovadoras.
            <br />
            <br />
            Nos especializamos en soluciones de seguridad electrónica y
            tecnológica de primera clase. Además, nos enfocamos en asesorar y
            guiar a empresas y particulares en su camino hacia la transformación
            digital, ofreciendo servicios de consultoría tecnológica, diseño de
            infraestructura tecnológica y desarrollo web. Estamos comprometidos
            con la excelencia, la constante innovación y la mejora continua,
            para ayudar a nuestros clientes a prosperar en un mundo cada vez más
            digital.
          </p>
        </div>
      </div>
    </div>
  );
};
