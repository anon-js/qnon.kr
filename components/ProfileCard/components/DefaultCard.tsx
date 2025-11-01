import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

interface DefaultCardProps {
  name: string;
  job_category: string;
}

export function DefaultCard({ name, job_category }: DefaultCardProps) {
  return (
    <div className="h-full flex flex-col p-8 justify-between">
      <div className="flex flex-row items-center gap-4">
        <Avatar className="size-20 rounded-full border">
          <AvatarImage src="https://github.com/anon-js.png" alt="@anon-js" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-600">{job_category}</p>
        </div>
      </div>
      <div className="px-2 break-keep">
        <strong className="text-md">&ldquo;모두에게 동일한 경험을&rdquo;</strong>
        <p className="text-sm text-gray-700 mt-2">
          어떤 기기에서든, 어떤 환경에서든 모두에게 동일한 경험을 제공하는 서비스를 만들고 싶습니다.
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="link" size="sm" asChild>
          <Link href="mailto:anon@qnon.kr" target="_blank" rel="noopener noreferrer">
            <Mail />
            Mail
          </Link>
        </Button>
        <Button variant="link" size="sm" asChild>
          <Link href="https://github.com/anon-js" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub />
            Github
          </Link>
        </Button>
      </div>
    </div>
  );
}
