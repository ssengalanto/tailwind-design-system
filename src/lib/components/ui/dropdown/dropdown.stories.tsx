/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import clsx from 'clsx';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from './dropdown';
import { DropdownItem } from './dropdown-item';
import { Button } from '../button';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = ({ align, ...args }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={clsx('flex', { 'justify-end': align === 'right' })}>
        <div className="relative">
          <Button onClick={() => setOpen(true)}>Open Dropdown</Button>
          <Dropdown {...args} open={open} onClose={() => setOpen(false)} align={align}>
            <DropdownItem>Item 1</DropdownItem>
            <DropdownItem>Item 2</DropdownItem>
            <DropdownItem>Item 3</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export const RightAlign = Template.bind({});
RightAlign.args = {
  align: 'right',
};

export const LeftAlign = Template.bind({});
LeftAlign.args = {
  align: 'left',
};
