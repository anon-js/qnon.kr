'use client';

import { motion } from 'framer-motion';
import { messageBubble, userMsg, botMsg, meta, avatar } from './index.css';

type Props = {
  text: string;
  isUser: boolean;
  timestamp: string;
};

export default function ChatMessage({ text, isUser, timestamp }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${messageBubble} ${isUser ? userMsg : botMsg}`}
    >
      <div>
        <p>{text}</p>
        <span className={meta}>{timestamp}</span>
      </div>
    </motion.div>
  );
}
