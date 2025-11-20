'use client';

import { Project } from '@/types/project';
import { motion, Variants } from 'motion/react';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer border-t-4 border-indigo-600"
    >
      <Link href={project.link}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 h-12 overflow-hidden">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <span className="text-indigo-600 font-medium hover:underline">자세히 보기 &rarr;</span>
      </Link>
    </motion.div>
  );
}
