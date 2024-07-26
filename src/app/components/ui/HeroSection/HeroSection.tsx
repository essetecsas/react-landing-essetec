"use client";
import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./HeroSection.css";

type HeroSectionProps = {
  title?: string;
  description?: string;
  isVideo?: boolean;
  imgUrl?: string;
};

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  imgUrl,
  isVideo = true,
}) => {
  return (
    <section id="#home">
      <div className="hero-container">
        {isVideo ? (
          <div className="hero-video">
            <video
              id="video"
              src="/video/video_essetec.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        ) : (
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        )}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <div className="hero-wrapper text-center mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    className="hero-logo"
                    src="/images/logos/logo_bl2.png"
                    width={330}
                    height={380}
                    alt="icon"
                    priority
                  />
                  <h1 className="hero-title text-white">
                    <TypeAnimation
                      sequence={[
                        "ESPECIALISTAS EN SEGURIDAD ELECTRÓNICA & TECNOLOGÍA",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="hero-text text-white">{description}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
