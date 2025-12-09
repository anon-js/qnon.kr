import { Button } from '@/components/common/Button';
import { useScrollThreshold } from '@/lib/hooks/useScrollThreshold';
import { ArrowLeft } from 'lucide-react';
import ModeToggle from './ModeToggle';

interface SubPageHeaderProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  handleGoBack: () => void;
  title: string;
}

export default function SubPageHeader({ scrollContainerRef, handleGoBack, title }: SubPageHeaderProps) {
  const isScrolled = useScrollThreshold(scrollContainerRef, 10);

  return (
    <header
      className={`flex flex-row items-center gap-2 py-2 fixed backdrop-blur-md rounded-lg z-10 left-2 right-2 md:left-4 md:right-4 border transition-[border-color background-color] duration-500 ${
        isScrolled ? '' : 'border-transparent'
      }`}
    >
      <Button variant="ghost" onClick={handleGoBack} className="px-2!" aria-label="뒤로가기">
        <ArrowLeft className="size-6" />
      </Button>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="ml-auto pr-2 md:pr-4">
        <ModeToggle btnClassName={isScrolled ? 'border-transparent! bg-transparent! shadow-none!' : ''} />
      </div>
    </header>
  );
}
