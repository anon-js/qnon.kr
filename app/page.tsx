'use client';

import { useEffect, useRef, useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import TypingIndicator from '@/components/TypingIndicator';
import AboutSection from '@/components/AboutSection';

import {
  chatWrapper,
  chatContainer,
  inputWrapper,
  input,
  button,
} from './page.css';

type Message = {
  text: string;
  isUser: boolean;
  timestamp: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      addMessage('현재 이 사이트는 구현 중에 있습니다.', false);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      setAutoScroll(false); // 한 번만 실행
    }
  }, [messages, autoScroll]);

  const addMessage = (text: string, isUser: boolean) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setMessages((prev) => [...prev, { text, isUser, timestamp }]);
  };

  const handleSubmit = () => {
    if (!inputText.trim()) return;

    addMessage(inputText.trim(), true);
    setInputText('');
    setIsTyping(false);
    setAutoScroll(true);
  };

  return (
    <main>
      <section className={chatWrapper}>
        <div className={chatContainer}>
          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              text={msg.text}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={scrollRef} />
        </div>

        <div className={inputWrapper}>
          <input
            className={input}
            type="text"
            value={inputText}
            placeholder="메시지를 입력하세요..."
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
          />
          <button className={button} onClick={handleSubmit}>
            보내기
          </button>
        </div>
      </section>

      <AboutSection />
    </main>
  );
}
