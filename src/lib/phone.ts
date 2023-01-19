/**
 * Returns whether the country is a country with a +44 country dialing code. E.g., United Kingdom
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const isCallingCode44 = (countryCode: string): boolean => [ 'GB', 'IM', 'GG', 'JE' ].includes(countryCode);

/**
  * Returns whether the country is a country with a +61 country dialing code. E.g., Australia
  * @param countryCode the two-letter iso-3166-1 alpha-2 country code
  */
export const isCallingCode61 = (countryCode: string): boolean => [ 'AU', 'CX', 'CC' ].includes(countryCode);

/**
  * Returns whether the country is a country with a +64 country dialing code. E.g., New Zealand
  * @param countryCode the two-letter iso-3166-1 alpha-2 country code
  */
export const isCallingCode64 = (countryCode: string): boolean => [ 'NZ', 'PN' ].includes(countryCode);

/**
  * Returns whether the country is a country with a +1 country dialing code. E.g., Canada, United States, Jamaica
  * @param countryCode the two-letter iso-3166-1 alpha-2 country code
  */
export const isCallingCode1 = (countryCode: string): boolean => [ 'CA', 'US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC', 'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI', 'UM' ].includes(countryCode);

const northAmericaCode = 1;
const ukCode = 44;
const auCode = 61;
const nzCode = 64;

/**
  * Returns the country dialing code for a particular country. Only supports +1, +44, +61, and +64.
  * Returns null for unknown
  * @param countryCode the two-letter iso-3166-1 alpha-2 country code
  */
export const getCallingCode = (countryCode?: string): number | null => {
  if (typeof countryCode === 'undefined') {
    return null;
  }
  if (isCallingCode1(countryCode)) {
    return northAmericaCode;
  }
  if (isCallingCode44(countryCode)) {
    return ukCode;
  }
  if (isCallingCode61(countryCode)) {
    return auCode;
  }
  if (isCallingCode64(countryCode)) {
    return nzCode;
  }
  return null;
};

/**
  * Returns the telephone number we should display to a visitor from a particular country
  * @param countryCode the two-letter iso-3166-1 alpha-2 country code
  */
export const getTelephoneNumber = (countryCode?: string): string => {
  switch (getCallingCode(countryCode)) {
    case northAmericaCode:
      return '1-833-600-3751';
    case ukCode:
      return '0800 066 4734';
    case auCode:
      return '1800 531 923';
    case nzCode:
      return '0800 451 979';
    default:
      return '+1 613-749-8248';
  }
};
