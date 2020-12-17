import '../src/styles/tailwind.css';

import React, { useEffect, useState } from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import { IconButton } from '../src/lib/components/ui';
import { Sun, Moon } from '../src/lib/components/icons';

const Theme = (Story) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    } else {
      document.querySelector('html')?.classList.add('dark');
    }
  }, [theme]);

  return (
    <>
      <div className="absolute z-50 bottom-5 right-5">
        <IconButton
          size="xs"
          icon={theme === 'light' ? <Moon white /> : <Sun white />}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <div className="p-5 bg-white dark:bg-gray-900">
        <Story />
      </div>
    </>
  );
};

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
