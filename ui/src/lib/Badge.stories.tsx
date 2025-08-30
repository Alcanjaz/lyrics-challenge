import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { expect, within } from '@storybook/test';

const meta = {
  component: Badge,
  title: 'Badge',
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Default')).toBeInTheDocument();
  },
};
