/* eslint-disable import/no-unresolved */
import React from 'react';
import faker from 'faker';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from './avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {},
} as Meta;

const Template: Story<AvatarProps> = ({ src = faker.image.imageUrl(), ...args }) => (
  <Avatar src={src} {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  alt: 'Small Avatar',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  alt: 'Medium Avatar',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  alt: 'Large Avatar',
  size: 'large',
};
