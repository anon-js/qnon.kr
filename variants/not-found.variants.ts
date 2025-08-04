import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const headingVariants: Variants = {
  initial: { x: 0 },
  animate: {
    x: [0, -7, 7, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 5,
    },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3 },
  },
};

export const buttonMotion = {
  whileHover: { scale: 0.98 },
  whileTap: { scale: 0.95 },
};
