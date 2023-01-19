import type { FC, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

export const scrollPositionContext = React.createContext<number | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const ScrollPositionProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    dispatch(window.pageYOffset);
    const handleScroll = (): void => dispatch(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <scrollPositionContext.Provider value={state}>
      {children}
    </scrollPositionContext.Provider>
  );
};
