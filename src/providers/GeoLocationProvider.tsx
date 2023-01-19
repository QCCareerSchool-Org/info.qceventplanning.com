import Cookies from 'js-cookie';
import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

export type GeoLocation = {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
};

const defaultGeoLocation: GeoLocation = {
  countryCode: 'US',
  countryName: 'United States',
  provinceCode: 'MD',
  provinceName: 'Maryland',
};

export const geoLocationContext = createContext<GeoLocation | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const GeoLocationProvider: FC<Props> = ({ children }) => {
  const [ state, setState ] = useState<GeoLocation>(defaultGeoLocation);

  useEffect(() => {
    getGeoLocation()
      .then(setState)
      .catch(() => { /* empty */ });
  }, []);

  return (
    <geoLocationContext.Provider value={state}>
      {children}
    </geoLocationContext.Provider>
  );
};

const getGeoLocation = async (): Promise<GeoLocation> => {
  const stored = readGeoLocation();
  if (stored) {
    return stored;
  }
  const fetched = await fetchGeoLocation();
  if (fetched) {
    writeGeoLocation(fetched);
    return fetched;
  }
  return defaultGeoLocation;
};

const readGeoLocation = (): GeoLocation | undefined => {
  try {
    const cookie = Cookies.get('location');
    if (cookie) {
      const data: unknown = JSON.parse(cookie);
      if (isGeoLocation(data)) {
        return data;
      }
    }
  } catch (err) { /* empty */ }
};

const writeGeoLocation = (geoLocation: GeoLocation): void => {
  Cookies.set('location', JSON.stringify(geoLocation), { secure: true, sameSite: 'strict' });
};

const fetchGeoLocation = async (): Promise<GeoLocation | undefined> => {
  const url = 'https://api.qccareerschool.com/geoLocation/ip';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Error fetching geo location data');
    }
    const data: unknown = await response.json();
    if (!isGeoLocation(data)) {
      throw Error('Invalid geo location');
    }
    return data;
  } catch (err) { /* empty */ }
};

export const isGeoLocation = (obj: unknown): obj is GeoLocation => {
  if (obj !== null && typeof obj === 'object') {
    if ('countryCode' in obj && 'countryName' in obj && 'provinceCode' in obj && 'provinceName' in obj) {
      if (typeof obj.countryCode === 'string' && typeof obj.countryName === 'string' && (obj.provinceCode === null || typeof obj.provinceCode === 'string') && (obj.provinceName === null || typeof obj.provinceName === 'string')) {
        return true;
      }
    }
  }
  return false;
};
