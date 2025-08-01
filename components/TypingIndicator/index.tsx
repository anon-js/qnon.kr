'use client';

import { motion } from 'framer-motion';
import { typingIndicatorContainer } from './index.css';

export default function TypingIndicator() {
  return (
    <div className={typingIndicatorContainer}>
      <motion.div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          padding: '4px 8px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#888',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
