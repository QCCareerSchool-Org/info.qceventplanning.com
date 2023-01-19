import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card: FC<Props> = ({ children }) => (
  <div className="card text-body">
    <div className="card-body">
      {children}
    </div>
  </div>
);
