import { Badge } from '@/components/ui/badge';

const projectList = [
  {
    name: 'qnon.kr (개발 중...)',
    description: '개인 포트폴리오 웹사이트입니다. Next.js와 Tailwind CSS를 사용하여 제작 중입니다.',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Yestudy',
    description: 'Yestudy는 공부할 때 도움을 주는 앱입니다.',
    technologies: ['flutter', 'Dart'],
  },
];

export function ProjectView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">제가 경험한 프로젝트를 소개할게요!</h1>
      {projectList.map((project) => (
        <div key={project.name} className="flex flex-col gap-4 border p-4 rounded-lg shadow-sm">
          <div className="flex flex-col gap-2">
            <strong className="text-lg text-gray-800">{project.name}</strong>
            <p className="text-gray-700">{project.description}</p>
          </div>
          <div className="flex gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
