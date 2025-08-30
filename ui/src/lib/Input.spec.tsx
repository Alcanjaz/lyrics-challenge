import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { Search } from 'lucide-react';

describe('Input', () => {
  it('renders default input', () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('rounded-2xl');
  });

  it('renders with icon spacing', () => {
    render(<Input placeholder="Type here" icon={Search} />);
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('pl-9');
  });
});
