/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion, { AccordionProps } from './accordion';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {},
} as Meta;

const Template: Story<AccordionProps> = ({
  i = 1,
  header = 'Header',
  expanded,
  onExpand,
  children,
  ...args
}) => {
  const [current, setCurrent] = useState<number | boolean>(false);

  const ids = [1, 2, 3];

  return (
    <>
      {ids.map((id) => (
        <Accordion
          i={id}
          expanded={current}
          header={`Accordion ${id}`}
          onExpand={setCurrent}
          {...args}
        >
          {`Accordion content ${id}`}
        </Accordion>
      ))}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
