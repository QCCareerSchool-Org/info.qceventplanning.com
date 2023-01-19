import Image from 'next/image';
import React from 'react';

import TestimonialPrev from '../images/testimonial-prev.png';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const TestimonialArrowPrev: React.FC<Props> = props => {
  const { className, style } = props;
  const screenWidth = useScreenWidthContext();

  const lg = screenWidth > 992;
  const md = screenWidth > 768;

  let width = 31;
  let height = 58;
  const offset = lg ? 4 : md ? 2 : 1;
  if (!lg) {
    const sizeMultipier = 0.75;
    width = Math.round(width * sizeMultipier);
    height = Math.round(height * sizeMultipier);
  }

  return (
    <div className={className} style={{ display: 'block', color: 'black', ...style }} onClick={props.onClick}>
      <Image src={TestimonialPrev} width={width} height={height} style={{ position: 'relative', right: `${offset}rem` }} alt="prev" />
    </div>
  );
};
