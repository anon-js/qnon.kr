'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRightIcon } from 'lucide-react';
import { easeInOut } from 'motion';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import { DefaultCard } from './components/DefaultCard';
import { ExpandingCard } from './components/ExpandingCard';

export function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
    }

    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isExpanded]);

  const collapsedSize = isMediumScreen ? { width: '30rem', height: '20rem' } : { width: '20rem', height: '30rem' };

  const animationProps = {
    animate: isExpanded
      ? { width: '100vw', height: '100vh', borderRadius: 0 }
      : { ...collapsedSize, borderRadius: '0.75rem' },

    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.5 } },
  };

  const cardClasses = isExpanded ? 'fixed z-[100] border-none' : 'relative z-10 border';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#f7f7f9]">
      <motion.div
        layout
        {...animationProps}
        className={`
          bg-white shadow-sm
          ${cardClasses}
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isExpanded ? (
            <motion.div
              key="expanded"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ width: '100%', height: '100%' }}
            >
              <ExpandingCard
                toggleExpand={toggleExpand}
                title="현재 사이트를 개발 중에 있습니다."
                description="조금만 기다려 주세요 :)"
              />
            </motion.div>
          ) : (
            <motion.div
              key="default"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ width: '100%', height: '100%' }}
            >
              <DefaultCard title="현재 사이트를 개발 중에 있습니다." description="조금만 기다려 주세요 :)" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            key="menu"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mt-8 p-4 h-16 flex items-center space-x-2 bg-white rounded-lg border shadow-lg z-20"
          >
            <Button variant="link" onClick={toggleExpand}>
              프로젝트 <ArrowUpRightIcon className="w-4 h-4 ml-1" />
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Button variant="link" onClick={toggleExpand}>
              연혁 <ArrowUpRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
