'use client';
import { Button } from '@/components/ui/button';
import { ExpandingViewEnum, ExpandingViewProps } from '@/types/expandingView';
import { XIcon } from 'lucide-react';
import { EducationView } from '../views/EducationView';
import { ExperienceView } from '../views/ExperienceView';
import { ProjectView } from '../views/ProjectView';

function renderView(view: ExpandingViewEnum | undefined) {
  switch (view) {
    case ExpandingViewEnum.Project:
      return <ProjectView />;
    case ExpandingViewEnum.Experience:
      return <ExperienceView />;
    case ExpandingViewEnum.Education:
      return <EducationView />;
    default:
      return '오류가 발생했어요!';
  }
}

export function ExpandingCard({ isExpandingView, toggleExpand }: ExpandingViewProps) {
  return (
    <div className="w-full h-full p-8">
      <Button className="fixed top-6 right-6" variant="ghost" onClick={() => toggleExpand(ExpandingViewEnum.Default)}>
        <XIcon className="size-6" />
      </Button>
      <div>{renderView(isExpandingView)}</div>
    </div>
  );
}
