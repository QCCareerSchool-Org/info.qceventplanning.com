import type { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { TestimonialArrowNext } from './Testimonial-arrow-next';
import { TestimonialArrowPrev } from './Testimonial-arrow-prev';

export type TestimonialData = {
  excerpt: string;
  quote: string;
  name: string;
  title?: string;
};

interface Props {
  data: TestimonialData[];
}

export const Testimonials: FC<Props> = ({ data }) => (
  <div className="container-fluid text-center">
    <div className="d-flex justify-content-center">
      <div className="mb-4" style={{ width: '80%', maxWidth: 800 }}>
        <Slider dots={true} fade={true} prevArrow={<TestimonialArrowPrev />} nextArrow={<TestimonialArrowNext />}>
          {data.map((d, i) => (
            <div key={i} className="mb-3">
              <p className="text-primary testimonial-excerpt">&ldquo;{d.excerpt}&rdquo;</p>
              <p className="testimonial-quote">&ldquo;{d.quote}&rdquo;</p>
              <p className="testimonial-name">{d.name}{d.title && <><br /><span className="testimonial-title">{d.title}</span></>}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    <style jsx>{`
    .testimonial-excerpt {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .testimonial-quote {
      font-weight: 300;
    }

    .testimonial-name {
      font-weight: 600;
      margin-bottom: 0;
    }

    .testimonial-title {
      font-weight: 300;
    }
    `}</style>
  </div>
);
