import type { FC } from 'react';
import { useId, useRef } from 'react';

import { getRandomIntInclusive } from '../lib/randomInt';
import { useGeoLocationContext } from '@/hooks/useGeoLocationContext';

type Props = {
  action: string;
  telephoneNumber?: boolean;
  buttonText?: string;
  buttonClass?: string;
};

export const Form: FC<Props> = ({ action, telephoneNumber = false, buttonText = 'Get the Catalog', buttonClass = 'btn btn-primary' }) => {
  const id = useId();
  const geoLocation = useGeoLocationContext();
  const testGroupId = useRef(getRandomIntInclusive(1, 12));

  return (
    <form id={`form${id}`} method="post" action={action}>
      <input type="hidden" name="school" value="QC Makeup Academy" />
      <input type="hidden" name="testGroup" value={testGroupId.current} />
      <input type="hidden" name="countryCode" value={geoLocation.countryCode} />
      <input type="hidden" name="provinceCode" value={geoLocation.provinceCode ?? ''} />
      <div className="mb-3">
        <label htmlFor={`firstName${id}`}>First Name</label>
        <input type="text" name="firstName" id={`firstName${id}`} className="form-control" autoCapitalize="words" autoComplete="given-name" />
      </div>
      <div className="mb-3">
        <label htmlFor={`lastName${id}`}>Last Name</label>
        <input type="text" name="lastName" id={`lastName${id}`} className="form-control" autoCapitalize="words" autoComplete="family-name" />
      </div>
      <div className="mb-3">
        <label htmlFor={`emailAddress${id}`}>Email Address <span className="text-primary">*</span></label>
        <input type="email" name="emailAddress" id={`emailAddress${id}`} className="form-control" autoCapitalize="off" autoComplete="email" required />
      </div>
      {telephoneNumber && (
        <div className="mb-3">
          <label htmlFor={`telephoneNumber${id}`}>Phone Number</label>
          <input type="tel" name="telephoneNumber" id={`telephoneNumber${id}`} className="form-control" autoCapitalize="off" autoComplete="tel" />
        </div>
      )}
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={`emailOptIn${id}`} name="emailOptIn" value="Yes" />
          <label className="form-check-label small fst-italic" htmlFor={`emailOptIn${id}`}>I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
        </div>
      </div>
      <div className="mt-4">
        <button className={buttonClass}>{buttonText}</button>
      </div>
    </form>
  );
};
