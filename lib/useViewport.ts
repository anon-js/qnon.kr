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
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return { isMobile, isRotate, isLoaded } as const;
}
