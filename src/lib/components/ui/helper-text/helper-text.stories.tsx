/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HelperText, HelperTextProps } from './helper-text';

export default {
  title: 'UI/HelperText',
  component: HelperText,
  argTypes: {},
} as Meta;

const Template: Story<HelperTextProps> = (args) => <HelperText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Helper text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Helper text',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Helper text',
  error: true,
};
