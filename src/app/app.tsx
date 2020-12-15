import React, { useEffect, useState } from 'react';

import { Avatar, Button, Card, TextField, Modal, FormControl } from 'lib/components/ui';
import { useTheme, setDarkTheme, setLightTheme } from 'context';
import { Accordion } from 'lib/components/ui/accordion';

export const App: React.FC = () => {
  const [{ theme }, dispatch] = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    } else {
      document.querySelector('html')?.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = (): void => {
    if (theme === 'light') {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  const data = [
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
  ];

  return (
    <div className="container h-screen mx-auto">
      <div className="flex justify-center align-middle">
        <Card className="max-w-lg p-10 mt-6">
          <div className="flex items-center mb-8">
            <div>
              <Avatar
                src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-1024x683.jpeg"
                alt="dogoo"
              />
            </div>
            <p className="ml-8 prose-sm prose text-left text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta illo, minima
              temporibus laboriosam eius autem ullam?
            </p>
          </div>
          <Button variant="danger" size="sm" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <div className="mt-8">
            <Button size="sm" onClick={() => setOpen(true)}>
              Open
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <FormControl label="Email Address">
                <TextField />
              </FormControl>
              <FormControl label="Password" helperText="Sample helper text">
                <TextField type="password" />
              </FormControl>
            </Modal>
          </div>
          <Accordion data={data} />
        </Card>
      </div>
    </div>
  );
};
