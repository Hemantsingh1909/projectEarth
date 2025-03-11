import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

const Meteors = ({
  number = 10,
  className,
  meteorColor = "bg-white",
  meteorSize = "h-1.5 w-1.5",
  trailLength = "before:w-[150px]",
  animate = true,
}) => {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const rotation = Math.random() * 360;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "fixed rounded-[9px] shadow-[0_0_0_1px_#ffffff10]",
              "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              animate && "animate-meteor-effect",
              meteorColor,
              meteorSize,
              trailLength,
              className
            )}
            style={{
              top: top,
              left: left,
              animationDelay: Math.random() * 0.6 + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
              transform: `rotate(${rotation}deg)`,
              zIndex: 1,
              "--rotation": `${rotation}deg`,
            }}
            aria-hidden="true"
          ></span>
        );
      })}
    </>
  );
};

Meteors.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string,
  meteorColor: PropTypes.string,
  meteorSize: PropTypes.string,
  trailLength: PropTypes.string,
  animate: PropTypes.bool,
};

export default Meteors; // Default export
