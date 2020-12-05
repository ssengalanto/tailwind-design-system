import React, { useEffect } from 'react';

import { Button, Card } from 'lib/components';
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
      <button type="button" onClick={toggleTheme}>
        toggle theme
      </button>
      <div className="flex justify-center align-middle">
        <Card className="p-10 mt-6">
          <Button variant="primary">Hello World</Button>
        </Card>
      </div>
    </div>
  );
};
