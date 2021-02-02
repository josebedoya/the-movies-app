import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('render sign in footer', () => {
  render(<Footer />);

  const signText = screen.getByText(/jose bedoya/i);
  expect(signText).toBeInTheDocument();
})
