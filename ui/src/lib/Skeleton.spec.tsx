import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with base styles', () => {
    render(<Skeleton data-testid="skeleton" />);
    const el = screen.getByTestId('skeleton');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('data-slot', 'skeleton');
    expect(el).toHaveClass('ly-ds-bg-tertiary');
    expect(el).toHaveClass('animate-pulse');
    expect(el).toHaveClass('rounded-xl');
  });

  it('merges additional className and can override radius', () => {
    render(
      <Skeleton data-testid="skeleton" className="w-10 h-10 rounded-lg" />
    );
    const el = screen.getByTestId('skeleton');
    expect(el).toHaveClass('w-10');
    expect(el).toHaveClass('h-10');
    // tailwind-merge should prefer the later radius (rounded-lg) over base rounded-xl
    expect(el).toHaveClass('rounded-lg');
  });
});
