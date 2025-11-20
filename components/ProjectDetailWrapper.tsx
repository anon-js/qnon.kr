'use client';

import { motion, Variants } from 'motion/react';
import { useRouter } from 'next/navigation';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ProjectDetailWrapperProps {
  slug: string;
}

export default function ProjectDetailWrapper({ slug }: ProjectDetailWrapperProps) {
  const router = useRouter();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col items-center pt-20 bg-gray-50 text-gray-900 p-8"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-600">
          프로젝트 상세: {slug ? slug.toUpperCase() : '프로젝트를 찾을 수 없음'}
        </h1>
        <p className="text-xl mb-6">이 페이지는 URL의 **`{slug || 'N/A'}`** 값을 받아 동적으로 렌더링되었습니다.</p>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-bold mb-3">여기에 상세 내용</h2>
          <p className="text-gray-700">{slug} 프로젝트에 대한 자세한 설명, 사용 기술, 결과 등을 표시합니다.</p>
        </div>

        <button
          className="mt-8 px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
          onClick={() => router.back()}
        >
          목록으로 돌아가기
        </button>
      </div>
    </motion.div>
  );
}
