'use client';

import ActionButtons from '@/components/Home/ActionButtons';
import ContactButtons from '@/components/Home/ContactButtons';
import ProfileBlock from '@/components/Home/ProfileBlock';
import { CARD_DIMENSIONS } from '@/lib/homeConfig';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ModeToggle';

interface HomeCardContentProps {
  isRotate: boolean;
  targetRoute: string | null;
  isReturning: boolean;
  onNavigate: (href: string) => void;
}

export default function HomeCardContent({ isRotate, targetRoute, isReturning, onNavigate }: HomeCardContentProps) {
  const { MOBILE, DESKTOP } = CARD_DIMENSIONS;

  const dynamicStyles = {
    '--mobile-w': isRotate ? `${MOBILE.LANDSCAPE.w}px` : `${MOBILE.PORTRAIT.w}px`,
    '--mobile-h': isRotate ? `${MOBILE.LANDSCAPE.h}px` : `${MOBILE.PORTRAIT.h}px`,
    '--desktop-w': `${DESKTOP.w}px`,
    '--desktop-h': `${DESKTOP.h}px`,
  } as React.CSSProperties;

  return (
    <div
      style={dynamicStyles}
      className={cn(
        'flex flex-col justify-between flex-shrink-0 m-4 md:m-8 relative',
        'w-[calc(var(--mobile-w)-2rem)] h-[calc(var(--mobile-h)-2rem)]',
        'md:w-[calc(var(--desktop-w)-4rem)] md:h-[calc(var(--desktop-h)-4rem)]',
      )}
    >
      <div className="absolute top-0 right-0 z-9999">
        <ModeToggle />
      </div>
      <div className="flex flex-1 flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
        <ProfileBlock />
        <ActionButtons disabled={!!targetRoute || isReturning} onNavigate={onNavigate} />
      </div>
      <footer className="flex flex-row gap-2 items-center justify-between">
        <p className="text-muted-foreground px-2">연락처</p>
        <hr className="flex-1" />
        <ContactButtons />
      </footer>
    </div>
  );
}
