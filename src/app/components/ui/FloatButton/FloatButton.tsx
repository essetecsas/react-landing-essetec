"use client";
import "./FloatButton.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatButton = () => {
  return (
    <motion.a
      className="btn-float box-shadow"
      type="button"
      href="https://wa.me/573208921420"
      target="_blank"
      aria-label="float button"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <FaWhatsapp className="icon" />
    </motion.a>
  );
};
