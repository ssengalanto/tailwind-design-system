/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion, { AccordionProps } from './accordion';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {},
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 1,
      title: 'Accordion Title',
      content: 'Accordion Content',
    },
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  data: [
    {
      id: 1,
      title: 'Accordion Title 1',
      content: 'Accordion Content 1',
    },
    {
      id: 2,
      title: 'Accordion Title 2',
      content: 'Accordion Content 2',
    },
    {
      id: 3,
      title: 'Accordion Title 3',
      content: 'Accordion Content 3',
    },
  ],
};
