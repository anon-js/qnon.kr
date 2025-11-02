export function EducationView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">학력</h1>
      <ol className="relative ms-2 border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024.03 - 현재</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">한국성서대학교 (컴퓨터소프트웨어학과)</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            웹/앱 개발, AI, 빅데이터 등 다양한 IT 분야를 경험해
            <br />
            구체적인 진로를 설계하고자 합니다
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021.03 - 2024.02
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">경민IT고등학교 (정보통신과)</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            소프트웨어 개발의 기초를 다지기 위해 특성화고등학교에 입학해
            <br />
            1학년에는 ITQ 한글, 엑셀, 3학년에는 웹디자인기능사와 정보처리산업기사를 취득하고 졸업했습니다.
          </p>
        </li>
      </ol>
    </div>
  );
}
