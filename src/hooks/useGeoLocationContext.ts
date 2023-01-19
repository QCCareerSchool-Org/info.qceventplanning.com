import { useContext } from 'react';

import type { GeoLocation } from '@/providers/GeoLocationProvider';
import { geoLocationContext } from '@/providers/GeoLocationProvider';

export const useGeoLocationContext = (): GeoLocation => {
  const context = useContext(geoLocationContext);
  if (typeof context === 'undefined') {
    throw Error('useGeoLocationContext must be used within a GeoLocationProvider');
  }
  return context;
};
