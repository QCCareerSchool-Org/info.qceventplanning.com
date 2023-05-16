import { render, screen } from '@testing-library/react';

import Home from '@/pages/free-event-planning-course-catalog/index.page';

jest.mock('../hooks/useScreenWidthContext');
jest.mock('@/components/Form');

describe('/free-event-course-catalog', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Get a Free Event Planning Course Catalog/iu,
    });

    expect(heading).toBeInTheDocument();
  });
});
