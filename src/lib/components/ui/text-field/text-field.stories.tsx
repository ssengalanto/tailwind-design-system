/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextField, TextFieldProps } from './text-field';

export default {
  title: 'UI/TextField',
  component: TextField,
  argTypes: {},
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
