import '../src/styles/tailwind.css';

import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

const Theme = (Story) => <Story />;

addParameters({
  options: {
    showPanel: true,
    sortStoriesByKind: true,
    panelPosition: 'bottom',
  },
});

addDecorator(Theme);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
