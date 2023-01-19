import Image from 'next/image';
import type { FC } from 'react';

import ThirtyFiveYearEmblem from '../images/35-year-emblem.svg';

type Props = {
  courseName: string;
};

export const About: FC<Props> = ({ courseName }) => (
  <section>
    <div className="container text-center">
      <div className="mb-4">
        <Image src={ThirtyFiveYearEmblem} width="156" height="144" alt="35 years" style={{ width: 100, height: 'auto' }} />
      </div>
      <h2 className="mb-4">About QC Event School</h2>
      <div className="row text-lg-start">
        <div className="col-12 col-md-6 mb-2 mb-md-0">
          <p className="mb-0">QC Event School is a faculty of QC Career School, an online international school that has been educating creative professionals for over 35 years. QC&apos;s courses provide students with advanced training from the comfort of home. You can prepare for a new career while you maintain your current income. Once you graduate you&apos;ll have the skills you need to quickly build a successful business or career in the industry.</p>
        </div>
        <div className="col-12 col-md-6">
          <p className="mb-0">QC provides you with access to support 7 days a week. Contact us by email, phone, on Live Chat, or through social media. QC ensures that all your educational needs are met, and provides you with support before, during and after you&apos;ve completed your online {courseName}.</p>
        </div>
      </div>
    </div>
  </section>
);
