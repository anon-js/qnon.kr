import { useTransitionContext } from '@/app/context/TransitionContext';
import { fadeContainer } from '@/lib/openingVariants';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import SubPageHeader from './SubPageHeader';

interface SubPageContainerProps {
  title: string;
  children: React.ReactNode;
}

export const SubPageContainer = ({ title, children }: SubPageContainerProps) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setIsReturning } = useTransitionContext();

  const handleGoBack = () => {
    setIsReturning(true);

    setTimeout(() => {
      router.push('/');
    }, 0);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeContainer}
      className="min-h-screen bg-white relative overflow-y-auto px-4 py-6"
      ref={scrollContainerRef}
    >
      <SubPageHeader scrollContainerRef={scrollContainerRef} handleGoBack={handleGoBack} title={title} />
      {children}
    </motion.div>
  );
};
