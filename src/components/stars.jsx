import { cn } from "../../utils/cn";

const stars = ({
  number = 200,
  className,
  starColor = "bg-white",
  starSize = "w-1 h-1",
  animate = true,
}) => {
  const stars = new Array(number).fill(true);

  return (
    <>
      {stars.map((_, idx) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const opacity = Math.random() * 0.5 + 0.5;

        return (
          <span
            key={"star" + idx}
            className={cn(
              "fixed rounded-full",
              animate && "animate-twinkle",
              starColor,
              starSize,
              className
            )}
            style={{
              top: top,
              left: left,
              opacity: opacity,
              animationDelay: Math.random() * 2 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
              zIndex: 0,
            }}
            aria-hidden="true"
          ></span>
        );
      })}
    </>
  );
};

export default stars; // Default export
