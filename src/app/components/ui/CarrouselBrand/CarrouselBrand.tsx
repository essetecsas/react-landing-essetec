import Image from "next/image";
import "./CarrouselBrand.css";

export const CarrouselBrand = ({ slides }) => {
  const numSlides = slides.length;
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div className="slider">
      <div
        className="slide-track"
        style={{ width: `calc(250px * ${numSlides})` }}
      >
        {duplicatedSlides.map(({ id, src, alt }, index) => (
          <div key={index} className="slide">
            <Image
              src={src}
              alt={alt}
              fill // Use fill instead of layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define sizes for different screen widths
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
