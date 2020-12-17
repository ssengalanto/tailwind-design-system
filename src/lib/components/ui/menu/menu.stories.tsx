/* eslint-disable import/no-unresolved */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Email, Home } from 'lib/components/icons';

import { Menu, MenuProps } from './menu';
import { MenuItem } from './menu-item';

export default {
  title: 'UI/Menu',
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <MenuItem label="Menu Label" />,
};

export const MenuWithTitle = Template.bind({});
MenuWithTitle.args = {
  title: 'Menu',
  children: <MenuItem label="Menu Label" />,
};

export const MenuItemWithIcon = Template.bind({});
MenuItemWithIcon.args = {
  title: 'Menu',
  children: <MenuItem icon={<Home />} label="Menu Label" />,
};

export const ActiveMenuItem = Template.bind({});
ActiveMenuItem.args = {
  title: 'Menu',
  children: <MenuItem active icon={<Home />} label="Menu Label" />,
};

export const MultipleMenuItem = Template.bind({});
MultipleMenuItem.args = {
  title: 'Menu',
  children: [
    <MenuItem active icon={<Home />} label="Menu Label 1" />,
    <MenuItem icon={<Email />} label="Menu Label 2" />,
  ],
};
