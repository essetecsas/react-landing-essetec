import Link from "next/link";
import { FC } from "react";
// css
import "./CardDetail.css";

type CardDetailProps = {
  title: string;
  description: string;
  options: any;
};

export const CardDetail: FC<CardDetailProps> = ({
  title,
  description,
  options,
}) => {
  return (
    <div className="card mb-3 card-md">
      <div className={`card-background bg-custom-${options.color}`}></div>
      <div className="card-body">
        <div className="card-avatar-md mx-auto mb-4">
          <span className="card-avatar rounded-circle">{options.icon}</span>
        </div>
        <div className="d-flex flex-column align-items-center text-center">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{description}</p>
          <Link
            className={`card-btn bg-custom-${options.color}`}
            href={options.href}
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};
