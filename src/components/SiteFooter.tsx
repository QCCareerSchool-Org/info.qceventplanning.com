import type { FC } from 'react';

import { useGeoLocationContext } from '@/hooks/useGeoLocationContext';
import { getTelephoneNumber } from 'lib/phone';

export const SiteFooter: FC = () => {
  const geoLocation = useGeoLocationContext();

  const telephoneNumber = getTelephoneNumber(geoLocation.countryCode);

  return (
    <footer className="mt-auto bg-black text-white text-center">
      <section>
        <div className="container mb-5">
          <h2>Have questions? Give us a call.</h2>
          <p className="lead fw-bold mb-4"><a href={'tel:' + telephoneNumber} className="link-primary text-decoration-none">{telephoneNumber}</a></p>
          <p className="small">© {new Date().getFullYear()} QC Event School<br /><a href="https://www.qceventplanning.com/terms.html" className="link-primary">Privacy Policy</a></p>
        </div>
      </section>
    </footer>
  );
};
