'use client';

import { Button } from '@/components/common/Button';
import { Dropdown, DropdownItem } from '@/components/common/Dropdown';
import HomeCardContent from '@/components/home/HomeCardContent';
import { Moon, Sun } from 'lucide-react';
import { m, Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { useTransitionContext } from './context/TransitionContext';

export default function HomePage() {
  const router = useRouter();
  const { isReturning, setIsReturning } = useTransitionContext();
  const { setTheme } = useTheme();

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

  const handleClick = useCallback(
    (href: string) => {
      router.prefetch(href);
      setTargetRoute(href);
    },
    [router],
  );

  const handleAnimationComplete = useCallback(() => {
    if (targetRoute) router.push(targetRoute);

    if (isReturning && !hasShrunk) {
      setIsReturning(false);
      setHasShrunk(true);
    }
  }, [targetRoute, router, isReturning, hasShrunk, setIsReturning]);

  let animationTarget = 'initial';
  if (targetRoute) animationTarget = 'expand';
  else if (isReturning && !hasShrunk) animationTarget = 'initial';

  return (
    <m.main
      exit={'expand'}
      initial={isReturning ? 'expand' : 'initial'}
      animate={animationTarget}
      className="flex items-center justify-center w-full min-h-screen bg-muted relative overflow-hidden"
    >
      <m.div
        className="absolute flex flex-col items-center justify-center bg-card z-10 overflow-hidden will-change-[width,height] transform-gpu"
        variants={expandVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-9999">
          <Dropdown
            trigger={
              <Button variant="outline" size="icon" aria-label="테마 변경" className="transition-all duration-300">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
              </Button>
            }
            contentClassName="w-36"
          >
            <DropdownItem onClick={() => setTheme('light')}>라이트 모드</DropdownItem>
            <DropdownItem onClick={() => setTheme('dark')}>다크 모드</DropdownItem>
            <DropdownItem onClick={() => setTheme('system')}>시스템 설정</DropdownItem>
          </Dropdown>
        </div>
        <HomeCardContent targetRoute={targetRoute} isReturning={isReturning} onNavigate={handleClick} />
      </m.div>
    </m.main>
  );
}
