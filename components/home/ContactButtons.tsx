'use client';

import { Button } from '@/components/ui/Button';
import { ButtonListType, CONTACTS } from '@/lib/homeConfig';
import Link from 'next/link';
import React, { memo } from 'react';

function ContactButtons() {
  return (
    <address className="flex flex-row gap-1 items-center not-italic">
      {CONTACTS.map((button: ButtonListType) => {
        const Icon = button.icon as React.ElementType | undefined;
        return (
          <Button key={button.label} variant="link" size="sm">
            <Link
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={button.label + '(으)로 연락하기'}
              className="flex gap-2 items-center"
            >
              {Icon && <Icon />}
              {button.label}
            </Link>
          </Button>
        );
      })}
    </address>
  );
}

export default memo(ContactButtons);
