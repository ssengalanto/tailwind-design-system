/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Backdrop, BackdropProps } from './backdrop';

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
  argTypes: {},
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {};
