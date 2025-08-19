import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters',
    variant: 'filled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const ErrorState: Story = {
  args: {
    invalid: true,
    errorMessage: 'Password is too short',
  },
};

export const OutlinedVariant: Story = {
  args: {
    variant: 'outlined',
  },
};

export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Small" placeholder="Small" size="sm" />
      <InputField label="Medium" placeholder="Medium" size="md" />
      <InputField label="Large" placeholder="Large" size="lg" />
    </div>
  ),
};
