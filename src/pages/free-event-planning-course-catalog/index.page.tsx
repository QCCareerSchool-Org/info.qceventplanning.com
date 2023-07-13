import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

import { useMemo } from 'react';
import Arrow from '../../images/arrow.svg';
import GrowthIcon from '../../images/growth-icon.svg';
import Certification from './certification-iepp.png';
import HeroImage from './hero-ce.jpg';
import { testimonialData } from './testimonials';
import { About } from '@/components/About';
import { Card } from '@/components/Card';
import { Form } from '@/components/Form';
import { FormWrapper } from '@/components/FormWrapper';
import { GetStarted } from '@/components/GetStarted';
import { HowTheCoursesWork } from '@/components/HowTheCoursesWork';
import { SEO } from '@/components/SEO';
import { Testimonials } from '@/components/Testimonials';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';
import { getRandomIntInclusive } from 'lib/randomInt';

type Props = {
  testGroup: number;
  gclid: string | null;
  msclkid: string | null;
};

const EventCourseCatalogPage: NextPage<Props> = ({ testGroup, gclid, msclkid }) => {
  const hiddenFields = useMemo(() => {
    const h: Array<{ key: string; value: string | number }> = [ { key: 'testGroup', value: testGroup } ];
    if (gclid) {
      h.push({ key: 'gclid', value: gclid });
    }
    if (msclkid) {
      h.push({ key: 'msclkid', value: msclkid });
    }
    return h;
  }, [ testGroup, gclid, msclkid ]);

  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 992;

  return <>
    <SEO
      title="Learn From the Top Online Event Planning School"
      description="Get a free course catalog from the top online event planning school to see how you can become a professional event planner"
      canonical="https://info.qceventplanning.com/free-event-planning-course-catalog"
    />
    <section id="top" className="bg-black text-white">
      <Image
        src={HeroImage}
        alt="banquet table"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container">
        {!desktop && (
          <h1 className="mb-5 text-center text-shadow">Get a Free Event Planning Course Catalog</h1>
        )}
        <div className="row align-items-center justify-content-center">
          <div id="brochureForm" className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Card>
              <FormWrapper>
                <h2 className="h5 fw-bold mb-4">Download the Free Course Catalog</h2>
                <Form action="https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7" hiddenFields={hiddenFields} />
              </FormWrapper>
            </Card>
          </div>
          {desktop && (
            <div className="col-12 col-md-10 col-lg-6 col-xxl-5 text-start">
              <h1 className="text-shadow">Get a Free Event Planning Course Catalog</h1>
              <Image src={Arrow} alt="arrow" width="473" height="138" style={{ maxWidth: 320 }} />
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="bg-black text-white">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 text-center">
            <div className="mb-2">
              <Image src={GrowthIcon} width="48" height="48" alt="industry growth" />
            </div>
            <h2 className="h3">Join an industry that's expected to grow by 18% over the next 10 years*</h2>
            <p className="lead">That's much faster than the average growth rate across all occupations!</p>
            <p className="small">* US Bureau of Labor Statistics</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <HowTheCoursesWork />
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <p className="lead">We've already helped thousands of students and grads start their career in event and wedding planning!</p>
      </div>
      <Testimonials data={testimonialData} />
    </section>

    <section className="bg-dark text-light">
      <Image
        src={HeroImage}
        alt="banquet table"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-4 offset-xxl-1 text-center">
            <Image
              src={Certification}
              width="1038"
              height="604"
              alt="IFDP certification"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-10 col-lg-6 offset-xxl-1">
            <h2>Your Event Planning Certification</h2>
            <p>Once you've completed your event planning courses online, you'll receive your certification and professional designation. Use these to market yourself as a certified event planner and sell your services to clients.</p>
            <p>This certification demonstrates that you have successfully completed professional event planner training and that you possess all the skills and knowledge required to plan, design, and execute flawless events.</p>
            <h3 className="h5">What Your Certification Gets You</h3>
            <ul className="mb-0">
              <li>Start your own event planning business</li>
              <li>Provide coordination & vendor outreach services to clients</li>
              <li>Work for an existing event planning company</li>
              <li>Work for a corporation planning internal and external events</li>
              <li>Plan events for venues, hotels, restaurants, and more!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <About courseName="event and wedding planning course" />
    </section>

    <section className="bg-dark text-white text-center">
      <Image
        src={HeroImage}
        alt="banquet table"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <GetStarted />
    </section>
  </>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  let testGroup: number | undefined;
  const storedTestGroup = context.req.cookies.testGroup;
  if (typeof storedTestGroup !== 'undefined') {
    const parsed = parseInt(storedTestGroup, 10);
    if (!isNaN(parsed)) {
      testGroup = parsed;
    }
  }
  if (typeof testGroup === 'undefined') {
    testGroup = getRandomIntInclusive(1, 12);
    const maxAge = 60 * 60 * 24 * 365;
    context.res.setHeader('Set-Cookie', `testGroup=${testGroup}; Max-Age=${maxAge}; Path=/; Secure; SameSite=Strict`);
  }

  const gclid = typeof context.query.gclid === 'string' ? context.query.gclid : null;
  const msclkid = typeof context.query.msclkid === 'string' ? context.query.msclkid : null;

  return { props: { testGroup, gclid, msclkid } };
};

export default EventCourseCatalogPage;
