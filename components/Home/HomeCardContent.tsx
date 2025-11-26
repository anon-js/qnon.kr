'use client';

import ActionButtons from '@/components/Home/ActionButtons';
import ContactButtons from '@/components/Home/ContactButtons';
import ProfileBlock from '@/components/Home/ProfileBlock';
import { CARD_DIMENSIONS } from '@/lib/homeConfig';
import { cn } from '@/lib/utils';

interface HomeCardContentProps {
  isRotate: boolean;
  targetRoute: string | null;
  isReturning: boolean;
  onNavigate: (href: string) => void;
}

export default function HomeCardContent({ isRotate, targetRoute, isReturning, onNavigate }: HomeCardContentProps) {
  const { MOBILE, DESKTOP } = CARD_DIMENSIONS;

  return (
    <div
      className={cn(
        'flex flex-col justify-between flex-shrink-0 m-4 md:m-8',
        isRotate
          ? `w-[calc(${MOBILE.LANDSCAPE.w}px-2rem)] h-[calc(${MOBILE.LANDSCAPE.h}px-2rem)]`
          : `w-[calc(${MOBILE.PORTRAIT.w}px-2rem)] h-[calc(${MOBILE.PORTRAIT.h}px-2rem)]`,
        `md:w-[calc(${DESKTOP.w}px-4rem)] md:h-[calc(${DESKTOP.h}px-4rem)]`,
      )}
    >
      <div className="flex flex-1 flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
        <ProfileBlock />
        <ActionButtons disabled={!!targetRoute || isReturning} onNavigate={onNavigate} />
      </div>

      <div className="flex flex-col gap-2">
        <hr />
        <div className="flex flex-row gap-2 items-center justify-between">
          <p className="text-gray-700 mr-4">Contact.</p>
          <ContactButtons />
        </div>
      </div>
    </div>
  );
}
