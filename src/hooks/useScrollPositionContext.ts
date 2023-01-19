import { useContext } from 'react';

import { scrollPositionContext } from '@/providers/ScrollPositionProvider';

export const useScrollPositionContext = (): number => {
  const context = useContext(scrollPositionContext);
  if (typeof context === 'undefined') {
    throw Error('useScrollPositionContext must be used within a ScrollPositionProvider');
  }
  return context;
};
