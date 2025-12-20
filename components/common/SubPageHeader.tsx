import { Button } from '@/components/common/Button';
import { Dropdown, DropdownItem } from '@/components/common/Dropdown';
import { useScrollThreshold } from '@/lib/hooks/useScrollThreshold';
import { cn } from '@/lib/utils';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface SubPageHeaderProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  handleGoBack: () => void;
  title: string;
}

export default function SubPageHeader({ scrollContainerRef, handleGoBack, title }: SubPageHeaderProps) {
  const isScrolled = useScrollThreshold(scrollContainerRef, 10);
  const { setTheme } = useTheme();

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
        <Dropdown
          trigger={
            <Button
              variant="outline"
              size="icon"
              aria-label="테마 변경"
              className={cn(
                'transition-all duration-300',
                isScrolled ? 'border-transparent! bg-transparent! shadow-none!' : '',
              )}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            </Button>
          }
          contentClassName="w-36"
        >
          <DropdownItem onClick={() => setTheme('light')}>라이트 모드</DropdownItem>
          <DropdownItem onClick={() => setTheme('dark')}>다크 모드</DropdownItem>
          <DropdownItem onClick={() => setTheme('system')}>시스템 설정</DropdownItem>
        </Dropdown>
      </div>
    </header>
  );
}
