/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SvgIconProps } from 'lib/components/common';

import { ChevronDown } from './chevron-down';

export default {
  title: 'Icons/ChevronDown',
  component: ChevronDown,
  argTypes: {},
} as Meta;

const Template: Story<SvgIconProps> = (args) => <ChevronDown {...args} />;

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
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
