'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ExpandingViewEnum } from '@/types/expandingView';
import { IconBrandGithub } from '@tabler/icons-react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { cubicBezier, motion, Variants } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useTransitionContext } from './context/TransitionContext';

export default function HomePage() {
  const router = useRouter();
  const { isReturning, setIsReturning } = useTransitionContext();
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [hasShrunk, setHasShrunk] = useState(!isReturning);
  const [isMobile, setIsMobile] = useState(false);

  type ActionButtonListType = {
    label: string;
    view: ExpandingViewEnum;
    href: string;
  };

  type ContactButtonListType = {
    label: string;
    href: string;
    icon: React.ElementType;
  };

  const ActionButtonList: ActionButtonListType[] = [
    {
      label: '프로젝트',
      view: ExpandingViewEnum.Project,
      href: '/project',
    },
    {
      label: '학력',
      view: ExpandingViewEnum.Education,
      href: '/edu',
    },
    {
      label: '경험',
      view: ExpandingViewEnum.Experience,
      href: '/exp',
    },
  ];

  const ContactButtonList: ContactButtonListType[] = [
    {
      label: 'Mail',
      href: 'mailto:anon@qnon.kr',
      icon: Mail,
    },
    {
      label: 'Github',
      href: 'https://github.com/anon-js',
      icon: IconBrandGithub,
    },
  ];

  useEffect(() => {
    if (isReturning && !hasShrunk) {
      const timer = setTimeout(() => {
        setIsReturning(false);
        setHasShrunk(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isReturning, hasShrunk, setIsReturning]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const expandVariants: Variants = useMemo(
    () => ({
      initial: {
        width: isMobile ? 320 : 720,
        height: isMobile ? 540 : 400,
        borderRadius: 16,
      },
      expand: {
        width: isMobile ? 768 : 3000,
        height: 3000,
        borderRadius: 0,
        transition: {
          duration: 0.8,
          ease: cubicBezier(0.83, 0, 0.17, 1),
        },
      },
    }),
    [isMobile],
  );

  useEffect(() => {
    if (targetRoute) {
      router.push(targetRoute);
    }
  }, [targetRoute, router]);

  const handleClick = (href: string) => {
    setTargetRoute(href);
  };

  let animationTarget = 'initial';
  if (targetRoute) {
    animationTarget = 'expand';
  } else if (isReturning && !hasShrunk) {
    animationTarget = 'initial';
  }

  return (
    <motion.div
      exit="expand"
      animate={animationTarget}
      initial={isReturning ? 'expand' : 'initial'}
      transition={{
        duration: 0.8,
        ease: cubicBezier(0.83, 0, 0.17, 1),
      }}
      className="flex items-center justify-center min-h-screen  bg-gray-100 relative overflow-hidden"
    >
      <motion.div
        className="h-full flex flex-col p-4 md:p-8 justify-between bg-white z-10"
        style={{
          top: '50%',
          left: '50%',
        }}
        variants={expandVariants}
      >
        <div className="h-[540px] md:h-[400px] flex flex-col justify-between my-auto">
          <div className="h-full flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex flex-row items-center gap-4">
                <Avatar className="size-20 rounded-full border">
                  <AvatarImage src="https://github.com/anon-js.png" alt="@anon-js" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-semibold">anon</h1>
                  <p className="text-sm text-gray-600">프론트엔드 개발자</p>
                </div>
              </div>
              <p className="flex-1 text-md/6 text-gray-700 break-keep items-baseline pl-2">
                어떤 기기에서든, 어떤 환경에서든
                <br />
                <strong>모두에게 동일한 경험을</strong> 제공하는 서비스를 만들고 싶습니다.
              </p>
            </div>
            <div className="max-md:w-full flex flex-row md:flex-col gap-2 items-center md:items-stretch">
              {ActionButtonList.map((button) => (
                <Button
                  key={button.label}
                  variant="ghost"
                  className="flex flex-1 flex-row justify-between md:justify-start pl-2! pr-3! text-gray-600 hover:text-gray-900"
                  onClick={() => handleClick(button.href)}
                  disabled={!!targetRoute || isReturning}
                >
                  <ArrowUpRight className="size-4 stroke-gray-600 stroke-2" />
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <hr />
            <div className="flex flex-row gap-2 mt-2 px-2 items-center justify-between">
              <p className="text-gray-700 mr-4">Contact.</p>
              <div className="flex flex-row gap-2 items-center">
                {ContactButtonList.map((button) => (
                  <Button key={button.label} variant="link" size="sm" asChild>
                    <Link href={button.href} target="_blank" rel="noopener noreferrer">
                      <button.icon />
                      {button.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
