'use client';

import { motion, MotionProps } from 'framer-motion';
import {
  section,
  titleStyle,
  descriptionStyle,
} from './section.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

interface SectionProps extends Partial<MotionProps> {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export default function Section({
  title,
  description,
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
      <h2 className={titleStyle}>{title}</h2>
      <p className={descriptionStyle}>{description}</p>
      {children}
    </motion.section>
  );
}
