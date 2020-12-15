/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SvgIconProps } from 'lib/components/common';
import { IconButton } from 'lib/components/ui/icon-button';

import ChevronUp from './chevron-up';

export default {
  title: 'Icons/ChevronUp',
  component: ChevronUp,
  argTypes: {},
} as Meta;

const Template: Story<SvgIconProps> = ({ white, ...args }) => {
  if (white) {
    return <IconButton icon={<ChevronUp white />} />;
  }
  return <ChevronUp {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

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

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const White = Template.bind({});
White.args = {
  white: true,
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
