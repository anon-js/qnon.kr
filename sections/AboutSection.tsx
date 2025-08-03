import Section from '@/components/Section';

export default function AboutSection() {
  return (
    <Section
      title="현재 웹사이트를 개발 중에 있습니다."
      descriptionText={
        <>
          이 부분은 소개에 속하는 부분입니다.<br />
          사용자 경험을 위해 많이 노력하고 있어요.<br />
          앞으로 변화될 사이트를 많이 기대해 주세요 :)
        </>
      }
    />
  );
}
