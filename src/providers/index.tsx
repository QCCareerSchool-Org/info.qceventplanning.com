import type { FC, ReactNode } from 'react';

import { GeoLocationProvider } from './GeoLocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => (
  <GeoLocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        {children}
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </GeoLocationProvider>
);
