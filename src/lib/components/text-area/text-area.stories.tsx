/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextArea, TextAreaProps } from './text-area';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {},
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Label',
  helperText: 'Helper Text',
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
