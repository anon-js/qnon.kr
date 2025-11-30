'use client';

import HomeCardContent from '@/components/Home/HomeCardContent';
import { CARD_DIMENSIONS } from '@/lib/homeConfig';
import { useViewport } from '@/lib/useViewport';
import { motion, Variants } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useTransitionContext } from './context/TransitionContext';

export default function HomePage() {
  const router = useRouter();
  const { isReturning, setIsReturning } = useTransitionContext();

  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [hasShrunk, setHasShrunk] = useState<boolean>(!isReturning);

  const { isMobile, isRotate } = useViewport();
  const { MOBILE, DESKTOP } = CARD_DIMENSIONS;

  const expandVariants: Variants = useMemo(
    () => ({
      initial: {
        width: isMobile ? (isRotate ? MOBILE.LANDSCAPE.w : MOBILE.PORTRAIT.w) : DESKTOP.w,
        height: isMobile ? (isRotate ? MOBILE.LANDSCAPE.h : MOBILE.PORTRAIT.h) : DESKTOP.h,
        borderRadius: 16,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
      expand: {
        width: 'var(--full-width)',
        height: 'var(--full-height)',
        borderRadius: 0,
        transition: {
          duration: 0.4,
          ease: 'easeInOut',
        },
      },
    }),
    [isMobile, isRotate, MOBILE, DESKTOP],
  );

  const handleClick = (href: string) => setTargetRoute(href);

  let animationTarget = 'initial';
  if (targetRoute) animationTarget = 'expand';
  else if (isReturning && !hasShrunk) animationTarget = 'initial';

  return (
    <motion.div
      exit={'expand'}
      initial={isReturning ? 'expand' : 'initial'}
      animate={animationTarget}
      className="flex items-center justify-center w-full min-h-screen bg-gray-100 relative overflow-hidden"
    >
      <motion.div
        className="absolute flex flex-col items-center justify-center bg-white z-10 overflow-hidden"
        variants={expandVariants}
        style={{
          willChange: 'width, height',
          transform: 'translateZ(0)',
        }}
        onAnimationComplete={() => {
          if (targetRoute) router.push(targetRoute);

          if (isReturning && !hasShrunk) {
            setIsReturning(false);
            setHasShrunk(true);
          }
        }}
      >
        <HomeCardContent
          isRotate={isRotate}
          targetRoute={targetRoute}
          isReturning={isReturning}
          onNavigate={handleClick}
        />
      </motion.div>
    </motion.div>
  );
}
