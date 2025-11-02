import { Badge } from '@/components/ui/badge';

const projectList = [
  {
    name: 'qnon.kr',
    description: '지금 보고 계시는 포트폴리오 사이트입니다.',
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Yestudy',
    description:
      '공부할 때 필요한 기록, 할 일, 캘린더, 메모 등을 한 곳에 모아 관리할 수 있는 올인원 학습 관리 앱입니다.',
    technologies: ['flutter', 'Dart'],
  },
];

export function ProjectView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">프로젝트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectList.map((project) => (
          <div key={project.name} className="flex flex-col justify-between gap-4 border p-4 rounded-lg shadow-sm">
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
    </div>
  );
}
