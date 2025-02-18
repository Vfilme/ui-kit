import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import { ToggleSizes, ToggleVariants } from './Toggle.types';

const meta: Meta<typeof Toggle> = {
  title: 'shared/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [ToggleVariants.Check, ToggleVariants.Uncheck],
    },
    size: {
      control: 'select',
      options: [ToggleSizes.L, ToggleSizes.M, ToggleSizes.S, ToggleSizes.XS],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {};
