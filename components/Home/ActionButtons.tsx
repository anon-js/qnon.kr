'use client';

import { Button } from '@/components/ui/button';
import { ACTIONS, ButtonListType } from '@/lib/homeConfig';
import { ArrowUpRight } from 'lucide-react';
import { memo } from 'react';

function ActionButtons({ disabled, onNavigate }: { disabled: boolean; onNavigate: (href: string) => void }) {
  return (
    <nav className="max-md:w-full flex flex-row md:flex-col gap-2 items-center md:items-stretch">
      {ACTIONS.map((button: ButtonListType) => (
        <Button
          key={button.label}
          variant="default"
          className="flex flex-1 flex-row justify-between pl-4 pr-4"
          aria-label={button.label + ' 바로가기'}
          onClick={() => onNavigate(button.href)}
          disabled={disabled}
        >
          {button.label}
          <ArrowUpRight className="size-4" />
        </Button>
      ))}
    </nav>
  );
}

export default memo(ActionButtons);
