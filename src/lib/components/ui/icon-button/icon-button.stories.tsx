/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Search } from 'lib/components/icons';

import IconButton, { IconButtonProps } from './icon-button';

export default {
  title: 'UI/IconButton',
  component: IconButton,
  argTypes: {},
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <Search variant="inverse" />
  </IconButton>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Warn = Template.bind({});
Warn.args = {
  variant: 'warn',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};
