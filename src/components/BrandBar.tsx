import Image from 'next/image';
import type { FC } from 'react';

import Logo from '../images/banner-logo.svg';

export const BrandBar: FC = () => (
  <div className="bg-black text-white py-3 shadow-4 d-flex justify-content-center">
    <Image src={Logo} height="24" alt="QC Event Planning" priority />
  </div>
);
