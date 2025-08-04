'use client';

import { motion } from 'framer-motion';
import {
  section,
  titleStyle,
  descriptionStyle,
} from './section.css';

interface SectionProps {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const MotionText = ({
  as,
  className,
  children,
}: {
  as: 'h2' | 'p';
  className: string;
  children: React.ReactNode;
}) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition}
    >
      {children}
    </Tag>
  );
};

export default function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className={section}>
      <motion.h2
        className={titleStyle}
        initial={false}
      >
        {title}
      </motion.h2>
      <MotionText as="p" className={descriptionStyle}>
        {description}
      </MotionText>

      {children}
    </section>
  );
}
