import { render, screen } from '@testing-library/react';

import Home from '@/pages/free-event-course-catalog';

describe('/free-event-course-catalog', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/iu,
    });

    expect(heading).toBeInTheDocument();
  });
});
