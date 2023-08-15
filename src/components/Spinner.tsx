import type { FC } from 'react';

type Props = {
  hiddenText?: string;
  size?: number | 'sm';
};

export const Spinner: FC<Props> = ({ hiddenText = 'Processing...', size }) => (
  <div className={`spinner-border ${size === 'sm' ? 'spinner-border-sm' : typeof size === 'number' ? `${size}rem` : ''}`} role="status">
    <span className="visually-hidden">{hiddenText}</span>
  </div>
);
