interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

export const TimelineItem = ({ date, title, description }: TimelineItemProps) => {
  return (
    <li className="flex flex-col gap-2 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-0.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-base/6 font-normal text-gray-500 dark:text-gray-700 whitespace-pre-line">{description}</p>
    </li>
  );
};
