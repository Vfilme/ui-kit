import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonFormates, ButtonSizes, ButtonVariants } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        ButtonVariants.Primary,
        ButtonVariants.Secondary,
        ButtonVariants.Clear,
        ButtonVariants.Critical,
        ButtonVariants.CriticalSecondary,
      ],
    },
    size: {
      control: 'select',
      options: [ButtonSizes.L, ButtonSizes.M, ButtonSizes.S, ButtonSizes.XS],
    },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
    format: {
      control: 'select',
      options: [ButtonFormates.Full, ButtonFormates.Mini],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: ButtonVariants.Primary, children: 'Primary' } };
export const Secondary: Story = {
  args: { variant: ButtonVariants.Secondary, children: 'Secondary' },
};
export const Clear: Story = { args: { variant: ButtonVariants.Clear, children: 'Clear' } };
export const Critical: Story = { args: { variant: ButtonVariants.Critical, children: 'Critical' } };
export const CriticalSecondary: Story = {
  args: {
    variant: ButtonVariants.CriticalSecondary,
    disabled: true,
    children: 'Critical-secondary',
  },
};
