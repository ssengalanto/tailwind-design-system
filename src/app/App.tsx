import React from 'react';

import { Button } from 'lib/components/button';

export const App: React.FC = () => (
  <div className="container h-screen mx-auto">
    <div className="flex justify-center align-middle">
      <Button variant="primary">Hello World</Button>
    </div>
  </div>
);
