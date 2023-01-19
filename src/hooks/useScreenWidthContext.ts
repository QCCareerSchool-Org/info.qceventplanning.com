import { useContext } from 'react';

import { screenWidthContext } from '@/providers/ScreenWidthProvider';

export const useScreenWidthContext = (): number => {
  const context = useContext(screenWidthContext);
  if (typeof context === 'undefined') {
    throw Error('useScreenWidthContext must be used within a ScreenWidthProvider');
  }
  return context;
};
