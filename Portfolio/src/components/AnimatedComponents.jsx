import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({ children }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && scrollDirection !== "down") {
        // Scrolling Down → Play Animation
        setScrollDirection("down");
        setTriggerAnimation(false); // Reset animation
        setTimeout(() => setTriggerAnimation(true), 10); // Restart animation
      } 
      else if (currentScrollY < lastScrollY && scrollDirection !== "up") {
        // Scrolling Up → Play Animation
        setScrollDirection("up");
        setTriggerAnimation(false); // Reset animation
        setTimeout(() => setTriggerAnimation(true), 10); // Restart animation
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollDirection]);

  return (
    <motion.div
      key={triggerAnimation} // Force re-render to restart animation
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
