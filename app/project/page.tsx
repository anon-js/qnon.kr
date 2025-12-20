import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SubPageContainer } from '@/components/common/SubPageContainer';
import { projectsData } from '@/lib/projectsData';
import { Folder } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <SubPageContainer title="프로젝트">
      <Breadcrumbs />
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(60px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
        {projectsData.map((project) => (
          <Link
            key={project.id}
            href={`./project/${project.title}`}
            className="flex flex-col items-center justify-start gap-1 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            <Folder className="size-12 text-gray-600 dark:text-gray-400" />
            <p className="text-md font-medium text-gray-800 dark:text-gray-100 text-ellipsis line-clamp-2">
              {project.title}
            </p>
          </Link>
        ))}
      </div>
    </SubPageContainer>
  );
}
