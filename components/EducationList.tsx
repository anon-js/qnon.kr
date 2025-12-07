'use client';

import { TimelineItem } from '@/components/TimelineItem';
import { fadeContainer } from '@/lib/openingVariants';
import { m } from 'motion/react';

interface Education {
  date: string;
  title: string;
  description: string;
}

interface EducationListProps {
  educationList: Education[];
}

export function EducationList({ educationList }: EducationListProps) {
  return (
    <m.ol
      className="flex flex-col gap-12 relative ml-4 mt-8 py-8 border-s border-gray-200 dark:border-gray-700"
      variants={fadeContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={{ delayChildren: 0.4, staggerChildren: 0.12 }}
    >
      {educationList.map((education) => (
        <TimelineItem key={education.title} {...education} />
      ))}
    </m.ol>
  );
}
