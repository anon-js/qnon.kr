'use client';
import { Project } from '@/@types/project';
import SubPageHeader from '@/components/SubPageHeader';
import { fadeContainer } from '@/lib/openingVariants';
import { Folder } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useTransitionContext } from '../context/TransitionContext';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'qnon.kr',
    description: 'Next.js와 Tailwind CSS를 사용한 개인 포트폴리오 사이트입니다.',
    tags: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Yestudy',
    description: 'Flutter로 개발된 학습 관리 앱으로, 사용자가 학습 계획을 세우고 진행 상황을 추적할 수 있습니다.',
    tags: ['Flutter'],
  },
].concat(
  Array.from({ length: 98 }, (_, i) => ({
    id: i + 3,
    title: `Sample Project ${i + 3}`,
    description: 'This is a sample project description.',
    tags: ['Sample', 'Project'],
  })),
);

export default function ProjectPage() {
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
    >
      <SubPageHeader scrollContainerRef={scrollContainerRef} handleGoBack={handleGoBack} title="프로젝트" />
      <div className="mt-14 overflow-y-auto" ref={scrollContainerRef}>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] pr-2">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={`./project/${project.title}`}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <Folder className="size-12 text-gray-600 dark:text-gray-400" />
              <p className="mt-2 text-md font-medium text-gray-900 dark:text-gray-100">{project.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
