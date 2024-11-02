import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import { MdPhone, MdEmail } from "react-icons/md";
export const Footer = () => {
  return (
    <section className="footer" id="#footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="text-center">
              <Image
                src="/images/logos/logo_bl2.png"
                alt="logo image"
                width={90}
                height={100}
                priority
              />
              <p className="mt-4">
                Convierte tu negocio en una experiencia tecnológica
                sorprendente, única e innovadora.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 offset-lg-1">
            <div>
              <h5 className="mb-4 footer-list-title">Compañia</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <Link href="/about">Acerca de nosotros</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 footer-list-title">Legal</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/10jNh6PTEAmQfzkRW0_6BKm-7kPeC83pK/view?usp=sharing"
                  >
                    Terminos
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1gJpQ-tpH64rSLArGnYWGfQGIQLy2AI6U/view?usp=drive_link"
                  >
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div>
              <h5 className="footer-list-title mb-4">Más información</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <Link href="/services">Servicios</Link>
                </li>
                <li>
                  <Link href="/#features">Características</Link>
                </li>
                <li>
                  <Link href="/#clients">Clientes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="mb-4">
              <h5 className="footer-list-title mb-4">Contacto</h5>
              <div className="d-flex align-items-center">
                <MdPhone className="icons-sm" />
                <h5 className="footer-list-title mx-2">+57 3208921420</h5>
              </div>
              <div className="d-flex align-items-center">
                <MdEmail className="icons-sm" />
                <h5 className="footer-list-title mx-2">
                  contacto@essetecsas.com
                </h5>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <Image
                src="/images/emojis/CEO.png"
                alt="CEO emoji"
                width={70}
                height={70}
                priority
              />
              <div>
                <span>Ing. Daniel Alfonso Sánchez</span>
                <br></br>
                <span>CEO - Co-founder</span>
                <br></br>
                <span>daniel.alfonso@essetecsas.com</span>
              </div>
            </div>
            <br></br>
            <div className="d-flex align-items-center">
              <Image
                src="/images/emojis/CFO.png"
                alt="CFO emoji"
                width={70}
                height={70}
                priority
              />
              <div>
                <span>C.P. Erika Coji</span>
                <br></br>
                <span>CFO - Co-founder</span>
                <br></br>
                <span>erika.coji@essetecsas.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
