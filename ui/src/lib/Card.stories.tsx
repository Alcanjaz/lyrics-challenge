import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardBody, CardDescription, CardImage, CardSubtitle, CardTitle } from './Card';

const meta = {
  title: 'Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardImage src="https://picsum.photos/640/480" alt="Random" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </CardDescription>
      </CardBody>
    </Card>
  ),
};


