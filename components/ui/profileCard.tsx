'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconBrandGithub } from '@tabler/icons-react';
import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function ProfileCard() {
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);

  return (
    <Card className={`${isOpenCard ? 'w-full h-full absolute border-none justify-center' : ''}`}>
      <CardHeader>
        <CardTitle>anon</CardTitle>
        <CardDescription>프론트엔드 개발자</CardDescription>
        <CardAction className="flex gap-2">
          <Button asChild>
            <Link href="mailto:anon@qnon.kr" target="_blank" rel="noopener noreferrer">
              <MailIcon /> Email
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://github.com/anon-js" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub /> GitHub
            </Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-xl text-gray-900 font-bold">모두에게 동일한 경험을</h1>
        <p className="mt-2 text-base text-gray-600">
          사용자가 어떤 조건에 놓여있든지 상관없이 동일한 경험을 제공하는 서비스를 만들고 싶습니다.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" onClick={() => setIsOpenCard(!isOpenCard)}>
          프로젝트 <ArrowUpRightIcon />
        </Button>
        <Button variant="link" onClick={() => setIsOpenCard(!isOpenCard)}>
          연혁 <ArrowUpRightIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
