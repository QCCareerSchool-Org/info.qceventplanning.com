import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

import Arrow from '../../images/arrow.svg';
import GrowthIcon from '../../images/growth-icon.svg';
import Certification from './certification-iewp.png';
import HeroImage from './hero-ep.jpg';
import { testimonialData } from './testimonials';
import { About } from '@/components/About';
import { BrevoForm } from '@/components/brevoForm';
import { Card } from '@/components/Card';
import { FormWrapper } from '@/components/FormWrapper';
import { GetStarted } from '@/components/GetStarted';
import { HowTheCoursesWork } from '@/components/HowTheCoursesWork';
import { SEO } from '@/components/SEO';
import { Testimonials } from '@/components/Testimonials';
import { useGeoLocationContext } from '@/hooks/useGeoLocationContext';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';

type Props = {
  gclid: string | null;
  msclkid: string | null;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
};

const brevoListId = 2;
const brevoEmailTemplateId = 32;

const EventCourseCatalogPage: NextPage<Props> = ({ gclid, msclkid, marketing }) => {
  const geoLocation = useGeoLocationContext();
  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 992;

  return <>
    <SEO
      title="Learn From the Top Online Event Planning School"
      description="Get a free course catalog from the top online event planning school to see how you can become a professional event and wedding planner"
      canonical="https://info.qceventplanning.com/free-event-and-wedding-planning-course-catalog"
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
          <h1 className="mb-5 text-center text-shadow">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
        )}
        <div className="row align-items-center justify-content-center">
          <div id="brochureForm" className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Card>
              <FormWrapper>
                <h2 className="h5 fw-bold mb-4">Download the Free Course Catalog</h2>
                <BrevoForm
                  successLocation="https://www.qceventplanning.com/thank-you-course-catalog"
                  listId={brevoListId}
                  emailTemplateId={brevoEmailTemplateId}
                  countryCode={geoLocation.countryCode}
                  provinceCode={geoLocation.provinceCode}
                  gclid={gclid ?? undefined}
                  msclkid={msclkid ?? undefined}
                  utmSource={marketing?.source ?? undefined}
                  utmMedium={marketing?.medium ?? undefined}
                  utmCampaign={marketing?.campaign ?? undefined}
                  utmContent={marketing?.content ?? undefined}
                  utmTerm={marketing?.term ?? undefined}
                  placeholders
                />
              </FormWrapper>
            </Card>
          </div>
          {desktop && (
            <div className="col-12 col-md-10 col-lg-6 col-xxl-5 text-start">
              <h1 className="text-shadow">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
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
            <h2>Your Event &amp; Wedding Planning Certification</h2>
            <p>Once you've completed your course online, you'll receive your certification and professional designation. Use these to market yourself as a certified event and wedding planner.</p>
            <p>This certification demonstrates that you have successfully completed professional event and wedding planner training and that you possess all the skills and knowledge required to plan, design, and execute flawless private and corporate events.</p>
            <h3 className="h5">Your Certification Has Many Benefits</h3>
            <ul className="mb-0">
              <li>Start your own event and wedding planning business</li>
              <li>Provide coordination & vendor outreach services to clients</li>
              <li>Work for an existing event or wedding planning company</li>
              <li>Work for a corporation planning meetings and external events</li>
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
  const gclid = typeof context.query.gclid === 'string' ? context.query.gclid : null;
  const msclkid = typeof context.query.msclkid === 'string' ? context.query.msclkid : null;

  const marketing = {
    source: typeof context.query.utm_source === 'string' ? context.query.utm_source || null : null,
    medium: typeof context.query.utm_medium === 'string' ? context.query.utm_medium || null : null,
    campaign: typeof context.query.utm_campaign === 'string' ? context.query.utm_campaign || null : null,
    content: typeof context.query.utm_content === 'string' ? context.query.utm_content || null : null,
    term: typeof context.query.utm_term === 'string' ? context.query.utm_term || null : null,
  };

  return { props: { gclid, msclkid, marketing } };
};

export default EventCourseCatalogPage;
