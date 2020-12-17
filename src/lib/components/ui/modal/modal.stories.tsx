/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from './modal';

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className="text-base">your modal content</p>,
  open: true,
};
