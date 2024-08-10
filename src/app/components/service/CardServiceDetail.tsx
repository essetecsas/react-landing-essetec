import Image from "next/image";

export const CardServiceDetail = ({ id, title, paragraph, src, alt }) => {
  return (
    <div id={`card-${id}`} className="card border-dark mb-3">
      <div className="card-header">{title}</div>
      <div className="card-body text-dark">
        <Image
          className="avatar-md img-fluid"
          src={src}
          width={120}
          height={120}
          alt={alt}
        />

        <p className="card-text">{paragraph}</p>
      </div>
    </div>
  );
};
