import { TimelineItem } from '../components/TimelineItem';

const careerList = [
  {
    date: '2023.01',
    title: '제 8회 하이톤(8th Highthon)',
    description: `처음 참가한 해커톤을 통해 협업과 유지보수의 중요성을 깨달았습니다.\n더 나은 실무경험을 쌓기 위해 노력하고 있습니다.`,
  },
];

export function CareerView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">경력</h1>
      <ol className="flex flex-col gap-4 relative mx-2 py-8 border-s border-gray-200 dark:border-gray-700">
        {careerList.map((career) => (
          <TimelineItem key={career.date} {...career} />
        ))}
      </ol>
    </div>
  );
}
