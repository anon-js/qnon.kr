import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';

interface ExpandingCardProps {
  toggleExpand: () => void;
  title: string;
  description: string;
}

export function ExpandingCard({ toggleExpand, title, description }: ExpandingCardProps) {
  return (
    <div className="w-full h-full p-8">
      <Button className="fixed top-6 right-6" variant="ghost" onClick={toggleExpand}>
        <XIcon className="size-6" />
      </Button>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
