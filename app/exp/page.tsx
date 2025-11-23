'use client';
import SubPageHeader from '@/components/SubPageHeader';
import { fadeContainer } from '@/lib/openingVariants';
import { IconPhotoSearch } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useTransitionContext } from '../context/TransitionContext';

const experienceList = [
  {
    img_src: '',
    date: '2025.03 - 현재',
    title: '지상작전사령부',
    description: `싸지방에서 코딩하는 사람이 있다?`,
  },
  {
    img_src: '',
    date: '2023.01',
    title: '제 8회 하이톤(8th Highthon) - 프론트엔드 개발자',
    description: `처음 참가해본 해커톤에서 얼탄 썰 푼다 ㅋㅋ`,
  },
];

export default function ExperiencePage() {
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
      className="min-h-screen bg-white relative overflow-hidden px-4 py-6"
      ref={scrollContainerRef}
    >
      <SubPageHeader scrollContainerRef={scrollContainerRef} handleGoBack={handleGoBack} title="경험" />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(480px,1fr))] mt-4">
        {experienceList.map((experience) => (
          <article
            key={experience.title}
            className="flex flex-col items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 h-full"
          >
            {experience.img_src ? (
              <Image
                src={experience.img_src}
                alt={experience.title}
                className="w-full aspect-video object-cover rounded-md border"
              />
            ) : (
              <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 border rounded-md">
                <div className="flex flex-col gap-2 items-center justify-center h-full">
                  <IconPhotoSearch className="size-12 stroke-gray-600 dark:stroke-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">이미지 준비 중...</p>
                </div>
              </div>
            )}
            <div className="w-full flex flex-col flex-1 ps-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{experience.description}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 whitespace-pre-wrap">
                {experience.title}
              </p>
              <p className="flex items-center gap-3 mt-3 text-sm text-gray-500 dark:text-gray-400">{experience.date}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
