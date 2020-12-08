/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './label';
import { TextField } from '../text-field';
import { Checkbox } from '../checkbox';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {},
} as Meta;

const Template: Story<LabelProps> = ({ children, ...args }) => <Label {...args}>{children}</Label>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  children: <TextField />,
};

export const Inline = Template.bind({});
Inline.args = {
  label: 'Inline',
  children: <Checkbox />,
  inline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  children: <TextField disabled />,
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required',
  children: <TextField required />,
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  children: <TextField error />,
  error: true,
};
