'use client';

import { ExpandingViewEnum } from '@/types/expandingView';
import { easeInOut } from 'motion';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import { BottomButtonGroup } from './components/BottomButtonGroup';
import { DefaultCard } from './components/DefaultCard';
import { ExpandingCard } from './components/ExpandingCard';

export function ProfileCard() {
  const [isExpandingView, setIsExpandingView] = useState<ExpandingViewEnum>(ExpandingViewEnum.Default);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const toggleExpand = (view: ExpandingViewEnum) => {
    setIsExpandingView((prev) => (prev === view ? ExpandingViewEnum.Default : view));
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isExpandingView === ExpandingViewEnum.Default ? 'hidden' : 'auto';
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
  }, [isExpandingView]);

  const collapsedSize = isMediumScreen ? { width: '35rem', height: '20rem' } : { width: '20rem', height: '35rem' };

  const animationProps = {
    animate:
      isExpandingView === ExpandingViewEnum.Default
        ? { ...collapsedSize, borderRadius: '0.75rem' }
        : { width: '100vw', height: '100vh', borderRadius: 0 },

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

  const cardClasses =
    isExpandingView === ExpandingViewEnum.Default ? 'relative z-10 border' : 'fixed z-[100] border-none';

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
          <motion.div
            key={isExpandingView === ExpandingViewEnum.Default ? 'default' : 'expanded'}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            {isExpandingView === ExpandingViewEnum.Default ? (
              <DefaultCard name="anon" job_category="프론트엔드 개발자" />
            ) : (
              <ExpandingCard isExpandingView={isExpandingView} toggleExpand={toggleExpand} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <BottomButtonGroup isExpandingView={isExpandingView} toggleExpand={toggleExpand} />
    </div>
  );
}
