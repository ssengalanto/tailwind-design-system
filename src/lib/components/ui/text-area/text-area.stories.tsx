/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea, { TextAreaProps } from './text-area';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  argTypes: {},
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

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
