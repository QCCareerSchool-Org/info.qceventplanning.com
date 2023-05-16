import type { GeoLocation } from '../../providers/GeoLocationProvider';

export const useGeoLocationContext = jest.fn((): GeoLocation => ({
  countryCode: 'US',
  countryName: 'United States',
  provinceCode: 'MD',
  provinceName: 'Maryland',
}));
