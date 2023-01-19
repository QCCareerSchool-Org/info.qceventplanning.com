/**
 * Returns the address we should display to a visitor from a particular country
 * @param countryCode the two-letter iso-3166-1 alpha-2 country code
 */
export const getAddress = (countryCode: string): string[] => {
  switch (countryCode) {
    // case 'GB':
    // case 'IM':
    // case 'GG':
    // case 'JE':
    //   return [
    //     '186 St. Albans Road',
    //     'Suite 18',
    //     'Watford WD24 4AS',
    //   ];
    case 'AU':
    case 'CX':
    case 'CC':
      return [
        '78 Williams Street',
        'Suite 23',
        'Sydney, NSW 2011',
      ];
    case 'NZ':
    case 'PN': // like AU, but with the country
      return [
        '78 Williams Street',
        'Suite 23',
        'Sydney, NSW 2011',
        'Australia',
      ];
    case 'CA':
      return [
        '38 McArthur Avenue',
        'Ottawa, ON K1L 6R2',
      ];
    case 'US':
      return [
        'Suite 450',
        '1 Research Court',
        'Rockville, MD 20850',
      ];
    default: // like CA, but with the country
      return [
        '38 McArthur Avenue',
        'Ottawa, ON K1L 6R2',
        'Canada',
      ];
  }
};

export const needsProvince = (countryCode: string): boolean => {
  return [ 'CA', 'US', 'AU' ].includes(countryCode);
};

export const isGBPCountry = (countryCode: string): boolean => {
  return [ 'GB', 'IM', 'GG', 'JE' ].includes(countryCode);
};
