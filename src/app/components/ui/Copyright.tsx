import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Copyright = () => {
  return (
    <section className="bg-primary p-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="float-sm-start">
              <p className="text-white mb-0">
                © 2024 Essetec. Orgullosamente hecho en LATAM
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="float-sm-end">
              {/* <FaLinkedinIn className="footer-icons" />
              <FaFacebook className="footer-icons" />
              <FaInstagram className="footer-icons" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
