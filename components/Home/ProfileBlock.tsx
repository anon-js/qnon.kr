'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfileBlock() {
  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar className="size-20 rounded-full border">
          <AvatarImage src="https://github.com/anon-js.png" alt="@anon-js" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-semibold">anon</h1>
          <p className="text-sm text-gray-600">프론트엔드 개발자</p>
        </div>
      </div>
      <p className="flex-1 text-md/6 text-gray-700 break-keep items-baseline pl-2">
        어떤 기기에서든, 어떤 환경에서든
        <br />
        <strong>모두에게 동일한 경험을</strong> 제공하는 서비스를 만들고 싶습니다.
      </p>
    </div>
  );
}
