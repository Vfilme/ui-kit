import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputSizes } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [InputSizes.L, InputSizes.M, InputSizes.S],
    },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = { args: { children: 'Primary', helperText: 'helper text' } };
