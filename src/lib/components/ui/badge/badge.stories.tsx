/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from './badge';

export default {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Badge Label</Badge>;

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

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
};
