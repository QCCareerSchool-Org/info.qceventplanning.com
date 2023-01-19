import Image from 'next/image';
import type { FC } from 'react';

import Logo from '../images/banner-logo.svg';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';

export const FixedBar: FC = () => {
  const screenWidth = useScreenWidthContext();
  const scrollPosition = useScrollPositionContext();

  const show = screenWidth > 992
    ? scrollPosition > 575
    : screenWidth > 576
      ? scrollPosition > 710
      : scrollPosition > 645;

  return (
    <>
      <div id="fixedBar" className={`bg-black position-fixed w-100 ${show ? 'show' : 'hide'}`}>
        <div className="container d-flex align-items-center justify-content-center justify-content-sm-end small py-2 py-sm-0">
          <Image src={Logo} height="12" alt="QC Event Planning" style={{ display: 'block', flexShrink: 0, marginRight: 'auto' }} />
          <div className="bg-primary py-1 py-sm-2 px-3"><a className="text-white text-decoration-none" href="#brochureForm"><strong>GET THE FREE CATALOG</strong></a></div>
        </div>
      </div>

      <style jsx>{`
      #fixedBar { opacity: 0; z-index: 2000; }
      #fixedBar.show { opacity: 1; transition: opacity 500ms; }
      `}</style>
    </>
  );
};
