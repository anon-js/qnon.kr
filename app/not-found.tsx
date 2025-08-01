'use client';

import { useRouter } from 'next/navigation';
import { h2, p, button } from "@/app/not-found.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <section>
      <h2 className={h2}>404 Not Found</h2>
      <p className={p}>
        웹 페이지를 찾을 수 없어요.<br />
        올바른 주소가 맞는지 확인해 주세요.
      </p>
      <button className={button} onClick={() => router.back()}>이전으로</button>
    </section>
  )
}
