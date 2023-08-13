import type { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { useId, useReducer, useRef } from 'react';

import { useGeoLocationContext } from '@/hooks/useGeoLocationContext';
import { addLead } from 'lib/leads';

type Props = {
  action: string;
  telephoneNumber?: boolean;
  buttonText?: string;
  buttonClass?: string;
  hiddenFields?: Array<{
    key: string;
    value: string | number;
  }>;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  } | null;
  courses?: string[];
  initialValues?: {
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    emailOptIn: boolean | null;
    telephoneNumber: string | null;
    smsOptIn: boolean | null;
  };
  errors?: boolean;
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

const getHiddenField = (name: string, hiddenFields?: Array<{ key: string; value: string | number }>): string | number | null => {
  return hiddenFields?.find(({ key }) => key === name)?.value ?? null;
};

export const Form: FC<Props> = ({ action, telephoneNumber = false, buttonText = 'Get the Catalog', buttonClass = 'btn btn-primary', hiddenFields, marketing, courses, initialValues, errors }) => {
  const id = useId();
  const geoLocation = useGeoLocationContext();

  const submitting = useRef(false);

  const formRef = useRef<HTMLFormElement>(null);
  const schoolRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const telephoneNumberRef = useRef<HTMLInputElement>(null);
  const emailOptInRef = useRef<HTMLInputElement>(null);
  const smsOptInRef = useRef<HTMLInputElement>(null);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTelephoneNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'TELEPHONE_NUMBER_CHANGED', payload: e.target.value });
  };

  const handleSMSOptInChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SMS_OPT_IN_CHANGED', payload: e.target.checked });
  };

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    if (submitting.current) {
      return;
    }

    if (state.telephoneError) {
      telephoneNumberRef.current?.focus();
      return;
    }

    if (!formRef.current || !schoolRef.current || !emailAddressRef.current || !firstNameRef.current || !lastNameRef.current) {
      return;
    }

    const form = formRef.current;

    const testGroup = getHiddenField('testGroup', hiddenFields);
    const gclid = getHiddenField('gclid', hiddenFields);
    const msclkid = getHiddenField('msclkid', hiddenFields);

    submitting.current = true;

    addLead({
      school: schoolRef.current.value,
      emailAddress: emailAddressRef.current.value,
      firstName: firstNameRef.current.value || null,
      lastName: lastNameRef.current.value || null,
      telephoneNumber: telephoneNumberRef.current?.value || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
      emailOptIn: emailOptInRef.current?.checked ?? null,
      smsOptIn: smsOptInRef.current?.checked ?? null,
      countryCode: geoLocation?.countryCode ?? null,
      provinceCode: geoLocation?.provinceCode ?? null,
      testGroup: typeof testGroup === 'string' ? parseInt(testGroup, 10) : testGroup,
      gclid: typeof gclid === 'number' ? gclid.toString() : gclid,
      msclkid: typeof msclkid === 'number' ? msclkid.toString() : msclkid,
      marketing: marketing ?? undefined,
      courses: courses,
    }).catch(err => {
      console.error('Error adding lead', err);
    }).finally(() => {
      form.submit();
      submitting.current = false;
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} id={`form${id}`} method="post" action={action}>
      <input ref={schoolRef} type="hidden" name="school" value="QC Event School" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
      <input type="hidden" name="countryCode" value={geoLocation.countryCode} />
      <input type="hidden" name="provinceCode" value={geoLocation.provinceCode ?? ''} />
      <div className="mb-3">
        <label htmlFor={`firstName${id}`}>First Name</label>
        <input ref={firstNameRef} type="text" name="firstName" id={`firstName${id}`} className="form-control" autoCapitalize="words" autoComplete="given-name" defaultValue={initialValues?.firstName ?? ''} />
      </div>
      <div className="mb-3">
        <label htmlFor={`lastName${id}`}>Last Name</label>
        <input ref={lastNameRef} type="text" name="lastName" id={`lastName${id}`} className="form-control" autoCapitalize="words" autoComplete="family-name" defaultValue={initialValues?.lastName ?? ''} />
      </div>
      <div className="mb-3">
        <label htmlFor={`emailAddress${id}`}>Email Address <span className="text-primary">*</span></label>
        <input ref={emailAddressRef} type="email" name="emailAddress" id={`emailAddress${id}`} className="form-control" autoCapitalize="off" autoComplete="email" required defaultValue={initialValues?.emailAddress ?? ''} />
      </div>
      {telephoneNumber && (
        <div className="mb-3">
          <label htmlFor={`telephoneNumber${id}`}>Phone Number {state.smsOptIn && <> <span className="text-primary">*</span></>}</label>
          <input ref={telephoneNumberRef} onChange={handleTelephoneNumberChange} value={state.telephoneNumber} type="tel" name="telephoneNumber" id={`telephoneNumber${id}`} className="form-control" autoCapitalize="off" autoComplete="tel" required={state.smsOptIn} defaultValue={initialValues?.telephoneNumber ?? ''} />
        </div>
      )}
      <div className="mb-3">
        <div className="form-check">
          <input ref={emailOptInRef} type="checkbox" className="form-check-input" id={`emailOptIn${id}`} name="emailOptIn" value="Yes" defaultChecked={initialValues?.emailOptIn ?? false} />
          <label className="form-check-label small fst-italic" htmlFor={`emailOptIn${id}`}>I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
        </div>
        {telephoneNumber && (
          <div className="mt-2">
            <div className="form-check">
              <input ref={smsOptInRef} onChange={handleSMSOptInChange} checked={state.smsOptIn} type="checkbox" className="form-check-input" id={`smsOptIn${id}`} name="smsOptIn" value="yes" defaultChecked={initialValues?.smsOptIn ?? false} />
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
