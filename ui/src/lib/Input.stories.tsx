import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { expect, within, userEvent } from '@storybook/test';
import { Search } from 'lucide-react';
import { action } from '@storybook/addon-actions';

const meta = {
  component: Input,
  title: 'Input',
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    placeholder: 'Search bands',
    onBlur: action('onBlur'),
    onChange: action('onChange'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Search bands');
    await expect(input).toBeInTheDocument();
    await userEvent.tab();
    expect(input).toHaveFocus();
    await userEvent.type(input, 'Metallica', { delay: 50 });
    expect(input).toHaveValue('Metallica');
  },
} satisfies Story;

export const WithIcon = {
  args: {
    placeholder: 'Search bands',
    icon: Search,
    onChange: action('onChange'),
    onBlur: action('onBlur'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Search bands');
    await expect(input).toBeInTheDocument();
    await userEvent.tab();
    expect(input).toHaveFocus();
    await userEvent.type(input, 'Mighty Crabjoys', { delay: 50 });
    expect(input).toHaveValue('Mighty Crabjoys');
  },
} satisfies Story;
