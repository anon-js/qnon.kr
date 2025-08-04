import { Variants } from 'framer-motion';

export const titleVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const highlightVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.4 },
  },
};

export const subtextVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const textBlockVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
