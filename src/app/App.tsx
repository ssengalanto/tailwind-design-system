import React from 'react';

import { Button, Card } from 'lib/components';

export const App: React.FC = () => (
  <div className="container h-screen mx-auto">
    <div className="flex justify-center align-middle">
      <Card className="p-10 mt-6">
        <Button variant="primary">Hello World</Button>
      </Card>
    </div>
  </div>
);
