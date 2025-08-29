import { render, screen } from '@testing-library/react';
import { Card, CardBody, CardDescription, CardImage, CardSubtitle, CardTitle } from './Card';

describe('Card', () => {
  it('renders structure and tokens', () => {
    render(
      <Card data-testid="card">
        <CardImage src="#" alt="demo" />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <CardDescription>Description</CardDescription>
        </CardBody>
      </Card>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByTestId('card')).toHaveClass('ly-ds-bg-cards');

    expect(screen.getByRole('img', { name: 'demo' })).toHaveClass('h-3/5 object-cover');
    expect(screen.getByText('Title')).toHaveClass('ly-ds-text-title');
    expect(screen.getByText('Subtitle')).toHaveClass('ly-ds-text-button');
    expect(screen.getByText('Description')).toHaveClass('ly-ds-text-description');
  });
});

