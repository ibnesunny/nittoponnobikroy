import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
  sentence = "Nitto Ponno Bikroy",
  animationDuration = 1.5,
  pauseBetweenAnimations = 1,
}) => {

  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className="flex gap-3 justify-center items-center flex-wrap">

      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <motion.div
            key={index}
            className="relative"
            animate={{ scale: isActive ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <span
              className={`text-lg lg:text-2xl font-semibold transition-all duration-500
              ${isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-400"
                : "text-gray-400"}
              `}
              style={{
                textShadow: isActive
                  ? "0 0 10px rgba(255,80,80,0.5)"
                  : "none",
              }}
            >
              {word}
            </span>

            {isActive && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-[-4px] h-[2px] w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-400"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TrueFocus;