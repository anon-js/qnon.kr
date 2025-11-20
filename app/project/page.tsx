'use client';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { ArrowLeft, Folder } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransitionContext } from '../context/TransitionContext';
import { fadeContainer } from '@/lib/openingVariants';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'qnon.kr',
    description: 'Next.js와 Tailwind CSS를 사용한 개인 포트폴리오 사이트입니다.',
    tags: ['Next.js', 'Tailwind CSS'],
    link: 'qnon.kr',
  },
  {
    id: 2,
    title: 'Yestudy',
    description: 'Flutter로 개발된 학습 관리 앱으로, 사용자가 학습 계획을 세우고 진행 상황을 추적할 수 있습니다.',
    tags: ['Flutter'],
    link: 'yestudy',
  },
];

export default function ProjectPage() {
  const router = useRouter();
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
    >
      <div className="flex flex-col w-full h-full flex-1 gap-8">
        <div className="flex flex-row items-center gap-2">
          <Button variant="ghost" onClick={handleGoBack}>
            <ArrowLeft className="size-6" />
          </Button>
          <h1 className="text-2xl font-bold">프로젝트</h1>
        </div>
        <div className="overflow-y-auto">
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] pr-2">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                href={`./project/${project.link}`}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              >
                <Folder className="size-12 text-gray-600 dark:text-gray-400" />
                <p className="mt-2 text-md font-medium text-gray-900 dark:text-gray-100">{project.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
