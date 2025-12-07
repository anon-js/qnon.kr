import { debounce } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function useViewport() {
  const [isMobile, setIsMobile] = useState(false);
  const [isRotate, setIsRotate] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mobile = w < 768;
      setIsMobile(mobile);
      setIsRotate(mobile && w > h);
      setIsLoaded(true);
    };

    update();

    const debouncedUpdate = debounce(update, 200);
    window.addEventListener('resize', debouncedUpdate);
    return () => window.removeEventListener('resize', debouncedUpdate);
  }, []);

  return { isMobile, isRotate, isLoaded } as const;
}
