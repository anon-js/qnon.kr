export function CareerView() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">경력</h1>
      <ol className="relative ms-2 border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">현재</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">준비 중...</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            아직 경력 부분을 제작 중에 있어요.
            <br />
            금방 내용을 채울게요!
          </p>
        </li>
      </ol>
    </div>
  );
}
