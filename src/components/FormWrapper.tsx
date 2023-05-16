import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FormWrapper: FC<Props> = ({ children }) => <div className="p-sm-3">{children}</div>;
