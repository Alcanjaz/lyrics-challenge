import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Primary' })).toHaveClass(
      'ly-ds-bg-primary'
    );

    render(<Button variant="secondary">Secondary</Button>);
    expect(
      screen.getByRole('button', { name: 'Secondary' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass(
      'bg-gray-100'
    );

    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button', { name: 'Ghost' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ghost' })).toHaveClass(
      'bg-transparent'
    );
  });
});
