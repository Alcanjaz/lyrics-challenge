import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Skeleton } from './Skeleton';

const meta = {
  component: Skeleton,
  title: 'Skeleton',
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'h-6 w-48',
    'data-testid': 'skeleton',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('skeleton')).toBeInTheDocument();
  },
};

export const Circle: Story = {
  args: {
    className: 'h-10 w-10 rounded-full',
  },
};

export const TextList: Story = {
  render: () => (
    <div className="space-y-2 w-80">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  ),
};
