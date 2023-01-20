import type { NextPage } from 'next';
import Image from 'next/image';

import Arrow from '../images/arrow.svg';
import CertificationBackground from '../images/backgrounds/certification-background-fd.jpg';
import HeroImage from '../images/backgrounds/hero-fd.jpg';
import Certification from '../images/certification-ifdp.png';
import BusinessIcon from '../images/icons/business-icon.svg';
import CertificationIcon from '../images/icons/certification-icon.svg';
import ExpertIcon from '../images/icons/expert-icon.svg';
import FlexibleIcon from '../images/icons/flexible-icon.svg';
import HandsOnIcon from '../images/icons/hands-on-icon-2.svg';
import LifetimeIcon from '../images/icons/lifetime-icon.svg';
import { About } from '@/components/About';
import { Card } from '@/components/Card';
import { Form } from '@/components/Form';
import { FormWrapper } from '@/components/FormWrapper';
import { GetStarted } from '@/components/GetStarted';
import { SEO } from '@/components/SEO';
import type { TestimonialData } from '@/components/Testimonials';
import { Testimonials } from '@/components/Testimonials';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';

const testimonialData: TestimonialData[] = [
  {
    excerpt: 'I would recommend this course to those looking for a career in the floral industry.',
    quote: 'I enjoyed the courses I completed previously with QC and Floral Design ended up being no different. The instructions for each assignment were detailed, even down to how to take the pictures to show your work. Feedback from the tutor was helpful and provided the necessary encouragement in order to get the desired results going forward; plus Renee’s tips were quite helpful in navigating my own style. The videos were informative and showed you step by step how to carry out the designs. I have recently started a wedding, event planning plus decor business and hope to begin creating floral designs for clients soon.',
    name: 'Devona Simons',
    title: 'Floral Design Graduate',
  },
  {
    excerpt: 'I highly recommend this course to any aspiring florist.',
    quote: 'My goal is to refresh my skills as a floral professional and learn new techniqes. Upon graduation, I’ll be lucky enough to add a new certification to my resume and website: QC’s International Floral Design Professional(IFDP) designation. This course offers hands-on experience from the comfort of your own home. You’ll also be presented with real-life client scenarios that will help you when you branch out into the industry.',
    name: 'Neena McConnell',
    title: 'Floral Design Student',
  },
  {
    excerpt: 'I 100% recommend QC Event School!',
    quote: 'QC has provided me with an incredible amount of knowledge and mentorship. I was away from school for 14 years and I was a little nervous to go back. QC allowed me the opportunity to create my own curriculum and my own schedule! The Tutors are are always so passionate and supportive when it comes to evaluating my work. The Student Support staff are the rockstars behind the scenes. They are always there to answer my questions. I have been warmly welcomed into this community and I have already talked to some incredibly inspiring people from around the world!',
    name: 'Carli Lewis',
    title: 'QC Event School Graduate',
  },
];

const FloralDesignCourseCatalogPage: NextPage = () => {
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
        style={{ objectFit: 'cover', objectPosition: '50% 0%' }}
      />
      <div className="container">
        {!lg && (
          <h1 className="mb-5 text-center text-shadow">Get a Free Floral Design<br />Course Catalog</h1>
        )}
        <div className="row align-items-center justify-content-center">
          <div id="brochureForm" className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Card>
              <FormWrapper>
                <h2 className="lead mb-4 fw-bold">Download the Free Course Catalog</h2>
                <Form action="https://go.qceventplanning.com/l/947642/2023-01-18/tflhv" />
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

export default FloralDesignCourseCatalogPage;
