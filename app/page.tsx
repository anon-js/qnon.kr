'use client';

import { m, Variants } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { useTransitionContext } from './context/TransitionContext';

const HomeCardContent = dynamic(() => import('@/components/Home/HomeCardContent'), {
  loading: () => <div className="w-full h-full bg-muted/10 animate-pulse" />,
});

export default function HomePage() {
  const router = useRouter();
  const { isReturning, setIsReturning } = useTransitionContext();

  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [hasShrunk, setHasShrunk] = useState<boolean>(!isReturning);

  const expandVariants: Variants = useMemo(
    () => ({
      initial: {
        width: 'var(--card-w)',
        height: 'var(--card-h)',
        borderRadius: 16,
        transition: {
          duration: 0.3,
          ease: [0.862, 0.623, 0.132, 1],
        },
      },
      expand: {
        width: 'var(--full-width)',
        height: 'var(--full-height)',
        borderRadius: 0,
        transition: {
          duration: 0.3,
          ease: [1, 0.132, 0.623, 0.862],
        },
      },
    }),
    [],
  );

  const handleClick = useCallback((href: string) => setTargetRoute(href), []);

  let animationTarget = 'initial';
  if (targetRoute) animationTarget = 'expand';
  else if (isReturning && !hasShrunk) animationTarget = 'initial';

  return (
    <m.div
      exit={'expand'}
      initial={isReturning ? 'expand' : 'initial'}
      animate={animationTarget}
      className="flex items-center justify-center w-full min-h-screen bg-muted relative overflow-hidden"
    >
      <m.div
        className="absolute flex flex-col items-center justify-center bg-card z-10 overflow-hidden will-change-[width,height] transform-gpu"
        variants={expandVariants}
        onAnimationComplete={() => {
          if (targetRoute) router.push(targetRoute);

          if (isReturning && !hasShrunk) {
            setIsReturning(false);
            setHasShrunk(true);
          }
        }}
      >
        <HomeCardContent targetRoute={targetRoute} isReturning={isReturning} onNavigate={handleClick} />
      </m.div>
    </m.div>
  );
}
