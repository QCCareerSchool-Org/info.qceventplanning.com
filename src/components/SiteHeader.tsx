import type { FC } from 'react';

import { BrandBar } from './BrandBar';
import { FixedBar } from './FixedBar';

export const SiteHeader: FC = () => (
  <header className="flex-shrink-0 bg-black">
    <FixedBar />
    <BrandBar />
  </header>
);
