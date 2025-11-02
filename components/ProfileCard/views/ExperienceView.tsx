import { TimelineItem } from '../components/TimelineItem';

const experienceList = [
  {
    date: '2025.03 - 현재',
    title: '지상작전사령부',
    description: `2급 기밀을 다루고 있어 자세한 업무에 대해선 언급할 수 없지만\n순발력과 책임감을 기르고 있으며 맡은 바 임무를 성실히 수행하고 있습니다.`,
  },
  {
    date: '2023.01',
    title: '제 8회 하이톤(8th Highthon) - 프론트엔드 개발자',
    description: `처음 참가한 해커톤을 통해 협업과 유지보수의 중요성을 깨달았습니다.\n더 나은 실무경험을 쌓기 위해 노력하고 있습니다.`,
  },
];

export function ExperienceView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">경험</h1>
      <ol className="flex flex-col gap-12 relative mx-2 py-8 border-s border-gray-200 dark:border-gray-700">
        {experienceList.map((experience) => (
          <TimelineItem key={experience.date} {...experience} />
        ))}
      </ol>
    </div>
  );
}
