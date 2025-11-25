'use client';

import { Button } from '@/components/ui/button';
import { ButtonListType, CONTACTS } from '@/lib/homeConfig';
import Link from 'next/link';
import React from 'react';

export default function ContactButtons() {
  return (
    <div className="flex flex-row gap-2 items-center">
      {CONTACTS.map((button: ButtonListType) => {
        const Icon = button.icon as React.ElementType | undefined;
        return (
          <Button key={button.label} variant="link" size="sm" asChild>
            <Link href={button.href} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon />}
              {button.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
