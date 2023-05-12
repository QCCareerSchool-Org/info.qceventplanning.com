import type { NextPage } from 'next';
import Image from 'next/image';

import Arrow from '../images/arrow.svg';
import HeroImage from '../images/backgrounds/hero-ep.jpg';
import { About } from '@/components/About';
import { Card } from '@/components/Card';
import { Form } from '@/components/Form';
import { FormWrapper } from '@/components/FormWrapper';
import { GetStarted } from '@/components/GetStarted';
import { HowTheCoursesWork } from '@/components/HowTheCoursesWork';
import { SEO } from '@/components/SEO';
import type { TestimonialData } from '@/components/Testimonials';
import { Testimonials } from '@/components/Testimonials';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';

const testimonialData: TestimonialData[] = [
  {
    excerpt: '“I loved how QC’s online event and wedding planning courses were affordable”',
    quote: '“I was working full-time, balancing my personal life, and wanting to start a side business…I did not have time to actually go to a physical event school. I loved how QC’s online event and wedding planning courses were affordable and I could complete them on my own schedule. QC’s tutors work in the actual industry. They gave me a good, basic knowledge of event planning standards and industry terminology that I wasn’t exposed to at the time.”',
    name: 'Jenna Pelcher',
    title: 'IEWP, IEDP, Luxury Wedding Specialist',
  },
  {
    excerpt: '“It’s in depth, informative, and the assignments are fun.”',
    quote: '“I have loved every minute of the course. It’s in depth, informative, and the assignments are fun. I felt like I was working for an actual client, and was well prepared for the industry and starting my own business. I’m confident that my training will lead my company, The Grape Vine Events, to great success.”',
    name: 'Lindsay Vine, IEWP',
    title: 'The Grape Vine Events',
  },
  {
    excerpt: '“Not only did it teach me how to start my business, but it also gives you a lot of hands-on experience.”',
    quote: '“I got so much out of the course and it was worth every penny. Not only did it teach me how to start my business, but it also gives you a lot of hands-on experience. Not to mention a lot of behind the scenes advice on your business and important forms to get your brand started. Since graduating and receiving my certificate, I started my event planning business and the most exciting part [is] I’m booking weddings and other events.”',
    name: 'Marie Luciano, IEWP',
  },
  {
    excerpt: '“It really is a valuable course, with great tutors and support!”',
    quote: '“Every moment I spent on this course was more than worth it. I learnt both little and big details that I still wouldn’t know now! It really is a valuable course, with great tutors and support! Worth every penny.”',
    name: 'Claudia Montano, IEWP',
  },
];

const EventCourseCatalogPage: NextPage = () => {
  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 992;

  return <>
    <SEO
      title="Learn From the Top Online Event Planning School"
      description="Get a free course catalog from the top online event planning school to see how you can become a professional event planner"
      canonical="https://info.qceventplanning.com/free-event-course-catalog"
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
                <h2 className="h5 mb-4">Download the Free Course Catalog</h2>
                <Form action="https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7" telephoneNumber />
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

    <HowTheCoursesWork />

    <section>
      <div className="container text-center">
        <p className="lead">We&apos;ve already helped thousands of students and grads start their career in event and wedding planning!</p>
      </div>
      <Testimonials data={testimonialData} />
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

export default EventCourseCatalogPage;
