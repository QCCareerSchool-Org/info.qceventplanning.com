import type { FC, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

export const screenWidthContext = React.createContext<number | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const ScreenWidthProvider: FC<Props> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    dispatch(window.innerWidth);
    const handleResize = (): void => dispatch(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <screenWidthContext.Provider value={state}>
      {children}
    </screenWidthContext.Provider>
  );
};
