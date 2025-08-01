'use client';

import { motion } from 'framer-motion';
import { section } from './index.css';

export default function AboutSection() {
  return (
    <motion.section
      className={section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Front-end Developer</h2>
      <p>
        UI/UX를 중요시 여기는 개발자 anon입니다.
      </p>
    </motion.section>
  );
}
