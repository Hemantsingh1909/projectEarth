import { cn } from "../../utils/cn";
import Stars from "./stars"; // Default import
import Meteors from "./meteors"; // Default import
import PropTypes from "prop-types";

const Universe = ({ numberOfStars = 500, numberOfMeteors = 10, className }) => {
  return (
    <div className={cn("absolute inset-0", className)}>
      {/* Stars - Background Layer */}
      <Stars number={numberOfStars} className="z-0" />

      {/* Meteors - Foreground Layer */}
      <Meteors number={numberOfMeteors} className="z-20" />

      {/* Optional: Comet */}
      <div
        className="absolute w-2 h-2 bg-white rounded-full animate-comet"
        style={{
          top: "10%",
          left: "20%",
          boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
        }}
        aria-hidden="true"
      ></div>
    </div>
  );
};

Universe.propTypes = {
  numberOfStars: PropTypes.number,
  numberOfMeteors: PropTypes.number,
  className: PropTypes.string,
};

export default Universe; // Default export
