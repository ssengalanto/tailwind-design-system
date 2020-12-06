import React, { useEffect } from 'react';

import { Avatar, Button, Card, TextField, Checkbox } from 'lib/components';
import { useTheme, setDarkTheme, setLightTheme } from 'context';

export const App: React.FC = () => {
  const [{ theme }, dispatch] = useTheme();

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

  return (
    <div className="container h-screen mx-auto">
      <div className="flex justify-center align-middle">
        <Card className="max-w-lg p-10 mt-6">
          <div className="flex items-center mb-8">
            <div>
              <Avatar src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/Female-Dogs-in-Heat-1024x683.jpeg" />
            </div>
            <p className="ml-8 text-left text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta illo, minima
              temporibus laboriosam eius autem ullam?
            </p>
          </div>
          <Button variant="danger" size="small" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <form>
            <div className="mt-8">
              <TextField required label="Name" />
            </div>
            <div className="mt-8">
              <TextField required disabled label="Name" helperText="Disabled at the moment" />
            </div>
            <div className="mt-8">
              <TextField required error label="Name" />
            </div>
            <div className="mt-8">
              <Checkbox label="TailwindCSS" />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
