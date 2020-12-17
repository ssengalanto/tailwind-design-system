/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Anchor, AnchorProps } from './anchor';

export default {
  title: 'UI/Anchor',
  component: Anchor,
  argTypes: {},
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args}>Anchor Label</Anchor>;

export const Default = Template.bind({});
Default.args = {};

export const Underlined = Template.bind({});
Underlined.args = {
  underlined: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
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
