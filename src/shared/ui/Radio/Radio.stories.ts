import type { Meta, StoryObj } from '@storybook/react';
import { RadioSizes, RadioVariants } from './Radio.types';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'shared/RadioButton',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    pseudo: { hover: true, active: true },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [RadioVariants.Checked, RadioVariants.Unchecked],
    },
    size: {
      control: 'select',
      options: [RadioSizes.L, RadioSizes.M, RadioSizes.S, RadioSizes.XS],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {};
