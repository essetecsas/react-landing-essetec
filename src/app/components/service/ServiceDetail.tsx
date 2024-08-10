"use client";
import { motion } from "framer-motion";

export const ServiceDetail = ({ items, onSelect }) => {
  return (
    <div>
      <h4>Servicios</h4>
      <hr />
      <p>
        En nuestra empresa, nos dedicamos a proporcionar soluciones integrales
        que cubren diversas necesidades tecnológicas y de seguridad. Con un
        enfoque en la innovación y la satisfacción del cliente, ofrecemos una
        gama completa de servicios diseñados para proteger sus activos,
        optimizar su infraestructura y potenciar su presencia en línea.
      </p>

      <div className="my-3">
        {items.map(({ id, color, icon, title, paragraph }) => (
          <div key={`${id}-detail`}>
            {id !== "services" && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 200, damping: 17 }}
                className="card my-3 pointer"
                onClick={() => onSelect(id)}
              >
                <div className="card-header">
                  <div className="d-flex align-items-center ">
                    <span
                      className={`avatar avatar-sm bg-custom-${color} font-20`}
                    >
                      {icon}
                    </span>
                    <h6 className="mb-0 mx-2">{title}</h6>
                  </div>
                </div>
                <div className="p-4">
                  <p>{paragraph}</p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
