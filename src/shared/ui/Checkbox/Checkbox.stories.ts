import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxSizes, CheckboxVariants } from './Checkbox.types';

const meta: Meta<typeof Checkbox> = {
  title: 'shared/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        CheckboxVariants.Check,
        CheckboxVariants.Uncheck,
        CheckboxVariants.Indeterminate,
        CheckboxVariants.Definite,
      ],
    },
    size: {
      control: 'select',
      options: [CheckboxSizes.L, CheckboxSizes.M, CheckboxSizes.S, CheckboxSizes.XS],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Check: Story = { args: { variant: CheckboxVariants.Check, label: 'Check' } };
export const Uncheck: Story = { args: { variant: CheckboxVariants.Uncheck, label: 'Uncheck' } };
export const Indeterminate: Story = {
  args: { variant: CheckboxVariants.Indeterminate, label: 'Indeterminate' },
};
export const Definite: Story = {
  args: { variant: CheckboxVariants.Definite, label: 'Definite' },
};
