/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Skeleton, SkeletonProps } from './skeleton';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
  argTypes: {},
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const TextXS = Template.bind({});
TextXS.args = {
  variant: 'text',
  size: 'xs',
};

export const TextSM = Template.bind({});
TextSM.args = {
  variant: 'text',
  size: 'sm',
};

export const TextMD = Template.bind({});
TextMD.args = {
  variant: 'text',
  size: 'md',
};

export const TextLG = Template.bind({});
TextLG.args = {
  variant: 'text',
  size: 'lg',
};

export const TextWithCustomWidth = Template.bind({});
TextWithCustomWidth.args = {
  variant: 'text',
  size: 'sm',
  className: 'w-20',
};

export const CircleXS = Template.bind({});
CircleXS.args = {
  variant: 'circle',
  size: 'xs',
};

export const CircleSM = Template.bind({});
CircleSM.args = {
  variant: 'circle',
  size: 'sm',
};
export const CircleMD = Template.bind({});
CircleMD.args = {
  variant: 'circle',
  size: 'md',
};

export const CircleLG = Template.bind({});
CircleLG.args = {
  variant: 'circle',
  size: 'lg',
};
