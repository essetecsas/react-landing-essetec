import { FaChartLine } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";
import { Counter } from "../ui";
import { useReducedMotion } from "../../hooks";

const SOLUTIONS = [
  {
    id: 0,
    number: 14,
    symbol: "+",
    subtitle: "Años de experiencia",
    icon: <FaRegThumbsUp className="icons-lg color-success " />,
  },
  {
    id: 1,
    number: 200,
    symbol: "+",
    subtitle: "Tazas de café",
    icon: <MdCoffee className="icons-lg color-success " />,
  },
  {
    id: 2,
    number: 100,
    symbol: "%",
    subtitle: "Confiabilidad",
    icon: <FaClipboardCheck className="icons-lg color-success" />,
  },
  {
    id: 3,
    number: 100,
    symbol: "%",
    subtitle: "Dedicación",
    icon: <FaChartLine className="icons-lg color-success" />,
  },
];

export const SolutionSection = () => {
  const reduceMotion = false;

  return (
    <section className="section bg-tech-blue bg-center" id="solutions">
      <div className="container">
        <div className="row" id="counter">
          {SOLUTIONS.map((solution, index) => (
            <div className="col-sm-6 col-xl-3" key={index}>
              <div className="text-center mt-4">
                {solution.icon}
                <h2 className="counter-value text-white mt-4">
                  {reduceMotion ? (
                    <>
                      <span>{solution.number}</span>
                      <span>{solution.symbol}</span>
                    </>
                  ) : (
                    <>
                      <Counter from={0} to={solution.number} duration={4} />
                      <span>{solution.symbol}</span>
                    </>
                  )}
                </h2>
                <p className="font-16 text-white-50">{solution.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
