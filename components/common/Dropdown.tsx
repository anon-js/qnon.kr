'use client';

import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  align?: 'left' | 'right';
}

export function Dropdown({ trigger, children, className, contentClassName, align = 'right' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="inline-flex"
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {trigger}
      </div>

      {isOpen && (
        <ul
          className={cn(
            'absolute mt-2 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50 animate-in fade-in-0 zoom-in-95',
            align === 'right' ? 'right-0' : 'left-0',
            contentClassName,
          )}
          role="menu"
          onClick={() => setIsOpen(false)}
        >
          {children}
        </ul>
      )}
    </div>
  );
}

interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function DropdownItem({ children, className, ...props }: DropdownItemProps) {
  return (
    <li role="menuitem">
      <Button
        variant="ghost"
        className={cn(
          'relative flex w-full cursor-default select-none items-center justify-start rounded-sm px-2 py-1.5 text-sm outline-none transition-colors h-auto font-normal',
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </li>
  );
}
