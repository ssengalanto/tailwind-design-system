/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SvgIconProps } from 'lib/components/common';

import Calendar from './calendar';

export default {
  title: 'Icons/Calendar',
  component: Calendar,
  argTypes: {},
} as Meta;

const Template: Story<SvgIconProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
