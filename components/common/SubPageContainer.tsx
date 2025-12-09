'use client';

import { useTransitionContext } from '@/app/context/TransitionContext';
import { fadeContainer } from '@/lib/openingVariants';
import { m } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import SubPageHeader from './SubPageHeader';

interface SubPageContainerProps {
  title: string;
  link?: string;
  children: React.ReactNode;
}

export const SubPageContainer = ({ title, link, children }: SubPageContainerProps) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setIsReturning } = useTransitionContext();

  const handleGoBack = (link?: string) => {
    setIsReturning(true);

    setTimeout(() => {
      router.push(link ?? '/');
    }, 0);
  };

  return (
    <m.main
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeContainer}
      className="flex flex-col flex-1 bg-background relative overflow-y-auto px-4 py-2 md:p-6"
      ref={scrollContainerRef}
    >
      <SubPageHeader scrollContainerRef={scrollContainerRef} handleGoBack={() => handleGoBack(link)} title={title} />
      <div className="flex flex-col flex-1 mt-16">{children}</div>
    </m.main>
  );
};
