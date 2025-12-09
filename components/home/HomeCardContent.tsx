'use client';

import ActionButtons from '@/components/home/ActionButtons';
import ContactButtons from '@/components/home/ContactButtons';
import ProfileBlock from '@/components/home/ProfileBlock';
import { cn } from '@/lib/utils';

import { memo } from 'react';

interface HomeCardContentProps {
  targetRoute: string | null;
  isReturning: boolean;
  onNavigate: (href: string) => void;
}

function HomeCardContent({ targetRoute, isReturning, onNavigate }: HomeCardContentProps) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col justify-between flex-shrink-0 w-(--card-w) max-h-(--card-h) p-4 md:p-8 relative',
      )}
    >
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

export default memo(HomeCardContent);
