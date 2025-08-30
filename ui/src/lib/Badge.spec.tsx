import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('should render successfully', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toBeInTheDocument();
  });

  it('should support asChild', () => {
    render(
      <Badge asChild>
        <a href="#">LinkBadge</a>
      </Badge>
    );
    const link = screen.getByRole('link', { name: 'LinkBadge' });
    expect(link).toBeInTheDocument();
  });
});
