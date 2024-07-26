"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type CardFeatureProps = {
  position: number;
  image_url: string;
};

export const CardFeature = ({ position, image_url }: CardFeatureProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        y: 50,
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 3, // Animation duration
        },
      }}
      className="border border-light shadow-none mt-5 mt-lg-0 card"
    >
      <div className="border-0 bg-transparent card-header">
        <div className="d-flex">
          <i className="mdi-circle bg-danger mr-1"></i>
          <i className="mdi-circle bg-warning mr-1 ms-1"></i>
          <i className="mdi-circle bg-success mr-1 ms-1"></i>
        </div>
      </div>
      <div className="bg-custom-light card-body">
        <div className="box-shadow">
          <Image
            className="img-radius-20 img-fluid"
            src={image_url}
            alt="feature image"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};
