'use client';

import { Button } from '@/components/ui/button';
import { ACTIONS, ButtonListType } from '@/lib/homeConfig';
import { ArrowUpRight } from 'lucide-react';

export default function ActionButtons({
  disabled,
  onNavigate,
}: {
  disabled: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <div className="max-md:w-full flex flex-row md:flex-col gap-2 items-center md:items-stretch">
      {ACTIONS.map((button: ButtonListType) => (
        <Button
          key={button.label}
          variant="ghost"
          className="flex flex-1 flex-row justify-between md:justify-start pl-2! pr-3! text-gray-600 hover:text-gray-900"
          onClick={() => onNavigate(button.href)}
          disabled={disabled}
        >
          <ArrowUpRight className="size-4 stroke-gray-600 stroke-2" />
          {button.label}
        </Button>
      ))}
    </div>
  );
}
