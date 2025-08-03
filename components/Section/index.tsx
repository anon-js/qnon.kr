'use client';

import { motion, MotionProps } from 'framer-motion';
import {
  section,
  title,
  description,
} from './section.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

interface SectionProps extends Partial<MotionProps> {
  title: string;
  descriptionText: React.ReactNode;
  children?: React.ReactNode;
}

export default function Section({
  title,
  descriptionText,
  children,
  ...motionProps
}: SectionProps) {
  return (
    <motion.section
      className={section}
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition}
      {...motionProps}
    >
      <h2 className={title}>{title}</h2>
      <p className={description}>{descriptionText}</p>
      {children}
    </motion.section>
  );
}
