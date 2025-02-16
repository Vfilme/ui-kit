import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { TextareaSizes } from './Textarea.types';

const meta: Meta<typeof Textarea> = {
  title: 'shared/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [TextareaSizes.L, TextareaSizes.M, TextareaSizes.S, TextareaSizes.XS],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = { args: { helperText: 'helper text' } };
