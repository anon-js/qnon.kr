'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import {
  container,
  heading,
  subtext,
} from './not-found.css';
import {
  containerVariants,
  headingVariants,
  textVariants,
  buttonMotion,
} from '@/variants/not-found.variants';

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      className={container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className={heading}
        variants={headingVariants}
        initial="initial"
        animate="animate"
      >
        404
      </motion.h1>
      <motion.p
        className={subtext}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        원하시는 페이지를 찾을 수 없어요.<br />
        올바른 주소를 입력했는지 확인해 주세요.
      </motion.p>
      <Button
        {...buttonMotion}
        onClick={() => router.push('/')}
      >
        홈으로 돌아가기
      </Button>
    </motion.div>
  );
};
