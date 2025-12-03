interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

export const TimelineItem = ({ date, title, description }: TimelineItemProps) => {
  return (
    <li className="flex flex-col gap-2 ms-4">
      <div className="absolute w-3 h-3 bg-muted rounded-full mt-0.5 -start-1.5 border border-background dark:border-background dark:bg-muted-foreground" />
      <time className="text-sm font-normal leading-none text-muted-foreground">{date}</time>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-base/6 font-normal text-muted-foreground whitespace-pre-line">{description}</p>
    </li>
  );
};
