'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRightIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import { DefaultCard } from './components/DefaultCard';
import { ExpandingCard } from './components/ExpandingCard';

export function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document!.body.style.overflow = 'auto';
      }
    };
  }, [isExpanded]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#f7f7f9]">
      <motion.div
        layout
        className={`
          bg-white shadow-sm transition-all duration-500 ease-in-out
          ${
            isExpanded
              ? 'fixed w-screen h-screen z-[100] rounded-none border-none'
              : 'relative w-100 h-180 md:w-180 md:h-100 z-10 rounded-xl border'
          }
        `}
      >
        {isExpanded ? (
          <ExpandingCard
            toggleExpand={toggleExpand}
            title="현재 사이트를 개발 중에 있습니다."
            description="조금만 기다려 주세요 :)"
          />
        ) : (
          <DefaultCard title="현재 사이트를 개발 중에 있습니다." description="조금만 기다려 주세요 :)" />
        )}
      </motion.div>
      {!isExpanded && (
        <div className="mt-8 p-4 h-16 flex items-center space-x-2 bg-white rounded-lg border shadow-lg z-20">
          <Button variant="link" onClick={toggleExpand}>
            프로젝트 <ArrowUpRightIcon />
          </Button>
          <Separator orientation="vertical" />
          <Button variant="link" onClick={toggleExpand}>
            연혁 <ArrowUpRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
