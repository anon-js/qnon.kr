import { RefObject, useEffect, useState } from 'react';

export function useScrollThreshold(ref: RefObject<HTMLElement | null>, threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;

    let frameId: number | null = null;
    
    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = requestAnimationFrame(() => {
        frameId = null;
        const shouldShow = element.scrollTop > threshold;
        setIsScrolled((prev) => (prev !== shouldShow ? shouldShow : prev));
      });
    };
    
    element.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      element.removeEventListener('scroll', handleScroll, { passive: true });
      
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [ref, threshold]);

  return isScrolled;
}
