'use client';

import ActionButtons from '@/components/Home/ActionButtons';
import ContactButtons from '@/components/Home/ContactButtons';
import ProfileBlock from '@/components/Home/ProfileBlock';
import { useViewport } from '@/lib/useViewport';
import { cubicBezier, motion, Variants } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useTransitionContext } from './context/TransitionContext';

export default function HomePage() {
  const router = useRouter();
  const { isReturning, setIsReturning } = useTransitionContext();

  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [hasShrunk, setHasShrunk] = useState<boolean>(!isReturning);

  const { isMobile, isRotate, width: viewportWidth, height: viewportHeight } = useViewport();

  const expandVariants: Variants = useMemo(
    () => ({
      initial: {
        width: isMobile ? (isRotate ? 540 : 320) : 720,
        height: isMobile ? (isRotate ? 320 : 540) : 400,
        borderRadius: 16,
        transition: {
          // faster, snappier shrink
          duration: 0.45,
          ease: cubicBezier(0.4, 0, 0.2, 1),
        },
      },
      expand: {
        width: viewportWidth,
        height: viewportHeight,
        borderRadius: 0,
        transition: {
          duration: 0.8,
          ease: cubicBezier(0.83, 0, 0.17, 1),
        },
      },
    }),
    [isMobile, isRotate, viewportWidth, viewportHeight],
  );

  const handleClick = (href: string) => setTargetRoute(href);

  let animationTarget = 'initial';
  if (targetRoute) animationTarget = 'expand';
  else if (isReturning && !hasShrunk) animationTarget = 'initial';

  return (
    <motion.div
      exit="expand"
      animate={animationTarget}
      initial={isReturning ? 'expand' : 'initial'}
      onAnimationComplete={() => {
        if (targetRoute) router.push(targetRoute);

        if (isReturning && !hasShrunk) {
          setIsReturning(false);
          setHasShrunk(true);
        }
      }}
      className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex flex-col p-4 md:p-8 justify-between bg-white z-10"
        style={{ transformOrigin: 'center center' }}
        variants={expandVariants}
      >
        <div
          className={`${isRotate ? 'w-[calc(540px-2rem)] h-[calc(320px-2rem)]' : 'w-[calc(320px-2rem)] h-[calc(540px-2rem)]'} md:w-[calc(720px-4rem)] md:h-[calc(400px-4rem)] flex flex-col justify-between m-auto p-auto`}
        >
          <div className="flex flex-1 flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
            <ProfileBlock />
            <ActionButtons disabled={!!targetRoute || isReturning} onNavigate={handleClick} />
          </div>

          <div className="flex flex-col gap-2">
            <hr />
            <div className="flex flex-row gap-2 px-2 items-center justify-between">
              <p className="text-gray-700 mr-4">Contact.</p>
              <ContactButtons />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
