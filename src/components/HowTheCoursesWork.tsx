import Image from 'next/image';

import BusinessIcon from '../images/icons/business-icon.svg';
import CertificationIcon from '../images/icons/certification-icon.svg';
import CostsIcon from '../images/icons/costs-icon.svg';
import FeedbackIcon from '../images/icons/feedback-icon.svg';
import FlexibleIcon from '../images/icons/flexible-icon.svg';
import LifetimeIcon from '../images/icons/lifetime-icon.svg';

interface Props {
  events?: string;
}

export const HowTheCoursesWork: React.FC<Props> = ({ events }) => (
  <div className="container text-center">
    <h2>Join QC Event School</h2>
    <p className="lead mb-4">QC&apos;s event &amp; wedding planning courses provide you with:</p>
    <div className="row">
      <div className="col-12 col-lg-4 mb-5 mb-lg-3">
        <p><Image className="img-fluid" width="75" height="75" src={FeedbackIcon} alt="1-on-1 feedback" /></p>
        <h3 className="h4">One-on-one feedback</h3>
        <p className="mb-0">Personalized 1-on-1 feedback from a tutor invested in your success.</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-3">
        <p><Image className="img-fluid" width="75" height="75" src={CostsIcon} alt="No high tuition cost" /></p>
        <h3 className="h4">Learn the fundamentals</h3>
        <p className="mb-0">Practical knowledge for budgeting, coordinating, and executing a variety of {events} events.</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-3">
        <p><Image className="img-fluid" width="75" height="75" src={BusinessIcon} alt="Business training" /></p>
        <h3 className="h4">Real-world exercises</h3>
        <p className="mb-0">Hands-on assignments based on real-world scenarios and clients personas.</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><Image className="img-fluid" width="75" height="75" src={LifetimeIcon} alt="Lifetime access" /></p>
        <h3 className="h4">Lifetime access</h3>
        <p className="mb-0">Lifetime access to up-to-date course materials and business templates.</p>
      </div>
      <div className="col-12 col-lg-4 mb-5 mb-lg-0">
        <p><Image className="img-fluid" width="75" height="75" src={CertificationIcon} alt="Professional certification" /></p>
        <h3 className="h4">Professional certification</h3>
        <p className="mb-0">A professional certification and designation upon graduation of your course.</p>
      </div>
      <div className="col-12 col-lg-4">
        <p><Image className="img-fluid" width="75" height="75" src={FlexibleIcon} alt="Flexible payment options" /></p>
        <h3 className="h4">Flexible payment options</h3>
        <p className="mb-0">Flexible tuition payment options. No hidden fees. No additional costs.</p>
      </div>
    </div>
  </div>
);
