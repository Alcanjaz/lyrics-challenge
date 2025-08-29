import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { expect, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta = {
  component: Button,
  title: 'Button',
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
    onClick: action('Primary'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
  },
} satisfies Story;