import type { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { useId, useReducer, useRef } from 'react';

import { getRandomIntInclusive } from '../lib/randomInt';
import { useGeoLocationContext } from '@/hooks/useGeoLocationContext';

type Props = {
  action: string;
  telephoneNumber?: boolean;
  buttonText?: string;
  buttonClass?: string;
  hiddenFields?: Array<{
    key: string;
    value: string | number;
  }>;
};

type State = {
  telephoneNumber: string;
  smsOptIn: boolean;
  telephoneError: boolean;
};

type Action =
  | { type: 'TELEPHONE_NUMBER_CHANGED'; payload: string }
  | { type: 'SMS_OPT_IN_CHANGED'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TELEPHONE_NUMBER_CHANGED': {
      let telephoneError = false;
      if (state.smsOptIn && action.payload.length === 0) {
        telephoneError = true;
      }
      return { ...state, telephoneNumber: action.payload, telephoneError };
    }
    case 'SMS_OPT_IN_CHANGED': {
      let telephoneError = false;
      if (state.telephoneNumber.length === 0 && action.payload) {
        telephoneError = true;
      }
      return { ...state, smsOptIn: action.payload, telephoneError };
    }
  }
};

const initialState: State = { telephoneNumber: '', smsOptIn: false, telephoneError: false };

export const Form: FC<Props> = ({ action, telephoneNumber = false, buttonText = 'Get the Catalog', buttonClass = 'btn btn-primary', hiddenFields }) => {
  const id = useId();
  const geoLocation = useGeoLocationContext();

  const telephoneNumberRef = useRef<HTMLInputElement>(null);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTelephoneNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'TELEPHONE_NUMBER_CHANGED', payload: e.target.value });
  };

  const handleSMSOptInChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SMS_OPT_IN_CHANGED', payload: e.target.checked });
  };

  const handleSubmit: FormEventHandler = e => {
    if (state.telephoneError) {
      e.preventDefault();
      telephoneNumberRef.current?.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} id={`form${id}`} method="post" action={action}>
      <input type="hidden" name="school" value="QC Makeup Academy" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
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
          <label htmlFor={`telephoneNumber${id}`}>Phone Number {state.smsOptIn && <> <span className="text-primary">*</span></>}</label>
          <input ref={telephoneNumberRef} onChange={handleTelephoneNumberChange} value={state.telephoneNumber} type="tel" name="telephoneNumber" id={`telephoneNumber${id}`} className="form-control" autoCapitalize="off" autoComplete="tel" required={state.smsOptIn} />
        </div>
      )}
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={`emailOptIn${id}`} name="emailOptIn" value="Yes" />
          <label className="form-check-label small fst-italic" htmlFor={`emailOptIn${id}`}>I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
        </div>
        {telephoneNumber && (
          <div className="mt-2">
            <div className="form-check">
              <input onChange={handleSMSOptInChange} checked={state.smsOptIn} type="checkbox" className="form-check-input" id={`smsOptIn${id}`} name="smsOptIn" value="yes" />
              <label className="form-check-label small fst-italic" htmlFor={`smsOptIn${id}`}>Text me with news and offers.</label>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <button className={buttonClass}>{buttonText}</button>
      </div>
    </form>
  );
};
