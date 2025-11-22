'use client';
import SubPageHeader from '@/components/SubPageHeader';
import { TimelineItem } from '@/components/TimelineItem';
import { fadeContainer } from '@/lib/openingVariants';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useTransitionContext } from '../context/TransitionContext';

const educationList = [
  {
    date: '2024.03 - 현재',
    title: '한국성서대학교 (컴퓨터소프트웨어학과)',
    description: `웹/앱 개발, AI, 빅데이터 등 다양한 IT 분야를 경험해\n구체적인 진로를 설계하고자 합니다`,
  },
  {
    date: '2021.03 - 2024.02',
    title: '경민IT고등학교 (정보통신과)',
    description: `소프트웨어 개발의 기초를 다지기 위해 특성화고등학교에 입학해\n1학년에는 ITQ 한글, 엑셀, 3학년에는 웹디자인기능사와 정보처리산업기사를 취득하고 졸업했습니다.`,
  },
];

export default function EducationPage() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setIsReturning } = useTransitionContext();

  const handleGoBack = () => {
    setIsReturning(true);

    setTimeout(() => {
      router.push('/');
    }, 0);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeContainer}
      className="min-h-screen bg-white relative overflow-hidden p-4 md:p-8"
      ref={scrollContainerRef}
    >
      <SubPageHeader scrollContainerRef={scrollContainerRef} handleGoBack={handleGoBack} title="학력" />
      <motion.ol
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
      </motion.ol>
    </motion.div>
  );
}
