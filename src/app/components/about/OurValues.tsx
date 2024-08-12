import { IoMdRocket } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdRibbon } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";

const ITEMS = [
  {
    name: "Innovación constante",
    icon: <IoMdTrendingUp className="icons-md" />,
  },
  {
    name: "Enfoque en nuestros usuarios",
    icon: <IoIosContacts className="icons-md" />,
  },
  {
    name: "Agilidad",
    icon: <IoMdRocket className="icons-md" />,
  },
  {
    name: "Etica",
    icon: <IoMdRibbon className="icons-md" />,
  },
  {
    name: "Responsabilidad",
    icon: <IoIosPeople className="icons-md" />,
  },
];

export const OurValues = () => {
  return (
    <section className="section bg-tech-grey bg-bottom" id="mision">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-primary text-uppercase">Nuestros Valores</h3>
        </div>
        <div className="row">
          {ITEMS.map(({ name, icon }, i) => (
            <div key={i} className="col text-center p-4 mt-3">
              <div className="avatar-md mx-auto mb-4">
                <span className="avatar-title rounded-circle bg-soft-primary">
                  <span className="color-primary">{icon}</span>
                </span>
              </div>
              <h6 className="font-16">{name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
