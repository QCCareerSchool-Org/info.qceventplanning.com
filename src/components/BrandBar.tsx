import Image from 'next/image';
import type { FC } from 'react';

import Logo from '../images/banner-logo.svg';

import styles from './brandbar.module.css';

export const BrandBar: FC = () => (
  <div className={`${styles.bar} bg-black text-white py-3 shadow-4 d-flex justify-content-center`}>
    <a href="https://www.qceventplanning.com">
      <Image src={Logo} height="24" alt="QC Event Planning" priority />
    </a>
  </div>
);
