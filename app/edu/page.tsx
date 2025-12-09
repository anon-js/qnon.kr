import { SubPageContainer } from '@/components/layout/SubPageContainer';
import dynamic from 'next/dynamic';

const Timeline = dynamic(() => import('@/components/education/Timeline').then((mod) => mod.TimelineList), {
  loading: () => <div className="h-[200px] animate-pulse bg-muted/10 rounded-lg" />,
});

const timelineList = [
  {
    date: '2024.03 - 현재',
    title: '한국성서대학교 (컴퓨터소프트웨어학과)',
    description: `웹/앱 개발, AI, 빅데이터 등 다양한 IT 분야를 경험해\n구체적인 진로를 설계하고자 합니다`,
  },
  {
    date: '2021.03 - 2024.02',
    title: '경민IT고등학교 (정보통신과)',
    description: `소프트웨어 개발의 기초를 다지기 위해 특성화고등학교에 입학해\n1학년에는 ITQ 한글, 엑셀, 3학년에는 웹디자인기능사와 정보처리산업기사를 취득하고 졸업했습니다.`,
  },
];

export default function EducationPage() {
  return (
    <SubPageContainer title="학력">
      <Timeline timelineList={timelineList} />
    </SubPageContainer>
  );
}
