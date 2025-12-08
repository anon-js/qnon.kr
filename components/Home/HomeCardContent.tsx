'use client';

import ActionButtons from '@/components/Home/ActionButtons';
import ContactButtons from '@/components/Home/ContactButtons';
import ProfileBlock from '@/components/Home/ProfileBlock';
import { cn } from '@/lib/utils';

interface HomeCardContentProps {
  targetRoute: string | null;
  isReturning: boolean;
  onNavigate: (href: string) => void;
}

export default function HomeCardContent({ targetRoute, isReturning, onNavigate }: HomeCardContentProps) {
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
