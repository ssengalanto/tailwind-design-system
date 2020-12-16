/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl, FormControlProps } from './form-control';
import { TextField } from '../text-field';

export default {
  title: 'UI/FormControl',
  component: FormControl,
  argTypes: {},
} as Meta;

const Template: Story<FormControlProps> = (args) => {
  const { error, disabled, required } = args;
  return (
    <FormControl {...args}>
      <TextField error={error} disabled={disabled} required={required} />
    </FormControl>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required',
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'With helper text',
  helperText: 'Helper text',
};
