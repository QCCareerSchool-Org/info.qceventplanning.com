import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit): IntersectionObserverEntry | undefined => {
  const [ entry, setEntry ] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    if (ref.current) {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(entries => {
        setEntry(entries[0]);
      }, options);
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ ref, options ]);

  return entry;
};
