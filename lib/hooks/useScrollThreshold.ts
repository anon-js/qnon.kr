import { RefObject, useEffect, useState } from 'react';

export function useScrollThreshold(ref: RefObject<HTMLElement | null>, threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const shouldShow = element.scrollTop > threshold;
        setIsScrolled((prev) => (prev !== shouldShow ? shouldShow : prev));
      });
    };

    element.addEventListener('scroll', handleScroll, { passive: true });
    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref, threshold]);

  return isScrolled;
}
