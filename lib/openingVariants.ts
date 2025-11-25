import { Variants } from 'motion/react';

export const fadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = { delayChildren: 0.5, staggerChildren: 0.1 }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayChildren,
      staggerChildren: custom.staggerChildren,
    },
  }),
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export function createFadeContainerVariants(delayChildren = 0.5, staggerChildren = 0.1, exitDuration = 0.3): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren, staggerChildren },
    },
    exit: { opacity: 0, transition: { duration: exitDuration } },
  };
}
