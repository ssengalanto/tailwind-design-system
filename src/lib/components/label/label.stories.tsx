/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {},
} as Meta;

// TODO: change the children with Input component

const Template: Story<LabelProps> = ({ children, ...args }) => (
  <Label {...args}>
    <span>your label</span>
    {children}
  </Label>
);

export const Default = Template.bind({});
Default.args = {
  children: <p>your children</p>,
};

export const Inline = Template.bind({});
Inline.args = {
  children: <p>your children</p>,
  disabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <p>your children</p>,
  disabled: true,
};
