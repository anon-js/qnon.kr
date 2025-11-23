import { ArrowLeft } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface SubPageHeaderProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  handleGoBack: () => void;
  title: string;
}

export default function SubPageHeader({ scrollContainerRef, handleGoBack, title }: SubPageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer !== null) {
      console.log('Scroll position:', scrollContainer.scrollTop);
      if (scrollContainer.scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, scrollContainerRef]);

  return (
    <div
      className={`flex flex-row items-center gap-2 p-2 fixed backdrop-blur-md rounded-lg z-10 left-4 right-4 border transition-colors bg-white/70 hover:border-gray-200 dark:hover:border-gray-700 ${
        isScrolled ? 'border-gray-200 dark:border-gray-700' : 'border-transparent'
      }`}
    >
      <Button variant="ghost" onClick={handleGoBack} className="px-2!">
        <ArrowLeft className="size-6" />
      </Button>
      <h1 className="text-2xl font-bold">
        {title} {isScrolled ? '(Scrolled)' : ''}
      </h1>
    </div>
  );
}
