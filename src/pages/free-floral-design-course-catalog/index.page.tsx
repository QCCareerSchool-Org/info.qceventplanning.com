import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

import Arrow from '../../images/arrow.svg';
import BusinessIcon from '../../images/icons/business-icon.svg';
import CertificationIcon from '../../images/icons/certification-icon.svg';
import ExpertIcon from '../../images/icons/expert-icon.svg';
import FlexibleIcon from '../../images/icons/flexible-icon.svg';
import HandsOnIcon from '../../images/icons/hands-on-icon-2.svg';
import LifetimeIcon from '../../images/icons/lifetime-icon.svg';
import CertificationBackground from './certification-background-fd.jpg';
import Certification from './certification-ifdp.png';
import HeroImage from './hero-fd.jpg';
import { testimonialData } from './testimonials';
import { About } from '@/components/About';
import { BrevoForm } from '@/components/brevoForm';
import { Card } from '@/components/Card';
import { FormWrapper } from '@/components/FormWrapper';
import { GetStarted } from '@/components/GetStarted';
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

const brevoListId = 12;
const brevoEmailTemplateId = 32;

const FloralDesignCourseCatalogPage: NextPage<Props> = ({ gclid, msclkid, marketing }) => {
  const geoLocation = useGeoLocationContext();
  const screenWidth = useScreenWidthContext();
  const lg = screenWidth >= 992;

  return <>
    <SEO
      title="Learn From the Top Online Event Planning School"
      description="Get a free course catalog from the top online event planning school to see how you can become a professional event planner"
      canonical="https://info.qceventplanning.com/free-floral-design-course-catalog"
    />
    <section id="top" className="bg-black text-white">
      <Image
        src={HeroImage}
        alt="flower arrangement"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: '0% 50%' }}
      />
      <div className="container">
        {!lg && (
          <h1 className="mb-5 text-center text-shadow">Get a Free Floral Design<br />Course Catalog</h1>
        )}
        <div className="row align-items-center justify-content-center">
          <div id="brochureForm" className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Card>
              <FormWrapper>
                <h2 className="h5 fw-bold mb-4">Download the Free Course Catalog</h2>
                <BrevoForm
                  successLocation="https://www.qceventplanning.com/thank-you-floral-design-course-catalog"
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
          {lg && (
            <div className="col-12 col-md-10 col-lg-6 col-xxl-5 text-start">
              <h1 className="text-shadow">Get a Free Floral Design Course Catalog</h1>
              <Image src={Arrow} alt="arrow" width="473" height="138" style={{ maxWidth: 320 }} />
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <h2>Learning Floral Design Online Is Easy</h2>
        <p className="lead mb-4">QC&apos;s Floral Design Course provides you with:</p>
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-3">
            <p><Image className="img-fluid" width="75" height="75" src={ExpertIcon} alt="expert training" /></p>
            <h3 className="h4">Expert Training</h3>
            <p className="mb-0">Learn from the industry's top floral designers.</p>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-3">
            <p><Image className="img-fluid" width="75" height="75" src={HandsOnIcon} alt="hand-on Experience" /></p>
            <h3 className="h4">Hands-On Experience</h3>
            <p className="mb-0">Learn at your own pace and create stunning arrangements from home.</p>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-3">
            <p><Image className="img-fluid" width="75" height="75" src={LifetimeIcon} alt="ongoing support" /></p>
            <h3 className="h4">Ongoing Support</h3>
            <p className="mb-0">Chat with your peers and get help from QC's support team seven days a week.</p>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p><Image className="img-fluid" width="75" height="75" src={FlexibleIcon} alt="flexible payments" /></p>
            <h3 className="h4">Flexible Payments</h3>
            <p className="mb-0">Save when you pay in full or choose low monthly installments.</p>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <p><Image className="img-fluid" width="75" height="75" src={BusinessIcon} alt="business training" /></p>
            <h3 className="h4">Business Training</h3>
            <p className="mb-0">Get the training you need to launch your own business as soon as you graduate.</p>
          </div>
          <div className="col-12 col-lg-4">
            <p><Image className="img-fluid" width="75" height="75" src={CertificationIcon} alt="professional certification" /></p>
            <h3 className="h4">Professional Certification</h3>
            <p className="mb-0">Earn a professional certification and the designation of International Floral Design Professional&trade; (IFDP&trade;).</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <p className="lead">We&apos;ve already helped thousands of students and grads start their career in floral design and event planning!</p>
      </div>
      <Testimonials data={testimonialData} />
    </section>

    <section className="bg-dark text-light">
      <Image
        src={CertificationBackground}
        alt="flower arrangement"
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
            <h2>Your Floral Design Certification</h2>
            <p>Once you&apos;ve completed the Floral Design course, you&apos;ll graduate with the International Floral Design Professional&trade; (IFDP&trade;) certificate.</p>
            <p>This certification demonstrates that you now have all the skills and knowledge you need to be successful in the industry.</p>
            <h3 className="h5">You&apos;re ready to pursue any of the following careers:</h3>
            <ul className="mb-0">
              <li>Work for a large retailer</li>
              <li>Open your own floral shop</li>
              <li>Sell arrangements online</li>
              <li>Work for an existing florist</li>
              <li>Specialize in wedding and event florals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <About courseName="floral design course" />
    </section>

    <section className="bg-dark text-white text-center">
      <Image
        src={HeroImage}
        alt="flower arrangement"
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

export default FloralDesignCourseCatalogPage;
