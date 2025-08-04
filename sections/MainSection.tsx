'use client';

import { motion } from 'framer-motion';
import {
  section,
  title,
  highlight,
  subtext,
  textBlock,
} from '@/styles/mainSection.css';
import {
  titleVariants,
  highlightVariants,
  subtextVariants,
  textBlockVariants,
} from '@/variants/mainSection.variants';

export default function MainSection() {
  return (
    <section className={section}>
      <motion.p
        className={subtext}
        variants={subtextVariants}
        initial="initial"
        animate="animate"
      >
        설명이 따로 필요없는
      </motion.p>
      <motion.h1
        className={title}
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        사용자를 위한
        <br />
        <motion.span
          className={highlight}
          variants={highlightVariants}
          initial="initial"
          animate="animate"
        >
          직관적인 UI/UX
        </motion.span>
      </motion.h1>
      <motion.div
        className={textBlock}
        variants={textBlockVariants}
        initial="initial"
        animate="animate"
      >
        <p>
          안녕하세요! 사용자 경험을 최우선으로 생각하는 <strong>프론트엔드 개발자 anon</strong>입니다.
        </p>
        <p>
          누구나 쉽게 사용할 수 있는 서비스를 만들기 위해 많은 경험들을 쌓고 있어요.<br />
          모두에게 최고의 사용자 경험을 제공하기 위해 열심히 노력하겠습니다!
        </p>
      </motion.div>
    </section>
  );
}
