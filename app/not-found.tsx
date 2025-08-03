'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import * as styles from './not-found.css';

const Custom404 = () => {
  const router = useRouter();

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className={styles.heading}
        animate={{
          x: [0, -7, 7, -5, 5, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 5,
        }}
      >
        404
      </motion.h1>
      <motion.p
        className={styles.subtext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        원하시는 페이지를 찾을 수 없어요.
      </motion.p>
      <motion.button
        className={styles.backButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/')}
      >
        홈으로 돌아가기
      </motion.button>
    </motion.div>
  );
};

export default Custom404;
