'use client';

import { cn } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-sm text-muted-foreground mb-4', className)}>
      <Link href="/" className="hover:text-foreground transition-colors pl-2" aria-label="홈으로 이동">
        <HomeIcon className="size-4" />
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;
        const title = decodeURIComponent(segment);

        return (
          <Fragment key={href}>
            <span className="font-medium text-muted-foreground/50 mx-2">/</span>
            {isLast ? (
              <span className="font-medium text-foreground">{title}</span>
            ) : (
              <Link href={href} className="hover:text-foreground transition-colors">
                {title}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
