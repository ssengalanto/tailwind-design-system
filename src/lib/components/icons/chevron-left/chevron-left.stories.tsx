/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SvgIconProps } from 'lib/components/common';
import { IconButton } from 'lib/components/ui/icon-button';

import { ChevronLeft } from './chevron-left';

export default {
  title: 'Icons/ChevronLeft',
  component: ChevronLeft,
  argTypes: {},
} as Meta;

const Template: Story<SvgIconProps> = ({ white, ...args }) => {
  if (white) {
    return <IconButton icon={<ChevronLeft white />} />;
  }
  return <ChevronLeft {...args} />;
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
  variant: 'danger',
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
