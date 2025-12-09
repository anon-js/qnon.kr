'use client';

import { fadeContainer } from '@/lib/openingVariants';
import { m } from 'motion/react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineListProps {
  timelineList: TimelineItem[];
}

export function TimelineList({ timelineList }: TimelineListProps) {
  return (
    <m.ol
      className="flex flex-col gap-12 relative ml-4 py-8 border-s border-gray-200 dark:border-gray-700"
      variants={fadeContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={{ delayChildren: 0.4, staggerChildren: 0.12 }}
    >
      {timelineList.map((timelineItem) => (
        <li className="flex flex-col gap-2 ms-4" key={timelineItem.title}>
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-0.5 -start-1.5 border border-background dark:border-background dark:bg-gray-600" />
          <time className="text-sm font-normal leading-none text-muted-foreground">{timelineItem.date}</time>
          <h3 className="text-lg font-semibold text-foreground">{timelineItem.title}</h3>
          <p className="text-base/6 font-normal text-muted-foreground whitespace-pre-line">{timelineItem.description}</p>
        </li>
      ))}
    </m.ol>
  );
}
