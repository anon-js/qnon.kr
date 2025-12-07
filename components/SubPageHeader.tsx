import { ArrowLeft } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import ModeToggle from './ModeToggle';
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
    if (scrollContainer) {
      const shouldShowBorder = scrollContainer.scrollTop > 10;
      setIsScrolled((prev) => {
        if (prev !== shouldShowBorder) {
          return shouldShowBorder;
        }
        return prev;
      });
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, scrollContainerRef]);

  return (
    <header
      className={`flex flex-row items-center gap-2 py-2 fixed backdrop-blur-md rounded-lg z-10 left-4 right-4 border transition-colors bg-background/70 ${
        isScrolled ? 'border-border' : 'border-transparent'
      }`}
    >
      <Button variant="ghost" onClick={handleGoBack} className="px-2!" aria-label="뒤로가기">
        <ArrowLeft className="size-6" />
      </Button>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="ml-auto pr-2">
        <ModeToggle />
      </div>
    </header>
  );
}
