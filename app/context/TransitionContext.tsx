'use client';

import { AnimatePresence, domAnimation, LazyMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useContext, useState } from 'react';

interface TransitionContextType {
  isReturning: boolean;
  setIsReturning: (state: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isReturning, setIsReturning] = useState(false);
  const pathname = usePathname();

  return (
    <TransitionContext.Provider value={{ isReturning, setIsReturning }}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname} className="w-full h-full flex flex-col">
            {children}
          </div>
        </AnimatePresence>
      </LazyMotion>
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransitionContext는 TransitionProvider 내에서 사용되어야 합니다.');
  }
  return context;
};
