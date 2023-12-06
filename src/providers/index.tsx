import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { GeoLocationProvider } from './GeoLocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';

const reCaptchaKey = process.env.RECAPTCHA_KEY;

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <CaptchaProvider reCaptchaKey={reCaptchaKey}>
    <GeoLocationProvider>
      <ScreenWidthProvider>
        <ScrollPositionProvider>
          {children}
        </ScrollPositionProvider>
      </ScreenWidthProvider>
    </GeoLocationProvider>
  </CaptchaProvider>
);
