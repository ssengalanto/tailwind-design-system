/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './card';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className="text-base-default">your card content</p>,
};
